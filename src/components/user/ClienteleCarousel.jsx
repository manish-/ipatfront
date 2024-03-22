import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as APP_CONSTANTS from "../../constants/Constants";
import * as PAGES_ACTIONS from "../../actions/user/pagesActions";
import { render_inner_html } from '../../utils/html_util';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

const ClienteleCarousel = (props) => {
    // //console.log("ClienteleCarousel props", props);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(PAGES_ACTIONS.fetch_clientele_page_details('clientele'));
    }, []);

    const { details, processing, error, errors, project_list, project_list_loaded, project_client_details } = useSelector(state => {
        return {
            details: state.Pages_Reducers.clientele.details,
            processing: state.Pages_Reducers.clientele.processing,
            error: state.Pages_Reducers.clientele.error,
            errors: state.Pages_Reducers.clientele.errors,
            project_list: state.Pages_Reducers.clientele_project_list.list,
            project_list_loaded: state.Pages_Reducers.clientele_project_list.dataLoaded,
            project_client_details: state.Pages_Reducers.clientele_project_list.details,
        }
    });


    let list = details.pageItems ? details.pageItems.filter(row => row.display_on_homepage === "yes") : [];

    const [items, setItems] = useState([]);
    const [totalSlide, setTotalSlide] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(1);
    let itemPerSlide = 9;

    const [filter, setFilter] = useState(10);
    const [current_page, set_current_page] = useState(1);
    const total_item = 18;

    useEffect(() => {
        // console.log('list', list);
        setItems([...list]);
        setTotalSlide(Math.ceil(list.length / itemPerSlide));
    }, [list.length]);


    useEffect(() => {
        window.$(document).ready(function () {
            window.AOS.init({
                duration: 500
            });
        });

    }, [items.length, totalSlide]);


    function showProjectListPopup(e) {
        dispatch(PAGES_ACTIONS.fetch_clientele_project_list(e.target.attributes['data-id'].value));
    }

    return (
        <Fragment>
            {/* <div className="owl-carousel owl-theme client-logo" id="client-logo">

            </div> */}

            <OwlCarousel className='owl-theme' loop margin={10} items={1}>

                {
                    totalSlide > 0 && new Array(totalSlide).fill(1).map((row, index) => {
                        return <div className='item client-logo-item' key={`client-logo-item-${index}`} >
                            <ul className="client-logo-ul">
                                {
                                    items.map((column, ind) => {
                                        if (
                                            (ind < ((itemPerSlide * index) + itemPerSlide))
                                            &&
                                            (ind >= ((itemPerSlide * index)))
                                        ) {
                                            return <li key={`client-logo-item-${index}-${ind}`} className="client-logo-li">
                                                <img src={`${column.thumbnail}`} alt={`${column.alt}`}  style={{ cursor: "pointer" }} />
                                                <div className='info'>
                                                    <i onClick={showProjectListPopup} data-id={column.id} className="fa fa-eye view-icon"></i>
                                            <h4>{column.alt}</h4>
                                        </div>
                                            </li>
                                        }
                                    })
                                }
                            </ul>
                        </div>
                    })
                }

            </OwlCarousel>

            {/* <Carousel>
                <div>
                    <img src="http://react-responsive-carousel.js.org/assets/1.jpeg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="http://react-responsive-carousel.js.org/assets/2.jpeg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="http://react-responsive-carousel.js.org/assets/3.jpeg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel> */}
        </Fragment>
    );

}

export default ClienteleCarousel;