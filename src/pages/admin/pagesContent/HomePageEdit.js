import React, { Fragment, useRef, useState, useEffect } from "react";
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
import { useParams } from 'react-router-dom';

import SummerNoteEditor from '../../../components/admin/SummerNoteEditor';

const HomePageEdit = (props) => {


    const dispatch = useDispatch();
    const inputImage2File = useRef(null)
    const inputImage1File = useRef(null)

    const [pageForm, setPageForm] = useState({
        id: null,
        image1File: null,
        image1: null,
        image1Error: "",
        image2File: null,
        image2: null,
        image2Error: "",
        section1: "",
        section1Error: "",
        section2: "",
        section2Error: "",
        section3: "",
        section3Error: "",
        section4: "",
        section4Error: "",
        dataLoaded: false
    });

    const [pageSection1Content, setPageSection1Content] = useState('');
    const [pageSection2Content, setPageSection2Content] = useState('');
    const [pageSection3Content, setPageSection3Content] = useState('');
    const [pageSection4Content, setPageSection4Content] = useState('');


    useEffect(() => {
        dispatch(UTILS_ACTIONS.page_content('home'));
    }, []);

    const { processing, error, errors, message, details, redirectTo } = useSelector(state => {
        return {
            processing: state.Utils_Reducers.page_content.processing,
            error: state.Utils_Reducers.page_content.error,
            errors: state.Utils_Reducers.page_content.errors,
            message: state.Utils_Reducers.page_content.message,
            details: state.Utils_Reducers.page_content.details,
            redirectTo: state.Utils_Reducers.page_content.redirectTo
        }
    });

    useEffect(() => {

        if (details.id && !pageForm.dataLoaded) {
            setPageForm({
                ...pageForm,
                id: details.id,
                image1: details.image1,
                image2: details.image2,
                section1: details.section1,
                section2: details.section2,
                section3: details.section3,
                section4: details.section4,
                dataLoaded: true
            });
            setPageSection1Content(details.section1);
            setPageSection2Content(details.section2);
            setPageSection3Content(details.section3);
            setPageSection4Content(details.section4);
        }
        return () => {
            setPageForm({
                ...pageForm,
                dataLoaded: false
            });
        }
    }, [details.id]);

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

    const inputImage1FileChangeHandler = (e) => {
        let file = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onloadend = function (e) {
            setPageForm({
                ...pageForm,
                image1File: null,
                image1: reader.result,
                image1Error: ""
            });
        }.bind(this);
    }

    const resetInputImage1FileChangeHandler = (e) => {
        inputImage1File.current.value = null;
        setPageForm({
            ...pageForm,
            image1File: null,
            image1: null,
            image1Error: ""
        });
    }

    const inputImage2FileChangeHandler = (e) => {
        let file = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onloadend = function (e) {
            setPageForm({
                ...pageForm,
                image2File: null,
                image2: reader.result,
                image2Error: ""
            });
        }.bind(this);
    }

    const resetInputImage2FileChangeHandler = (e) => {
        inputImage2File.current.value = null;
        setPageForm({
            ...pageForm,
            image2File: null,
            image2: null,
            image2Error: ""
        });
    }

    const onPageSection1ContentChange = (e) => {
        setPageSection1Content(e);
    }
    const onPageSection2ContentChange = (e) => {
        setPageSection2Content(e);
    }
    const onPageSection3ContentChange = (e) => {
        setPageSection3Content(e);
    }
    const onPageSection4ContentChange = (e) => {
        setPageSection4Content(e);
    }

    const resetForm = (e) => {
        setPageForm({
            ...pageForm,
            image1File: null,
            image1: null,
            image1Error: "",
            image2File: null,
            image2: null,
            image2Error: "",
            section1: "",
            section1Error: "",
            section2: "",
            section2Error: "",
            section3: "",
            section3Error: "",
            section4: "",
            section4Error: "",
        });
        inputImage1File.current.value = null;
        inputImage2File.current.value = null;
        dispatch(UTILS_ACTIONS.page_content('home'));
    }

    const submitForm = (e) => {
        let errorFound = false;
        let pageFormFields = { ...pageForm };


        if (pageSection1Content === "" || pageSection1Content === null) {
            errorFound = true;
            pageFormFields.section1Error = 'this field is required!';
        } else {
            pageFormFields.section1 = pageSection1Content;
            pageFormFields.section1Error = '';
        }

        if (pageSection2Content === "" || pageSection2Content === null) {
            errorFound = true;
            pageFormFields.section2Error = 'this field is required!';
        } else {
            pageFormFields.section2 = pageSection2Content;
            pageFormFields.section2Error = '';
        }

        if (pageSection3Content === "" || pageSection3Content === null) {
            errorFound = true;
            pageFormFields.section3Error = 'this field is required!';
        } else {
            pageFormFields.section3 = pageSection3Content;
            pageFormFields.section3Error = '';
        }

        if (pageSection4Content === "" || pageSection4Content === null) {
            errorFound = true;
            pageFormFields.section4Error = 'this field is required!';
        } else {
            pageFormFields.section4 = pageSection4Content;
            pageFormFields.section4Error = '';
        }

        setPageForm({ ...pageFormFields });

        if (!errorFound) {

            // if (inputImage1File.current.files.length === 0) {
            //     pageFormFields.image1File = null;
            // } else {
            //     pageFormFields.image1File = inputImage1File.current.files[0];
            // }
            if (inputImage2File.current.files.length === 0) {
                pageFormFields.image2File = null;
            } else {
                pageFormFields.image2File = inputImage2File.current.files[0];
            }

            dispatch(UTILS_ACTIONS.page_content_update(pageFormFields));//add_upcoming_event
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
                Home Page Edit
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
                        <Grid item xs={12} sm={12} id="page_section1_content">
                            <Typography component="h1" variant="body2">
                                Section 1
                            </Typography>
                            <SummerNoteEditor pageContent={pageSection1Content} onContentChange={onPageSection1ContentChange} />
                            <FormHelperText className="Mui-error"> {pageForm.section1Error}</FormHelperText>
                        </Grid>
                        <Grid item xs={12} sm={12} id="page_section2_content">
                            <Typography component="h1" variant="body2">
                                Section 2
                            </Typography>
                            <SummerNoteEditor pageContent={pageSection2Content} onContentChange={onPageSection2ContentChange} />
                            <FormHelperText className="Mui-error"> {pageForm.section2Error}</FormHelperText>
                        </Grid>
                        <Grid item xs={12} sm={12} id="page_section3_content">
                            <Typography component="h1" variant="body2">
                                Section 3
                            </Typography>
                            <SummerNoteEditor pageContent={pageSection3Content} onContentChange={onPageSection3ContentChange} />
                            <FormHelperText className="Mui-error"> {pageForm.section3Error}</FormHelperText>
                        </Grid>
                        <Grid item xs={12} sm={12} id="page_section4_content">
                            <Typography component="h1" variant="body2">
                                Section 4
                            </Typography>
                            <SummerNoteEditor pageContent={pageSection4Content} onContentChange={onPageSection4ContentChange} />
                            <FormHelperText className="Mui-error"> {pageForm.section4Error}</FormHelperText>
                        </Grid>

                    </Grid>
                    <Grid container spacing={2}>
                        {/* <Grid item xs={12} sm={8} sx={{ mt: 2 }}>
                            <Typography component="h1" variant="body2">
                                image1
                            </Typography>

                            <input accept="image/*" id="contained-button-file" type="file" ref={inputimage1File} onChange={(e) => inputimage1FileChangeHandler(e)} style={{ display: "none" }} />
                            {
                                pageForm.image1 ? <Badge badgeContent={<CancelOutlinedIcon />} color="error" onClick={(e) => resetInputimage1FileChangeHandler(e)}>
                                    <img src={pageForm.image1} alt={""} style={{ width: "100%", height: "150px" }} onClick={() => inputimage1File.current.click()} />
                                </Badge> :
                                    <img src={CONSTANTS.NO_IMAGE_image1_FOUND} alt={""} style={{ width: "130px", height: "130px" }} onClick={() => inputimage1File.current.click()} />
                            }
                            <p className="Mui-error MuiFormHelperText-sizeNormal MuiFormHelperText-contained MuiFormHelperText-filled Mui-required css-1wc848c-MuiFormHelperText-root">{pageForm.image1Error}</p>

                        </Grid> */}
                        <Grid item xs={12} sm={4} sx={{ mt: 2 }}>
                            <Typography component="h1" variant="body2">
                                Image before Workshops, Seminars & Conferences
                            </Typography>

                            <input accept="image/*" id="contained-button-file" type="file" ref={inputImage2File} onChange={(e) => inputImage2FileChangeHandler(e)} style={{ display: "none" }} />
                            {
                                pageForm.image2 ? <Badge badgeContent={<CancelOutlinedIcon />} color="error" onClick={(e) => resetInputImage2FileChangeHandler(e)}>
                                    <img src={pageForm.image2} alt={""} style={{ width: "100%", height: "150px" }} onClick={() => inputImage2File.current.click()} />
                                </Badge> :
                                    <img src={CONSTANTS.NO_IMAGE_THUMBNAIL_FOUND} alt={""} style={{ width: "130px", height: "130px" }} onClick={() => inputImage2File.current.click()} />
                            }
                            <p className="Mui-error MuiFormHelperText-sizeNormal MuiFormHelperText-contained MuiFormHelperText-filled Mui-required css-1wc848c-MuiFormHelperText-root">{pageForm.image2Error}</p>

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

export default HomePageEdit;