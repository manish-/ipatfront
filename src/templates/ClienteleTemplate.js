import React, { Fragment, useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as PAGES_ACTIONS from '../actions/user/pagesActions';
import { render_inner_html } from '../utils/html_util';

const ClienteleTemplate = (props) => {
    const currentURL = window.location.href;
    const dispatch = useDispatch();

    const fadeArr = ["fade-up-right", "fade-left", "fade-right", "fade-down", "fade-up"];

    const [filter, setFilter] = useState(10);
    const [current_page, set_current_page] = useState(1);
    const [filteredPageItems, setFilteredPageItems] = useState([]);
    const [search_text, set_search_text] = useState('');

    const total_item = 20;

    const { processing, details, pageItems, error, errors, message, project_list, project_list_loaded, project_client_details } = useSelector(state => {

        return {
            processing: state.Pages_Reducers.clientele.processing,
            details: state.Pages_Reducers.clientele.details,
            pageItems: (state.Pages_Reducers.clientele.details.pageItems ? state.Pages_Reducers.clientele.details.pageItems : []),
            error: state.Pages_Reducers.clientele.error,
            errors: state.Pages_Reducers.clientele.errors,
            message: state.Pages_Reducers.clientele.message,
            project_list: state.Pages_Reducers.clientele_project_list.list,
            project_list_loaded: state.Pages_Reducers.clientele_project_list.dataLoaded,
            project_client_details: state.Pages_Reducers.clientele_project_list.details,

        }
    });

    useEffect(() => {
        dispatch(PAGES_ACTIONS.fetch_clientele_page_details(props.slug));
    }, [props.slug]);

    useEffect(() => {
        if (search_text.length > 0) {
            setFilteredPageItems([...(pageItems.filter((row) => {
                if (row.alt.toLowerCase().trim().search(search_text.toLowerCase()) > -1) {
                    return true;
                } else {
                    return false;
                }
            }))]);
        } else {
            setFilteredPageItems([...pageItems]);
        }
    }, [pageItems.length, search_text]);
    useEffect(() => {
        window.AOS.init({
            duration: 500
        });
        set_current_page(1);
    }, [filteredPageItems.length]);

    const getRandomAOS = () => {
        let num = Math.floor((Math.random() * (fadeArr.length - 1)) + 1);
        return fadeArr[num];
    }

    function showProjectListPopup(e) {
        dispatch(PAGES_ACTIONS.fetch_clientele_project_list(e.target.attributes['data-id'].value));
    }

    function go_to_previous_page() {

        if (current_page > 1)
            set_current_page(current_page - 1);
    }
    function go_to_next_page() {
        let total_page = Math.ceil(filteredPageItems.length / total_item);

        if (current_page < total_page)
            set_current_page(current_page + 1);
    }

    if (processing) {
        return <p></p>
    } else if (error) {
        return <p className='btn btn-danger'>{message}</p>;
    } else {
        return <Fragment>
            <Helmet>
                <title>{details.meta_title ? details.meta_title : "----"}</title>
                <meta name="description" content={details.meta_description ? details.meta_description : ''} />
                <meta name="keywords" content={details.meta_keywords ? details.meta_keywords : ''} />
                <link rel="canonical" href={`${currentURL}`} />
            </Helmet>

            <div className={`modal form-modal fade ${project_list_loaded === true ? "show" : ""}`} style={{ display: `${project_list_loaded === true ? "block" : "none"}`, opacity: `${project_list_loaded === true ? "1" : "0"}` }} id="project_case_study">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">{project_client_details.alt ? project_client_details.alt : "----"}'s Projects</h4>
                            <button type="button" className="close" onClick={(e) => { dispatch(PAGES_ACTIONS.clear_clientele_project_list()) }}>&times;</button>
                        </div>
                        <div className="modal-body" style={{ overflowX: "scroll", overflowY: "scroll", height: "85vh" }}>
                            <ul className='list-group'>
                                {
                                    project_list.length === 0 ?

                                        <li className='list-group-item list-group-item-danger'>0 record found</li> :

                                        project_list.map((project, index) => {
                                            if (filter > 0) {
                                                if (index < filter) {
                                                    return <li className='list-group-item' key={`client_project_row_${index}`}>
                                                        <div dangerouslySetInnerHTML={render_inner_html(project.short_content)}></div>
                                                        <Link to={`/project-details/${project.id_text}`} style={{ backgroundColor: "transparent", color: "#007bff" }}>Detail</Link>
                                                    </li>
                                                }
                                            } else {
                                                return <li className='list-group-item' key={`client_project_row_${index}`}>
                                                    <div dangerouslySetInnerHTML={render_inner_html(project.short_content)}></div>
                                                    <Link to={`/project-details/${project.id_text}`} style={{ backgroundColor: "transparent", color: "#007bff" }}>Detail</Link>
                                                </li>
                                            }
                                        })
                                }
                            </ul>
                            {
                                project_list.length > 10 ?

                                    <div className="pagination-sec">
                                        <ul className="pagination">
                                            <li className={`page-item ${filter == 10 ? "active" : ""}`}><button className="page-link" type="button" onClick={e => setFilter(10)}>10</button></li>
                                            <li className={`page-item ${filter == 20 ? "active" : ""}`}><button className="page-link" type="button" onClick={e => setFilter(20)}>20</button></li>

                                            <li className={`page-item ${filter == -1 ? "active" : ""}`}><button className="page-link" type="button" onClick={e => setFilter(-1)}>All</button></li>
                                        </ul>
                                    </div>
                                    : ""}
                        </div>
                    </div>
                </div>
            </div>

            <div className="bread-sec" style={{ backgroundImage: `url(${details.banner})` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="head-bread">
                                <h1>{details.title ? details.title : "----"}</h1>
                                <ol className="breadcrumb">
                                    <li><Link to={"/"}>Home</Link></li>
                                    <li>/</li>
                                    <li className="active">{details.title ? details.title : "----"}</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="client-page">
                <div className="container">
                    <div className="row mb-2">
                        <div className="col-md-6">
                            <h2>Our Trustworthy Clientele</h2>
                        </div>
                        <div className="col-md-6">
                            <form onSubmit={(e) => e.preventDefault()}>
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="search here ..." name="search_text" id="search_text" value={search_text} onChange={e => set_search_text(e.target.value)} />
                                    <div className="input-group-append">
                                        <button className="btn btn-danger" type="button" disabled={search_text.length === 0} onClick={e => set_search_text("")}>
                                            <i className="fa fa-trash"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="row client-logo-ul">
                        {
                            filteredPageItems.map((item, index) => {
                                if ((index === 0 && current_page === 1) || (index >= (((current_page - 1) * total_item)) && index < (current_page * total_item))) {
                                    return <div className="col-md-2 client-logo-li" key={index} data-aos={getRandomAOS()}>
                                        <img className='client-logo' src={item.thumbnail} alt={item.alt} />
                                        <div className='info'>
                                            <i data-id={item.id} onClick={showProjectListPopup} className="fa fa-eye view-icon"></i>
                                            <h4>{item.alt}</h4>
                                        </div>
                                    </div>
                                }
                            })
                            /* pageItems.map((item, index) => (
                                 <div className="col-md-2" key={index} data-aos={getRandomAOS()}>
                                     <img className='client-logo' src={item.thumbnail} alt={item.alt} data-id={item.id} onClick={showProjectListPopup} />
                                 </div>
                             ))
                             */
                        }
                        {
                            filteredPageItems.length == 0 ? <div className="col-md-12"><p className='text-light bg-danger p-2'>0 record founds</p></div> : ""
                        }
                    </div>
                    {
                        Math.ceil(filteredPageItems.length / total_item) > 0 ?

                            <div className='row mt-3'>
                                <div className='col-md-12'>
                                    <ul className="pagination justify-content-center">
                                        <li className="page-item">
                                            <button className="page-link" onClick={go_to_previous_page}>Previous</button>
                                        </li>
                                        <li className="page-item">
                                            <span className="page-link">{current_page}/{Math.ceil(filteredPageItems.length / total_item)}</span>
                                        </li>
                                        <li className="page-item">
                                            <button className="page-link" onClick={go_to_next_page}>Next</button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            : ""}
                </div>
            </div>
        </Fragment>
    }
}

export default ClienteleTemplate;