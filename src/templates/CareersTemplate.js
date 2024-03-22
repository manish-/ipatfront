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
            processing: state.Pages_Reducers.careers.list.processing,
            list: state.Pages_Reducers.careers.list.list,
            details: state.Pages_Reducers.careers.meta_details.details,
            error: state.Pages_Reducers.careers.list.error,
            errors: state.Pages_Reducers.careers.list.errors,
            message: state.Pages_Reducers.careers.list.message

        }
    });

    useEffect(() => {
        // dispatch(PAGES_ACTIONS.fetch_careers_page_details(props.slug));
        dispatch(PAGES_ACTIONS.fetch_careers_page_meta_details());
        dispatch(PAGES_ACTIONS.fetch_careers_page_list({}));
    }, [props.slug]);

    useEffect(() => {
        window.AOS.init({
            duration: 500
        });
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

                                <div className="career-page">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <h2>Want to be a GRCian</h2>
                                                <p>Join our technical team and work for saving the environment</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            {
                                                list.map((row, index) => {
                                                    return <div className="col-md-6" key={"career-item-" + index} data-aos="fade-down">
                                                        <div className="career-box">
                                                            <h3>{row.title}</h3>
                                                            <div className="career-box-con">
                                                                <h6>Location: {row.location}</h6>
                                                                <div dangerouslySetInnerHTML={render_inner_html(row.short_content)}>
                                                                </div>
                                                            </div>
                                                            <div className="career-box-btn">
                                                                <Link to={`/${props.slug}/${row.slug}`}>View Details</Link>
                                                            </div>
                                                        </div>
                                                    </div>

                                                })
                                            }
                                            {
                                                list.length == 0 ? <div className="col-md-12"><p className='text-light bg-danger p-2'>0 record founds</p></div> : ""
                                            }
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