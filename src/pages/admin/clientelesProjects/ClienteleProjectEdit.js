import React, { Fragment, useState, useEffect } from "react";
import * as CLIENTELE_ACTIONS from '../../../actions/admin/clientelesActions';
import * as UTILS_ACTIONS from '../../../actions/admin/utilsActions';
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

import SummerNoteEditor from '../../../components/admin/SummerNoteEditor';


const ClienteleProjectEdit = (props) => {
    const { clientId, id } = useParams();

    const dispatch = useDispatch();

    const [pageForm, setPageForm] = useState({
        id: null,
        projectId: null,
        clientId: null,
        display_order: "1",
        display_orderError: "",
        display_on_homepage: "no",
        display_on_homepageError: "",
        short_content: "",
        short_contentError: "",
        content: "",
        contentError: "",
        state: "Uttar Pradesh",
        stateError: "",
        district: "",
        districtError: "",
        project_type: "-1",
        project_typeError: "",
        sector: "-1",
        sectorError: "",
        is_case_study_available: "no",
        is_case_study_availableError: "",
        case_study: "-1",
        case_studyError: "",
        meta_title: "",
        meta_titleError: "",
        meta_description: "",
        meta_descriptionError: "",
        meta_keywords: "",
        meta_keywordsError: "",
        status: "active",
        statusError: "",
        dataLoaded: false
    });

    const [pageShortContent, setPageShortContent] = useState('');
    const [pageContent, setPageContent] = useState('');
    const [caseStudy, setCaseStudy] = useState('');

    const onShortContentChange = (e) => {
        setPageShortContent(e);
    }
    const onContentChange = (e) => {
        setPageContent(e);
    }
    const onCaseStudyChange = (e) => {
        setCaseStudy(e);
    }

    useEffect(() => {
        dispatch(CLIENTELE_ACTIONS.fetch_client_projects_details(clientId, id));
        dispatch(UTILS_ACTIONS.fetch_states());
        dispatch(UTILS_ACTIONS.fetch_project_type());
        dispatch(UTILS_ACTIONS.fetch_sectors());
    }, [id]);

    const { processing, error, errors, message, details, states, districts, sectors, projectTypes, redirectTo } = useSelector(state => {
        return {
            processing: state.Clienteles_Reducers.projects.processing || state.Utils_Reducers.states.processing || state.Utils_Reducers.sectors.processing || state.Utils_Reducers.project_types.processing,
            error: state.Clienteles_Reducers.projects.error,
            errors: state.Clienteles_Reducers.projects.errors,
            message: state.Clienteles_Reducers.projects.message,
            details: state.Clienteles_Reducers.projects.details,
            states: state.Utils_Reducers.states.list,
            projectTypes: state.Utils_Reducers.project_types.list,
            sectors: state.Utils_Reducers.sectors.list,
            districts: state.Utils_Reducers.district.list,
            redirectTo: state.Clienteles_Reducers.projects.redirectTo
        }
    });

    useEffect(() => {

        if (details.id && !pageForm.dataLoaded) {

            setPageForm({
                ...pageForm,
                id: id,
                projectId: details.project_id,
                clientId: clientId,
                display_order: details.display_order,
                display_on_homepage: details.display_on_homepage,
                short_content: details.short_content,
                content: details.content,
                is_case_study_available: details.is_case_study_available,
                case_study: details.case_study,
                state: details.state,
                district: details.district,
                sector: details.sector_id,
                project_type: details.project_type_id,
                meta_title: details.meta_title,
                meta_keywords: details.meta_keywords,
                meta_description: details.meta_description,
                status: details.status,
                dataLoaded: true
            });
            setPageShortContent(details.short_content);
            setPageContent(details.content);
            onCaseStudyChange(details.case_study);
            dispatch(UTILS_ACTIONS.fetch_district(details.state));
        }
        return () => {
            setPageForm({
                ...pageForm,
                dataLoaded: false
            });
        }
    }, [details.id]);

    useEffect(() => {
        dispatch(UTILS_ACTIONS.fetch_district(pageForm.state));
    }, [pageForm.state]);

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
            display_order: "1",
            display_orderError: "",
            display_on_homepage: "no",
            display_on_homepageError: "",
            short_content: "",
            short_contentError: "",
            content: "",
            contentError: "",
            state: "",
            stateError: "",
            district: "",
            districtError: "",
            project_type: "-1",
            project_typeError: "",
            sector: "-1",
            sectorError: "",
            is_case_study_available: "no",
            is_case_study_availableError: "",
            case_study: "-1",
            case_studyError: "",
            meta_title: "",
            meta_titleError: "",
            meta_description: "",
            meta_descriptionError: "",
            meta_keywords: "",
            meta_keywordsError: "",
            status: "active",
            statusError: "",
        });
        setPageShortContent(`<p></p>`);
        setPageContent(`<p></p>`);
        onCaseStudyChange(`<p></p>`);
        dispatch(CLIENTELE_ACTIONS.fetch_client_projects_details(clientId, id));
    }

    const submitForm = (e) => {
        let errorFound = false;
        let pageFormFields = { ...pageForm };


        if (pageShortContent === "" || pageShortContent === null) {
            errorFound = true;
            pageFormFields.short_contentError = 'this field is required!';
        } else {
            pageFormFields.short_content = pageShortContent;
            pageFormFields.short_contentError = '';
        }

        if (pageContent === "" || pageContent === null) {
            errorFound = true;
            pageFormFields.contentError = 'this field is required!';
        } else {
            pageFormFields.content = pageContent;
            pageFormFields.contentError = '';
        }
        if (pageFormFields.is_case_study_available === "" || pageFormFields.is_case_study_available === null || pageFormFields.is_case_study_available === "-1") {
            errorFound = true;
            pageFormFields.is_case_study_availableError = 'this field is required!';
        } else {
            pageFormFields.is_case_study_availableError = '';
            if (pageFormFields.is_case_study_available === 'yes') {
                if (caseStudy === "" || caseStudy === null || caseStudy.length < 10) {
                    errorFound = true;
                    pageFormFields.case_studyError = 'this field is required!';
                } else {
                    pageFormFields.case_study = caseStudy;
                    pageFormFields.case_studyError = '';
                }
            }
        }

        if (pageFormFields.project_type === "" || pageFormFields.project_type === null || pageFormFields.project_type === "-1") {
            errorFound = true;
            pageFormFields.project_typeError = 'this field is required!';
        } else {
            pageFormFields.project_typeError = '';
        }

        if (pageFormFields.sector === "" || pageFormFields.sector === null || pageFormFields.sector === "-1") {
            errorFound = true;
            pageFormFields.sectorError = 'this field is required!';
        } else {
            pageFormFields.sectorError = '';
        }

        if (pageFormFields.state === "" || pageFormFields.state === null || pageFormFields.state === "-1") {
            errorFound = true;
            pageFormFields.stateError = 'this field is required!';
        } else {
            pageFormFields.stateError = '';
        }
        if (pageFormFields.district === "" || pageFormFields.district === null || pageFormFields.district === "-1") {
            errorFound = true;
            pageFormFields.districtError = 'this field is required!';
        } else {
            pageFormFields.districtError = '';
        }
        if (pageFormFields.meta_title === "" || pageFormFields.meta_title === null) {
            errorFound = true;
            pageFormFields.meta_titleError = 'this field is required!';
        } else {
            pageFormFields.meta_titleError = '';
        }

        if (pageFormFields.meta_keywords === "" || pageFormFields.meta_keywords === null) {
            errorFound = true;
            pageFormFields.meta_keywordsError = 'this field is required!';
        } else {
            pageFormFields.meta_keywordsError = '';
        }

        if (pageFormFields.meta_description === "" || pageFormFields.meta_description === null) {
            errorFound = true;
            pageFormFields.meta_descriptionError = 'this field is required!';
        } else {
            pageFormFields.meta_descriptionError = '';
        }

        if (pageFormFields.status === "" || pageFormFields.status === null) {
            errorFound = true;
            pageFormFields.statusError = 'this field is required!';
        } else {
            pageFormFields.statusError = '';
        }

        setPageForm({ ...pageFormFields });

        if (!errorFound) {
            dispatch(CLIENTELE_ACTIONS.fetch_client_projects_update(pageFormFields));//add_upcoming_event
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
                to="/admin/client-projects/list"
            >
                <EventNoteOutlinedIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                Projects List
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
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={3} sx={{ mt: 2 }}>
                                <Grid item xs={12} sm={12} sx={{ ml: 2 }}>
                                    <Typography component="h1" variant="body2">
                                        Client Logo
                                    </Typography>
                                    {
                                        details.client_logo ?
                                            <img src={details.client_logo} alt={""} style={{ width: "100%", height: "150px" }} /> :
                                            <img src={CONSTANTS.NO_IMAGE_BANNER_FOUND} alt={""} style={{ width: "130px", height: "130px" }} />
                                    }

                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={9} sx={{ mt: 2 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={12}>
                                        <TextField
                                            margin="normal"
                                            size="small"
                                            required
                                            fullWidth
                                            id="client_name"
                                            label="Client Name"
                                            name="client_name"
                                            disabled={true}
                                            value={details.client_name ? details.client_name : "-----"}
                                            readOnly={true}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={12} sm={12}>
                                        <FormControl sx={{ minWidth: '100%' }} error={pageForm.sectorError ? true : false}>
                                            <InputLabel id="sector-label">Sector</InputLabel>
                                            <Select
                                                margin="none"
                                                size="small"
                                                labelId="sector-label"
                                                id="sector"
                                                name="sector"
                                                value={pageForm.sector}
                                                label="Sector"
                                                displayEmpty
                                                onChange={(newValue) => {
                                                    setPageForm({
                                                        ...pageForm,
                                                        sector: newValue.target.value,
                                                        sectorError: ''
                                                    });
                                                }}
                                            >
                                                <MenuItem value={'-1'}>Select</MenuItem>
                                                {
                                                    sectors.map((sector, index) => {
                                                        return <MenuItem key={`sector_option_${index}`} value={sector.id}>{sector.title}</MenuItem>
                                                    })
                                                }

                                            </Select>
                                            <FormHelperText> {pageForm.sectorError}</FormHelperText>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} md={8} sm={8}>
                                        <FormControl sx={{ minWidth: '100%' }} error={pageForm.sectorError ? true : false}>
                                            <InputLabel id="project-type-label">Project Type</InputLabel>
                                            <Select
                                                margin="none"
                                                size="small"
                                                labelId="project-type-label"
                                                id="project-type"
                                                name="project-type"
                                                value={pageForm.project_type}
                                                label="Project Type"
                                                displayEmpty
                                                onChange={(newValue) => {
                                                    setPageForm({
                                                        ...pageForm,
                                                        project_type: newValue.target.value,
                                                        project_typeError: ''
                                                    });
                                                }}
                                            >
                                                <MenuItem value={'-1'}>Select</MenuItem>
                                                {
                                                    projectTypes.map((projectType, index) => {
                                                        return <MenuItem key={`project_type_option_${index}`} value={projectType.id}>{projectType.project_type}</MenuItem>
                                                    })
                                                }

                                            </Select>
                                            <FormHelperText> {pageForm.sectorError}</FormHelperText>
                                        </FormControl>
                                    </Grid>

                                    <Grid item xs={12} md={4} sm={4}>
                                        <FormControl sx={{ minWidth: '100%' }} error={pageForm.is_case_study_availableError ? true : false}>
                                            <InputLabel id="is_case_study_available-label">Is case study available ?</InputLabel>
                                            <Select
                                                margin="none"
                                                size="small"
                                                labelId="is_case_study_available-label"
                                                id="is_case_study_available"
                                                name="is_case_study_available"
                                                value={pageForm.is_case_study_available}
                                                label="is_case_study_available"
                                                displayEmpty
                                                onChange={(newValue) => {
                                                    setPageForm({
                                                        ...pageForm,
                                                        is_case_study_available: newValue.target.value,
                                                        is_case_study_availableError: ''
                                                    });
                                                    onCaseStudyChange('<p></p>');
                                                }}
                                            >
                                                <MenuItem value={'-1'}>Select</MenuItem>
                                                <MenuItem value={'yes'}>Yes</MenuItem>
                                                <MenuItem value={'no'}>No</MenuItem>

                                            </Select>
                                            <FormHelperText> {pageForm.is_case_study_availableError}</FormHelperText>
                                        </FormControl>
                                    </Grid>

                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        {pageForm.is_case_study_available === "yes" ?
                            <Grid item xs={12} sm={12} id="case_study">
                                <Typography component="h1" variant="body2">
                                    Case Study
                                </Typography>
                                <SummerNoteEditor pageContent={caseStudy} onContentChange={onCaseStudyChange} />
                                <FormHelperText className="Mui-error"> {pageForm.case_studyError}</FormHelperText>
                            </Grid>
                            : ""}

                        <Grid item xs={12} sm={12} id="page_short_content">
                            <Typography component="h1" variant="body2">
                                Short Content
                            </Typography>
                            <SummerNoteEditor pageContent={pageShortContent} onContentChange={onShortContentChange} />
                            <FormHelperText className="Mui-error"> {pageForm.short_contentError}</FormHelperText>
                        </Grid>

                        <Grid item xs={12} sm={12} id="page_content">
                            <Typography component="h1" variant="body2">
                                Content
                            </Typography>
                            <SummerNoteEditor pageContent={pageContent} onContentChange={onContentChange} />
                            <FormHelperText className="Mui-error"> {pageForm.contentError}</FormHelperText>
                        </Grid>

                        <Grid item xs={12} sm={12}>
                            <TextField
                                margin="normal"
                                size="small"
                                required
                                fullWidth
                                id="meta_title"
                                label="Meta Title"
                                name="meta_title"
                                autoComplete="meta_title"
                                value={pageForm.meta_title}
                                onChange={(e) => setPageForm({ ...pageForm, meta_title: e.currentTarget.value, meta_titleError: '' })}
                                error={pageForm.meta_titleError ? true : false}
                                helperText={pageForm.meta_titleError}
                            />
                        </Grid>

                        <Grid item xs={12} sm={12}>
                            <TextField
                                margin="normal"
                                size="small"
                                required
                                fullWidth
                                id="meta_keywords"
                                label="Meta Keywords"
                                name="meta_keywords"
                                autoComplete="meta_keywords"
                                value={pageForm.meta_keywords}
                                onChange={(e) => setPageForm({ ...pageForm, meta_keywords: e.currentTarget.value, meta_keywordsError: '' })}
                                error={pageForm.meta_keywordsError ? true : false}
                                helperText={pageForm.meta_keywordsError}
                            />
                        </Grid>

                        <Grid item xs={12} sm={12}>
                            <TextField
                                margin="normal"
                                size="small"
                                required
                                fullWidth
                                id="meta_description"
                                label="Meta Description"
                                name="meta_description"
                                autoComplete="meta_description"
                                value={pageForm.meta_description}
                                onChange={(e) => setPageForm({ ...pageForm, meta_description: e.currentTarget.value, meta_descriptionError: '' })}
                                error={pageForm.meta_descriptionError ? true : false}
                                helperText={pageForm.meta_descriptionError}
                            />
                        </Grid>

                        <Grid item xs={12} sm={3}>
                            <FormControl sx={{ minWidth: "100%" }} error={pageForm.stateError ? true : false}>
                                <InputLabel id="state-label">State</InputLabel>
                                <Select
                                    margin="none"
                                    size="small"
                                    labelId="state-label"
                                    id="state"
                                    name="state"
                                    value={pageForm.state}
                                    label="State"
                                    displayEmpty
                                    onChange={(newValue) => {
                                        setPageForm({
                                            ...pageForm,
                                            state: newValue.target.value,
                                            stateError: "",
                                            district: "Gautam Buddha Nagar",
                                            districtError: ""

                                        });
                                    }}
                                >
                                    <MenuItem value={"-1"}>Select state</MenuItem>
                                    {
                                        states.map((row, index) => {
                                            return <MenuItem key={`state-state-option-${index}`} value={row.name}>{row.name}</MenuItem>
                                        })
                                    }

                                </Select>
                                <FormHelperText> {pageForm.stateError}</FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <FormControl sx={{ minWidth: "100%" }} error={pageForm.stateError ? true : false}>
                                <InputLabel id="district-label">District</InputLabel>
                                <Select
                                    margin="none"
                                    size="small"
                                    labelId="district-label"
                                    id="district"
                                    name="district"
                                    value={pageForm.district}
                                    label="District"
                                    displayEmpty
                                    onChange={(newValue) => {
                                        setPageForm({
                                            ...pageForm,
                                            district: newValue.target.value,
                                            districtError: ""
                                        });
                                    }}
                                >
                                    <MenuItem value={"-1"}>Select district</MenuItem>
                                    {
                                        districts.map((row, index) => {
                                            return <MenuItem key={`district-district-option-${index}`} value={row.name}>{row.name}</MenuItem>
                                        })
                                    }

                                </Select>
                                <FormHelperText> {pageForm.districtError}</FormHelperText>
                            </FormControl>
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
                                    label="Status"
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
                        <Grid item xs={12} sm={2}>
                            <FormControl sx={{ minWidth: 120 }} error={pageForm.display_on_homepageError ? true : false}>
                                <InputLabel id="status-label">Display on Home</InputLabel>
                                <Select
                                    margin="none"
                                    size="small"
                                    labelId="display_on_homepage-label"
                                    id="display_on_homepage"
                                    name="display_on_homepage"
                                    value={pageForm.display_on_homepage}
                                    label="Display on Home"
                                    displayEmpty
                                    onChange={(newValue) => {
                                        setPageForm({
                                            ...pageForm,
                                            display_on_homepage: newValue.target.value,
                                            display_on_homepageError: ""
                                        });
                                    }}
                                >
                                    <MenuItem value={'yes'}>Yes</MenuItem>
                                    <MenuItem value={'no'}>No</MenuItem>
                                </Select>
                                <FormHelperText> {pageForm.display_on_homepageError}</FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <TextField
                                margin="none"
                                size="small"
                                required
                                fullWidth
                                type="number"
                                id="display_order"
                                label="Display Order"
                                name="display_order"
                                
                                value={pageForm.display_order}
                                onChange={(e) => {
                                    if (e.currentTarget.value > 0) {
                                        setPageForm({ ...pageForm, display_order: e.currentTarget.value, display_orderError: '' });
                                    }
                                }}
                                error={pageForm.display_orderError ? true : false}
                                helperText={pageForm.display_orderError}
                            />
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

export default ClienteleProjectEdit;