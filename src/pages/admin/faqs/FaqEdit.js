import React, { Fragment, useRef, useState, useEffect } from "react";
import * as FAQS_ACTIONS from '../../../actions/admin/faqsActions';
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

const FaqEdit = (props) => {
    const { id } = useParams();

    const dispatch = useDispatch();

    const [pageForm, setPageForm] = useState({
        id: null,
        question: "",
        questionError: "",
        answer: "",
        answerError: "",
        status: "active",
        statusError: "",
        dataLoaded: false
    });

    const [pageContent, setPageContent] = useState('');

    useEffect(() => {
        dispatch(FAQS_ACTIONS.fetch_details(id));
    }, [id]);

    const { processing, error, errors, message, details, redirectTo } = useSelector(state => {
        return {
            processing: state.Faqs_Reducers.processing,
            error: state.Faqs_Reducers.error,
            errors: state.Faqs_Reducers.errors,
            message: state.Faqs_Reducers.message,
            details: state.Faqs_Reducers.details,
            redirectTo: state.Faqs_Reducers.redirectTo
        }
    });

    useEffect(() => {

        if (details.id && !pageForm.dataLoaded) {
            // console.log("details", details);
            setPageForm({
                ...pageForm,
                id: details.id,
                question: details.ques,
                answer: details.answer,
                status: details.status,
                dataLoaded: true
            });
            setPageContent(details.answer);
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

    const onContentChange = (e) => {
        if (e != pageContent) {
            setPageContent(e);
        }
    }

    const resetForm = (e) => {
        setPageForm({
            ...pageForm,
            question: "",
            questionError: "",
            answer: "",
            answerError: "",
            status: "active",
            statusError: "",
            dataLoaded: false
        });
        setPageContent('<p></p>');
        dispatch(FAQS_ACTIONS.fetch_details(id));
    }

    const submitForm = (e) => {
        let errorFound = false;
        let pageFormFields = { ...pageForm };

        if (pageFormFields.question === "") {
            errorFound = true;
            pageFormFields.questionError = 'this field is required!';
        } else {
            pageFormFields.questionError = '';
        }

        if (pageContent === "" || pageContent === null) {
            errorFound = true;
            pageFormFields.answerError = 'this field is required!';
        } else {
            pageFormFields.answer = pageContent;
            pageFormFields.answerError = '';
        }

        if (pageFormFields.status === "" || pageFormFields.status === null || pageFormFields.status === "-1") {
            errorFound = true;
            pageFormFields.statusError = 'this field is required!';
        } else {
            pageFormFields.statusError = '';
        }

        setPageForm({ ...pageFormFields });

        if (!errorFound) {

            dispatch(FAQS_ACTIONS.fetch_update(pageFormFields));//add_upcoming_event
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
                to="/admin/faqs/list"
            >
                <EventNoteOutlinedIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                FAQs List
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
                                id="question"
                                label="Question"
                                name="question"
                                autoComplete="question"
                                value={pageForm.question}
                                onChange={(e) => setPageForm({ ...pageForm, question: e.currentTarget.value, questionError: '' })}
                                error={pageForm.questionError ? true : false}
                                helperText={pageForm.questionError}
                                autoFocus
                            />
                        </Grid>


                        <Grid item xs={12} sm={12} id="page_content">
                            <Typography component="h1" variant="body2">
                                Answer
                            </Typography>
                            <SummerNoteEditor pageContent={pageContent} onContentChange={onContentChange} />
                            <FormHelperText className="Mui-error"> {pageForm.contentError}</FormHelperText>
                        </Grid>

                        <Grid item xs={12} sm={3}>
                            <FormControl sx={{ minWidth: "100%" }} error={pageForm.statusError ? true : false}>
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

export default FaqEdit;