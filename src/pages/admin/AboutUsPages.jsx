import React, { Fragment, useEffect, useState } from "react";
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from 'react-router';
import * as CONSTANTS from '../../constants/Constants';
import * as ABOUTUS_PAGES_ACTIONS from '../../actions/admin/aboutUsPagesActions';
import { NavLink } from "react-router-dom";


const AboutUsPages = (props) => {

    const dispatch = useDispatch();
    const COL_SPAN = 5;
    const { processing, list, error, errors } = useSelector(states => {
        return {
            processing: states.AboutUsPages_Reducers.processing,
            list: states.AboutUsPages_Reducers.list,
            error: states.AboutUsPages_Reducers.error,
            errors: states.AboutUsPages_Reducers.errors
        }
    })

    const [filters, setFilter] = useState({
        itemPerPage: 2,
        page: 1,
        order: "asc",
        orderBy: "title"
    });

    useEffect(() => {
        dispatch(ABOUTUS_PAGES_ACTIONS.fetch_list(filters));
    }, [filters.itemPerPage, filters.page, filters.order, filters.orderBy]);

    const sortingHandler = (orderBy) => {
        if (filters.orderBy === orderBy) {
            setFilter({
                ...filters,
                order: (filters.order === "asc" ? "desc" : "asc")
            });
        } else {
            setFilter({
                ...filters,
                order: "asc",
                orderBy: orderBy,
                page: 1
            });
        }
    }

    //console.log("list", list);

    return <Fragment>
        <Helmet>
            <title>AboutUsPages</title>
        </Helmet>

        <div className="content-header">
            <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-6">
                        <h1 className="m-0">Starter Page</h1>
                    </div>
                    <div className="col-sm-6">
                        <ol className="breadcrumb float-sm-right">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item active">Starter Page</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>

        <div className="content">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">DataTable with default features</h3>
                            </div>
                            <div className="card-body">
                                <table id="example1" className="table table-bordered table-striped">
                                    <thead>
                                        <tr>
                                            <th>
                                                Banner
                                            </th>
                                            <th>
                                                Title
                                                <i className={`fa fa-2x ${filters.orderBy === 'title' ? (filters.order === "asc" ? "fa-sort-down" : "fa-sort-up") : "fa-sort"}`}
                                                    onClick={() => sortingHandler("title")}
                                                ></i>
                                            </th>
                                            <th>
                                                Slug
                                                <i className={`fa fa-2x ${filters.orderBy === 'slug' ? (filters.order === "asc" ? "fa-sort-down" : "fa-sort-up") : "fa-sort"}`}
                                                    onClick={() => sortingHandler("slug")}
                                                ></i>
                                            </th>
                                            <th>
                                                Status
                                                <i className={`fa fa-2x ${filters.orderBy === 'status' ? (filters.order === "asc" ? "fa-sort-down" : "fa-sort-up") : "fa-sort"}`}
                                                    onClick={() => sortingHandler("status")}
                                                ></i>
                                            </th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            processing ? <tr><td colSpan={COL_SPAN}>Loading...</td></tr> : list.length === 0 ? <tr><td colSpan={COL_SPAN}>0 record founds</td></tr> : list.map((row, index) => {
                                                return <tr key={`page_table_row_item_${index}`}>
                                                    <td>
                                                        <img src={row.banner} alt={row.title} className="table-thumbnail" />
                                                    </td>
                                                    <td>{row.title}</td>
                                                    <td>{row.slug}</td>
                                                    <td>{row.status}</td>
                                                    <td>

                                                        <NavLink className="btn btn-sm btn-info" to={"/"}>
                                                            <i className="fa fa-eye"></i>
                                                        </NavLink>
                                                    </td>
                                                </tr>
                                            })
                                        }


                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <th>Banner</th>
                                            <th>Title</th>
                                            <th>Slug</th>
                                            <th>Status</th>
                                            <th>Actions</th>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>


    </Fragment>;
};

export default AboutUsPages;