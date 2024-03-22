import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as UTILS_EVENTS from '../../actions/user/utilsActions';
import { render_inner_html, ucwords } from '../../utils/html_util';

const HomeEventPopUp = (props) => {

    const dispatch = useDispatch();
    const [modalOpen, setModalOpen] = useState(false);

    let { processing, details, error, errors, message } = useSelector(state => {
        return {
            processing: state.Utils_Reducers.event.processing,
            error: state.Utils_Reducers.event.error,
            errors: state.Utils_Reducers.event.errors,
            details: state.Utils_Reducers.event.details,
            message: state.Utils_Reducers.event.message

        }
    });
    // //console.log("details", details);

    useEffect(() => {
        dispatch(UTILS_EVENTS.fetch_home_event_popup_details());
    }, []);

    useEffect(() => {
        //console.log("details", details.id);
        if (modalOpen == false && props.popupShowed === false && details.id != null) {
            setTimeout(() => {
                setModalOpen(true);
                // props.setPopupShowed(true);
                window.$("#homePopupModal").modal("show");
            }, 2000);
        }
    }, [details.id]);

    details = details ? details : { id: null };

    return (

        (details.id != undefined && details.id != null) ?
            <div className="modal form-modal fade in" id="homePopupModal">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">

                        <div className="modal-header">
                            <div>
                                <h4 className="modal-title">
                                    {details.title}
                                </h4>
                                {details.sub_title ? <h6>{details.sub_title}</h6> : ""}
                            </div>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body text-center">
                            <img className='img-thumbnail' src={details.thumbnail} />
                            <div className="mod-con" dangerouslySetInnerHTML={render_inner_html(details.content)} >

                        </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            : ""

    )
}

export default HomeEventPopUp;
