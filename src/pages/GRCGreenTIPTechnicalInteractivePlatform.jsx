import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from 'react-router-dom';
import * as APP_CONSTANTS from "../constants/Constants";
import * as PAGES_ACTIONS from "../actions/user/pagesActions";
import { render_inner_html } from '../utils/html_util';
import NewsRightBar from '../components/user/NewsRightBar';

const GRCGreenTIPTechnicalInteractivePlatform = (props) => {

    return <Fragment>
        <div className="bread-sec" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/banner-company.jpg)`}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="head-bread">
                            <h1>GRC Green TIP (Technical Interactive Platform)</h1>
                            <ol className="breadcrumb">
                                <li><Link to={'/'}>Home</Link></li>
                                <li>/</li>
                                <li className="active">GRC Green TIP (Technical Interactive Platform)</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="about-page">
            <div className="container">
                <div className="row">
                    <div className="col-md-6" data-aos="fade-up-right">
                        <div className="about-img">
                            <img src={`${process.env.PUBLIC_URL}/images/greentip.jpg`} />
                        </div>
                    </div>
                    <div className="col-md-6" data-aos="fade-up-left">
                        <div className="about-inner">
                            <h3>How Green TIP Works?</h3>
                            <p>GRC Green TIP is an interactive platform developed by Grass Roots Research & Creation India (P) Limited to hand-hold with stakeholders in the field of environment for sustainable development. GRC India (P) Ltd. is a pioneer environmental consultancy organization working in the field of environment and EIA since 2006. GRC India has been providing optimal solutions for Environmental Clearances for Industrial and Infrastructural sectoral projects. We have a pool of experts for the entire range of functional areas, who can guide and provide the most satisfactory solutions in the environmental field.</p>
                            <p>For more information regarding GRC India, you can visit our website <strong>www.grc-india.com</strong></p>
                            <p>The modus operandi for creating the GreenTIP platform is to make people aware of environmental issues and their probable and possible solutions which they try and find out at various locations...</p>
                            <a href="http://www.grcgreentip.com/" target="_blank" className="grc-link">Click Here to Visit GRC Green TIP</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </Fragment>


}

export default GRCGreenTIPTechnicalInteractivePlatform;