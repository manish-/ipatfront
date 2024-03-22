import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import * as APP_CONSTANTS from "../constants/Constants";
import * as PAGES_ACTIONS from "../actions/user/pagesActions";
import { Helmet } from 'react-helmet';

const GalleryPage = (props) => {
    console.log("ClienteleCarousel props", props);
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
    //console.log("seminars list", list);
    list = list.length > 0 ? list : [];


    return <Fragment>
        <Helmet>
            <title>{"Gallary"}</title>
        </Helmet>
        <div className="bread-sec" style={{ backgroundImage: "url(images/banner-company.jpg)" }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="head-bread">
                            <h1>Gallery</h1>
                            <ol className="breadcrumb">
                                <li><Link to="/">Home</Link></li>
                                <li>/</li>
                                <li className="active">Gallery</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="gallery-page">
            <div className="container">
                <div className="row">

                    {
                        list.length === 0 ? "" :
                            list.map((row, index) => {
                                return <div className="col-md-3" key={`gallery-item-${index}`}>
                                    <div className="img-box1">
                                        <a data-fancybox="gallery" href={row.thumbnail}>
                                            <img src={row.thumbnail} alt={row.title} />
                                            <div className="over-lay">
                                                <span><i className="fa fa-arrows-alt"></i></span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            })
                    }


                </div>
            </div>
        </div>

    </Fragment>


}

export default GalleryPage;