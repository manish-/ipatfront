import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from 'react-router-dom';
import * as APP_CONSTANTS from "../constants/Constants";
import * as PAGES_ACTIONS from "../actions/user/pagesActions";
import { render_inner_html } from '../utils/html_util';
import SeminarsRightBar from '../components/user/SeminarsRightBar';
import { Helmet } from 'react-helmet';

const SeminarsDetails = (props) => {
    const currentURL = window.location.href;
    const { slug } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(PAGES_ACTIONS.fetch_seminars_details(slug));
    }, [slug]);

    let { details, processing, error, errors } = useSelector(state => {
        return {
            details: state.Pages_Reducers.seminars.details.details,
            processing: state.Pages_Reducers.seminars.details.processing,
            error: state.Pages_Reducers.seminars.details.error,
            errors: state.Pages_Reducers.seminars.details.errors,
        }
    });

    return <Fragment>
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
                            <h1>{details.title}</h1>
                            <ol className="breadcrumb">
                                <li><Link to="/">Home</Link></li>
                                <li>/</li>
                                <li className="active">Seminar/Conference</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="news-dt">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="new-dt-in">
                            <div className="new-dt-img">
                                <img src={details.thumbnail} alt={details.title ? details.title : "-----"} />
                            </div>
                            <h3>{details.title}</h3>
                            <div className="new-dt-con" dangerouslySetInnerHTML={render_inner_html(details.content)}>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <SeminarsRightBar details={details} />
                    </div>
                </div>
            </div>
        </div>


    </Fragment>


}

export default SeminarsDetails;