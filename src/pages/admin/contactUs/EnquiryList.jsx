import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from 'react-helmet';
import { NavLink, Link } from "react-router-dom";
import { Navigate } from 'react-router';

import * as CONTACT_US_ACTIONS from '../../../actions/admin/contactUsActions';
import * as CONSTANTS from '../../../constants/Constants';
import ProcessingLoader from '../../../components/admin/ProcessingLoader';

import CustomTablePagination from '../../../components/admin/CustomTablePagination';
import CustomAlertDialogSlide from '../../../components/admin/CustomAlertDialogSlide';

import {
    Avatar,
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

const EnquiryList = (props) => {

    const tableColumnsArr = [
        {
            slug: "first_name",
            title: "First Name"
        },
        {
            slug: "last_name",
            title: "Last Name"
        },
        {
            slug: "email",
            title: "Email"
        },
        {
            slug: "mobile",
            title: "Mobile"
        },
        {
            slug: "company",
            title: "Company"
        },
        {
            slug: "website",
            title: "Website"
        },
        {
            slug: "created_at",
            title: "Created At"
        },
        {
            slug: "message",
            title: "Message"
        }
    ];

    const dispatch = useDispatch();
    const { processing, error, errors, message, list, totalPages, total, redirectTo } = useSelector(state => {
        return {
            processing: state.ContactUs_Reducers.processing,
            error: state.ContactUs_Reducers.error,
            errors: state.ContactUs_Reducers.errors,
            message: state.ContactUs_Reducers.message,
            list: state.ContactUs_Reducers.list,
            totalPages: state.ContactUs_Reducers.totalPages,
            total: state.ContactUs_Reducers.total,
            redirectTo: state.ContactUs_Reducers.redirectTo
        }
    });

    const [filter, setFilter] = useState({
        itemPerPage: 5,
        page: 1,
        status: 'all',
        order: 'asc',
        orderBy: 'id'
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
        dispatch(CONTACT_US_ACTIONS.fetch_enquiry_list(filter));
    }, [filter.page, filter.itemPerPage, filter.status, filter.order, filter.orderBy])



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
                Contact Enquiry List
            </Typography>
        </Breadcrumbs>

        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>#</TableCell>
                        {
                            tableColumnsArr.map((row, index) => {

                                return <TableCell key={`itme-${index}`} align="left" sortDirection={filter.orderBy === row.slug ? filter.order : false}>
                                    <TableSortLabel
                                        active={true}
                                        direction={filter.orderBy === row.slug ? filter.order : 'asc'}
                                        onClick={() => sortingHandler(row.slug)}
                                    >
                                        {row.title}
                                    </TableSortLabel>
                                </TableCell>
                            })
                        }



                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        (list.length === 0 && !processing) ?
                            <TableRow
                                key={"no-row-found"}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row" colSpan={4}>
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

                                    <TableCell align="left">{row.first_name}</TableCell>
                                    <TableCell align="left">{row.last_name}</TableCell>
                                    <TableCell align="left">{row.email}</TableCell>
                                    <TableCell align="left">{row.mobile}</TableCell>
                                    <TableCell align="left">{row.company}</TableCell>
                                    <TableCell align="left">{row.website}</TableCell>
                                    <TableCell align="left">{row.created_at}</TableCell>
                                    <TableCell align="left">{row.message}</TableCell>

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

export default EnquiryList;