import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import * as APP_CONSTANTS from "../constants/Constants";
import * as PAGES_ACTIONS from "../actions/user/pagesActions";
import { Helmet } from 'react-helmet';

const SeminarsList = (props) => {

    const dispatch = useDispatch();
    const [filter, setFilter] = useState({ page: 1, itemPerPage: 8 });

    useEffect(() => {
        dispatch(PAGES_ACTIONS.fetch_seminars_list({ ...filter }));
    }, [filter.page]);

    let { list, total_pages, processing, error, errors } = useSelector(state => {

        return {
            total_pages: state.Pages_Reducers.seminars.list.total_pages,
            list: state.Pages_Reducers.seminars.list.list,
            processing: state.Pages_Reducers.seminars.list.processing,
            error: state.Pages_Reducers.seminars.list.error,
            errors: state.Pages_Reducers.seminars.list.errors,
        }
    });

    const go_to_previous_page = () => {
        if (filter.page > 1) {
            setFilter({
                ...filter,
                page: (filter.page - 1)
            });
        }
    }
    const go_to_next_page = () => {
        if (filter.page < total_pages) {
            setFilter({
                ...filter,
                page: (filter.page + 1)
            });
        }

    }

    return (
        <Fragment>
            <Helmet>
                <title>Seminar/Conference</title>
            </Helmet>

            <div className="bread-sec" style={{ backgroundImage: "url(images/banner-company.jpg)" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="head-bread">
                                <h1>Seminar/Conference</h1>
                                <ol className="breadcrumb">
                                    <li><Link to="/">Home</Link></li>
                                    <li>/</li>
                                    <li className="active">Seminar/Conference</li>
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
                            list.length === 0 ? <div className="col-md-12"> no record found!</div> :
                                list.map((row, index) => {

                                    return <div className="col-md-3" key={`seminars-item-${index}`}>
                                        <div className="blog-in">
                                            <div className="blog-img">
                                                <img src={row.thumbnail} alt={row.title} />
                                            </div>
                                            <div className="blog-con">
                                                <Link to={`/seminars/${row.slug}`}><h6>{row.title}</h6></Link>
                                            </div>
                                        </div>
                                    </div>
                                })
                        }

                    </div>
                </div>
            </div>

            {(total_pages && total_pages > 1) ?
                <div className='row'>
                    <div className='col-md-12'>
                        <ul className="pagination justify-content-center">
                            <li className="page-item">
                                {(filter.page < 2) ? <button className="page-link" disabled >Previous</button> : <button className="page-link" onClick={go_to_previous_page}>Previous</button>}

                            </li>
                            <li className="page-item">
                                <span className="page-link">{filter.page}/{total_pages}</span>
                            </li>
                            <li className="page-item">
                                {(filter.page < total_pages) ? <button className="page-link" onClick={go_to_next_page}>Next</button> : <button className="page-link" disabled>Next</button>}

                            </li>
                        </ul>
                    </div>
                </div>
                : ""
            }


        </Fragment>
    )
}

export default SeminarsList;
