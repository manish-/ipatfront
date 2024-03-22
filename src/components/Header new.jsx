import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link, NavLink, useLocation } from 'react-router-dom';
import { Navigate } from 'react-router';
import * as CONSTANTS from '../constants/Constants';
import 'bootstrap/dist/css/bootstrap.min.css';

// import '../assets/css/style.css';
// import '../assets/css/responsive.css';
import Preloader from './Preloader';

import CustomerFeedback from './user/CustomerFeedback';
import CustomerComplain from './user/CustomerComplain';

const Header = (props) => {

  const dispatch = useDispatch();
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const { accessToken, refreshToken } = useSelector(state => {
    return {
      accessToken: state.Authentication_Reducers.accessToken,
      refreshToken: state.Authentication_Reducers.refreshToken
    }
  });

  useEffect(() => {
    window.AOS.init({
      duration: 500
    });
  }, []);

  useEffect(() => {

    window.$('nav ul li a:not(:only-child)').click(function (e) {
      //console.log("38");
      window.$(this).siblings('.nav-dropdown').toggle();
      // Close one dropdown when selecting another
      //console.log("41");
      window.$('.nav-dropdown').not(window.$(this).siblings()).hide();
      e.stopPropagation();
    });
    // Clicking away from dropdown will remove the dropdown class
    window.$('html').click(function () {
      ////console.log("47");
      //window.$('.nav-dropdown').hide();
    });
   
    // Hamburger to X toggle
    window.$('#nav-toggle').on('click', function () {
      //console.log("57");
      window.$('nav ul').slideToggle();
      this.classList.toggle('active');
    });
  }, [props.menu]);

  // //console.log("props.menu", props.menu);
  return (
    <Fragment>
      <header id="headerPanel">
        <div className="top-head">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="top-head-text">
                  <p>Providing <span>Environmental Consultancy</span> including EIA/EMP & Comprehensive LAB Monitoring and Testing Services</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="top-head-info">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="top-head1">
                  <div className="top-logo" data-aos="fade-right">
                    <NavLink to={"/"}><img src={`${process.env.PUBLIC_URL}/assets/images/logo.png`} /></NavLink>
                  </div>
                  <div className="top-contact">
                    <ul>
                      <li><div className="con-icon"><i className="fa fa-phone"></i></div></li>
                      <li><div className="con-info"><span><strong>Phone Number</strong> <a className="text-dark" href="tel:0120-4044630">0120-4044630</a>, <a className="text-dark" href="tel:0120-4044660">4044660</a>, <a className="text-dark" href="tel:0120-4323120">4323120</a></span></div></li>
                    </ul>
                  </div>
                  <div className="top-contact top-email">
                    <ul>
                      <li><div className="con-icon"><i className="fa fa-envelope"></i></div></li>
                      <li><div className="con-info"><span><strong>Mail Us</strong>  <a className="text-dark" href="mailto:info@grc-india.com">info@grc-india.com</a>, <a className="text-dark" href="mailto:lab@grc-india.com">lab@grc-india.com</a>, <a className="text-dark" href="mailto:bd@grc-india.com">bd@grc-india.com</a></span></div></li>
                    </ul>
                  </div>
                  <div className="top-contact top-login" data-aos="fade-left">
                    <ul>
                      <li><div className="con-icon"><i className="fa fa-user"></i></div></li>
                      <li><div className="con-info"><span><strong>Login Here</strong> <a href="https://webmail.logix.in">Account</a></span></div></li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className="site-header">
          <div className="navigation">
            <div className="nav-container">
              <div className="nav-data">
                <div className="brand">
                  <a href="#!">LOGO</a>
                </div>
                <nav className="navbar-nav">
                  <div className="nav-mobile">
                    <a id="nav-toggle" href="#!"><span></span></a>
                  </div>
                  <ul className="nav-list">
                    {
                      props.menu.map((row, index) => {
                        if (row.submenu) {
                          return <li key={"header-menu-" + index}>
                            <a href="#" >
                              {row.title}
                            </a>
                            <ul className="nav-dropdown">
                              {
                                row.submenu.map((submenu, ind) => {
                                  if (row.slug) {
                                    return <li key={"header-submenu-menu-" + index + "-" + ind}><NavLink key={"header-sub-menu-" + ind} to={row.slug + "/" + submenu.slug} onClick={e => setMenuOpen(false)}>{submenu.title}</NavLink></li>
                                  } else {
                                    return <li key={"header-submenu-menu-" + index + "-" + ind}><NavLink key={"header-sub-menu-" + ind} to={"/" + submenu.slug} onClick={e => setMenuOpen(false)}>{submenu.title}</NavLink></li>
                                  }
                                })
                              }
                            </ul>
                          </li>

                        } else {
                          if (row.slug) {
                            return <li key={"header-menu-" + index}>
                              <NavLink to={row.slug} onClick={e => setMenuOpen(false)}>{row.title} </NavLink>
                            </li>
                          } else if ((row.slug === "" || row.slug === "/") && row.page === "home") {
                            return <li key={"header-menu-" + index}>
                              <NavLink to={row.slug} onClick={e => setMenuOpen(false)}>{row.title} </NavLink>
                            </li>
                          }
                        }
                      })
                    }

                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="fixed-feedback">
        <button type="button" className="btn btn-primary" id="customer-feedback-btn" data-toggle="modal" data-target="#customer-feedback">
          Customer Feedback
        </button>
        <button type="button" className="btn btn-primary" id="customer-complain-btn" data-toggle="modal" data-target="#customer-complain">
          Complaint
        </button>
      </div>
      <CustomerFeedback />
      <CustomerComplain />
    </Fragment>
  )
}
export default Header