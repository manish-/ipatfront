import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as UTILS_ACTIONS from '../actions/user/utilsActions';
import { NavLink, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Preloader from './Preloader';

import CustomerFeedback from './user/CustomerFeedback';
import CustomerComplain from './user/CustomerComplain';

const Header = (props) => {
  const [click, setClick] = useState("");

  const dispatch = useDispatch();
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState('');

  const [clear_form, set_clear_form] = useState(Math.random());

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
    dispatch(UTILS_ACTIONS.fetch_states());
  }, []);


  return (
    <Fragment>
      {
        // processing ? <Preloader /> : ""
      }
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
          <div className="container-fluid">
            <div className="row pl-5 pr-5">
              <div className="col-md-12">
                <div className="top-head1 row">
                  <div className="top-logo col-md-4" data-aos="fade-right">
                    <NavLink to={"/"}><img className="img-fluid" src={`${process.env.PUBLIC_URL}/assets/images/logo.png`} /></NavLink>
                  </div>
                  <div className="top-contact col-md-3">
                    <ul>
                      <li><div className="con-icon"><i className="fa fa-phone"></i></div></li>
                      <li><div className="con-info"><span><strong>Phone Number</strong> <a className="text-dark" href="tel:0120-4044630">0120-4044630</a>, <a className="text-dark" href="tel:0120-4044660">4044660</a>, <a className="text-dark" href="tel:0120-4323120">4323120</a></span></div></li>
                    </ul>
                  </div>
                  <div className="top-contact top-email col-md-3">
                    <ul>
                      <li><div className="con-icon"><i className="fa fa-envelope"></i></div></li>
                      <li><div className="con-info"><span><strong>Mail Us</strong>  <a className="text-dark" href="mailto:info@grc-india.com">info@grc-india.com</a>, <a className="text-dark" href="mailto:lab@grc-india.com">lab@grc-india.com</a>, <a className="text-dark" href="mailto:bd@grc-india.com">bd@grc-india.com</a></span></div></li>
                    </ul>
                  </div>
                  <div className="top-contact top-login col-md-2" data-aos="fade-left">
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
          <div className="navbar-sec">
            <div className="container-fluid">
              <nav className="navbar navbar-expand-lg navbar-light">
                <NavLink className="navbar-brand" to={"/"}><img className="img-fluid" src={`${process.env.PUBLIC_URL}/assets/images/logo.png`} /></NavLink>
                <button className="navbar-toggler toggle-btn-mobile" type="button" onClick={e => setMenuOpen(!menuOpen)}>
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`navbar-collapse justify-content-center ${menuOpen ? "collapse show" : "collapse"}`} id="navbarSupportedContent">
                  <ul className="navbar-nav">
                    {
                      props.menu.map((row, index) => {
                        if (row.submenu) {
                          return <li className="nav-item dropdown" key={"header-menu-" + index}>
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={() => setClick(row.title)} onMouseOver={() => setClick(row.title)}>
                              {row.title}
                            </a>
                            <div className={click === row.title && menuOpen ? "dropdown-menu show" : "dropdown-menu"} aria-labelledby="navbarDropdown">
                              {
                                row.submenu.map((submenu, ind) => {

                                  if (row.slug) {
                                    return <NavLink key={"header-sub-menu-" + ind} className="dropdown-item" to={row.slug + "/" + submenu.slug} onClick={e => { setMenuOpen(false); setClick(row.title); }}>{submenu.title}</NavLink>
                                  } else {
                                    return <NavLink key={"header-sub-menu-" + ind} className="dropdown-item" to={"/" + submenu.slug} onClick={e => { setClick(row.title); setMenuOpen(false); }}>{submenu.title}</NavLink>
                                  }
                                })
                              }
                            </div>
                          </li>

                        } else {
                          if (row.slug) {
                            return <li className="nav-item" key={"header-menu-" + index}>
                              <NavLink className="nav-link" to={row.slug} onClick={e => { setMenuOpen(false); setClick(row.title); }} onMouseOver={() => setClick(row.title)}>{row.title} </NavLink>
                            </li>
                          } else if ((row.slug === "" || row.slug === "/") && row.page === "home") {
                            return <li className="nav-item" key={"header-menu-" + index}>
                              <NavLink className="nav-link" to={row.slug} onClick={e => { setMenuOpen(false); setClick(row.title); }} onMouseOver={() => setClick(row.title)}>{row.title} </NavLink>
                            </li>
                          }
                        }
                      })
                    }
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
      <div className="fixed-feedback">
        <button type="button" className="btn btn-primary" id="customer-feedback-btn" data-toggle="modal" data-target="#customer-feedback" onClick={() => window.$('#customer-feedback input[type="radio"]').prop("checked", false)}>
          Customer Feedback
        </button>
        <button type="button" className="btn btn-primary" id="customer-complain-btn" data-toggle="modal" data-target="#customer-complain" onClick={() => set_clear_form(Math.random())}>
          Complaint
        </button>
      </div>
      <CustomerFeedback />
      <CustomerComplain clear_form={clear_form} />

    </Fragment>
  )
}
export default Header