import React, { Fragment, useRef, useState, useEffect } from "react";
import * as DOWNLOAD_ACTIONS from '../../../actions/admin/downloadsActions';
import * as CONSTANTS from '../../../constants/Constants';
import { useDispatch, useSelector } from "react-redux";
import ProcessingLoader from '../../../components/admin/ProcessingLoader';
import { Helmet } from 'react-helmet';
import { Navigate } from 'react-router';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import ViewListOutlinedIcon from '@mui/icons-material/ViewListOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import { NavLink } from "react-router-dom";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Badge from '@mui/material/Badge';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import Button from '@mui/material/Button';
import RestartAltOutlinedIcon from '@mui/icons-material/RestartAltOutlined';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import { useParams } from 'react-router-dom';

import SummerNoteEditor from '../../../components/admin/SummerNoteEditor';

import ReactSummernote from 'react-summernote';
import 'react-summernote/dist/react-summernote.css'; // import styles
import * as $ from 'jquery';
import '@popperjs/core';
import 'bootstrap/js/dist/modal';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/tooltip';
import 'bootstrap/dist/css/bootstrap.css';



const DownloadAdd = (props) => {
  
    const dispatch = useDispatch();
    const inputThumbnailFile = useRef(null);
    
    const [pageForm, setPageForm] = useState({
        title: "",
        titleError: "",
        thumbnailFile: null,
        thumbnail: null,
        thumbnailError: "",
        status: "active",
        statusError: "",
        dataLoaded: false
    });

    const { processing, error, errors, message, details, redirectTo } = useSelector(state => {
        return {
            processing: state.Downloads_Reducers.processing,
            error: state.Downloads_Reducers.error,
            errors: state.Downloads_Reducers.errors,
            message: state.Downloads_Reducers.message,
            details: state.Downloads_Reducers.details,
            redirectTo: state.Downloads_Reducers.redirectTo
        }
    });

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
            thumbnailFile: null,
            thumbnail: null,
            thumbnailError: "",
            status: "active",
            statusError: "",
            dataLoaded:false
        });
        inputThumbnailFile.current.value = null;
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

        if (pageFormFields.status === "" || pageFormFields.status === null) {
            errorFound = true;
            pageFormFields.statusError = 'this field is required!';
        } else {
            pageFormFields.statusError = '';
        }

        setPageForm({ ...pageFormFields });

        if (!errorFound) {

            if (inputThumbnailFile.current.files.length === 0) {
                pageFormFields.thumbnailFile = null;
            } else {
                pageFormFields.thumbnailFile = inputThumbnailFile.current.files[0];
            }
            dispatch(DOWNLOAD_ACTIONS.fetch_add(pageFormFields));//add_upcoming_event
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
                to="/admin/downloads/list"
            >
                <EventNoteOutlinedIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                Downloads List
            </Link>
            <Typography
                sx={{ display: 'flex', alignItems: 'center' }}
                color="text.primary"
            >
                <EditOutlinedIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                Add
            </Typography>
        </Breadcrumbs>
        <Box sx={{
            my: 3,
            mx: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'left',
        }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} sx={{ mt: 2 }}>
                    <Paper elevation={3}>

                        <Box component="form" noValidate sx={{ mt: 2, mx: 2, }}>

                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12} sx={{ mt: 2 }}>
                                    <Typography component="h1" variant="body2">
                                        Thumbnail
                                    </Typography>
                                    <input accept=".pdf,.PDF" id="contained-button-file" type="file" ref={inputThumbnailFile}/>
                                    {/*<input accept=".pdf,.PDF" id="contained-button-file" type="file"/>*/}
                                    
                                    <p className="Mui-error MuiFormHelperText-sizeNormal MuiFormHelperText-contained MuiFormHelperText-filled Mui-required css-1wc848c-MuiFormHelperText-root">{pageForm.thumbnailError}</p>

                                </Grid>
                            </Grid>
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
                                <Grid item xs={12} sm={6} sx={{ my: 2 }}>
                                </Grid>
                                <Grid item xs={12} sm={2} sx={{ my: 2 }}>
                                    <Button variant="contained" color="info" startIcon={<SaveOutlinedIcon />} onClick={(e) => submitForm(e)}>
                                        Save
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>

                    </Paper>
                </Grid>
            </Grid>
        </Box>
    </Fragment>;
};

export default DownloadAdd;