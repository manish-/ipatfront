import React, { Fragment, useRef, useState, useEffect } from "react";
import * as ADDRESS_ACTIONS from '../../../actions/admin/addressActions';
import * as CONSTANTS from '../../../constants/Constants';
import { useDispatch, useSelector } from "react-redux";
import ProcessingLoader from '../../../components/admin/ProcessingLoader';
import { Helmet } from 'react-helmet';
import { Navigate } from 'react-router';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import { NavLink } from "react-router-dom";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import RestartAltOutlinedIcon from '@mui/icons-material/RestartAltOutlined';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import { useParams } from 'react-router-dom';
import 'react-summernote/dist/react-summernote.css'; // import styles
// import '@popperjs/core';
import 'bootstrap/js/dist/modal';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/tooltip';
import 'bootstrap/dist/css/bootstrap.css';



const AddressEdit = (props) => {
    const { id } = useParams();

    const dispatch = useDispatch();
    const inputBannerFile = useRef(null)

    const [pageForm, setPageForm] = useState({
        id: null,
        title: "",
        titleError: "",
        email: "",
        emailError: "",
        status: "active",
        statusError: "",
        mobile: "",
        mobileError: "",
        fax: "",
        faxError: "",
        address: "",
        addressError: "",
        mapAddress: "",
        mapAddressError: "",
        dataLoaded: false
    });

    useEffect(() => {
        dispatch(ADDRESS_ACTIONS.fetch_details(id));
    }, [id]);

    const { processing, error, errors, message, details, redirectTo } = useSelector(state => {
        return {
            processing: state.Address_Reducers.processing,
            error: state.Address_Reducers.error,
            errors: state.Address_Reducers.errors,
            message: state.Address_Reducers.message,
            details: state.Address_Reducers.details,
            redirectTo: state.Address_Reducers.redirectTo
        }
    });

    useEffect(() => {

        if (details.title && !pageForm.dataLoaded) {
            setPageForm({
                ...pageForm,
                id: details.id,
                banner: details.banner,
                title: details.title,
                email: details.email,
                address: details.full_address,
                mobile: details.mobile,
                mapAddress: details.map_address,
                fax: details.fax,
                status: details.status,
                dataLoaded: true
            });

        }
        return () => {
            setPageForm({
                ...pageForm,
                dataLoaded: false
            });
        }
    }, [details.id]);

    // //console.log("pageForm",pageForm);

    useEffect(() => {
        if (errors && Object.entries(errors).length > 0) {
            let apiErrorObj = {};
            for (const [key, value] of Object.entries(errors)) {
                apiErrorObj[`${key}Error`] = value;
            }
            if (apiErrorObj && Object.entries(apiErrorObj).length > 0) {
                setPageForm({
                    ...pageForm,
                    ...apiErrorObj
                });
            }

        }
    }, [errors])

    const resetForm = (e) => {
        setPageForm({
            ...pageForm,
            title: "",
            titleError: "",
            email: "",
            emailError: "",
            address: "",
            addressError: "",
            mobile: "",
            mobileError: "",
            fax: "",
            faxError: "",
            mapAddress: "",
            mapAddressError: "",
            status: "active",
            statusError: "",
            dataLoaded: false
        });
        dispatch(ADDRESS_ACTIONS.fetch_details(id));
    }

    const submitForm = (e) => {
        let errorFound = false;
        let pageFormFields = { ...pageForm };

        if (pageFormFields.title === "") {
            errorFound = true;
            pageFormFields.titleError = 'this field is required!';
        } else {
            pageFormFields.titleError = '';
        }
        if (pageFormFields.email === "") {
            errorFound = true;
            pageFormFields.emailError = 'this field is required!';
        } else {
            pageFormFields.emailError = '';
        }


        if (pageFormFields.address === "" || pageFormFields.address === null) {
            errorFound = true;
            pageFormFields.addressError = 'this field is required!';
        } else {
            pageFormFields.addressError = '';
        }

        if (pageFormFields.mobile === "" || pageFormFields.mobile === null) {
            errorFound = true;
            pageFormFields.mobileError = 'this field is required!';
        } else {
            pageFormFields.mobileError = '';
        }

        if (pageFormFields.mapAddress === "" || pageFormFields.mapAddress === null) {
            errorFound = true;
            pageFormFields.mapAddressError = 'this field is required!';
        } else {
            pageFormFields.mapAddressError = '';
        }

        if (pageFormFields.fax === "" || pageFormFields.fax === null) {
            errorFound = true;
            pageFormFields.faxError = 'this field is required!';
        } else {
            pageFormFields.faxError = '';
        }


        if (pageFormFields.status === "" || pageFormFields.status === null) {
            errorFound = true;
            pageFormFields.statusError = 'this field is required!';
        } else {
            pageFormFields.statusError = '';
        }

        setPageForm({ ...pageFormFields });

        if (!errorFound) {

            dispatch(ADDRESS_ACTIONS.fetch_update(pageFormFields));//add_upcoming_event
        }

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
        <Breadcrumbs aria-label="breadcrumb">

            <Link component={NavLink}
                underline="hover"
                sx={{ display: 'flex', alignItems: 'center' }}
                color="inherit"
                to="/admin/dashboard"
            >
                <DashboardOutlinedIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                Dashboard
            </Link>
            <Link component={NavLink}
                underline="hover"
                sx={{ display: 'flex', alignItems: 'center' }}
                color="inherit"
                to="/admin/address/list"
            >
                <EventNoteOutlinedIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                Address List
            </Link>
            <Typography
                sx={{ display: 'flex', alignItems: 'center' }}
                color="text.primary"
            >
                <EditOutlinedIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                Edit
            </Typography>
        </Breadcrumbs>
        <Box sx={{
            my: 3,
            mx: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'left',
        }}>
            <Paper elevation={3}>
                <Box component="form" noValidate sx={{ mt: 2, mx: 2, }}>
                    
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                margin="normal"
                                size="small"
                                required
                                fullWidth
                                id="title"
                                label="Title"
                                name="title"
                                autoComplete="title"
                                value={pageForm.title}
                                onChange={(e) => setPageForm({ ...pageForm, title: e.currentTarget.value, titleError: '' })}
                                error={pageForm.titleError ? true : false}
                                helperText={pageForm.titleError}
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                margin="normal"
                                size="small"
                                required
                                fullWidth
                                id="email"
                                label="Email"
                                name="email"
                                autoComplete="email"
                                value={pageForm.email}
                                onChange={(e) => setPageForm({ ...pageForm, email: e.currentTarget.value, emailError: '' })}
                                error={pageForm.emailError ? true : false}
                                helperText={pageForm.emailError}
                            />
                        </Grid>

                        <Grid item xs={12} sm={12}>
                            <TextField
                                margin="normal"
                                size="small"
                                required
                                fullWidth
                                id="mobile"
                                label="Mobile"
                                name="mobile"
                                autoComplete="mobile"
                                value={pageForm.mobile}
                                onChange={(e) => setPageForm({ ...pageForm, mobile: e.currentTarget.value, mobileError: '' })}
                                error={pageForm.mobileError ? true : false}
                                helperText={pageForm.mobileError}
                            />
                        </Grid>

                        <Grid item xs={12} sm={12}>
                            <TextField
                                margin="normal"
                                size="small"
                                required
                                fullWidth
                                id="mapAddress"
                                label="Map Address"
                                name="mapAddress"
                                autoComplete="mapAddress"
                                value={pageForm.mapAddress}
                                onChange={(e) => setPageForm({ ...pageForm, mapAddress: e.currentTarget.value, mapAddressError: '' })}
                                error={pageForm.mapAddressError ? true : false}
                                helperText={pageForm.mapAddressError}
                            />
                        </Grid>

                        <Grid item xs={12} sm={12}>
                            <TextField
                                margin="normal"
                                size="small"
                                required
                                fullWidth
                                id="fax"
                                label="Fax Number"
                                name="fax"
                                autoComplete="fax"
                                value={pageForm.fax}
                                onChange={(e) => setPageForm({ ...pageForm, fax: e.currentTarget.value, faxError: '' })}
                                error={pageForm.faxError ? true : false}
                                helperText={pageForm.faxError}
                            />
                        </Grid>

                        <Grid item xs={12} sm={2}>
                            <FormControl sx={{ minWidth: 120 }} error={pageForm.statusError ? true : false}>
                                <InputLabel id="status-label">Status</InputLabel>
                                <Select
                                    margin="none"
                                    size="small"
                                    labelId="status-label"
                                    id="status"
                                    name="status"
                                    value={pageForm.status}
                                    label="status"
                                    displayEmpty
                                    onChange={(newValue) => {
                                        setPageForm({
                                            ...pageForm,
                                            status: newValue.target.value
                                        });
                                    }}
                                >
                                    <MenuItem value={'active'}>Active</MenuItem>
                                    <MenuItem value={'disabled'}>Disabled</MenuItem>
                                </Select>
                                <FormHelperText> {pageForm.statusError}</FormHelperText>
                            </FormControl>
                        </Grid>



                    </Grid>

                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={2} sx={{ my: 2 }}>
                            <Button variant="contained" color="error" startIcon={<RestartAltOutlinedIcon />} onClick={(e) => resetForm(e)}>
                                Reset
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={8} sx={{ my: 2 }}>
                        </Grid>
                        <Grid item xs={12} sm={2} sx={{ my: 2 }}>
                            <Button variant="contained" color="info" startIcon={<SaveOutlinedIcon />} onClick={(e) => submitForm(e)}>
                                Save
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </Box>
    </Fragment>;
};

export default AddressEdit;