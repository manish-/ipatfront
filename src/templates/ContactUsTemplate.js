import React, { Fragment, useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import * as PAGES_ACTIONS from '../actions/user/pagesActions';
import * as CONTACT_US_ACTIONS from '../actions/user/contactUsActions';
import { render_inner_html } from '../utils/html_util';
import AddressGrid from '../components/user/AddressGrid';
import REGX from '../constants/Regx';

const ContactUsTemplate = (props) => {
    const currentURL = window.location.href;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { processing, details, error, errors, message } = useSelector(state => {
        return {
            processing: state.Pages_Reducers.contact.details.processing,
            details: state.Pages_Reducers.contact.details.details,
            error: state.Pages_Reducers.contact.details.error,
            errors: state.Pages_Reducers.contact.details.errors,
            message: state.Pages_Reducers.contact.details.message

        }
    });

    const { formProcessing, formReload, formError, formErrors, formMessage } = useSelector(state => {
        return {
            formProcessing: state.Pages_Reducers.contact.apply.processing,
            formReload: state.Pages_Reducers.contact.apply.reload,
            formError: state.Pages_Reducers.contact.apply.error,
            formErrors: state.Pages_Reducers.contact.apply.errors,
            formMessage: state.Pages_Reducers.contact.apply.message

        }
    });

    useEffect(() => {
        dispatch(PAGES_ACTIONS.fetch_contact_page_details(props.slug));
    }, [props.slug]);

    const [formData, setFormData] = useState({
        firstName: '',
        firstNameError: '',
        lastName: '',
        lastNameError: '',
        email: "",
        emailError: "",
        mobile: "",
        mobileError: "",
        company: "",
        companyError: "",
        website: "",
        websiteError: "",
        message: "",
        messageError: ""
    })

    const handleOnChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        let errorFound = false;
        let formDataFields = { ...formData };

        if (!formDataFields.firstName) {
            errorFound = true;
            formDataFields.firstNameError = 'this field is required!';
        } else if (!REGX.FIRST_NAME.test(formDataFields.firstName)) {
            errorFound = true;
            formDataFields.firstNameError = "alphabate only without white-space!";
        } else {
            formDataFields.firstNameError = '';
        }
        if (formDataFields.lastName && !REGX.LAST_NAME.test(formDataFields.lastName)) {
            errorFound = true;
            formDataFields.lastNameError = "alphabate only without white-space!";
        } else {
            formDataFields.lastNameError = "";
        }
        if (!formDataFields.email) {
            errorFound = true;
            formDataFields.emailError = 'this field is required!';
        } else if (!REGX.EMAIL.test(formDataFields.email)) {
            errorFound = true;
            formDataFields.emailError = "provide a valid email!";
        } else {
            formDataFields.emailError = '';
        }
        if (!formDataFields.mobile) {
            errorFound = true;
            formDataFields.mobileError = 'this field is required!';
        } else if (!REGX.MOBILE_NUMBER.test(formDataFields.mobile)) {
            errorFound = true;
            formDataFields.mobileError = "provide 10 digit phone number!";
        } else {
            formDataFields.mobileError = '';
        }
        if (!formDataFields.company) {
            errorFound = true;
            formDataFields.companyError = 'this field is required!';
        } else {
            formDataFields.companyError = '';
        }
        if (!formDataFields.website) {
            errorFound = true;
            formDataFields.websiteError = 'this field is required!';
        } else if (!REGX.URL_DOMAIN.test(formDataFields.website)) {
            errorFound = true;
            formDataFields.websiteError = "provide a valid url!";
        } else {
            formDataFields.websiteError = '';
        }
        if (!formDataFields.message) {
            errorFound = true;
            formDataFields.messageError = 'this field is required!';
        } else {
            formDataFields.messageError = '';
        }

        setFormData({
            ...formDataFields
        });

        if (!errorFound) {
            dispatch(CONTACT_US_ACTIONS.save_contact_us_form_query(formDataFields));
        } else {
            //console.log("formDataFields",formDataFields);
        }
    }

    useEffect(() => {

        if (formReload === true) {
            setFormData({
                firstName: '',
                firstNameError: '',
                lastName: '',
                lastNameError: '',
                email: "",
                emailError: "",
                mobile: "",
                mobileError: "",
                company: "",
                companyError: "",
                website: "",
                websiteError: "",
                message: "",
                messageError: ""
            });
            // navigate('/thank-you');
        }
    }, [formReload]);

    useEffect(() => {
        window.AOS.init({
            duration: 500
        });
    }, [details.content]);

    // console.log(details);
    return (
        <Fragment>
            {
                (formProcessing || processing) ? "" :

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


                                <div className="contact-page">
                                    <div className="container">
                                        {
                                            details.content ?
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="cont-h">
                                                            <h2 className='mb-4'>Contact Us</h2>
                                                            {/* <div dangerouslySetInnerHTML={render_inner_html(details.content)}>
                                                            </div> */}
                                                        </div>
                                                    </div>
                                                </div>

                                                : ""}
                                        <div className="row">
                                            <div className="col-md-7" data-aos="fade-up-right">
                                                <div className="con-form">
                                                    <form onSubmit={e => handleOnSubmit(e)}>
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <div className="form-group">
                                                                    <label>First Name</label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        placeholder="Enter Name"
                                                                        name='firstName'
                                                                        value={formData.firstName}
                                                                        onChange={e => handleOnChange(e)}
                                                                    />
                                                                    <span className='text-danger error'>{formData.firstNameError}</span>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="form-group">
                                                                    <label>Last Name</label>
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
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="form-group">
                                                                    <label>Company</label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        placeholder="Enter Company"
                                                                        name='company'
                                                                        value={formData.company}
                                                                        onChange={e => handleOnChange(e)}
                                                                    />
                                                                    <span className='text-danger error'>{formData.companyError}</span>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="form-group">
                                                                    <label>Email</label>
                                                                    <input
                                                                        type="email"
                                                                        className="form-control"
                                                                        placeholder="Enter Email"
                                                                        name='email'
                                                                        value={formData.email}
                                                                        onChange={e => handleOnChange(e)}
                                                                    />
                                                                    <span className='text-danger error'>{formData.emailError}</span>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="form-group">
                                                                    <label>Website</label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        placeholder="Enter Website (without http:// or https://)"
                                                                        name='website'
                                                                        value={formData.website}
                                                                        onChange={e => handleOnChange(e)}
                                                                    />
                                                                    <span className='text-danger error'>{formData.websiteError}</span>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="form-group">
                                                                    <label>Phone No</label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        placeholder="Phone No"
                                                                        name='mobile'
                                                                        value={formData.mobile}
                                                                        onChange={e => handleOnChange(e)}
                                                                    />
                                                                    <span className='text-danger error'>{formData.mobileError}</span>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-12">
                                                                <div className="form-group">
                                                                    <label>Your Message</label>
                                                                    <textarea
                                                                        className="form-control"
                                                                        rows="3"
                                                                        placeholder="Message"
                                                                        name='message'
                                                                        value={formData.message}
                                                                        onChange={e => handleOnChange(e)}
                                                                    ></textarea>
                                                                    <span className='text-danger error'>{formData.messageError}</span>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-12">
                                                                <button type="submit" className="btn btn-primary">Submit</button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                            <div className="col-md-5" data-aos="fade-down-left">
                                                <div className="con-form-img">
                                                    <img src={details.thumbnail} />
                                                </div>
                                            </div>
                                        </div>
                                        <AddressGrid />

                                    </div>
                                </div>

                            </Fragment>
                    )
            }
        </Fragment>
    )

}

export default ContactUsTemplate;