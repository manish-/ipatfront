import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from 'react-router-dom';
import * as APP_CONSTANTS from "../constants/Constants";
import * as PAGES_ACTIONS from "../actions/user/pagesActions";
import { render_inner_html } from '../utils/html_util';
import NewsRightBar from '../components/user/NewsRightBar';

const GRCGreenERP = (props) => {

    return <Fragment>
        <div className="bread-sec" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/banner-company.jpg)` }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="head-bread">
                            <h1>GRC Green ERP</h1>
                            <ol className="breadcrumb">
                                <li><Link to={'/'}>Home</Link></li>
                                <li>/</li>
                                <li className="active">GRC Green ERP</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="about-page">
            <div className="container">
                <div className="row">
                    <div className="col-md-6" data-aos="zoom-in-left">
                        <div className="about-img">
                            <img src={`${process.env.PUBLIC_URL}/images/greenerp.jpg`} alt="" />
                        </div>
                    </div>
                    <div className="col-md-6" data-aos="fade-down-left">
                        <div className="about-inner">
                            <h3>How does it work:</h3>
                            <p>Conditions of EC as far as the statutory regulations are concerned. This includes the compliance regulations in respect of all Conditions as per Regulations Environment Protection (EP) Act 2006, which is addressed through the software-Environment Compliance Controller, Consent to Establish (CTE), and Consent to Operate (CTO).</p>
                            <p>Software will assist in understanding the legal compliance points along with corresponding task associated towards obtaining EC, CTE and CTO clearance.</p>
                            <p>Once this is done, our software takes over and put this in a very systematic way on a platform, which will not only provide a dashboard to your senior management but will also make life much easier at the middle and junior level.</p>
                            <p>It does not stop just there. Our software will continue to deliver you further updates and set that up in the systems only those new requirements which are relevant to you. This keeps you always up dated.</p>
                            <p>To be able to capture organisation’s environmental objectives and target data within one centralised web based system to be accessible by employees across the business. Web based   platform ensures info to all and sustained compliance and regulatory requirements.</p>
                            <p>EC Controller automates compliance tracking and monitoring process to build transparent and establish process oriented practice in the organisation. It provides clear, real-time visibility into your company’s compliance activities cutting across geographical, functional & business units; and transforms an administrative head ache into a valuable area for cost savings and business improvement, while minimising risk.</p>
                            <p>Senior Management has real time visibility with state-of-art Cockpit & Graphical Reports; supported by automated process of escalation based on risk and imp act analysis. Environment Compliance Controller has the capability of creating different customised report which automatically lands at the appropriate level Mail Box Senior Management feels freedom from non-important things but still in full command and control.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>




    </Fragment>


}

export default GRCGreenERP;