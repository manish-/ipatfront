import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { render_inner_html, ucwords } from "../utils/html_util";
import * as PAGES_ACTIONS from "../actions/user/pagesActions";
import * as UTILS_ACTIONS from "../actions/user/utilsActions";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import * as CONSTANTS from "../constants/Constants";
import { MAP_PARTS } from "../constants/Map_Parts";
import ClienteleCarousel from "../components/user/ClienteleCarousel";
import NewsCarousel from "../components/user/NewsCarousel";
import EnvironmentServices from "../components/user/EnvironmentServices";
import OurProjectsHome from "../components/user/OurProjectsHome";
import SeminarsHome from "../components/user/SeminarsHome";
import BannersHome from "../components/user/BannersHome";
import HomeEventPopUp from "../components/user/HomeEventPopUp";
import { ContentPasteOffSharp } from "@mui/icons-material";

const HomePage = (props) => {
  const currentURL = window.location.href;
  const dispatch = useDispatch();
  const [selectedLocation, setSelectedLocation] = useState("UTTAR PRADESH");

  const [filter, setFilter] = useState(10);
  const [current_page, set_current_page] = useState(1);
  const total_item = 18;

  const [popupShowed, setPopupShowed] = useState(false);

  const {
    processing,
    accreditationsList,
    error,
    errors,
    message,
    page_content,
    project_list,
    project_list_loaded,
    project_client_details,
  } = useSelector((state) => {
    return {
      processing: state.Pages_Reducers.accreditations.list.processing,
      accreditationsList: state.Pages_Reducers.accreditations.list.list,
      error: state.Pages_Reducers.accreditations.list.error,
      errors: state.Pages_Reducers.accreditations.list.errors,
      message: state.Pages_Reducers.accreditations.list.message,
      page_content: state.Utils_Reducers.page_content.details,
      project_list: state.Pages_Reducers.clientele_project_list.list,
      project_list_loaded:
        state.Pages_Reducers.clientele_project_list.dataLoaded,
      project_client_details:
        state.Pages_Reducers.clientele_project_list.details,
    };
  });

  useEffect(() => {
    dispatch(
      PAGES_ACTIONS.fetch_accreditations_list({ itemPerPage: 8, page: 1 })
    );
    // dispatch(PAGES_ACTIONS.fetch_clientele_page_details('clientele', 1));
    dispatch(UTILS_ACTIONS.page_content("home"));
    window.AOS.init({
      duration: 500,
    });
    window.$('[data-toggle="tooltip"]').tooltip({
      placement: "top",
    });

    window.$(".blog-sec").owlCarousel({
      loop: true,
      margin: 30,
      dots: false,
      nav: true,
      responsiveClass: true,
      autoplay: true,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
        },
      },
    });
  }, []);

  let new_initiatives = {
    parent: "",
    submenu: [],
  };

  props.fullmenu.map((row) => {
    if (row.page === "new_initiatives") {
      new_initiatives.submenu = row.submenu;
      new_initiatives.parent = row.slug;
    }
  });

  return (
    <Fragment>


      <Helmet>
        <title>{"EIA & EMP consultant in India | Environmental consulting firms in India - GRC India"}</title>
        <meta name="description" content={"Explore sustainable development with top environmental consulting firms in India - GRC India. We are your trusted EIA & EMP consultant in India, ensuring sustainability and compliance with government regulations."} />
        <meta name="keywords" content={""} />
        <link rel="canonical" href={`${currentURL}`} />
      </Helmet>

      <BannersHome />

      <HomeEventPopUp
        setPopupShowed={setPopupShowed}
        popupShowed={popupShowed}
      />

      <div
        className={`modal form-modal fade ${project_list_loaded === true ? "show" : ""
          }`}
        style={{
          display: `${project_list_loaded === true ? "block" : "none"}`,
          opacity: `${project_list_loaded === true ? "1" : "0"}`,
        }}
        id="project_case_study"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">
                {project_client_details.alt
                  ? project_client_details.alt
                  : "----"}
                's Projects
              </h4>
              <button
                type="button"
                className="close"
                onClick={(e) => {
                  dispatch(PAGES_ACTIONS.clear_clientele_project_list());
                }}
              >
                &times;
              </button>
            </div>
            <div
              className="modal-body"
              style={{
                overflowX: "scroll",
                overflowY: "scroll",
                height: "85vh",
              }}
            >
              <ul className="list-group">
                {project_list.length === 0 ? (
                  <li className="list-group-item list-group-item-danger">
                    0 record found
                  </li>
                ) : (
                  project_list.map((project, index) => {
                    if (filter > 0) {
                      if (index < filter) {
                        return (
                          <li
                            className="list-group-item"
                            key={`client_project_row_${index}`}
                          >
                            <div
                              dangerouslySetInnerHTML={render_inner_html(
                                project.short_content
                              )}
                            ></div>
                            <Link
                              to={`/project-details/${project.id_text}`}
                              style={{
                                backgroundColor: "transparent",
                                color: "#007bff",
                              }}
                            >
                              Detail
                            </Link>
                          </li>
                        );
                      }
                    } else {
                      return (
                        <li
                          className="list-group-item"
                          key={`client_project_row_${index}`}
                        >
                          <div
                            dangerouslySetInnerHTML={render_inner_html(
                              project.short_content
                            )}
                          ></div>
                          <Link
                            to={`/project-details/${project.id_text}`}
                            style={{
                              backgroundColor: "transparent",
                              color: "#007bff",
                            }}
                          >
                            Detail
                          </Link>
                        </li>
                      );
                    }
                  })
                )}
              </ul>
              {project_list.length > 10 ? (
                <div className="pagination-sec">
                  <ul className="pagination">
                    <li className={`page-item ${filter == 10 ? "active" : ""}`}>
                      <button
                        className="page-link"
                        type="button"
                        onClick={(e) => setFilter(10)}
                      >
                        10
                      </button>
                    </li>
                    <li className={`page-item ${filter == 20 ? "active" : ""}`}>
                      <button
                        className="page-link"
                        type="button"
                        onClick={(e) => setFilter(20)}
                      >
                        20
                      </button>
                    </li>

                    <li className={`page-item ${filter == -1 ? "active" : ""}`}>
                      <button
                        className="page-link"
                        type="button"
                        onClick={(e) => setFilter(-1)}
                      >
                        All
                      </button>
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>


      <div className="home-sec1">

        <div className="home-sec-p">
          <div className="jarallax" data-jarallax>
            <img
              className="jarallax-img"
              src={`${process.env.PUBLIC_URL}/assets/images/home-sec1-bg.jpg`}
              alt=""
            />

            <div className="container">

              <div className="row mb-5">

                <div className="col-md-3">
                  <div className="link-list">
                    <a
                      href="http://www.grcgreentip.com/"
                      target="_blank"
                    >
                      GRC Green TIP
                    </a>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="link-list">
                    <Link to="/ba2">
                      Join GRC India as Business Associate (BA) of EIA/EMP or LAB
                    </Link>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="link-list">
                    <a
                      href="http://www.grcgreenerp.com/"
                      target="_blank"
                    >
                      GRC Green ERP
                    </a>
                  </div>
                </div>

              </div>

              <div className="row">
                {page_content.section1 ? (
                  <div
                    className="col-md-12"
                    data-aos="fade-down-right"
                    dangerouslySetInnerHTML={render_inner_html(
                      page_content.section1
                    )}
                  ></div>
                ) : (
                  ""
                )}

                <div className="col-md-12">
                  <div className="row home-sec1-row">
                    <div className="col-md-4">
                      <EnvironmentServices />
                    </div>
                    <div className="col-md-4">
                      <div className="home-sec-grey">
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/images/h-ic2.png`}
                        />
                        <h3>
                          <a href="laboratory.html">Laboratory Services</a>
                        </h3>
                        <ul>
                          <li>Environmental Monitoring</li>
                          <li>Analysis of Ground, Surface and Waste Water</li>
                          <li>Characterization of Soil and its Fertility</li>
                          <li>Soil Analysis & Testing</li>
                        </ul>
                        <Link className="text-link" to="/laboratory">
                          Read More
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="home-sec-grey" data-aos="fade-left">
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/images/h-ic3.png`}
                        />
                        <h3>
                          <a href="javascript:void(0)">New Initiatives</a>
                        </h3>
                        <ul>
                          {new_initiatives.submenu.map((row, index) => {
                            return (
                              <li key={`new_initiatives_${index}`}>
                                <Link
                                  to={`/${new_initiatives.parent}/${row.slug}`}
                                >
                                  {row.title}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                        {new_initiatives.parent && (
                          <Link
                            className="text-link"
                            to={`/${new_initiatives.parent}`}
                          >
                            Read More
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="client-part">
        <div className="jarallax" data-jarallax>
          <img
            className="jarallax-img"
            src={`${process.env.PUBLIC_URL}/assets/images/home-sec1-bg.jpg`}
            alt=""
          />
          <div className="container">
            <div className="row">
              <div className="col-md-6" data-aos="fade-left">
                <ClienteleCarousel />
              </div>
              <div className="col-md-6">
                {page_content.section2 ? (
                  <div
                    className="client-sec"
                    dangerouslySetInnerHTML={render_inner_html(
                      page_content.section2
                    )}
                  ></div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="home-sec2">
        <div className="container">
          <div className="row">
            {page_content.section3 ? (
              <div
                className="col-md-6"
                data-aos="fade-right"
                dangerouslySetInnerHTML={render_inner_html(
                  page_content.section3
                )}
              ></div>
            ) : (
              <div className="col-md-6"></div>
            )}
            <div className="col-md-6"></div>
          </div>
        </div>
      </div>

      <div className="home-sec3">
        <div className="container">
          <div className="row">
            {page_content.section4 ? (
              <div
                className="col-md-12"
                data-aos="fade-up"
                dangerouslySetInnerHTML={render_inner_html(
                  page_content.section4
                )}
              ></div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <div className="home-sec4">
        <div className="container">
          <div className="row">
            <div className="col-md-12" data-aos="fade-up">
              <div className="video-ab">
                <img src={page_content.image2} />
              </div>
            </div>
            <div className="col-md-8">
              <div className="home-sec4-in">
                <h2>
                  Workshops, <span>Seminars & Conferences</span>
                </h2>
              </div>
            </div>
            <div className="col-md-2">
              <div className="home-sec4-in">
                <Link to="/gallery">View Gallery</Link>
              </div>
            </div>
            <div className="col-md-2">
              <div className="home-sec4-in">
                <Link to="/seminars">View All</Link>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-12">
              <SeminarsHome />
            </div>
          </div>
        </div>
      </div>

      <div className="home-sec5">
        <div className="container">
          <div className="row">
            <div className="col-md-6" data-aos="fade-down">
              <OurProjectsHome selectedLocation={selectedLocation} />
            </div>
            <div className="col-md-6" data-aos="fade-left">
              <div className="map-sec">
                <div className="description"></div>
                <svg
                  baseProfile="tiny"
                  fill="#ececec"
                  height="500"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  version="1.2"
                  viewBox="0 0 1000 1136"
                  width="500"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="combined">
                    {MAP_PARTS.map((row, index) => {
                      return (
                        <path
                          key={`map-part-${index}`}
                          data-toggle="tooltip"
                          title={row.title}
                          d={row.d}
                          id={row.id}
                          name={row.name}
                          className={
                            selectedLocation.toLowerCase() ===
                              row.title.toLowerCase()
                              ? "enabled mapActive"
                              : "enabled"
                          }
                          onClick={(e) =>
                            setSelectedLocation(ucwords(row.name))
                          }
                        ></path>
                      );
                    })}
                  </g>
                  <g id="points">
                    <circle
                      className="8.270456392188589|69.64751777648942"
                      cx="50.9"
                      cy="1082.7"
                      id="0"
                    ></circle>
                    <circle
                      className="20.400061356601594|84.26020774841326"
                      cx="549.9"
                      cy="654.3"
                      id="1"
                    ></circle>
                    <circle
                      className="35.562067562117846|95.95035972595234"
                      cx="949.1"
                      cy="65.3"
                      id="2"
                    ></circle>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      {accreditationsList.length === 0 ? (
        ""
      ) : (
        <div className="home-sec7">
          <div className="container">
            <div className="row">
              <div className="col-md-6"></div>
              <div className="col-md-6">
                <div className="home-sec7-in">
                  <h3>Accreditations</h3>
                  <ul>
                    {accreditationsList.map((accreditation, index) => {
                      return (
                        <li
                          data-aos="fade-left"
                          key={`accreditations_li_${index}`}
                        >
                          <div className="list-down-box">
                            <div className="list-down">
                              {accreditation.title}
                            </div>{" "}
                            <span>
                              <a target="_blank" href={accreditation.file_url}>
                                <img
                                  src={`${process.env.PUBLIC_URL}/assets/images/download.png`}
                                />
                              </a>
                            </span>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="home-sec8">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <div className="home-sec4-in">
                <h2>
                  <span>Our News</span>
                </h2>
              </div>
            </div>
            <div className="col-md-3">
              <div className="home-sec4-in">
                <Link to="/news">View All</Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <NewsCarousel />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HomePage;
