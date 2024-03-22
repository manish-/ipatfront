import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as CUSTOM_US_ACTIONS from '../../actions/user/contactUsActions';
import REGX from '../../constants/Regx';
const CustomerComplain = ({clear_form}) => {

    const dispatch = useDispatch();

    const [pop_up_rendered, set_pop_up_rendered] = useState(false);
    const { states } = useSelector(state => {
        return {

            states: state.Utils_Reducers.states.list

        }
    });

    const { processing, reload, error, errors, message } = useSelector((store) => store.Pages_Reducers.customer_complain ?? {});

    const [customerFeedbackForm, setCustomerFeedbackForm] = useState({
        firstName: "",
        firstNameError: "",
        lastName: "",
        lastNameError: "",
        address: "",
        addressError: "",
        state: "Uttar Pradesh",
        stateError: "",
        city: "",
        cityError: "",
        pincode: "",
        pincodeError: "",
        email: "",
        emailError: "",
        contactNumber: "",
        contactNumberError: "",
        message: "",
        messageError: ""
    });

    const submitForm = (e) => {
        e.preventDefault();
        let customerFeedbackFormFields = { ...customerFeedbackForm };
        let errorFound = false;

        if (!customerFeedbackFormFields.firstName) {
            errorFound = true;
            customerFeedbackFormFields.firstNameError = 'this field is required!';
        } else if (!REGX.FIRST_NAME.test(customerFeedbackFormFields.firstName)) {
            errorFound = true;
            customerFeedbackFormFields.firstNameError = "alphabate only without white-space!";
        } else {
            customerFeedbackFormFields.firstNameError = '';
        }
        if (!customerFeedbackFormFields.lastName) {
            errorFound = true;
            customerFeedbackFormFields.lastNameError = 'this field is required!';
        } else if (!REGX.LAST_NAME.test(customerFeedbackFormFields.lastName)) {
            errorFound = true;
            customerFeedbackFormFields.lastNameError = "alphabate only with white-space!";
        } else {
            customerFeedbackFormFields.lastNameError = '';
        }
        if (!customerFeedbackFormFields.contactNumber) {
            errorFound = true;
            customerFeedbackFormFields.contactNumberError = 'this field is required!';
        } else if (!REGX.MOBILE_NUMBER.test(customerFeedbackFormFields.contactNumber)) {
            errorFound = true;
            customerFeedbackFormFields.contactNumberError = "enter valid contact number!";
        } else {
            customerFeedbackFormFields.contactNumberError = '';
        }

        if ((!customerFeedbackFormFields.email)) {
            errorFound = true;
            customerFeedbackFormFields.emailError = 'this field is required!';
        } else if (!REGX.EMAIL.test(customerFeedbackFormFields.email)) {
            errorFound = true;
            customerFeedbackFormFields.emailError = "enter valid email!";
        } else {
            customerFeedbackFormFields.emailError = '';
        }

        if (!customerFeedbackFormFields.address) {
            errorFound = true;
            customerFeedbackFormFields.addressError = 'this field is required!';
        } else {
            customerFeedbackFormFields.addressError = '';
        }

        if (!customerFeedbackFormFields.state || customerFeedbackFormFields.state == "-1") {
            errorFound = true;
            customerFeedbackFormFields.stateError = 'this field is required!';
        } else {
            customerFeedbackFormFields.stateError = '';
        }

        if (!customerFeedbackFormFields.city) {
            errorFound = true;
            customerFeedbackFormFields.cityError = 'this field is required!';
        } else if (!REGX.CITY.test(customerFeedbackFormFields.city)) {
            errorFound = true;
            customerFeedbackFormFields.cityError = "alphabate only with white-space!";
        } else {
            customerFeedbackFormFields.cityError = '';
        }
        if (!customerFeedbackFormFields.pincode) {
            errorFound = true;
            customerFeedbackFormFields.pincodeError = 'this field is required!';
        } else if (!REGX.PINCODE.test(customerFeedbackFormFields.pincode)) {
            errorFound = true;
            customerFeedbackFormFields.pincodeError = 'enter valid pincode!';
        } else {
            customerFeedbackFormFields.pincodeError = '';
        }

        if (!customerFeedbackFormFields.message || customerFeedbackFormFields.message.length === 0) {
            errorFound = true;
            customerFeedbackFormFields.messageError = 'this field is required!';
        } else {
            customerFeedbackFormFields.messageError = '';
        }

        setCustomerFeedbackForm({ ...customerFeedbackFormFields });

        if (!errorFound) {
            dispatch(CUSTOM_US_ACTIONS.save_customer_complain(customerFeedbackFormFields));
        }

    };

    useEffect(() => {
        if (reload) {
            setCustomerFeedbackForm({
                firstName: "",
                firstNameError: "",
                lastName: "",
                lastNameError: "",
                address: "",
                addressError: "",
                state: "Uttar Pradesh",
                stateError: "",
                city: "",
                cityError: "",
                pincode: "",
                pincodeError: "",
                email: "",
                emailError: "",
                contactNumber: "",
                contactNumberError: "",
                message: "",
                messageError: ""
            });
            document.getElementById("customer-complain-btn").click();
        }
    }, [reload])

    
    useEffect(() => {
        setCustomerFeedbackForm({
            firstName: "",
            firstNameError: "",
            lastName: "",
            lastNameError: "",
            address: "",
            addressError: "",
            state: "Uttar Pradesh",
            stateError: "",
            city: "",
            cityError: "",
            pincode: "",
            pincodeError: "",
            email: "",
            emailError: "",
            contactNumber: "",
            contactNumberError: "",
            message: "",
            messageError: ""
        });
    }, [clear_form]);


    return (
        <div className="modal form-modal fade" id="customer-complain">
            <div className="modal-dialog">
                <div className="modal-content">
                    <form role="form" className="mr0 feedbackForm" onSubmit={e => submitForm(e)}>
                        <input type="hidden" name="_down" id="_down" value="" />
                        <div className="modal-header my-title">
                            <button type="button" className="close" data-dismiss="modal">×</button>
                            <h4 className="modal-title "> CUSTOMER COMPLAINT FORM</h4>
                        </div>
                        <div className="modal-body row"> <span className="message text-center col-md-12"></span>
                            <div className="col-md-6 form-group">
                                <input type="text" name="fname" className="form-control" id="" placeholder="First Name" value={customerFeedbackForm.firstName} onChange={e => setCustomerFeedbackForm({
                                    ...customerFeedbackForm,
                                    firstName: e.target.value,
                                    firstNameError: ""
                                })} />
                                <span className='error text-danger'>{customerFeedbackForm.firstNameError}</span>
                            </div>
                            <div className="col-md-6 form-group">
                                <input type="text" name="lname" className="form-control" id="" placeholder="Last Name" value={customerFeedbackForm.lastName} onChange={e => setCustomerFeedbackForm({
                                    ...customerFeedbackForm,
                                    lastName: e.target.value,
                                    lastNameError: ""
                                })} />
                                <span className='error text-danger'>{customerFeedbackForm.lastNameError}</span>
                            </div>

                            <div className="col-md-6 form-group">
                                <input type="email" name="email" className="form-control" id="" placeholder="Email" value={customerFeedbackForm.email} onChange={e => setCustomerFeedbackForm({
                                    ...customerFeedbackForm,
                                    email: e.target.value,
                                    emailError: ""
                                })} />
                                <span className='error text-danger'>{customerFeedbackForm.emailError}</span>
                            </div>
                            <div className="col-md-6 form-group">
                                <input type="text" name="cnumber" className="form-control" id="" placeholder="Contact Number" value={customerFeedbackForm.contactNumber} onChange={e => setCustomerFeedbackForm({
                                    ...customerFeedbackForm,
                                    contactNumber: e.target.value,
                                    contactNumberError: ""
                                })} />
                                <span className='error text-danger'>{customerFeedbackForm.contactNumberError}</span>
                            </div>
                            <div className="col-md-12 form-group">
                                <input type="text" name="address" className="form-control" id="" placeholder="Address" value={customerFeedbackForm.address} onChange={e => setCustomerFeedbackForm({
                                    ...customerFeedbackForm,
                                    address: e.target.value,
                                    addressError: ""
                                })} />
                                <span className='error text-danger'>{customerFeedbackForm.addressError}</span>
                            </div>

                            <div className="col-md-4 form-group">
                                <select type="text" name="state" className="custom-select" id="state" placeholder="state" value={customerFeedbackForm.state} onChange={e => setCustomerFeedbackForm({
                                    ...customerFeedbackForm,
                                    state: e.target.value,
                                    stateError: ""
                                })} >
                                    <option value="-1">--Select state--</option>
                                    {
                                        states.map((state, index) => {
                                            return <option key={`state-drop-down-${index}`} value={state.name}>{state.name}</option>;
                                        })
                                    }
                                </select>
                                <span className='error text-danger'>{customerFeedbackForm.stateError}</span>
                            </div>
                            <div className="col-md-4 form-group">
                                <input type="text" name="city" className="form-control" id="" placeholder="City" value={customerFeedbackForm.city} onChange={e => setCustomerFeedbackForm({
                                    ...customerFeedbackForm,
                                    city: e.target.value,
                                    cityError: ""
                                })} />
                                <span className='error text-danger'>{customerFeedbackForm.cityError}</span>
                            </div>

                            <div className="col-md-4 form-group">
                                <input type="text" name="pincode" className="form-control" id="" placeholder="Pincode" maxLength={6} value={customerFeedbackForm.pincode} onChange={e => setCustomerFeedbackForm({
                                    ...customerFeedbackForm,
                                    pincode: e.target.value,
                                    pincodeError: ""
                                })} />
                                <span className='error text-danger'>{customerFeedbackForm.pincodeError}</span>
                            </div>

                            <div className="col-md-12 form-group">

                                <textarea name="message" cols="40" rows="5" className="form-control" id="" placeholder="Message" value={customerFeedbackForm.message} onChange={e => setCustomerFeedbackForm({
                                    ...customerFeedbackForm,
                                    message: e.target.value,
                                    messageError: ""
                                })} ></textarea>
                                <span className='error text-danger'>{customerFeedbackForm.messageError}</span>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="submit" name="submitcfeedback" className="btn btn-default pop-btn">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default CustomerComplain;
