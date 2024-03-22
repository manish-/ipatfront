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

const CustomerFeedbackDetails = (props) => {
    const { id } = useParams();
    const dispatch = useDispatch();
    let { processing, details, redirectTo } = useSelector(state => {
        return {
            processing: state.ContactUs_Reducers.processing,
            error: state.ContactUs_Reducers.error,
            errors: state.ContactUs_Reducers.errors,
            message: state.ContactUs_Reducers.message,
            details: state.ContactUs_Reducers.feedback_details,
            redirectTo: state.ContactUs_Reducers.redirectTo
        }
    });

    useEffect(() => {
        dispatch(CONTACT_US_ACTIONS.fetch_customer_feedback_details(id));
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
                to="/admin/customer-feedback"
            >
                <DashboardOutlined sx={{ mr: 0.5 }} fontSize="inherit" />
                Customer Feedbacks List
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
                    <Grid item xs={12} sm={8}>
                        <TextField
                            margin="none"
                            size="small"
                            fullWidth
                            id="ProjectName"
                            label="Project Name"
                            name="ProjectName"
                            value={details.project_name ? details.project_name : "-----"}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            margin="none"
                            size="small"
                            fullWidth
                            id="work_order_number"
                            label="Work Order Number"
                            name="work_order_number"
                            value={details.work_order_number ? details.work_order_number : "-----"}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={2} sx={{ pb: 2 }}>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            margin="none"
                            size="small"
                            fullWidth
                            id="created_at"
                            label="Created at"
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
                            id="quality_of_service_provided"
                            label="Quality of service provided"
                            name="quality_of_service_provided"
                            value={details.quality_of_service_provided ? details.quality_of_service_provided : "-----"}
                        />
                    </Grid>
                    <Grid item xs={10} sm={12}>
                        <TextField
                            margin="none"
                            size="small"
                            fullWidth
                            id="adherence_to_delivery_schedule"
                            label="Adherence to delivery schedule"
                            name="adherence_to_delivery_schedule"
                            value={details.adherence_to_delivery_schedule ? details.adherence_to_delivery_schedule : "-----"}
                        />
                    </Grid>
                    <Grid item xs={10} sm={12}>
                        <TextField
                            margin="none"
                            size="small"
                            fullWidth
                            id="knowledge_of_rules_procedures"
                            label="Knowledge of rules & procedures"
                            name="knowledge_of_rules_procedures"
                            value={details.knowledge_of_rules_procedures ? details.knowledge_of_rules_procedures : "-----"}
                        />
                    </Grid>
                    <Grid item xs={10} sm={12}>
                        <TextField
                            margin="none"
                            size="small"
                            fullWidth
                            id="complaint_handling_response_time"
                            label="Complaint handling response time"
                            name="complaint_handling_response_time"
                            value={details.complaint_handling_response_time ? details.complaint_handling_response_time : "-----"}
                        />
                    </Grid>
                    <Grid item xs={10} sm={12}>
                        <TextField
                            margin="none"
                            size="small"
                            fullWidth
                            id="response_time_on_quaeries_by_our_excutives"
                            label="Response time on quaeries by our excutives"
                            name="response_time_on_quaeries_by_our_excutives"
                            value={details.response_time_on_quaeries_by_our_excutives ? details.response_time_on_quaeries_by_our_excutives : "-----"}
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
                            label="Remark"
                            name="Message"
                            value={details.message ? details.message : "-----"}
                        />
                    </Grid>
                </Grid>
            </Box>
        </Paper>

    </Fragment>;
};

export default CustomerFeedbackDetails;