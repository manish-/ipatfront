import React, { Fragment, useRef, useState, useEffect } from "react";
import * as BANNERS_ACTIONS from '../../../actions/admin/bannersActions';
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


const BannerAdd = (props) => {

    const dispatch = useDispatch();
    const inputBannerFile = useRef(null);

    const [pageForm, setPageForm] = useState({
        heading1: "",
        heading1Error: "",
        heading2: "",
        heading2Error: "",
        heading3: "",
        heading3Error: "",
        link_slug: "",
        link_slugError: "",
        link_title: "",
        link_titleError: "",
        bannerFile: null,
        banner: null,
        bannerError: "",
        status: "active",
        statusError: "",
        dataLoaded: false
    });

    const { processing, error, errors, message, details, redirectTo } = useSelector(state => {
        return {
            processing: state.Banners_Reducers.processing,
            error: state.Banners_Reducers.error,
            errors: state.Banners_Reducers.errors,
            message: state.Banners_Reducers.message,
            details: state.Banners_Reducers.details,
            redirectTo: state.Banners_Reducers.redirectTo
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

    const inputBannerFileChangeHandler = (e) => {
        let file = e.target.files[0];
        let reader = new FileReader();
        let url = reader.readAsDataURL(file);

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
            heading1: "",
            heading1Error: "",
            heading2: "",
            heading2Error: "",
            heading3: "",
            heading3Error: "",
            link_slug: "",
            link_slugError: "",
            link_title: "",
            link_titleError: "",
            bannerFile: null,
            banner: null,
            bannerError: "",
            status: "active",
            statusError: "",
        });
        inputBannerFile.current.value = null;
    }
    const submitForm = (e) => {
        let errorFound = false;
        let pageFormFields = { ...pageForm };

        if (pageFormFields.link_slug && (pageFormFields.link_title === "" || pageFormFields.link_title === null)) {
            errorFound = true;
            pageFormFields.link_titleError = 'this field is required!';
        } else {
            pageFormFields.link_titleError = '';
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

            dispatch(BANNERS_ACTIONS.fetch_add(pageFormFields));//add_upcoming_event
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
                to="/admin/banner/list"
            >
                <EventNoteOutlinedIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                Banner List
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
            <Paper elevation={3}>
                <Box component="form" noValidate sx={{ mt: 2, mx: 2, }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={8} sx={{ mt: 2 }}>
                            <Typography component="h1" variant="body2">
                                Banner
                            </Typography>

                            <input accept="image/*" id="contained-button-file" type="file" ref={inputBannerFile} onChange={(e) => inputBannerFileChangeHandler(e)} style={{ display: "none" }} />
                            {
                                pageForm.banner ? <Badge badgeContent={<CancelOutlinedIcon />} color="error" onClick={(e) => resetInputBannerFileChangeHandler(e)}>
                                    <img src={pageForm.banner} alt={""} style={{ width: "100%", height: "150px" }} onClick={() => inputBannerFile.current.click()} />
                                </Badge> :
                                    <img src={process.env.PUBLIC_URL + CONSTANTS.NO_IMAGE_BANNER_FOUND} alt={""} style={{ width: "130px", height: "130px" }} onClick={() => inputBannerFile.current.click()} />
                            }
                            <p className="Mui-error MuiFormHelperText-sizeNormal MuiFormHelperText-contained MuiFormHelperText-filled Mui-required css-1wc848c-MuiFormHelperText-root">{pageForm.bannerError}</p>

                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                margin="normal"
                                size="small"

                                fullWidth
                                id="heading1"
                                label="Heading 1"
                                name="heading1"
                                autoComplete="heading1"
                                value={pageForm.heading1}
                                onChange={(e) => setPageForm({ ...pageForm, heading1: e.currentTarget.value, heading1Error: '' })}
                                error={pageForm.heading1Error ? true : false}
                                helperText={pageForm.heading1Error}
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                margin="normal"
                                size="small"

                                fullWidth
                                id="heading2"
                                label="Heading 2"
                                name="heading2"
                                autoComplete="heading2"
                                value={pageForm.heading2}
                                onChange={(e) => setPageForm({ ...pageForm, heading2: e.currentTarget.value, heading2Error: '' })}
                                error={pageForm.heading2Error ? true : false}
                                helperText={pageForm.heading2Error}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                margin="normal"
                                size="small"

                                fullWidth
                                id="heading3"
                                label="Heading 3"
                                name="heading3"
                                autoComplete="heading3"
                                value={pageForm.heading3}
                                onChange={(e) => setPageForm({ ...pageForm, heading3: e.currentTarget.value, heading3Error: '' })}
                                error={pageForm.heading3Error ? true : false}
                                helperText={pageForm.heading3Error}
                            />
                        </Grid>

                        <Grid item xs={12} sm={12}>
                            <TextField
                                margin="normal"
                                size="small"

                                fullWidth
                                id="link_slug"
                                label="Redirect to URL"
                                name="link_slug"
                                autoComplete="link_slug"
                                value={pageForm.link_slug}
                                onChange={(e) => setPageForm({ ...pageForm, link_slug: e.currentTarget.value, link_slugError: '' })}
                                error={pageForm.link_slugError ? true : false}
                                helperText={pageForm.link_slugError}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                margin="normal"
                                size="small"

                                fullWidth
                                id="link_title"
                                label="Redirect to URL Button Title"
                                name="link_title"
                                autoComplete="link_title"
                                value={pageForm.link_title}
                                onChange={(e) => setPageForm({ ...pageForm, link_title: e.currentTarget.value, link_titleError: '' })}
                                error={pageForm.link_titleError ? true : false}
                                helperText={pageForm.link_titleError}
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
                                            status: newValue.target.value,
                                            statusError: ""
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

export default BannerAdd;