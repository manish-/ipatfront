import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from 'react-router-dom';
import * as APP_CONSTANTS from "../constants/Constants";
import * as PAGES_ACTIONS from "../actions/user/pagesActions";

const NewsList = (props) => {

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

    return (
        <Fragment>
            <div className="bread-sec" style={{ backgroundImage: "url(images/banner-company.jpg)" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="head-bread">
                                <h1>News</h1>
                                <ol className="breadcrumb">
                                    <li><Link to="/">Home</Link></li>
                                    <li>/</li>
                                    <li className="active">News</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="home-sec8">
                <div className="container">
                    <div className="row">
                        {
                            list.length===0?<div className="col-md-12"> no record found!</div>:
                            list.map((row, index) => {

                                return <div className="col-md-4" key={`news-item-${index}`}>
                                    <div className="blog-in">
                                        <div className="blog-img">
                                            <img src={row.thumbnail} alt={row.title} />
                                        </div>
                                        <div className="blog-con">
                                            <Link to={`/news/${row.slug}`}><h6>{row.title}</h6></Link>
                                        </div>
                                    </div>
                                </div>
                            })
                        }

                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default NewsList;
