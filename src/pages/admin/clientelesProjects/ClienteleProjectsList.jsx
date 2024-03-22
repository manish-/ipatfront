import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from 'react-helmet';
import { NavLink, Link, useParams, useNavigate } from "react-router-dom";
import { Navigate } from 'react-router';

import * as CLIENTELE_ACTIONS from '../../../actions/admin/clientelesActions';
import * as CONSTANTS from '../../../constants/Constants';
import ProcessingLoader from '../../../components/admin/ProcessingLoader';

import CustomTablePagination from '../../../components/admin/CustomTablePagination';
import CustomAlertDialogSlide from '../../../components/admin/CustomAlertDialogSlide';
import { render_inner_html } from '../../../utils/html_util';
import {
    Box,
    Breadcrumbs,
    Chip,
    FormControl,
    IconButton,
    InputLabel,
    Grid,
    MenuItem,
    Paper,
    Select,
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    TableSortLabel,
    TableFooter,
    Typography
} from '@mui/material';

import {
    BlockOutlined,
    CheckBoxOutlined,
    CheckOutlined,
    DashboardOutlined
} from '@mui/icons-material';

import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

const ClienteleProjectsList = (props) => {

    const { clientId } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { processing, list, total, redirectTo, clientDetails, dropdownList } = useSelector(state => {
        return {
            processing: state.Clienteles_Reducers.projects.processing || state.Clienteles_Reducers.processing,
            detailsError: state.Clienteles_Reducers.error,
            dropdownList: state.Clienteles_Reducers.dropdownList,
            clientDetails: state.Clienteles_Reducers.details,
            error: state.Clienteles_Reducers.projects.error,
            errors: state.Clienteles_Reducers.projects.errors,
            message: state.Clienteles_Reducers.projects.message,
            list: state.Clienteles_Reducers.projects.list,
            totalPages: state.Clienteles_Reducers.projects.totalPages,
            total: state.Clienteles_Reducers.projects.total,
            redirectTo: state.Clienteles_Reducers.projects.redirectTo
        }
    });

    const [filter, setFilter] = useState({
        id: clientId ? clientId : -1,
        itemPerPage: 5,
        page: 1,
        status: 'all',
        order: 'asc',
        orderBy: 'title'
    });

    useEffect(() => {
        dispatch(CLIENTELE_ACTIONS.fetch_client_dropdown_list());
    }, []);


    useEffect(() => {
        if (clientId) {
            setFilter({
                id: clientId,
                itemPerPage: 5,
                page: 1,
                status: 'all',
                order: 'asc',
                orderBy: 'title'
            });
            dispatch(CLIENTELE_ACTIONS.fetch_details(filter.id));
            dispatch(CLIENTELE_ACTIONS.fetch_client_projects_list(filter));
        } else {
            setFilter({
                id: -1,
                itemPerPage: 5,
                page: 1,
                status: 'all',
                order: 'asc',
                orderBy: 'title'
            });
            dispatch(CLIENTELE_ACTIONS.fetch_details(filter.id));
            dispatch(CLIENTELE_ACTIONS.fetch_client_projects_list(filter));
        }


    }, [clientId]);


    const handleChangePage = (event, newPage) => {
        setFilter({ ...filter, page: newPage + 1 });
    };

    const handleChangeRowsPerPage = (event) => {
        setFilter({ ...filter, itemPerPage: parseInt(event.target.value, 10), page: 1 });
    };

    const sortingHandler = (orderBy) => {
        if (filter.orderBy === orderBy) {
            setFilter({
                ...filter,
                order: (filter.order === 'asc' ? 'desc' : 'asc')
            });
        } else {
            setFilter({
                ...filter,
                order: 'desc',
                orderBy: orderBy
            });
        }
    };

    useEffect(() => {
        if (filter.id && filter.id > 0) {
            navigate(`/admin/client-projects/list/${filter.id}`);
            // dispatch(CLIENTELE_ACTIONS.fetch_details(filter.id));
            // dispatch(CLIENTELE_ACTIONS.fetch_client_projects_list(filter));
        } else {
            navigate(`/admin/client-projects/list`);
        }
    }, [filter.id])

    useEffect(() => {
        dispatch(CLIENTELE_ACTIONS.fetch_details(filter.id));
        dispatch(CLIENTELE_ACTIONS.fetch_client_projects_list(filter));

    }, [filter.page, filter.itemPerPage, filter.status, filter.order, filter.orderBy])

    const [confirmationModalOpen, setConfirmationModalOpen] = React.useState({
        open: false,
        id: null,
        status: null
    });

    const handleConfirmationModalOpen = (id, status) => {
        setConfirmationModalOpen({
            open: true,
            id: id,
            status: status
        });
    };

    const handleConfirmationModalClose = () => {
        setConfirmationModalOpen({
            open: false,
            id: null,
            status: null
        });
    };

    const handleConfirmationModalSuccess = async (id, status) => {
        setConfirmationModalOpen({
            open: false,
            id: null,
            status: null
        });

        await dispatch(CLIENTELE_ACTIONS.fetch_update_status(id, status));
        refreshList();
    };
    const refreshList = () => {
        dispatch(CLIENTELE_ACTIONS.fetch_list(filter));
    }

    return <Fragment>
        <Helmet>
            <title>{CONSTANTS.TITLE_PREFIX} | {props.title}</title>
        </Helmet>
        {
            processing ? <ProcessingLoader processing={processing} /> : ""
        }
        {
            redirectTo ? <Navigate to={redirectTo} /> : ""
        }
        <CustomAlertDialogSlide handleClose={handleConfirmationModalClose} open={confirmationModalOpen.open} status={confirmationModalOpen.status} id={confirmationModalOpen.id} handleConfirmationModalSuccess={handleConfirmationModalSuccess} />

        <Breadcrumbs aria-label="breadcrumb">

            <Link component={NavLink}
                underline="hover"
                sx={{ display: 'flex', alignItems: 'center' }}
                color="inherit"
                to="/admin/dashboard"
            >
                <DashboardOutlined sx={{ mr: 0.5 }} fontSize="inherit" />
                Dashboard
            </Link>

            <Typography
                sx={{ display: 'flex', alignItems: 'center' }}
                color="text.primary"
            >
                <EventNoteOutlinedIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                Client Projects List
            </Typography>
        </Breadcrumbs>

        <Paper elevation={3} sx={{ mt: 4 }}>
            <Box component="form" noValidate sx={{ mt: 2, mx: 2, my: 3 }}>
                <Grid container spacing={2} sx={{ pb: 2 }}>
                    <Grid item xs={12} sm={4}>
                        <img src={clientDetails.thumbnail} alt={""} style={{ width: "100%", height: "150px" }} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        {clientDetails.title ? clientDetails.title : "-----"}
                    </Grid>
                </Grid>
            </Box>
        </Paper>

        <Paper elevation={3} sx={{ mt: 4 }}>
            <Box component="form" noValidate sx={{ mt: 2, mx: 2, my: 3 }}>
                <Grid container spacing={2} sx={{ pb: 2 }}>
                    <Grid item xs={12} sm={4}>
                        <FormControl sx={{ minWidth: "100%" }}>
                            <InputLabel id="Client-label">Client :</InputLabel>
                            <Select
                                margin="none"
                                size="small"
                                labelId="Client-label"
                                id="Client"
                                name="Client"
                                value={filter.id}
                                label="Client"
                                displayEmpty
                                onChange={(newValue) => setFilter({
                                    ...filter,
                                    page: 1,
                                    id: newValue.target.value,
                                    order: 'asc',
                                    orderBy: 'title'
                                })
                                }
                            >
                                <MenuItem value={'-1'}>--select--</MenuItem>
                                {
                                    dropdownList.map(row => {
                                        return <MenuItem key={`${row.title}`} value={row.id}>{row.title}</MenuItem>
                                    })
                                }

                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <FormControl sx={{ minWidth: 120 }}>
                            <InputLabel id="status-label">Status</InputLabel>
                            <Select
                                margin="none"
                                size="small"
                                labelId="status-label"
                                id="status"
                                name="status"
                                value={filter.status}
                                label="status"
                                displayEmpty
                                onChange={(newValue) => setFilter({
                                    ...filter,
                                    page: 1,
                                    status: newValue.target.value,
                                    order: 'asc',
                                    orderBy: 'title'
                                })}
                            >
                                <MenuItem value={'all'}>All</MenuItem>
                                <MenuItem value={'active'}>Active</MenuItem>
                                <MenuItem value={'disabled'}>Disabled</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    {
                        filter.id > 0 ? <Grid item xs={12} sm={4}>
                            <Link to={`/admin/client-projects/${filter.id}/add`}>Add New</Link>
                        </Grid>
                            : ""
                    }
                </Grid>
            </Box>
        </Paper>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>#</TableCell>

                        <TableCell align="left" sortDirection={filter.orderBy === 'short_content' ? filter.order : false}>
                            <TableSortLabel
                                active={true}
                                direction={filter.orderBy === 'short_content' ? filter.order : 'asc'}
                                onClick={() => sortingHandler('short_content')}
                            >
                                Short Content
                            </TableSortLabel>
                        </TableCell>
                        <TableCell align="left" sortDirection={filter.orderBy === 'display_order' ? filter.order : false}>
                            <TableSortLabel
                                active={true}
                                direction={filter.orderBy === 'display_order' ? filter.order : 'asc'}
                                onClick={() => sortingHandler('display_order')}
                            >
                                Display Order
                            </TableSortLabel>
                        </TableCell>

                        <TableCell align="left" sortDirection={filter.orderBy === 'status' ? filter.order : false}>
                            <TableSortLabel
                                active={true}
                                direction={filter.orderBy === 'status' ? filter.order : 'asc'}
                                onClick={() => sortingHandler('status')}
                            >
                                Status
                            </TableSortLabel>
                        </TableCell>
                        <TableCell align="left">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        (list.length === 0 && !processing) ?
                            <TableRow
                                key={"no-row-found"}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row" colSpan={5}>
                                    no record found!
                                </TableCell>
                            </TableRow>
                            :
                            list.map((row, index) => {
                                if (filter.status == "all" || filter.status == row.status) {
                                    return <TableRow
                                        key={`table-${row.title}-row-${index}`}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {((filter.page - 1) * filter.itemPerPage) + index + 1}
                                        </TableCell>

                                        <TableCell align="left" dangerouslySetInnerHTML={render_inner_html(row.short_content)}></TableCell>
                                        <TableCell align="left">{row.display_order}</TableCell>

                                        <TableCell align="left">
                                            {
                                                row.status === 'active' ? <Chip variant="fill" label={row.status} color="success" icon={<CheckOutlined />} /> : <Chip variant="fill" label={row.status} color="error" icon={<BlockOutlined />} />
                                            }
                                        </TableCell>
                                        <TableCell align="left">
                                            <NavLink to={`/admin/client-projects/${filter.id}/edit/${row.id}`}>
                                                <IconButton color="info" aria-label="Edit" component="span">
                                                    <EditOutlinedIcon />
                                                </IconButton>
                                            </NavLink>
                                            {
                                                row.status === 'active' ? <IconButton color="error" aria-label="Make Disable" component="span" onClick={(e) => { handleConfirmationModalOpen(row.id, 'disabled') }}>
                                                    <BlockOutlined />
                                                </IconButton> : <IconButton color="success" aria-label="Make Active" component="span" onClick={(e) => { handleConfirmationModalOpen(row.id, 'active') }}>
                                                    <CheckBoxOutlined />
                                                </IconButton>
                                            }

                                        </TableCell>

                                    </TableRow>
                                }
                            })}
                </TableBody>
                <TableFooter>
                    <CustomTablePagination colSpan={5} handleChangePage={handleChangePage} handleChangeRowsPerPage={handleChangeRowsPerPage} itemPerPage={filter.itemPerPage} page={filter.page} total={total} />
                </TableFooter>
            </Table>
        </TableContainer>
    </Fragment>;
};

export default ClienteleProjectsList;