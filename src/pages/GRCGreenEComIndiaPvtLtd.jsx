import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from 'react-router-dom';
import * as APP_CONSTANTS from "../constants/Constants";
import * as PAGES_ACTIONS from "../actions/user/pagesActions";
import { render_inner_html } from '../utils/html_util';
import NewsRightBar from '../components/user/NewsRightBar';

const GRCGreenEComIndiaPvtLtd = (props) => {

    return <Fragment>
        <div className="bread-sec" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/banner-company.jpg)`}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="head-bread">
                            <h1>GRC Green E-Com India Pvt Ltd</h1>
                            <ol className="breadcrumb">
                                <li><Link to={"/"}>Home</Link></li>
                                <li>/</li>
                                <li className="active">GRC Green E-Com India Pvt Ltd</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="about-page">
            <div className="container">
                <div className="row">
                    <div className="col-md-12" data-aos="fade-down-left">
                        <div className="ab-sec1 ab-sec-ser1">
                            <h2>“Building a world of difference by promoting green technologies”</h2>
                            <p>GRC Green is a marketplace building solutions to bring technology experts of Environment, Energy, Occupational Health and Safety (EEOHS) Products & Services within an integrated platform and to help Buyer & Supplier to manage entire purchase Online. The online platform will streamline supply chain process for both buyers and suppliers & will also be a knowledge hub to educate the community on the Green building concept.</p>
                            <p>“Climate change - a threat – and an opportunity – for the private sector”. Innovation is at the heart of fighting climate change. Like any disruptive force, climate change is creating opportunities for companies willing to innovate. </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6" data-aos="zoom-in">
                        <div className="about-img">
                            <img src={`${process.env.PUBLIC_URL}/images/img-big2.jpg`} />
                        </div>
                    </div>
                    <div className="col-md-6" data-aos="fade-down-right">
                        <div className="about-inner">
                            <h3>Why EEOHS?</h3>
                            <p>he Paris Agreement provides every country put forward a national contribution every five years to reduce greenhouse gas emissions.</p>
                            <p>196 Countries affirmed their determination to keep global warming to 2°C compared to the pre-industrial era and have committed to reduce their green house gas emissions</p>
                            <p>India had submitted its action plan, committing to reduce growth of its carbon emissions by 33-35% of the economy by 2030 ( from the level of 2005)</p>
                            <p>Environment, Energy, Occupational Health & Safety (EEOHS) are three vital multiplier factors for economic development.</p>
                            <p>Regulatory bodies have identified 39 critical sectors that cover the entire gamut of such economic activities in their respective countries.</p>
                            <p>Each of these sectors needs environment solutions to curb and control pollution and conserve scarce resources. Today green building is the only way for the construction industry to move towards achieving a Sustainable development, taking into account environmental, Socioeconomic and cultural issues.</p>
                            <p>There have been several initiatives by the governments and other bodies in India to address sustainability in the construction sector, these initiatives have either faced economic and social problems or did not have a proper implementation strategy to ensure their successful adoption in the society.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="about-page1">
            <div className="container">
                <div className="row">
                    <div className="col-md-6" data-aos="fade-up-right">
                        <div className="about-inner">
                            <h3>GRC Green Approach</h3>
                            <p>Out of the 39 Critical sectors, GRC Green will focus on Buildings & Construction Sector in first phase. GRC Green platform will sell the green materials & equipment for the Building & Construction sector online.</p>
                            <p>India is witnessing a paradigm shift in green building design & construction sector. Green buildings to grow by 20% in India by 2018:  Report by Dodge Data & Analytics</p>
                            <p>India’s total built-up space of 25 billion square feet is expected to increase to 80 billion square feet by 2030. The share of green buildings in this construction boom could be as high as 20%.</p>
                            <p>The government’s ambitious plan of developing 100 smart cities will also provide the much-needed impetus to the green building movement. Besides using information and communications technologies (ICTs), most smart cities will have to adhere to green building norms and reduce carbon emissions.</p>
                        </div>
                    </div>
                    <div className="col-md-6" data-aos="zoom-in-left">
                        <div className="about-img">
                            <img src={`${process.env.PUBLIC_URL}/images/comp5.jpg`} />
                        </div>
                    </div>
                </div>
            </div>
        </div>



    </Fragment>


}

export default GRCGreenEComIndiaPvtLtd;