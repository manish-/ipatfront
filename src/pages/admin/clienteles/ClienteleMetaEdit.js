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


const ClienteleMetaEdit = (props) => {
    // const { id } = useParams();

    const dispatch = useDispatch();
    const inputBannerFile = useRef(null)

    const [pageForm, setPageForm] = useState({
        id: null,
        title: "",
        titleError: "",
        slug: "",
        slugError: "",
        bannerFile: null,
        banner: null,
        bannerError: "",
        status: "active",
        statusError: "",
        meta_title: "",
        meta_titleError: "",
        meta_description: "",
        meta_descriptionError: "",
        meta_keywords: "",
        meta_keywordsError: "",
        dataLoaded: false
    });
    

    useEffect(() => {
        dispatch(CLIENTELE_ACTIONS.fetch_meta_details(1));
    }, []);

    const { processing, error, errors, message, details, redirectTo } = useSelector(state => {
        return {
            processing: state.Clienteles_Reducers.processing,
            error: state.Clienteles_Reducers.error,
            errors: state.Clienteles_Reducers.errors,
            message: state.Clienteles_Reducers.message,
            details: state.Clienteles_Reducers.metaDetails,
            redirectTo: state.Clienteles_Reducers.redirectTo
        }
    });

    useEffect(() => {

        if (details.title && !pageForm.dataLoaded) {
            setPageForm({
                ...pageForm,
                id: details.id,
                banner: details.banner,
                title: details.title,
                slug: details.slug,
                meta_title: details.meta_title,
                meta_keywords: details.meta_keywords,
                meta_description: details.meta_description,
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

    const inputBannerFileChangeHandler = (e) => {
        let file = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onloadend = function (e) {
            setPageForm({
                ...pageForm,
                bannerFile: null,
                banner: reader.result,
                bannerError: ""
            });
        }.bind(this);
    }

    const resetInputBannerFileChangeHandler = (e) => {
        inputBannerFile.current.value = null;
        setPageForm({
            ...pageForm,
            bannerFile: null,
            banner: null,
            bannerError: ""
        });
    }

    const resetForm = (e) => {
        setPageForm({
            ...pageForm,
            title: "",
            titleError: "",
            slug: "",
            slugError: "",
            bannerFile: null,
            banner: null,
            bannerError: "",
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
        inputBannerFile.current.value = null;
        dispatch(CLIENTELE_ACTIONS.fetch_meta_details(1));
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
        if (pageFormFields.slug === "") {
            errorFound = true;
            pageFormFields.slugError = 'this field is required!';
        } else {
            pageFormFields.slugError = '';
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

            if (inputBannerFile.current.files.length === 0) {
                pageFormFields.bannerFile = null;
            } else {
                pageFormFields.bannerFile = inputBannerFile.current.files[0];
            }
            dispatch(CLIENTELE_ACTIONS.fetch_meta_update(pageFormFields));//add_upcoming_event
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

            <Typography
                sx={{ display: 'flex', alignItems: 'center' }}
                color="text.primary"
            >
                <EditOutlinedIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                Clientele Page Meta Details Edit
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
                        <Grid item xs={12} sm={12} sx={{ mt: 2 }}>
                            <Typography component="h1" variant="body2">
                                Banner
                            </Typography>

                            <input accept="image/*" id="contained-button-file" type="file" ref={inputBannerFile} onChange={(e) => inputBannerFileChangeHandler(e)} style={{ display: "none" }} />
                            {
                                pageForm.banner ? <Badge badgeContent={<CancelOutlinedIcon />} color="error" onClick={(e) => resetInputBannerFileChangeHandler(e)}>
                                    <img src={pageForm.banner} alt={""} style={{ width: "100%", height: "150px" }} onClick={() => inputBannerFile.current.click()} />
                                </Badge> :
                                    <img src={CONSTANTS.NO_IMAGE_BANNER_FOUND} alt={""} style={{ width: "130px", height: "130px" }} onClick={() => inputBannerFile.current.click()} />
                            }
                            <p className="Mui-error MuiFormHelperText-sizeNormal MuiFormHelperText-contained MuiFormHelperText-filled Mui-required css-1wc848c-MuiFormHelperText-root">{pageForm.bannerError}</p>

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
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                margin="normal"
                                size="small"
                                required
                                fullWidth
                                id="slug"
                                label="Slug"
                                name="slug"
                                autoComplete="slug"
                                value={pageForm.slug}
                                onChange={(e) => setPageForm({ ...pageForm, slug: e.currentTarget.value, slugError: '' })}
                                error={pageForm.slugError ? true : false}
                                helperText={pageForm.slugError}
                            />
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

export default ClienteleMetaEdit;