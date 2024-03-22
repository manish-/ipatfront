import React, { Fragment, useRef, useState, useEffect } from "react";
import * as PROJECTS_TYPES_ACTIONS from '../../../actions/admin/projectTypesActions';
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

const ProjectTypeEdit = (props) => {
    const { id } = useParams();

    const dispatch = useDispatch();

    const [pageForm, setPageForm] = useState({
        id: null,
        project_type: "",
        project_typeError: "",
        status: "active",
        statusError: "",
        dataLoaded: false
    });

    const [pageContent, setPageContent] = useState('');

    useEffect(() => {
        dispatch(PROJECTS_TYPES_ACTIONS.fetch_details(id));
    }, [id]);

    const { processing, errors, details, redirectTo } = useSelector(state => {
        return {
            processing: state.ProjectTypes_Reducers.processing,
            error: state.ProjectTypes_Reducers.error,
            errors: state.ProjectTypes_Reducers.errors,
            message: state.ProjectTypes_Reducers.message,
            details: state.ProjectTypes_Reducers.details,
            redirectTo: state.ProjectTypes_Reducers.redirectTo
        }
    });

    useEffect(() => {

        if (details.project_type && !pageForm.dataLoaded) {
            setPageForm({
                ...pageForm,
                id: details.id,
                project_type: details.project_type,
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
            project_type: "",
            project_typeError: "",
            status: "active",
            statusError: ""
        });

    }

    const submitForm = (e) => {
        let errorFound = false;
        let pageFormFields = { ...pageForm };

        if (pageFormFields.project_type === "") {
            errorFound = true;
            pageFormFields.project_typeError = 'this field is required!';
        } else {
            pageFormFields.project_typeError = '';
        }

        if (pageFormFields.status === "" || pageFormFields.status === null) {
            errorFound = true;
            pageFormFields.statusError = 'this field is required!';
        } else {
            pageFormFields.statusError = '';
        }

        setPageForm({ ...pageFormFields });

        if (!errorFound) {
            dispatch(PROJECTS_TYPES_ACTIONS.fetch_update(pageFormFields));//add_upcoming_event
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
                to="/admin/project-types/list"
            >
                <EventNoteOutlinedIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                Project Type List
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
            <Grid container spacing={2}>
                <Grid item xs={12} sm={5}>
                    <Paper elevation={3}>
                        <Box component="form" noValidate sx={{ mt: 2, mx: 2, }}>

                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        margin="normal"
                                        size="small"
                                        required
                                        fullWidth
                                        id="project_type"
                                        label="Project Type"
                                        name="project_type"
                                        autoComplete="project_type"
                                        value={pageForm.project_type}
                                        onChange={(e) => setPageForm({ ...pageForm, project_type: e.currentTarget.value, project_typeError: '' })}
                                        error={pageForm.project_typeError ? true : false}
                                        helperText={pageForm.project_typeError}
                                        autoFocus
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12}>
                                    <FormControl sx={{ minWidth: 120 }} error={pageForm.statusError ? true : false}>
                                        <InputLabel id="status-label">Status</InputLabel>
                                        <Select
                                            margin="none"
                                            size="small"
                                            labelId="status-label"
                                            id="status"
                                            name="status"
                                            value={pageForm.status}
                                            label="Status"
                                            displayEmpty
                                            onChange={(newValue) => {
                                                setPageForm({
                                                    ...pageForm,
                                                    status: newValue.target.value,
                                                    statusError: ""
                                                });
                                            }}
                                        >
                                            <MenuItem value={"-1"}>Status</MenuItem>
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

export default ProjectTypeEdit;