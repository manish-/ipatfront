import React, { Fragment, useEffect } from 'react';
import Helmet from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as PAGES_ACTIONS from '../actions/user/pagesActions';
import { render_inner_html } from '../utils/html_util';

const AboutUsTemplate = (props) => {
    const currentURL = window.location.href;
    const dispatch = useDispatch();


    const { processing, details, error, errors, message } = useSelector(state => {
        return {
            processing: state.Pages_Reducers.about_us.processing,
            details: state.Pages_Reducers.about_us.details,
            error: state.Pages_Reducers.about_us.error,
            errors: state.Pages_Reducers.about_us.errors,
            message: state.Pages_Reducers.about_us.message

        }
    });

    useEffect(() => {
        dispatch(PAGES_ACTIONS.fetch_about_us_page_content(props.slug));
    }, [props.slug]);

    useEffect(() => {
        window.AOS.init({
            duration: 500
        });
    }, [details.content]);

    // console.log("details", details);

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
                                {
                                    details.has_children ?

                                        <div className="tab-right py-5">
                                            <div className="container py-4">
                                                <div className="row">

                                                    <div className="col-md-3" data-aos="fade-right">

                                                        <div className="nav flex-column nav-pills nav-pills-custom" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                                            {
                                                                (details && details.children && details.children.length > 0) ? (
                                                                    details.children.map((children, index) => {
                                                                        return <a key={`tab-${index}`} className={`nav-link mb-3 p-3 shadow ${index === 0 ? "active" : ""}`} id={`v-pills-${children.id}-tab`} data-toggle="pill" href={`#v-pills-${children.id}`} role="tab" aria-controls={`v-pills-${children.id}`} aria-selected="true">
                                                                            {children.icon && <i className={`${children.icon} mr-2`}></i>}

                                                                            <span className="font-weight-bold small text-uppercase">{children.title || "N/A"}</span></a>
                                                                    })
                                                                ) : ""
                                                            }
                                                        </div>
                                                    </div>

                                                    <div className="col-md-9" data-aos="fade-left">

                                                        <div className="tab-content" id="v-pills-tabContent">

                                                            {
                                                                (details && details.children && details.children.length > 0) ? (
                                                                    details.children.map((children, index) => {
                                                                        return <div key={`tab-content-${index}`} className={`tab-pane fade shadow rounded bg-white show p-4 ${index === 0 ? "active" : ""}`} id={`v-pills-${children.id}`} role="tabpanel" aria-labelledby={`v-pills-${children.id}-tab`} dangerouslySetInnerHTML={render_inner_html(children.content)}>

                                                                        </div>
                                                                    })
                                                                ) : ""
                                                            }

                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                        : <div dangerouslySetInnerHTML={render_inner_html(details.content)}>

                                        </div>

                                }

                            </Fragment>
                    )
            }
        </Fragment>
    )
}

export default AboutUsTemplate;