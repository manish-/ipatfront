import React, { Fragment, useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import * as PAGES_ACTIONS from '../actions/user/pagesActions';
import { render_inner_html, ucwords, titleToSlug, slugToTitle } from '../utils/html_util';
import NewsCarousel from '../components/user/NewsCarousel';
import { MAP_PARTS } from '../constants/Map_Parts';
import { useNavigate } from 'react-router';

const ProjectsTemplate = (props) => {
    const currentURL = window.location.href;
    const { sector, state } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [selectedLocation, setSelectedLocation] = useState('UTTAR PRADESH');
    const [searchFilter, setSearchFilter] = useState({
        sector: (sector ? sector : props.slug),
        projectType: 'all',
        district: 'all',
        searchText: ''
    });

    const [pagination, setPagination] = useState(10);
    const [filteredList, setFilteredList] = useState([]);
    const [district, setDistrict] = useState([]);
    const [projectTypes, setProjectTypes] = useState([]);
    const [project_case_study, set_project_case_study] = useState({
        is_case_study_available: 'no',
        case_study: ''
    });

    let { processing, details, list_by, sectors_list, error, errors, message } = useSelector(state => {
        return {
            processing: state.Pages_Reducers.projects.details.processing || state.Pages_Reducers.projects.list_by.processing,
            details: state.Pages_Reducers.projects.details.details,
            list_by: state.Pages_Reducers.projects.list_by.list || [],
            sectors_list: state.Pages_Reducers.projects.sectors.list,
            error: state.Pages_Reducers.projects.details.error,
            errors: state.Pages_Reducers.projects.details.errors,
            message: state.Pages_Reducers.projects.details.message

        }
    });

    list_by = list_by ? list_by : [];

    useEffect(() => {
        let filteredList = list_by;

        if (searchFilter.district !== 'all') {
            let f1 = filteredList.filter((row) => row.district.toLowerCase() === searchFilter.district.toLowerCase());
            filteredList = f1;
        }

        if (searchFilter.projectType !== 'all') {
            let f1 = filteredList.filter((row) => row.project_type_id == searchFilter.projectType);
            filteredList = f1;
        }
        if (searchFilter.searchText.length > 0) {
            let f1 = filteredList.filter((row) => {
                if (row.short_content.toLowerCase().search(searchFilter.searchText.toLowerCase()) > -1) {
                    return true;
                } else {
                    return false;
                }
            }
            );
            filteredList = f1;
        }
        setFilteredList(filteredList);

    }, [searchFilter.district, searchFilter.projectType, searchFilter.searchText]);

    useEffect(() => {
        if (sector) {
            dispatch(PAGES_ACTIONS.fetch_project_page_content(sector));
        } else {
            dispatch(PAGES_ACTIONS.fetch_project_page_content(props.slug));
        }
        if (state) {
            setSelectedLocation(ucwords(slugToTitle(state)));
        }
    }, [props.slug, state]);

    useEffect(() => {
        if (details.statesList) {
            if (details.statesList.length > 0) {
                // window.$('#a32').tooltip('show');
            }
        }
    }, [details]);

    useEffect(() => {
        if (selectedLocation && details.id) {
            dispatch(PAGES_ACTIONS.fetch_project_list_by({ projectId: details.id, state: selectedLocation }));
        }
    }, [selectedLocation, details.id]);

    useEffect(() => {
        window.AOS.init({
            duration: 500
        });
        setTimeout(() => {
            window.$('[data-toggle="tooltip"]').tooltip({
                'placement': 'left'
            });
        }, 2000);

        dispatch(PAGES_ACTIONS.fetch_project_sectors_list());
    }, []);

    useEffect(() => {
        let dist = [];
        let project_types = [];
        if (list_by.length > 0) {

            list_by.forEach((row, index) => {
                //console.log("row", row);
                if (!dist.includes(row.district)) {
                    dist.push(row.district);
                }
                let i = 0;
                for (i = 0; i < project_types.length; i++) {
                    if (project_types[i].id == row.project_type_id) {
                        break;
                    }
                }
                if (i == project_types.length) {
                    project_types.push({ id: row.project_type_id, name: row.project_type });
                }
            });
        }
        //console.log("dist", dist);
        setDistrict([...dist]);
        setProjectTypes([...project_types]);
        setFilteredList(list_by);
        window.$('.tooltip').tooltip('hide');
        window.$('.mapActive').tooltip('show');

        window.$(".map-sec").on("mouseover", ".enabled", function (e) {
            window.$('.tooltip').tooltip('hide');
            window.$('#' + e.target.id).tooltip('show');
            window.$('.mapActive').tooltip('show');
            console.log(e.target.id);
            // window.$('.mapActive').tooltip('show');
        });
        return () => {
            window.$('.tooltip').tooltip('hide');
        }

    }, [list_by.length, processing]);

    const mapOnClickHandler = (state) => {
        // window.$(".tooltip").empty();
        if (sector) {
            navigate(`/${sector}/${titleToSlug(state)}`);
        } else {
            navigate(`/${props.slug}/${titleToSlug(state)}`);
        }
    }

    const showCaseStudyModel = (row) => {
        if (row.is_case_study_available === "yes") {
            set_project_case_study({
                is_case_study_available: 'yes',
                case_study: row.case_study
            });
        } else {
            set_project_case_study({
                is_case_study_available: 'no',
                case_study: ''
            });
        }

    }

    return (
        <Fragment>
            {
                processing ? "" :
                    (
                        error ? <p className='btn btn-danger'>{message}</p> :
                            <Fragment>
                                <Helmet>
                                    <title>{details.meta_title ? details.meta_title : "----"}</title>
                                    <meta name="description" content={details.meta_description ? details.meta_description : ''} />
                                    <meta name="keywords" content={details.meta_keywords ? details.meta_keywords : ''} />
                                    <link rel="canonical" href={`${currentURL}`} />
                                </Helmet>
                                <div className={`modal form-modal fade ${project_case_study.is_case_study_available === "yes" ? "show" : ""}`} style={{ display: `${project_case_study.is_case_study_available === "yes" ? "block" : "none"}`, opacity: `${project_case_study.is_case_study_available === "yes" ? "1" : "0"}` }} id="project_case_study">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h4 className="modal-title">Case Study</h4>
                                                <button type="button" className="close" onClick={(e) => set_project_case_study({
                                                    is_case_study_available: 'no',
                                                    case_study: ''
                                                })}>&times;</button>
                                            </div>
                                            <div className="modal-body" style={{ overflowX: "scroll", overflowY: "scroll", height: "80vh" }} dangerouslySetInnerHTML={render_inner_html(project_case_study.case_study)}>
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
                                {/*<div dangerouslySetInnerHTML={render_inner_html(details.content)}></div>*/}

                                <div className="home-sec5 project-page">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-6" data-aos="fade-left">
                                                <div className="map-sec">
                                                    <svg baseProfile="tiny" fill="#ececec" height="550" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".1" version="1.2" viewBox="0 0 1000 1136" width="550" xmlns="http://www.w3.org/2000/svg">
                                                        <g id="combined">
                                                            {
                                                                MAP_PARTS.map((row, index) => {
                                                                    return <path
                                                                        key={`map-part-${index}`}
                                                                        data-toggle="tooltip"
                                                                        title={row.title}
                                                                        d={row.d}
                                                                        id={row.id}
                                                                        name={row.name}
                                                                        className={selectedLocation.toLowerCase() === row.title.toLowerCase() ? "enabled mapActive" : "enabled"}
                                                                        onClick={e => mapOnClickHandler(row.name)}>
                                                                    </path>
                                                                })
                                                            }
                                                        </g>
                                                        <g id="points">
                                                            <circle className="8.270456392188589|69.64751777648942" cx="50.9" cy="1082.7" id="0">
                                                            </circle>
                                                            <circle className="20.400061356601594|84.26020774841326" cx="549.9" cy="654.3" id="1">
                                                            </circle>
                                                            <circle className="35.562067562117846|95.95035972595234" cx="949.1" cy="65.3" id="2">
                                                            </circle>
                                                        </g>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="col-md-6" data-aos="fade-down">
                                                <div className="home-sec5-in">
                                                    <h2>{details.title ? details.title : "-----"}</h2>

                                                    <div className='form-group'>
                                                        <select className='custom-select' name="sector_select" id="sector_select" onChange={e => navigate(`/${e.target.value}`)}>
                                                            {
                                                                sectors_list.map((row, index) => {
                                                                    if ((sector ? sector : props.slug) == row.slug) {
                                                                        return <option key={`sector_select_option_${index}`} value={`${row.slug}`} selected >{row.title}</option>
                                                                    } else {
                                                                        return <option key={`sector_select_option_${index}`} value={`${row.slug}`} >{row.title}</option>
                                                                    }
                                                                })
                                                            }
                                                        </select>
                                                    </div>
                                                    <h6>{selectedLocation ? selectedLocation : "click on map"}</h6>
                                                    <div className='row'>
                                                        <div className='col-md-6'>
                                                            <div className='form-group'>
                                                                <select className='custom-select' name="filter_district" id="filter_district" onChange={(e) => setSearchFilter({ ...searchFilter, district: e.target.value })}>
                                                                    <option value="all">All district</option>
                                                                    {
                                                                        district.map((row, index) => {
                                                                            return <option key={`district_filter_option_${index}`} value={`${row}`}>{row}</option>
                                                                        })
                                                                    }
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className='col-md-6'>
                                                            <div className='form-group'>
                                                                <select className='custom-select' name="filter_projectType" id="filter_projectType" onChange={(e) => setSearchFilter({ ...searchFilter, projectType: e.target.value })} >
                                                                    <option value="all">All project type</option>
                                                                    {
                                                                        projectTypes.map((row, index) => {
                                                                            return <option key={`project_type_filter_option_${index}`} value={`${row.id}`}>{row.name}</option>
                                                                        })
                                                                    }
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className='col-md-12'>
                                                            <div className='form-group'>
                                                                <input type="text" className='form-control' style={{ marginBottom: "20px" }} name="search" id="search" placeholder='search text...' value={searchFilter.searchText} onChange={(e) => setSearchFilter({ ...searchFilter, searchText: e.target.value })} />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {filteredList.length === 0 ? <p className='text-danger'>No Record Found</p> :
                                                        <Fragment>
                                                            <div className="list-map-sec">
                                                                <ul className="marquee-sec">
                                                                    {
                                                                        filteredList.map((row, index) => {

                                                                            if (pagination > 0) {
                                                                                if (index < pagination) {
                                                                                    return <li key={`list-project-item-${index}`}>
                                                                                        <span>{index + 1}</span>

                                                                                        <div dangerouslySetInnerHTML={render_inner_html(row.short_content)}></div>
                                                                                        <Link to={`/project-details/${row.id_text}`} style={{ backgroundColor: "transparent", color: "#007bff" }}>Detail</Link>
                                                                                        {row.is_case_study_available === "yes" ? <button type="button" className='btn btn-sm btn-link' onClick={e => showCaseStudyModel(row)}>Case Study</button> : ""}

                                                                                    </li>
                                                                                }
                                                                            } else {
                                                                                return <li key={`list-project-item-${index}`}>
                                                                                    <span>{index + 1}</span>

                                                                                    <div dangerouslySetInnerHTML={render_inner_html(row.short_content)}></div>
                                                                                    <Link to={`/project-details/${row.id_text}`} style={{ backgroundColor: "transparent", color: "#007bff" }}>Detail</Link>
                                                                                    {row.is_case_study_available === "yes" ? <button type="button" className='btn btn-sm btn-link' onClick={e => showCaseStudyModel(row)}>Case Study</button> : ""}

                                                                                </li>
                                                                            }
                                                                        })
                                                                    }
                                                                </ul>

                                                            </div>
                                                            {
                                                                filteredList.length > 10 ?

                                                                    <div className="pagination-sec">
                                                                        <ul className="pagination">
                                                                            <li className={`page-item ${pagination == 10 ? "active" : ""}`}><button className="page-link" type="button" onClick={e => setPagination(10)}>10</button></li>
                                                                            <li className={`page-item ${pagination == 20 ? "active" : ""}`}><button className="page-link" type="button" onClick={e => setPagination(20)}>20</button></li>

                                                                            <li className={`page-item ${pagination == -1 ? "active" : ""}`}><button className="page-link" type="button" onClick={e => setPagination(-1)}>All</button></li>
                                                                        </ul>
                                                                    </div>
                                                                    : ""}
                                                        </Fragment>
                                                    }

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="home-sec8">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <h2>Our News</h2>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <NewsCarousel />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </Fragment>
                    )
            }
        </Fragment>
    )
}

export default ProjectsTemplate;