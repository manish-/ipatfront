import React, { Fragment, useEffect } from 'react';
import Helmet from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as PAGES_ACTIONS from '../actions/user/pagesActions';
import { render_inner_html } from '../utils/html_util';

const ServicesListTemplate = (props) => {

    const dispatch = useDispatch();
    console.log("props",props);

    let details = {};

    const { processing, list, error, errors, message } = useSelector(state => {
        return {
            processing: state.Pages_Reducers.services.list.processing,
            list: state.Pages_Reducers.services.list.list,
            error: state.Pages_Reducers.services.list.error,
            errors: state.Pages_Reducers.services.list.errors,
            message: state.Pages_Reducers.services.list.message

        }
    });

    useEffect(() => {
        dispatch(PAGES_ACTIONS.fetch_service_page_subpages_list({}));
    }, []);
    
    useEffect(() => {
        window.AOS.init({
            duration: 500
        });
    }, [list.length]);

    return (
        <Fragment>

            {
                processing ? "" :

                    (
                        error ? <p className='btn btn-danger'>{message}</p> :

                            <Fragment>
                                <Helmet>
                                    <title>{details.title ? details.title : props.title}</title>
                                </Helmet>
                                <div className="bread-sec" style={{ backgroundImage: `url("https://api.grc-india.com/uploads/1648213328973-391623050.jpg")` }}>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="head-bread">
                                                    <h1>{details.title ? details.title : props.title}</h1>
                                                    <ol className="breadcrumb">
                                                        <li><Link to={"/"}>Home</Link></li>
                                                        <li>/</li>
                                                        <li className="active">{details.title ? details.title : props.title}</li>
                                                    </ol>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="about-page">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="about-img">
                                                    <img src="https://demo.site4clientdemo.com/grc-india/images/gr8.jpg" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="about-inner">
                                                    <ul>
                                                        <li>Preparation of Environmental Impact Assessment (EIA) & Environmental Management Plan (EMP) and obtaining Environment Clearance</li>
                                                        <li>Green Buildings</li>
                                                        <li>Socio-Economic Impact Assessment (SIA) survey and studies</li>
                                                        <li>Environmental Research & Development</li>
                                                        <li>Preparation of Environment related Project proposals & advisory services</li>
                                                        <li>Application of Environmental Software for various Compliances in Construction, Mining, Power, Metallurgy and other Sectors</li>
                                                        <li>Corporate Environmental & Social Responsibility (CESR) Planning</li>
                                                        <li>Ecology and Bio-Diversity</li>
                                                        <li>Capacity building through training and skill development</li>
                                                    </ul>

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
                                                        <h3>Our Services</h3>
                                                        <ul>
                                                            {
                                                                list.map((row, index) => {
                                                                    return <li key={`service-${index}`}><Link to={`/${props.slug}/${row.slug}`}>{row.title}</Link></li>
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

export default ServicesListTemplate;