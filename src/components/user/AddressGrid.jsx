import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as APP_CONSTANTS from "../../constants/Constants";
import * as PAGES_ACTIONS from "../../actions/user/pagesActions";


const AddressGrid = (props) => {
    // //console.log("ClienteleCarousel props", props);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(PAGES_ACTIONS.fetch_address_list());
    }, []);

    let { list, processing, error, errors } = useSelector(state => {
        return {
            list: state.Pages_Reducers.address.list.list,
            processing: state.Pages_Reducers.address.processing,
            error: state.Pages_Reducers.address.error,
            errors: state.Pages_Reducers.address.errors,
        }
    });
    
    list = list.length > 0 ? list : [];
    if (list.length === 0) {
        return null;
    } else {
        return <div className="row my-5">
            {
                list.map((address, index) => {
                    return <div className="col-md-6" key={`address-item-${index}`}>
                        <div className="con-address">
                            <h4>{address.title}</h4>
                            {
                                address.full_address ? <p>{address.full_address}</p> : ""
                            }
                            {
                                address.email ? <p><strong>E-mail</strong> {address.email}</p> : ""
                            }
                            {
                                address.mobile ? <p><strong>Phone</strong> {address.mobile}</p> : ""
                            }
                            {
                                address.fax ? <p><strong>Fax</strong> {address.fax}</p> : ""
                            }
                            {
                                address.map_address ?
                                    <div className="loc-map">
                                        <iframe src={address.map_address} style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
                                    </div> : ""
                            }

                        </div>
                    </div>
                })
            }

        </div>
    }


}

export default AddressGrid;