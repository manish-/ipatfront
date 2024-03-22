import React, { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from 'react-helmet';
import { NavLink, Link, useParams } from "react-router-dom";
import { Navigate } from 'react-router';

import * as CONTACT_US_ACTIONS from '../../../actions/admin/contactUsActions';
import * as CONSTANTS from '../../../constants/Constants';
import ProcessingLoader from '../../../components/admin/ProcessingLoader';

import {
    Box,
    Breadcrumbs,
    Grid,
    Paper,
    TextField,
    Typography
} from '@mui/material';

import {
    MailOutlined,
    DashboardOutlined
} from '@mui/icons-material';

const CustomerComplainDetails = (props) => {
    const { id } = useParams();
    const dispatch = useDispatch();
    let { processing, details, redirectTo } = useSelector(state => {
        return {
            processing: state.ContactUs_Reducers.processing,
            error: state.ContactUs_Reducers.error,
            errors: state.ContactUs_Reducers.errors,
            message: state.ContactUs_Reducers.message,
            details: state.ContactUs_Reducers.complain_details,
            redirectTo: state.ContactUs_Reducers.redirectTo
        }
    });

    useEffect(() => {
        dispatch(CONTACT_US_ACTIONS.fetch_customer_complain_details(id));
    }, [id])

    details = details ? details : {};

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
            <Link component={NavLink}
                underline="hover"
                sx={{ display: 'flex', alignItems: 'center' }}
                color="inherit"
                to="/admin/customer-complains"
            >
                <DashboardOutlined sx={{ mr: 0.5 }} fontSize="inherit" />
                Customer Complains List
            </Link>

            <Typography
                sx={{ display: 'flex', alignItems: 'center' }}
                color="text.primary"
            >
                <MailOutlined sx={{ mr: 0.5 }} fontSize="inherit" />
                Details
            </Typography>
        </Breadcrumbs>

        <Paper elevation={3} sx={{ mt: 4 }}>
            <Box component="form" noValidate sx={{ mt: 2, mx: 2, my: 3 }}>
                <Grid container spacing={2} sx={{ pb: 2 }}>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            margin="none"
                            size="small"
                            fullWidth
                            id="Created at"
                            label="created_at"
                            name="created_at"
                            value={details.created_at ? details.created_at : "-----"}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            margin="none"
                            size="small"
                            fullWidth
                            id="Fullname"
                            label="Fullname"
                            name="Fullname"
                            value={details.firstname ? (details.firstname + (details.lastname ? (" " + details.lastname) : "")) : "-----"}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            margin="none"
                            size="small"
                            fullWidth
                            id="Email"
                            label="Email"
                            name="Email"
                            value={details.email ? details.email : "-----"}
                        />
                    </Grid>

                </Grid>

                <Grid container spacing={2} sx={{ pb: 1 }}>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            margin="none"
                            size="small"
                            fullWidth
                            id="Mobile"
                            label="Mobile"
                            name="Mobile"
                            value={details.mobile ? details.mobile : "-----"}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            margin="none"
                            size="small"
                            fullWidth
                            id="State"
                            label="State"
                            name="State"
                            value={details.state ? details.state : "-----"}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            margin="none"
                            size="small"
                            fullWidth
                            id="City"
                            label="City"
                            name="City"
                            value={details.city ? details.city : "-----"}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={2} sx={{ pb: 1 }}>
                    <Grid item xs={12} sm={5}>
                        <TextField
                            margin="none"
                            size="small"
                            fullWidth
                            id="pincode"
                            label="Pincode"
                            name="pincode"
                            value={details.pincode ? details.pincode : "-----"}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={2} sx={{ pb: 1 }}>
                    <Grid item xs={10} sm={12}>
                        <TextField
                            margin="none"
                            size="small"
                            fullWidth
                            multiline
                            rows={4}
                            id="Address"
                            label="Address"
                            name="Address"
                            value={details.address ? details.address : "-----"}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={2} sx={{ pb: 1 }}>
                    <Grid item xs={10} sm={12}>
                        <TextField
                            margin="none"
                            size="small"
                            fullWidth
                            multiline
                            rows={4}
                            id="Message"
                            label="Message"
                            name="Message"
                            value={details.message ? details.message : "-----"}
                        />
                    </Grid>
                </Grid>
            </Box>
        </Paper>

    </Fragment>;
};

export default CustomerComplainDetails;