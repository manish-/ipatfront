import React, { Fragment, useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as PAGES_ACTIONS from '../actions/user/pagesActions';
import { render_inner_html } from '../utils/html_util';

const NewInitiativesTemplate = (props) => {
    const currentURL = window.location.href;
    const dispatch = useDispatch();

    const { processing, details, error, errors, message } = useSelector(state => {

        return {
            processing: state.Pages_Reducers.new_initiative.processing,
            details: state.Pages_Reducers.new_initiative.details.details,
            error: state.Pages_Reducers.new_initiative.error,
            errors: state.Pages_Reducers.new_initiative.errors,
            message: state.Pages_Reducers.new_initiative.message
        }
    });

    useEffect(() => {
        // console.log(props);
        dispatch(PAGES_ACTIONS.fetch_new_initialtive_details(props.slug));
    }, [props.slug]);


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
                                <div dangerouslySetInnerHTML={render_inner_html(details.content)}></div>
                            </Fragment>
                    )
            }
        </Fragment>
    )

}

export default NewInitiativesTemplate;