import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import * as APP_CONSTANTS from "../../constants/Constants";
import * as PAGES_ACTIONS from "../../actions/user/pagesActions";


const NewsCarousel = (props) => {
    // //console.log("ClienteleCarousel props", props);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(PAGES_ACTIONS.fetch_news_list());
    }, []);

    let { list, processing, error, errors } = useSelector(state => {
        return {
            list: state.Pages_Reducers.news.list.list,
            processing: state.Pages_Reducers.news.list.processing,
            error: state.Pages_Reducers.news.list.error,
            errors: state.Pages_Reducers.news.list.errors,
        }
    });
    
    list = list.filter(row => row.display_on_homepage === "yes").length > 0 ? list.filter(row => row.display_on_homepage === "yes") : [];
    
    useEffect(() => {
        window.AOS.init({
            duration: 500
        });
        if (list.length > 0) {
            window.$('#blog-sec').owlCarousel({
                loop: false,
                margin: 10,
                dots: true,
                nav: true,
                responsiveClass: true,
                autoplay: false,
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
                }
            });
        }

    }, [list.length]);


    return (
        <Fragment>
            {
                list.length === 0 ? "" :

                    <div className="owl-carousel owl-theme blog-sec" id="blog-sec">
                        {
                            list.map((row, index) => {
                                return <div className="item" key={`our-news-item-${index}`}>
                                    <div className="blog-in">
                                        <div className="blog-img">
                                            <img src={row.thumbnail} />
                                        </div>
                                        <div className="blog-con">
                                            <h6>
                                                <Link to={`/news/${row.slug}`}>{row.title}</Link>
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                    </div>
            }
        </Fragment>
    );

}

export default NewsCarousel;