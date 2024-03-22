import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as PAGES_ACTIONS from '../../actions/user/pagesActions';
import { render_inner_html, titleToSlug } from '../../utils/html_util';
import { useNavigate } from 'react-router';

const OurProjectsHome = ({ selectedLocation, ...props }) => {

  const [projectIndex, setProjectIndex] = useState(-1);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let { processing, list_home } = useSelector(state => {
    return {
      processing: state.Pages_Reducers.projects.list_home.processing,
      list_home: state.Pages_Reducers.projects.list_home.list,
      error: state.Pages_Reducers.projects.details.error,
      errors: state.Pages_Reducers.projects.details.errors,
      message: state.Pages_Reducers.projects.details.message

    }
  });

  useEffect(() => {
    if (selectedLocation) {
      setProjectIndex(-1);
      dispatch(PAGES_ACTIONS.fetch_project_list_home(selectedLocation));
    }
  }, [selectedLocation]);

  list_home = list_home ? list_home : [];

  let myTimeout = null;

  useEffect(() => {

    let newIndex = (projectIndex < (list_home.length - 1)) ? (projectIndex + 1) : 0;
    setProjectIndex(newIndex);
    /*
    myTimeout = setTimeout(() => {
      setProjectIndex(newIndex);
    }, 7000);*/
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
  }, [list_home.length, processing]);

  const projectIndexHandler = (value) => {
    // clearTimeout(myTimeout);
    if (value > 0) {
      let newIndex = (projectIndex < (list_home.length - 1)) ? (projectIndex + 1) : 0;
      setProjectIndex(newIndex);
    } else {
      let newIndex = (projectIndex > 0) ? (projectIndex - 1) : (list_home.length - 1);
      setProjectIndex(newIndex);
    }

  }

  const redirect_to_project_details = (url) => {
    navigate(url);
  }

  return (
    <div className="home-sec5-in">
      <h2>Our Projects </h2>
      <h5>{selectedLocation} </h5>
      {
        (processing || list_home.length === 0 || projectIndex < 0) ? ((list_home.length === 0 || projectIndex < 0) ? <span className='text-danger'>no record found</span> : <span className='text-danger'>loading..</span>) : <Fragment>
          <h6 style={{ marginBottom: "10px" }}>{list_home[projectIndex].title}</h6>
          <div className='next-back-button-panel' style={{ marginBottom: "10px" }}><button className="btn btn-sm btn-light" onClick={e => projectIndexHandler(-1)} disabled={list_home[projectIndex].projects.length > 0 ? false : true}><i className='fa fa-chevron-left'></i></button><button className="btn btn-sm btn-light" onClick={e => projectIndexHandler(1)} disabled={list_home[projectIndex].projects.length > 0 ? false : true}><i className='fa fa-chevron-right'></i></button></div>
          <ul>
            {
              list_home[projectIndex].projects ?
                list_home[projectIndex].projects.length === 0 ? "" : <Fragment>
                  {
                    list_home[projectIndex].projects.map((row, index) => {
                      return <li key={`subproject${index}`} dangerouslySetInnerHTML={render_inner_html(row.short_content)} onClick={() => redirect_to_project_details(`/project-details/${row.id_text}`)}></li>
                    })
                  }
                </Fragment>
                : <span className='text-danger'>no record found</span>
            }
          </ul>
          <div className="home-sec5-btn">
            <Link to={`/${list_home[projectIndex].slug}/${titleToSlug(selectedLocation)}`}>All Projects</Link>
          </div>
        </Fragment>
      }
    </div>
  )
}

export default OurProjectsHome;
