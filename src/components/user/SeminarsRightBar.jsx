import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from 'react-router-dom';
import * as APP_CONSTANTS from "../../constants/Constants";
import * as PAGES_ACTIONS from "../../actions/user/pagesActions";

const SeminarsRightBar = (props) => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(PAGES_ACTIONS.fetch_seminars_list({}));
    }, []);

    let { list, processing, error, errors } = useSelector(state => {
        return {
            list: state.Pages_Reducers.seminars.list.list,
            processing: state.Pages_Reducers.seminars.list.processing,
            error: state.Pages_Reducers.seminars.list.error,
            errors: state.Pages_Reducers.seminars.list.errors,
        }
    });
    //console.log("list",list);
    
    return (
        <div className="similar-news">
            <h3>Other Seminars</h3>
            {
                list.map((row, index) => {
                    if (row.id !== props.details.id && index < 6) {

                        return <div className="simila-news-in" key={`news-item-sidebar-${index}`}>
                            <div className="sim-n-img">
                                <Link to={`/seminars/${row.slug}`}><img src={`${row.thumbnail}`} alt={row.title} /></Link>
                            </div>
                            <div className="sim-n-con">
                                <Link to={`/seminars/${row.slug}`}><h6>{row.title}</h6></Link>
                                <p>{row.entry_type}</p>
                            </div>
                        </div>
                    }
                })
            }

            {
                list.length===0?<span className="noMoreFound"> no more record found!</span>: <Link className="news-btn-all" to={`/seminars`}><h6>View All</h6></Link>  
            }


        </div>
    )
}

export default SeminarsRightBar;
