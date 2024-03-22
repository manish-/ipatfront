import React, { Fragment, useEffect } from 'react';
import Helmet from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as PAGES_ACTIONS from '../actions/user/pagesActions';
import { render_inner_html } from '../utils/html_util';

const CareersTemplate = (props) => {
    const currentURL = window.location.href;
    const dispatch = useDispatch();

    const { processing, list, details, error, errors, message } = useSelector(state => {
        return {
            processing: state.Pages_Reducers.faqs.list.processing,
            list: state.Pages_Reducers.faqs.list.list,
            details: state.Pages_Reducers.faqs.meta_details.details,
            error: state.Pages_Reducers.faqs.list.error,
            errors: state.Pages_Reducers.faqs.list.errors,
            message: state.Pages_Reducers.faqs.list.message

        }
    });

    useEffect(() => {
        // dispatch(PAGES_ACTIONS.fetch_careers_page_details(props.slug));
        dispatch(PAGES_ACTIONS.fetch_faqs_page_meta_details());
        dispatch(PAGES_ACTIONS.fetch_faqs_list({}));
    }, [props.slug]);

    useEffect(() => {
        // window.AOS.init({
        //     duration: 500
        // });
    }, [details.content]);


    return (
        <Fragment>

            {
                processing ? "" :

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

                                <div className="faq-page" id="faq-page">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-12 p-3">
                                                <div className="accordion" id="faq">
                                                    {
                                                        list.map((row, index) => {
                                                            return <div className="card" key={"faq-" + index + 1} >

                                                                <div className="card-header" id={`faqhead${index + 1}`}>
                                                                    <a href="#" className={`btn btn-header-link ${index == 0 ? "" : "collapsed"}`} data-toggle="collapse" data-target={`#faq${index + 1}`} aria-expanded={index == 0 ? "true" : "false"} aria-controls={`faq${index + 1}`}><strong>Question {index + 1} :</strong> {row.ques}</a>
                                                                </div>
                                                                <div id={`faq${index + 1}`} className={`collapse ${index == 0 ? "show" : ""}`} aria-labelledby={`faqhead${index + 1}`} data-parent="#faq">
                                                                    <div className="card-body">
                                                                        <p><strong>Answer</strong>
                                                                        </p>
                                                                        <div dangerouslySetInnerHTML={render_inner_html(row.answer)}>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </div>

                                                        })
                                                    }
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

export default CareersTemplate;