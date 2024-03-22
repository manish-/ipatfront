import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from 'react-router-dom';
import * as APP_CONSTANTS from "../../constants/Constants";
import * as PAGES_ACTIONS from "../../actions/user/pagesActions";


const SeminarsHome = (props) => {
    // //console.log("ClienteleCarousel props", props);
    const fadeArr = ["fade-left", "fade-right"];
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(PAGES_ACTIONS.fetch_seminars_list({}));
    }, []);

    let { list, processing, error, errors } = useSelector(state => {
        return {
            list: state.Pages_Reducers.seminars.list.list,
            processing: state.Pages_Reducers.seminars.processing,
            error: state.Pages_Reducers.seminars.error,
            errors: state.Pages_Reducers.seminars.errors,
        }
    });
    list = list.filter(row => row.display_on_homepage === "yes").length > 0 ? list.filter(row => row.display_on_homepage === "yes") : [];


    useEffect(() => {
        window.AOS.init({
            duration: 500
        });
        if (list.length > 0) {
            window.$('#seminar-sec').owlCarousel({
                loop: list.length > 3 ? true : false,
                margin: 10,
                dots: true,
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
                }
            });

        }


    }, [list.length]);

    if (list.length === 0) {
        return null;
    } else {

        return <Fragment>

            {
                list.length > 0 ? (

                    <div className="owl-carousel owl-theme seminar-sec" id="seminar-sec">
                        {
                            list.map((row, index) => {
                                return <div className="item" key={`seminar-item-${index}`}>
                                    <div className="blog-in">
                                        <div className="blog-img">
                                            <img src={row.thumbnail} />
                                        </div>
                                        <div className="blog-con">
                                            <h6>
                                                <Link to={`/seminars/${row.slug}`}>{row.title}</Link>
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                    </div>) : ""
            }
        </Fragment>
        // return <div className="container-fluid">
        //     <div className="row">

        //         {
        //             list.length === 0 ? <div className="col-md-3">no record found!</div> :
        //                 list.map((row, index) => {
        //                     if (index < 4) {
        //                         return <div className="col-md-3" key={`seminar-item-${index}`} data-aos={(index % 2 == 0 ? fadeArr[0] : fadeArr[1])} data-aos-offset="200" data-aos-easing="ease-in-sine">
        //                             <div className="gal-box">
        //                                 <Link to={`/seminars/${row.slug}`}>
        //                                     <img src={row.thumbnail} alt={row.title} />
        //                                 </Link>
        //                             </div>
        //                         </div>
        //                     } else {
        //                         return ""
        //                     }
        //                 })
        //         }
        //     </div>
        // </div>

    }


}

export default SeminarsHome;