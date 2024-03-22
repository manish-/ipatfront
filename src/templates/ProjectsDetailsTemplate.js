import React, { Fragment, useEffect } from 'react';
import Helmet from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import * as PAGES_ACTIONS from '../actions/user/pagesActions';
import { render_inner_html } from '../utils/html_util';

const ProjectsDetailsTemplate = (props) => {
    const currentURL = window.location.href;
    const dispatch = useDispatch();
    const { id } = useParams();
    const fadeArr = ["fade-up-right", "fade-left", "fade-right", "fade-down", "fade-up"];
    const getRandomAOS = () => {
        let num = Math.floor((Math.random() * (fadeArr.length - 1)) + 1);
        return fadeArr[num];
    }
    const { processing, details, error, errors, message } = useSelector(state => {
        return {
            processing: state.Pages_Reducers.projects.project_details.processing,
            details: state.Pages_Reducers.projects.project_details.details,
            error: state.Pages_Reducers.projects.project_details.error,
            errors: state.Pages_Reducers.projects.project_details.errors,
            message: state.Pages_Reducers.projects.project_details.message

        }
    });

    useEffect(() => {
        dispatch(PAGES_ACTIONS.fetch_project_details(id));
    }, [id]);

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
                                                    <h1>{details.sector + '->' + details.project_type + '->' + details.state + '->' + details.district}</h1>
                                                    <ol className="breadcrumb">
                                                        <li><Link to={"/"}>Home</Link></li>
                                                        <li>/</li>
                                                        <li className="active">{details.sector}</li>
                                                        <li>/</li>
                                                        <li className="active">{details.project_type}</li>
                                                        <li>/</li>
                                                        <li className="active">{details.state}</li>
                                                        <li>/</li>
                                                        <li className="active">{details.district}</li>

                                                    </ol>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='container p-3'>
                                    <div className='row'>
                                        <div className='col-md-4'>
                                            <div className='row' data-aos={getRandomAOS()}>
                                                <div className='col-md-12' data-aos={getRandomAOS()}>
                                                    <p className='text-light p-2' style={{ backgroundColor: "#9ac51a" }} data-aos={getRandomAOS()}>Client Details</p>
                                                </div>
                                                <div className='col-md-12' data-aos={getRandomAOS()}>
                                                    <img className='img-thumbnail' src={details.client_thumbnail} alt={details.client_alt} data-aos={getRandomAOS()} />
                                                </div>
                                                {details.client_content ?
                                                    <div className='col-md-12 pt-2' dangerouslySetInnerHTML={render_inner_html(details.client_content)} data-aos={getRandomAOS()}>

                                                    </div>
                                                    : ""}
                                            </div>
                                        </div>
                                        <div className='col-md-8' data-aos={getRandomAOS()}>
                                            <div className='col-md-12' data-aos={getRandomAOS()}>
                                                <p className='text-light p-2' style={{ backgroundColor: "#9ac51a" }} data-aos={getRandomAOS()} >Project Details</p>
                                            </div>
                                            {details.content ?
                                                <div className='col-md-12' data-aos={getRandomAOS()}>
                                                    <div className='p-2' dangerouslySetInnerHTML={render_inner_html(details.content)} data-aos={getRandomAOS()}>

                                                    </div>
                                                </div>
                                                : ""}
                                        </div>
                                    </div>
                                    {
                                        (details.is_case_study_available === "yes" && details.case_study) ?
                                            <div className='row mt-3'>
                                                <div className='col-md-12' data-aos={getRandomAOS()}>
                                                    <p className='text-light p-2' style={{ backgroundColor: "#9ac51a" }} data-aos={getRandomAOS()} >Project Case Study</p>
                                                </div>
                                                <div className='col-md-12' data-aos={getRandomAOS()}>
                                                    <div className='p-2' dangerouslySetInnerHTML={render_inner_html(details.case_study)} data-aos={getRandomAOS()}>

                                                    </div>
                                                </div>
                                            </div>
                                            : ""}
                                </div>
                            </Fragment>
                    )
            }
        </Fragment>
    )
}

export default ProjectsDetailsTemplate;