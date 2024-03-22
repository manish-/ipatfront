import React, { Fragment, useEffect } from 'react';
import Helmet from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as PAGES_ACTIONS from '../actions/user/pagesActions';
import { render_inner_html } from '../utils/html_util';

const DownloadTemplate = (props) => {
    const currentURL = window.location.href;
    const dispatch = useDispatch();

    const { processing, details, itemList, error, errors, message } = useSelector(state => {

        return {
            processing: state.Pages_Reducers.download.processing,
            details: state.Pages_Reducers.download.details,
            itemList: (state.Pages_Reducers.download.details.itemList ? state.Pages_Reducers.download.details.itemList : []),
            error: state.Pages_Reducers.download.error,
            errors: state.Pages_Reducers.download.errors,
            message: state.Pages_Reducers.download.message

        }
    });

    useEffect(() => {
        dispatch(PAGES_ACTIONS.fetch_download_page_details(props.slug));
    }, [props.slug]);

    useEffect(() => {
        window.AOS.init({
            duration: 500
        });
    }, [itemList.length]);

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

                                <div className="download-page">
                                    <div className="container">
                                        <div className="row">
                                            {
                                                itemList.length === 0 ? <div className="col-md-12">0 record founds</div> :

                                                    itemList.map((row, index) => {
                                                        return <div data-aos="fade-right" className="col-md-4" key={`download-item-${index}`}>
                                                            <div className="download-p">
                                                                <img src={`${process.env.PUBLIC_URL}/images/download.png`} />
                                                                <div className="download-c">
                                                                    <p>{row.title}</p>
                                                                    <a href={row.file_url} target="_blank">Download</a>
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
        </Fragment>
    )

}

export default DownloadTemplate;