import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from 'react-router-dom';
import * as APP_CONSTANTS from "../constants/Constants";
import * as PAGES_ACTIONS from "../actions/user/pagesActions";
import { render_inner_html } from '../utils/html_util';
import NewsRightBar from '../components/user/NewsRightBar';

const GRCAcceleratorAndIncubatorFoundation = (props) => {

    return <Fragment>
        <div className="bread-sec" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/banner-company.jpg)`}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="head-bread">
                            <h1>GRC Accelerator And Incubator Foundation</h1>
                            <ol className="breadcrumb">
                                <li><Link to={'/'}>Home</Link></li>
                                <li>/</li>
                                <li className="active">GRC Accelerator And Incubator Foundation</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="about-page">
            <div className="container">
                <div className="row">
                    <div className="col-md-12" data-aos="fade-down">
                        <div className="ab-sec1 ab-sec-ser1">
                            <h2>Technology Business Incubator promoting ideas & technologies from Environment & Healthcare sectors</h2>
                            <p>GRC Green Incubator aims at fostering start-up companies with mentoring, flexible space, basic resources and other business services designed to accelerate their success, and eventually create jobs and promote ‘Make in India’ initiative.</p>
                            <p>Today, India stands as one of the major technology hotbeds, offering fascinating opportunities for emerging companies, to thrive and establish themselves in the world with their innovative ideas and unconventional approaches.</p>
                            <p>With over US$ 7.3 billion investment across 639 deals in 2016 with three to four startups emerging every day, India has paved its way to secure the third position in the world in terms of the number of startups.</p>
                            <p>In India, 800+ startups set up annually and by 2020 it would reach 1,15,00 startups, employing over 250k persons. And therefore, these startups are a perfect mode to take care of unemployment problem in India.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6" data-aos="fade-right">
                        <div className="about-img">
                            <img src={`${process.env.PUBLIC_URL}/images/gr6.jpg`} />
                        </div>
                    </div>
                    <div className="col-md-6" data-aos="fade-up-left">
                        <div className="about-inner">
                            <h3>GRC Green Incubator-What We Do</h3>
                            <p>GRC Green Incubator, A Technology Business Incubator (TBI), is proposed as an organisational setup that will nurture technology based and knowledge driven startups in the Environment issues (Cleantech, Energy, Water, Air) space by helping them survive during the start-up period.</p>
                            <p>Talent from various universities/institutions/startups will be nurtured in the form of mentorship and financing and will be given a platform to foster innovative start-up firms.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="about-page1">
            <div className="container">
                <div className="row">
                    <div className="col-md-6" data-aos="fade-down-right">
                        <div className="about-inner">
                            <h3>Proposed Thrust Areas of Incubation</h3>
                            <p>GRC Green Incubator is focused on supporting and encouraging businesses involved in solving the Environment issues (Cleantech, Energy, Water and Air).</p>
                            <p>The incubator will support development of products, services, and processes that harness renewable materials, energy sources and efficiency, reduce the use of natural resources, and cut or eliminate emissions and wastes in all the 39 Critical Sectors.</p>
                            <p>Recent Achievements: GRC India has partnered with Jawaharlal Nehru University to set-up a JNU-NIDHI Technology Incubator, catering to Environment & Healthcare sectors.</p>
                        </div>
                    </div>
                    <div className="col-md-6" data-aos="fade-down-left">
                        <div className="about-img">
                            <img src={`${process.env.PUBLIC_URL}/images/comp7.jpg`} />
                        </div>
                    </div>
                </div>
            </div>
        </div>





    </Fragment>


}

export default GRCAcceleratorAndIncubatorFoundation;