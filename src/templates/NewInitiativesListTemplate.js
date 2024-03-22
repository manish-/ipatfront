import React, { Fragment, useEffect } from 'react';
import Helmet from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as PAGES_ACTIONS from '../actions/user/pagesActions';
import { render_inner_html } from '../utils/html_util';
import API from '../constants/API_Constants';
import { BASE_URL } from '../constants/Constants';

const fadeArr = ["fade-up-right", "fade-left", "fade-right", "fade-down", "fade-up"];

const NewInitiativesListTemplate = (props) => {
    const currentURL = window.location.href;
    const dispatch = useDispatch();



    const { details, processing, list, error, errors, message } = useSelector(state => {
        console.log("state.Pages_Reducers", state.Pages_Reducers.new_initiative);
        return {
            processing: state.Pages_Reducers.new_initiative.list.processing,
            list: state.Pages_Reducers.new_initiative.list.list,
            error: state.Pages_Reducers.new_initiative.list.error,
            errors: state.Pages_Reducers.new_initiative.list.errors,
            message: state.Pages_Reducers.new_initiative.list.message,
            details: state.Pages_Reducers.new_initiative.meta_details.details

        }
    });
    const getRandomAOS = () => {
        let num = Math.floor((Math.random() * (fadeArr.length - 1)) + 1);
        return fadeArr[num];
    }

    useEffect(() => {
        dispatch(PAGES_ACTIONS.fetch_new_initialtive_list({ status: "active" }));
        dispatch(PAGES_ACTIONS.fetch_new_initialtive_meta_details({}));
    }, []);

    useEffect(() => {
        window.AOS.init({
            duration: 500
        });
    }, [list.length]);
    // console.log("details", details);

    let banner = details.banner ? details.banner : `${BASE_URL}/uploads/1648213328973-391623050.jpg`;
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
                                <div className="bread-sec nvd" style={{ backgroundImage: `url(${details.banner})` }}>
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
                                    list.length === 0 ? "" :

                                        <div className="service-lst">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        {/* <h3>Our Services</h3> */}
                                                        <ul>
                                                            {
                                                                list.map((row, index) => {
                                                                    return <li key={`service-${index}`} data-aos={getRandomAOS()}><Link to={`/${props.slug}/${row.slug}`}>{row.title}</Link></li>
                                                                })
                                                            }

                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                }
                            </Fragment>
                    )
            }
        </Fragment>
    )
}

export default NewInitiativesListTemplate;