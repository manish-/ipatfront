import React, { Fragment, useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import * as PAGES_ACTIONS from '../actions/user/pagesActions';
import { render_inner_html } from '../utils/html_util';

const CareersDetailsTemplate = (props) => {
    const currentURL = window.location.href;
    const { slug } = useParams();

    const dispatch = useDispatch();

    const { processing, details, error, errors, message } = useSelector(state => {
        return {
            processing: state.Pages_Reducers.careers.details.processing,
            details: state.Pages_Reducers.careers.details.details,
            error: state.Pages_Reducers.careers.details.error,
            errors: state.Pages_Reducers.careers.details.errors,
            message: state.Pages_Reducers.careers.details.message

        }
    });

    const { formProcessing, formReload, formError, formErrors, formMessage } = useSelector(state => {
        return {
            formProcessing: state.Pages_Reducers.careers.apply.processing,
            formReload: state.Pages_Reducers.careers.apply.reload,
            formError: state.Pages_Reducers.careers.apply.error,
            formErrors: state.Pages_Reducers.careers.apply.errors,
            formMessage: state.Pages_Reducers.careers.apply.message

        }
    });

    useEffect(() => {
        dispatch(PAGES_ACTIONS.fetch_careers_page_details(slug));
    }, [slug]);


    const [formData, setFormData] = useState({
        id: null,
        firstName: '',
        firstNameError: '',
        lastName: '',
        lastNameError: '',
        email: '',
        emailError: '',
        mobile: '',
        mobileError: '',
        currentCompany: '',
        currentCompanyError: '',
        designation: '',
        designationError: '',
        currentCTC: '',
        currentCTCError: '',
        experience: '',
        experienceError: ''
    });

    useEffect(() => {
        if (details.id) {
            setFormData({
                ...formData,
                id: details.id
            });
        }
        window.AOS.init({
            duration: 500
        });

    }, [details.id]);

    const handleOnChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value, [e.target.name + "Error"]: "" });
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        let errorFound = false;
        let formDataFields = { ...formData };

        if (!formDataFields.firstName) {
            errorFound = true;
            formDataFields.firstNameError = 'this field is required!';
        } else {
            formDataFields.firstNameError = '';
        }
        if (!formDataFields.email) {
            errorFound = true;
            formDataFields.emailError = 'this field is required!';
        } else {
            formDataFields.emailError = '';
        }
        if (!formDataFields.mobile) {
            errorFound = true;
            formDataFields.mobileError = 'this field is required!';
        } else {
            formDataFields.mobileError = '';
        }
        if (!formDataFields.currentCompany) {
            errorFound = true;
            formDataFields.currentCompanyError = 'this field is required!';
        } else {
            formDataFields.currentCompanyError = '';
        }
        if (!formDataFields.designation) {
            errorFound = true;
            formDataFields.designationError = 'this field is required!';
        } else {
            formDataFields.designationError = '';
        }
        if (!formDataFields.currentCTC) {
            errorFound = true;
            formDataFields.currentCTCError = 'this field is required!';
        } else {
            formDataFields.currentCTCError = '';
        }
        if (!formDataFields.experience) {
            errorFound = true;
            formDataFields.experienceError = 'this field is required!';
        } else {
            formDataFields.experienceError = '';
        }

        setFormData({
            ...formDataFields
        });

        if (!errorFound) {
            dispatch(PAGES_ACTIONS.apply_for_career(formDataFields));
        }
    }

    useEffect(() => {

        if (formReload === true) {
            setFormData({
                ...formData,
                firstName: '',
                firstNameError: '',
                lastName: '',
                lastNameError: '',
                email: '',
                emailError: '',
                mobile: '',
                mobileError: '',
                currentCompany: '',
                currentCompanyError: '',
                designation: '',
                designationError: '',
                currentCTC: '',
                currentCTCError: '',
                experience: '',
                experienceError: ''
            });
        }
    }, [formReload]);

    return (
        <Fragment>

            {
                (formProcessing || processing) ? <h1>Loading</h1> :

                    (
                        error ? <p className='btn btn-danger'>{message}</p> :

                            <Fragment>
                                <Helmet>
                                    <title>{details.meta_title ? details.meta_title : "----"}</title>
                                    <meta name="description" content={details.meta_description ? details.meta_description : ''} />
                                    <meta name="keywords" content={details.meta_keywords ? details.meta_keywords : ''} />
                                    <link rel="canonical" href={`${currentURL}`} />
                                </Helmet>
                                <div className="bread-sec" style={{ backgroundImage: `url(${details.banner})` }}>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="head-bread">
                                                    <h1>{details.title ? details.title : "----"}</h1>
                                                    <ol className="breadcrumb">
                                                        <li><Link to={"/"}>Home</Link></li>
                                                        <li>/</li>
                                                        <li className="active">{details.title ? details.title : "----"}</li>
                                                    </ol>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="career-page">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-8" data-aos="fade-right">
                                                <div className="career-page-in">
                                                    <h3>{details.title}</h3>
                                                    <p>Location: {details.location}</p>
                                                    <div dangerouslySetInnerHTML={render_inner_html(details.content)}>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4" data-aos="fade-left">
                                                <div className="career-form">
                                                    <form onSubmit={(e) => handleOnSubmit(e)}>
                                                        <div className="form-group">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="First Name"
                                                                name="firstName"
                                                                value={formData.firstName}
                                                                onChange={e => handleOnChange(e)}
                                                            />
                                                            <span className='text-danger error'>{formData.firstNameError}</span>
                                                        </div>
                                                        <div className="form-group">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Last Name"
                                                                name='lastName'
                                                                value={formData.lastName}
                                                                onChange={e => handleOnChange(e)}
                                                            />
                                                            <span className='text-danger error'>{formData.lastNameError}</span>
                                                        </div>
                                                        <div className="form-group">
                                                            <input
                                                                type="email"
                                                                className="form-control"
                                                                placeholder="Email"
                                                                name='email'
                                                                value={formData.email}
                                                                onChange={e => handleOnChange(e)}
                                                            />
                                                            <span className='text-danger error'>{formData.emailError}</span>
                                                        </div>
                                                        <div className="form-group">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Mobile"
                                                                name='mobile'
                                                                value={formData.mobile}
                                                                onChange={e => handleOnChange(e)}
                                                            />
                                                            <span className='text-danger error'>{formData.mobileError}</span>
                                                        </div>
                                                        <div className="form-group">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Current Company"
                                                                name='currentCompany'
                                                                value={formData.currentCompany}
                                                                onChange={e => handleOnChange(e)}
                                                            />
                                                            <span className='text-danger error'>{formData.currentCompanyError}</span>
                                                        </div>
                                                        <div className="form-group">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Designation"
                                                                name='designation'
                                                                value={formData.designation}
                                                                onChange={e => handleOnChange(e)}
                                                            />
                                                            <span className='text-danger error'>{formData.designationError}</span>
                                                        </div>
                                                        <div className="form-group">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Current CTC"
                                                                name='currentCTC'
                                                                value={formData.currentCTC}
                                                                onChange={e => handleOnChange(e)}
                                                            />
                                                            <span className='text-danger error'>{formData.currentCTCError}</span>
                                                        </div>
                                                        <div className="form-group">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Experience"
                                                                name='experience'
                                                                value={formData.experience}
                                                                onChange={e => handleOnChange(e)}
                                                            />
                                                            <span className='text-danger error'>{formData.experienceError}</span>
                                                        </div>
                                                        <button type="submit" className="btn btn-primary">Apply Now</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </Fragment>
                    )
            }
        </Fragment>
    )

}

export default CareersDetailsTemplate;