import React, { Fragment, useEffect } from 'react';
import Helmet from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as PAGES_ACTIONS from '../actions/user/pagesActions';
import { render_inner_html } from '../utils/html_util';
import API from '../constants/API_Constants';
import {BASE_URL} from '../constants/Constants';

const fadeArr = ["fade-up-right", "fade-left", "fade-right", "fade-down", "fade-up"];

const ProjectListTemplate = (props) => {

    const dispatch = useDispatch();



    const { details, processing, list, error, errors, message } = useSelector(state => {
        console.log("state.Pages_Reducers", state.Pages_Reducers.projects.sectors);
        return {
            processing: state.Pages_Reducers.projects.sectors.processing,
            list: state.Pages_Reducers.projects.sectors.list,
            error: state.Pages_Reducers.projects.sectors.error,
            errors: state.Pages_Reducers.projects.sectors.errors,
            message: state.Pages_Reducers.projects.sectors.message

        }
    });
    const getRandomAOS = () => {
        let num = Math.floor((Math.random() * (fadeArr.length - 1)) + 1);
        return fadeArr[num];
    }

    useEffect(() => {
        dispatch(PAGES_ACTIONS.fetch_project_sectors_list());
        // dispatch(PAGES_ACTIONS.fetch_new_initialtive_meta_details({}));
    }, []);

    useEffect(() => {
        window.AOS.init({
            duration: 500
        });
    }, [list.length]);
    // console.log("details", details);

    // let banner = details.banner ? details.banner : `${BASE_URL}/uploads/1648213328973-391623050.jpg`;
    return (
        <Fragment>

            {
                processing ? "" :

                    (
                        error ? <p className='btn btn-danger'>{message}</p> :

                            <Fragment>
                                {/* <Helmet>
                                    <title>{details.title ? details.title : "----"}</title>
                                    <meta title="description" content={details.meta_description ? details.meta_description : ""} />
                                    <meta title="keywords" content={details.meta_keywords ? details.meta_keywords : ""} />
                                </Helmet> */}
                                <div className="bread-sec nvd" style={{ backgroundImage: `url(${BASE_URL}/uploads/1648213328973-391623050.jpg)` }}>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="head-bread">
                                                    {/* <h1>{details.title ? details.title : "----"}</h1> */}
                                                    <h1>Sectors</h1>
                                                    <ol className="breadcrumb">
                                                        <li><Link to={"/"}>Home</Link></li>
                                                        <li>/</li>
                                                        {/* <li className="active">{details.title ? details.title : "----"}</li> */}
                                                        <li className="active">Sectors</li>
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
                                                                    return <li key={`service-${index}`} data-aos={getRandomAOS()}><Link to={`/${row.slug}`}>{row.title}</Link></li>
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

export default ProjectListTemplate;