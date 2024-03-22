import React, { useEffect, useState, useCallback, Fragment } from "react";
import { Link, NavLink, useLocation } from 'react-router-dom';
import * as CONSTANTS from '../constants/Constants';
import { useDispatch, useSelector } from "react-redux";
import 'bootstrap/dist/js/bootstrap.bundle.js';


const Footer = (props) => {
    const quickLinks = ["about_us", "laboratory", "clientele", "career", "contact_us"];

    const location = useLocation();
    const dispatch = useDispatch();

    const getQuickLinkSlug = (title) => {
        // //console.log("title", title);
        return props.menu.map((row, index) => {
            if (row.page === title) {
                return <Link to={`/${row.slug}`} key={`quick-link-item${index}`}>{row.title}</Link>;
            }
        })

    }

    const { pathname } = useLocation();
    useEffect(() => {
        var element = document.getElementById("headerPanel");
        element.scrollIntoView();
        return props.children;
    }, [pathname]);

    const [footerServicesList, setFooterServicesList] = useState([]);

    useEffect(() => {
        if (props.menu) {
            if (props.menu.length > 2) {
                if (props.menu[2]['submenu'] && props.menu[2]['submenu'].length > 0) {
                    setFooterServicesList([...props.menu[2]['submenu']]);
                } else {
                    setFooterServicesList([]);
                }
            }
        }
    }, [props.menu]);

    return <Fragment>

        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="footer-1">
                            <div className="footer-logo"><Link to={'/'}><img className="img-fluid" src={`${process.env.PUBLIC_URL}/assets/images/logo.png`} /></Link></div>
                            <div className="footer-con">
                                <p>GRC India provides cost effective and optimal solutions for addressing environmental protection through preparation of Environmental Impact Assessment & Environmental Management Plan (EIA/EMP) Reports.</p>
                            </div>
                        </div>
                        <div className="footer-info-in">
                            <h4>CONTACT US</h4>
                            <div className="footer-info">
                                <div className="footer-inf">
                                    <p><span>Corporate Office:</span></p>
                                    <p>F-374 & 375, Sector–63, NOIDA–201 301</p>
                                </div>
                                <div className="footer-inf">
                                    <p><span>Phone:</span></p>
                                    <p><a className="text-light" href="tel:0120-4044630">0120-4044630</a>, <a className="text-light" href="tel:0120-4044660">4044660</a>, <a className="text-light" href="tel:0120-4323120">4323120</a></p>
                                </div>
                                <div className="footer-inf">
                                    <p><span>Email :</span></p>
                                    <p><a className="text-light" href="mailto:info@grc-india.com">info@grc-india.com</a>, <a className="text-light" href="mailto:lab@grc-india.com">lab@grc-india.com</a>, <a className="text-light" href="mailto:bd@grc-india.com">bd@grc-india.com</a></p>
                                </div>
                            </div>
                            <div className="social-links-sec">
                                <ul>
                                    <li><a href="https://www.facebook.com/GRRCIndia"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="https://www.linkedin.com/company/grc-india"><i className="fa fa-linkedin"></i></a></li>
                                    <li><a href="https://www.instagram.com/grrcindia/"><i className="fa fa-instagram"></i></a></li>
                                    <li><a href="https://twitter.com/grrcindia"><i className="fa fa-twitter"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="quick-link">
                            <h4>QUICK LINKS</h4>
                            <ul>
                                {
                                    quickLinks.map((row, index) => {
                                        return <Fragment key={"quicklinklistitem" + index}>
                                            <li>{getQuickLinkSlug(row)}</li>
                                        </Fragment>
                                    })
                                }
                                <li><Link to={`/gallery`}>Gallery</Link></li>
                                <li>
                                    <a href="javascript:void(0)" id="customer-feedback-btn" data-toggle="modal" data-target="#customer-feedback">
                                        Customer Feedback
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" id="customer-complain-btn" data-toggle="modal" data-target="#customer-complain">
                                        Customer Complain
                                    </a>
                                </li>
                                <li><Link to={`/faqs`}>FAQs</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="quick-link">
                            <h4>SERVICES</h4>
                            <ul>
                                {
                                    footerServicesList.map((row, index) => {
                                        return <li key={"footerServicesList" + index}>
                                            <Link to={`/${props.menu[2].slug}/${row.slug}`}>{row.title}</Link>
                                        </li>;
                                    })
                                }
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
            <div className="copy-right">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <p>All Rights reserved to Grass Roots Research & Creation India (P) Ltd. 2006-22.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </Fragment>

}

export default Footer





