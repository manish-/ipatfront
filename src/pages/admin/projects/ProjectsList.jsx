import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from 'react-helmet';
import { NavLink, Link } from "react-router-dom";
import { Navigate } from 'react-router';

import * as PROJECTS_ACTIONS from '../../../actions/admin/projectsActions';
import * as CONSTANTS from '../../../constants/Constants';
import ProcessingLoader from '../../../components/admin/ProcessingLoader';

import CustomTablePagination from '../../../components/admin/CustomTablePagination';
import CustomAlertDialogSlide from '../../../components/admin/CustomAlertDialogSlide';

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

const ProjectsList = (props) => {

    const dispatch = useDispatch();
    const { processing, list, total, redirectTo } = useSelector(state => {
        return {
            processing: state.Projects_Reducers.processing,
            error: state.Projects_Reducers.error,
            errors: state.Projects_Reducers.errors,
            message: state.Projects_Reducers.message,
            list: state.Projects_Reducers.list,
            totalPages: state.Projects_Reducers.totalPages,
            total: state.Projects_Reducers.total,
            redirectTo: state.Projects_Reducers.redirectTo
        }
    });

    const [filter, setFilter] = useState({
        itemPerPage: 5,
        page: 1,
        status: 'all',
        order: 'asc',
        orderBy: 'title'
    });
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
        dispatch(PROJECTS_ACTIONS.fetch_list(filter));
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

        await dispatch(PROJECTS_ACTIONS.fetch_update_status(id, status));
        refreshList();
    };
    const refreshList = () => {
        dispatch(PROJECTS_ACTIONS.fetch_list(filter));
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
                Project Sectors List
            </Typography>
        </Breadcrumbs>

        <Paper elevation={3} sx={{ mt: 4 }}>
            <Box component="form" noValidate sx={{ mt: 2, mx: 2, my: 3 }}>
                <Grid container spacing={2} sx={{ pb: 2 }}>
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
                </Grid>
            </Box>
        </Paper>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell align="left" sortDirection={filter.orderBy === 'title' ? filter.order : false}>
                            <TableSortLabel
                                active={true}
                                direction={filter.orderBy === 'title' ? filter.order : 'asc'}
                                onClick={() => sortingHandler('title')}
                            >
                                Title
                            </TableSortLabel>
                        </TableCell>
                        <TableCell align="left" sortDirection={filter.orderBy === 'slug' ? filter.order : false}>
                            <TableSortLabel
                                active={true}
                                direction={filter.orderBy === 'slug' ? filter.order : 'asc'}
                                onClick={() => sortingHandler('slug')}
                            >
                                Slug
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
                            list.map((row, index) => (
                                <TableRow
                                    key={row.title}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {((filter.page - 1) * filter.itemPerPage) + index + 1}
                                    </TableCell>

                                    <TableCell align="left">{row.title}</TableCell>
                                    <TableCell align="left">{row.slug}</TableCell>
                                    <TableCell align="left">
                                        {
                                            row.status === 'active' ? <Chip variant="fill" label={row.status} color="success" icon={<CheckOutlined />} /> : <Chip variant="fill" label={row.status} color="error" icon={<BlockOutlined />} />
                                        }
                                    </TableCell>
                                    <TableCell align="left">
                                        <NavLink to={`/admin/project-sectors/edit/${row.id}`}>
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
                            ))}
                </TableBody>
                <TableFooter>
                    <CustomTablePagination colSpan={5} handleChangePage={handleChangePage} handleChangeRowsPerPage={handleChangeRowsPerPage} itemPerPage={filter.itemPerPage} page={filter.page} total={total} />
                </TableFooter>
            </Table>
        </TableContainer>
    </Fragment>;
};

export default ProjectsList;