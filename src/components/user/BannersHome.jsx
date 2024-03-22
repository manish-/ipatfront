import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import * as APP_CONSTANTS from "../../constants/Constants";
import * as UTILS_ACTIONS from "../../actions/user/utilsActions";

const BannersHome = (props) => {
  // //console.log("ClienteleCarousel props", props);
  const fadeArr = ["fade-left", "fade-right"];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(UTILS_ACTIONS.fetch_banners());
  }, []);

  let { list, processing, error, errors } = useSelector((state) => {
    return {
      list: state.Utils_Reducers.banners.list,
      processing: state.Utils_Reducers.banners.processing,
      error: state.Utils_Reducers.banners.error,
      errors: state.Utils_Reducers.banners.errors,
    };
  });
  list = list.length > 0 ? list : [];

  useEffect(() => {
    if (list.length > 0) {
      window
        .$(".slider")
        .slick({
          autoplay: false,
          speed: 1500,
          lazyLoad: "progressive",
          arrows: true,
          dots: false,
          prevArrow:
            '<div class="slick-nav prev-arrow"><i></i><svg><use xlink:href="#circle"></svg></div>',
          nextArrow:
            '<div class="slick-nav next-arrow"><i></i><svg><use xlink:href="#circle"></svg></div>',
        })
        .slickAnimation();

      window.$(".slick-nav").on("click touch", function (e) {
        e.preventDefault();
        var arrow = window.$(this);
        if (!arrow.hasClass("animate")) {
          arrow.addClass("animate");
          setTimeout(() => {
            arrow.removeClass("animate");
          }, 1600);
        }
      });
    }
  }, [list.length]);

  if (list.length === 0) {
    return null;
  } else {
    return (
      <section className="banner__slider">
        <div className="slider stick-dots">
          {list.length === 0 ? (
            <div className="col-md-3">no record found!</div>
          ) : (
            list.map((row, index) => {
              return (
                <div className="slide" key={`home-baner-${row.id}`}>
                  <div className="slide__img">
                    <img
                      src={row.banner}
                      alt=""
                      data-lazy=""
                      className="full-image animated"
                      data-animation-in="zoomInImage"
                    />
                    <div className="over-sl"></div>
                  </div>
                  <div className="slide__content slide__content__center">
                    <div className="slide__content--headings text-left">
                      <h2
                        className="animated title"
                        data-animation-in="fadeInRight"
                      >
                        {row.heading1 ? row.heading1 : ""}{" "}
                        {row.heading2 ? <span>{row.heading2}</span> : ""}
                      </h2>
                      {row.heading3 ? (
                        <p
                          className="animated top-title"
                          data-animation-in="fadeInRight"
                          data-delay-in="0.2"
                        >
                          {row.heading3}
                        </p>
                      ) : (
                        ""
                      )}
                      {row.link_button_slug && row.link_button_title ? (
                        row.link_button_slug.indexOf("http") === 0 ? (
                          <a
                            className="button-custom"
                            data-animation-in="fadeInRight"
                            data-delay-in="0.2"
                            href={row.link_button_slug}
                          >
                            {row.link_button_title}
                          </a>
                        ) : (
                          <Link
                            className="button-custom"
                            to={`${row.link_button_slug}`}
                            data-animation-in="fadeInRight"
                            data-delay-in="0.2"
                          >
                            {row.link_button_title}
                          </Link>
                        )
                      ) : (
                        ""
                      )}
                    </div>
                      
                  </div>
                </div>
              );
            })
          )}
        </div>
      </section>
    );
  }
};

export default BannersHome;
