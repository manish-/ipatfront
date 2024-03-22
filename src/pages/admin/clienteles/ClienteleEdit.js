import React, { Fragment, useRef, useState, useEffect } from "react";
import * as CLIENTELE_ACTIONS from '../../../actions/admin/clientelesActions';
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
import Badge from '@mui/material/Badge';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import Button from '@mui/material/Button';
import RestartAltOutlinedIcon from '@mui/icons-material/RestartAltOutlined';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import Switch from '@mui/material/Switch';
import { useParams } from 'react-router-dom';

import SummerNoteEditor from '../../../components/admin/SummerNoteEditor';


const ClienteleEdit = (props) => {
    const { id } = useParams();

    const dispatch = useDispatch();
    const inputThumbnailFile = useRef(null)

    const [pageForm, setPageForm] = useState({
        id: null,
        title: "",
        titleError: "",
        alt: "",
        altError: "",
        display_order: "1",
        display_orderError: "",
        display_on_homepage: "no",
        display_on_homepageError: "",
        thumbnailFile: null,
        thumbnail: null,
        thumbnailError: "",
        content: "",
        contentError: "",
        status: "active",
        statusError: "",
        dataLoaded: false
    });

    const [pageContent, setPageContent] = useState('');

    useEffect(() => {
        dispatch(CLIENTELE_ACTIONS.fetch_details(id));
    }, [id]);

    const { processing, error, errors, message, details, redirectTo } = useSelector(state => {
        return {
            processing: state.Clienteles_Reducers.processing,
            error: state.Clienteles_Reducers.error,
            errors: state.Clienteles_Reducers.errors,
            message: state.Clienteles_Reducers.message,
            details: state.Clienteles_Reducers.details,
            redirectTo: state.Clienteles_Reducers.redirectTo
        }
    });

    useEffect(() => {

        if (details.alt && !pageForm.dataLoaded) {
            // console.log("details", details);
            setPageForm({
                ...pageForm,
                id: details.id,
                thumbnail: details.thumbnail,
                display_order: details.display_order,
                display_on_homepage: details.display_on_homepage,
                alt: details.alt,
                title: details.title,
                content: details.content,
                status: details.status,
                dataLoaded: true
            });
            setPageContent(details.content);

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


    const inputThumbnailFileChangeHandler = (e) => {
        let file = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onloadend = function (e) {
            setPageForm({
                ...pageForm,
                thumbnailFile: null,
                thumbnail: reader.result,
                thumbnailError: ""
            });
        }.bind(this);
    }

    const resetInputThumbnailFileChangeHandler = (e) => {
        inputThumbnailFile.current.value = null;
        setPageForm({
            ...pageForm,
            thumbnailFile: null,
            thumbnail: null,
            thumbnailError: ""
        });
    }

    const onContentChange = (e) => {
        setPageContent(e);
    }

    const resetForm = (e) => {
        setPageForm({
            ...pageForm,
            title: "",
            titleError: "",
            alt: "",
            altError: "",
            display_order: "1",
            display_orderError: "",
            display_on_homepage: "no",
            display_on_homepageError: "",
            thumbnailFile: null,
            thumbnail: null,
            thumbnailError: "",
            content: "",
            contentError: "",
            status: "active",
            statusError: "",
            dataLoaded: false
        });

        inputThumbnailFile.current.value = null;
        dispatch(CLIENTELE_ACTIONS.fetch_details(id));
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

        if (pageFormFields.alt === "") {
            errorFound = true;
            pageFormFields.altError = 'this field is required!';
        } else {
            pageFormFields.altError = '';
        }

        if (pageFormFields.status === "" || pageFormFields.status === null) {
            errorFound = true;
            pageFormFields.statusError = 'this field is required!';
        } else {
            pageFormFields.statusError = '';
        }

        if (pageFormFields.display_on_homepage === "" || pageFormFields.display_on_homepage === null) {
            errorFound = true;
            pageFormFields.display_on_homepageError = 'this field is required!';
        } else {
            pageFormFields.display_on_homepageError = '';
        }
        if (pageFormFields.display_order === "" || pageFormFields.display_order < 1) {
            errorFound = true;
            pageFormFields.display_orderError = 'this field is required!';
        } else {
            pageFormFields.display_orderError = '';
        }

        if (pageContent === "" || pageContent === null) {
            errorFound = true;
            pageFormFields.contentError = 'this field is required!';
        } else {
            pageFormFields.content = pageContent;
            pageFormFields.contentError = '';
        }

        setPageForm({ ...pageFormFields });

        if (!errorFound) {

            if (inputThumbnailFile.current.files.length === 0) {
                pageFormFields.thumbnailFile = null;
            } else {
                pageFormFields.thumbnailFile = inputThumbnailFile.current.files[0];
            }


            dispatch(CLIENTELE_ACTIONS.fetch_update(pageFormFields));//add_upcoming_event
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
                to="/admin/clienteles/list"
            >
                <EventNoteOutlinedIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                Clientele List
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
                <Grid item xs={12} sm={12} sx={{ mt: 2 }}>
                    <Paper elevation={3}>

                        <Box component="form" noValidate sx={{ mt: 2, mx: 2, }}>

                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12} sx={{ mt: 2 }}>
                                    <Typography component="h1" variant="body2">
                                        Thumbnail
                                    </Typography>

                                    <input accept="image/*" id="contained-button-file" type="file" ref={inputThumbnailFile} onChange={(e) => inputThumbnailFileChangeHandler(e)} style={{ display: "none" }} />
                                    {
                                        pageForm.thumbnail ? <Badge badgeContent={<CancelOutlinedIcon />} color="error" onClick={(e) => resetInputThumbnailFileChangeHandler(e)}>
                                            <img src={pageForm.thumbnail} alt={""} style={{ width: "100%", height: "150px" }} onClick={() => inputThumbnailFile.current.click()} />
                                        </Badge> :
                                            <img src={CONSTANTS.NO_IMAGE_THUMBNAIL_FOUND} alt={""} style={{ width: "130px", height: "130px" }} onClick={() => inputThumbnailFile.current.click()} />
                                    }
                                    <p className="Mui-error MuiFormHelperText-sizeNormal MuiFormHelperText-contained MuiFormHelperText-filled Mui-required css-1wc848c-MuiFormHelperText-root">{pageForm.thumbnailError}</p>

                                </Grid>
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
                                <Grid item xs={12} sm={12} id="page_content">
                                    <Typography component="h1" variant="body2">
                                        Content
                                    </Typography>

                                    <SummerNoteEditor pageContent={pageContent} onContentChange={onContentChange} />
                                    <FormHelperText className="Mui-error"> {pageForm.contentError}</FormHelperText>
                                </Grid>
                            </Grid>
                            <br />
                            <Grid container spacing={2}>

                                <Grid item xs={12} sm={4}>
                                    <TextField
                                        margin="normal"
                                        size="small"
                                        required
                                        fullWidth
                                        id="alt"
                                        label="Alt Text"
                                        name="alt"
                                        autoComplete="alt"
                                        value={pageForm.alt}
                                        onChange={(e) => setPageForm({ ...pageForm, alt: e.currentTarget.value, altError: '' })}
                                        error={pageForm.altError ? true : false}
                                        helperText={pageForm.altError}
                                    />
                                </Grid>

                                <Grid item xs={12} sm={2}>
                                    <FormControl sx={{ minWidth: 120, marginTop: "12px" }} error={pageForm.statusError ? true : false}>
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
                                <Grid item xs={12} sm={2}>
                                    <FormControl sx={{ minWidth: 120, marginTop: "12px" }} error={pageForm.display_on_homepageError ? true : false}>
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
                                        margin="normal"
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

export default ClienteleEdit;