import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as CUSTOM_US_ACTIONS from '../../actions/user/contactUsActions';
import REGX from '../../constants/Regx';
const CustomerFeedback = () => {

    const dispatch = useDispatch();

    const feedbackOption = ["EXCELLENT", "VERY GOOD", "GOOD", "AVERAGE", "POOR"];

    const { processing, reload, error, errors, message, states } = useSelector(state => {
        return {
            processing: state.Pages_Reducers.customer_feedback.processing,
            reload: state.Pages_Reducers.customer_feedback.reload,
            error: state.Pages_Reducers.customer_feedback.error,
            errors: state.Pages_Reducers.customer_feedback.errors,
            message: state.Pages_Reducers.customer_feedback.message,
            states: state.Utils_Reducers.states.list

        }
    });

    const [customerFeedbackForm, setCustomerFeedbackForm] = useState({
        projectName: "",
        projectNameError: "",
        workOrderNumber: "",
        workOrderNumberError: "",
        firstName: "",
        firstNameError: "",
        lastName: "",
        lastNameError: "",
        address: "",
        addressError: "",
        email: "",
        emailError: "",
        contactNumber: "",
        contactNumberError: "",
        state: "Uttar Pradesh",
        stateError: "",
        city: "",
        cityError: "",
        qualityOfServiceProvided: "",
        qualityOfServiceProvidedError: "",
        adherenceToDeliverySchedule: "",
        adherenceToDeliveryScheduleError: "",
        knowledgeOfRulesProcedures: "",
        knowledgeOfRulesProceduresError: "",
        complaintHandlingResponseTime: "",
        complaintHandlingResponseTimeError: "",
        responseTimeOnQuaeriesByOurExcutives: "",
        responseTimeOnQuaeriesByOurExcutivesError: "",
        remark: "",
        remarkError: ""
    });

    const submitForm = (e) => {
        e.preventDefault();
        let customerFeedbackFormFields = { ...customerFeedbackForm };
        let errorFound = false;

        if (customerFeedbackFormFields.projectName === "") {
            errorFound = true;
            customerFeedbackFormFields.projectNameError = 'this field is required!';
        } else {
            customerFeedbackFormFields.projectNameError = '';
        }
        if (customerFeedbackFormFields.workOrderNumber === "") {
            errorFound = true;
            customerFeedbackFormFields.workOrderNumberError = 'this field is required!';
        } else {
            customerFeedbackFormFields.workOrderNumberError = '';
        }
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
        if (!customerFeedbackFormFields.state || customerFeedbackFormFields.state == "-1") {
            errorFound = true;
            customerFeedbackFormFields.stateError = 'this field is required!';
        } else {
            customerFeedbackFormFields.stateError = '';
        }

        if (!customerFeedbackFormFields.city) {
            errorFound = true;
            customerFeedbackFormFields.cityError = 'this field is required!';
        }else if (!REGX.CITY.test(customerFeedbackFormFields.city)) {
            errorFound = true;
            customerFeedbackFormFields.cityError = "alphabate only with white-space!";
        } else {
            customerFeedbackFormFields.cityError = '';
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


        if (!customerFeedbackFormFields.qualityOfServiceProvided) {
            errorFound = true;
            customerFeedbackFormFields.qualityOfServiceProvidedError = 'this field is required!';
        } else {
            customerFeedbackFormFields.qualityOfServiceProvidedError = '';
        }
        if (!customerFeedbackFormFields.adherenceToDeliverySchedule) {
            errorFound = true;
            customerFeedbackFormFields.adherenceToDeliveryScheduleError = 'this field is required!';
        } else {
            customerFeedbackFormFields.adherenceToDeliveryScheduleError = '';
        }
        if (!customerFeedbackFormFields.knowledgeOfRulesProcedures) {
            errorFound = true;
            customerFeedbackFormFields.knowledgeOfRulesProceduresError = 'this field is required!';
        } else {
            customerFeedbackFormFields.knowledgeOfRulesProceduresError = '';
        }
        if (!customerFeedbackFormFields.complaintHandlingResponseTime) {
            errorFound = true;
            customerFeedbackFormFields.complaintHandlingResponseTimeError = 'this field is required!';
        } else {
            customerFeedbackFormFields.complaintHandlingResponseTimeError = '';
        }
        if (!customerFeedbackFormFields.responseTimeOnQuaeriesByOurExcutives) {
            errorFound = true;
            customerFeedbackFormFields.responseTimeOnQuaeriesByOurExcutivesError = 'this field is required!';
        } else {
            customerFeedbackFormFields.responseTimeOnQuaeriesByOurExcutivesError = '';
        }

        if (!customerFeedbackFormFields.remark || customerFeedbackFormFields.remark.length===0) {
            errorFound = true;
            customerFeedbackFormFields.remarkError = 'this field is required!';
        } else {
            customerFeedbackFormFields.remarkError = '';
        }

        setCustomerFeedbackForm({ ...customerFeedbackFormFields });

        if (!errorFound) {
            dispatch(CUSTOM_US_ACTIONS.save_customer_feedback(customerFeedbackFormFields));
        }

    };

    useEffect(() => {
        if (reload) {
            setCustomerFeedbackForm({
                projectName: "",
                projectNameError: "",
                workOrderNumber: "",
                workOrderNumberError: "",
                firstName: "",
                firstNameError: "",
                lastName: "",
                lastNameError: "",
                address: "",
                addressError: "",
                email: "",
                emailError: "",
                contactNumber: "",
                contactNumberError: "",
                state: "Uttar Pradesh",
                stateError: "",
                city: "",
                cityError: "",
                qualityOfServiceProvided: "",
                qualityOfServiceProvidedError: "",
                adherenceToDeliverySchedule: "",
                adherenceToDeliveryScheduleError: "",
                knowledgeOfRulesProcedures: "",
                knowledgeOfRulesProceduresError: "",
                complaintHandlingResponseTime: "",
                complaintHandlingResponseTimeError: "",
                responseTimeOnQuaeriesByOurExcutives: "",
                responseTimeOnQuaeriesByOurExcutivesError: "",
                remark: "",
                remarkError: ""
            });
            
            document.getElementById("customer-feedback-btn").click();            
            window.$('#customer-feedback input[type="radio"]').prop("checked",false);
        }
        return ()=>{
            window.$('#customer-feedback input[type="radio"]').prop("checked",false);
        }
    }, [reload])



    return (
        <div className="modal form-modal fade" id="customer-feedback">
            <div className="modal-dialog">
                <div className="modal-content">
                    <form role="form" className="mr0 feedbackForm" onSubmit={e => submitForm(e)}>
                        <input type="hidden" name="_down" id="_down" value="" />
                        <div className="modal-header my-title">
                            <button type="button" className="close" data-dismiss="modal">×</button>
                            <h4 className="modal-title "> Customer Feedback</h4>
                        </div>
                        <div className="modal-body row"> <span className="message text-center col-md-12"></span>

                            <div className="col-md-5">
                                <div className="row">
                                    <div className="col-md-12 form-group">
                                        <input type="text" name="pname" required="" className="form-control" id="" placeholder="Project Name"
                                            value={customerFeedbackForm.projectName} onChange={e => setCustomerFeedbackForm({
                                                ...customerFeedbackForm,
                                                projectName: e.target.value,
                                                projectNameError: ""
                                            })} />
                                        <span className='error text-danger'>{customerFeedbackForm.projectNameError}</span>
                                    </div>
                                    <div className="col-md-12 form-group">
                                        <input type="text" name="worderno" className="form-control" id="" placeholder="Work order No/ Date"
                                            value={customerFeedbackForm.workOrderNumber}
                                            onChange={e => setCustomerFeedbackForm({
                                                ...customerFeedbackForm,
                                                workOrderNumber: e.target.value,
                                                workOrderNumberError: ""
                                            })} />
                                        <span className='error text-danger'>{customerFeedbackForm.workOrderNumberError}</span>
                                    </div>
                                    <div className="col-md-12 form-group">
                                        <input type="text" name="fname" className="form-control" id="" placeholder="First Name" value={customerFeedbackForm.firstName} onChange={e => setCustomerFeedbackForm({
                                            ...customerFeedbackForm,
                                            firstName: e.target.value,
                                            firstNameError: ""
                                        })} />
                                        <span className='error text-danger'>{customerFeedbackForm.firstNameError}</span>
                                    </div>
                                    <div className="col-md-12 form-group">
                                        <input type="text" name="lname" className="form-control" id="" placeholder="Last Name" value={customerFeedbackForm.lastName} onChange={e => setCustomerFeedbackForm({
                                            ...customerFeedbackForm,
                                            lastName: e.target.value,
                                            lastNameError: ""
                                        })} />
                                        <span className='error text-danger'>{customerFeedbackForm.lastNameError}</span>
                                    </div>
                                    <div className="col-md-12 form-group">
                                        <input type="text" name="address" className="form-control" id="" placeholder="Address" value={customerFeedbackForm.address} onChange={e => setCustomerFeedbackForm({
                                            ...customerFeedbackForm,
                                            address: e.target.value,
                                            addressError: ""
                                        })} />
                                        <span className='error text-danger'>{customerFeedbackForm.addressError}</span>
                                    </div>
                                    <div className="col-md-12 form-group">
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
                                    <div className="col-md-12 form-group">
                                        <input type="text" name="city" className="form-control" id="" placeholder="City" value={customerFeedbackForm.city} onChange={e => setCustomerFeedbackForm({
                                            ...customerFeedbackForm,
                                            city: e.target.value,
                                            cityError: ""
                                        })} />
                                        <span className='error text-danger'>{customerFeedbackForm.cityError}</span>
                                    </div>
                                    <div className="col-md-12 form-group">
                                        <input type="email" name="email" className="form-control" id="" placeholder="Email" value={customerFeedbackForm.email} onChange={e => setCustomerFeedbackForm({
                                            ...customerFeedbackForm,
                                            email: e.target.value,
                                            emailError: ""
                                        })} />
                                        <span className='error text-danger'>{customerFeedbackForm.emailError}</span>
                                    </div>
                                    <div className="col-md-12 form-group">
                                        <input type="text" name="cnumber" className="form-control" id="" placeholder="Contact Number" value={customerFeedbackForm.contactNumber} onChange={e => setCustomerFeedbackForm({
                                            ...customerFeedbackForm,
                                            contactNumber: e.target.value,
                                            contactNumberError: ""
                                        })} />
                                        <span className='error text-danger'>{customerFeedbackForm.contactNumberError}</span>
                                    </div>

                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="row">
                                    <div className="col-md-12 form-group">
                                        <div className="table-responsive">
                                            <table border="1" cellSpacing="0" cellPadding="5" width="100%" style={{ color: "#000" }}>
                                                <tbody>
                                                    <tr>
                                                        <td width="25%" valign="top"><strong>PARAMETER</strong></td>
                                                        <td colSpan="5"><strong>SATISFACTION LEVEL</strong>&nbsp; <strong>(In a scale of 1 to 5 as below)</strong></td>
                                                    </tr>
                                                    <tr>
                                                        <td>&nbsp;</td>
                                                        {
                                                            feedbackOption.map((row, index) => {
                                                                return <td width="15%" align="center" key={`headng${index}`}>
                                                                    <strong>{row}<br />
                                                                        {5 - index}</strong>
                                                                </td>;
                                                            })
                                                        }
                                                    </tr>
                                                    <tr>
                                                        <td>Quality of service provided* <span className='error text-danger'>{customerFeedbackForm.qualityOfServiceProvidedError}</span></td>
                                                        {
                                                            feedbackOption.map((row, index) => {
                                                                return <td align="center" key={`Quality${index}`}>
                                                                    <input name="qualityOfServiceProvided" type="radio" value={row}
                                                                        onChange={e => setCustomerFeedbackForm({
                                                                            ...customerFeedbackForm,
                                                                            qualityOfServiceProvided: e.target.value,
                                                                            qualityOfServiceProvidedError: ""
                                                                        })}
                                                                    />
                                                                </td>;
                                                            })
                                                        }
                                                    </tr>
                                                    <tr>
                                                        <td>Adherence to delivery schedule* <span className='error text-danger'>{customerFeedbackForm.adherenceToDeliveryScheduleError}</span></td>
                                                        {
                                                            feedbackOption.map((row, index) => {
                                                                return <td align="center" key={`Quality${index}`}>
                                                                    <input name="adherenceToDeliverySchedule" type="radio" value={row}
                                                                        onChange={e => setCustomerFeedbackForm({
                                                                            ...customerFeedbackForm,
                                                                            adherenceToDeliverySchedule: e.target.value,
                                                                            adherenceToDeliveryScheduleError: ""
                                                                        })}
                                                                    />
                                                                </td>;
                                                            })
                                                        }
                                                    </tr>
                                                    <tr>
                                                        <td>Knowledge of rules &amp; procedures*<span className='error text-danger'>{customerFeedbackForm.knowledgeOfRulesProceduresError}</span></td>
                                                        {
                                                            feedbackOption.map((row, index) => {
                                                                return <td align="center" key={`Quality${index}`}>
                                                                    <input name="knowledgeOfRulesProcedures" type="radio" value={row}
                                                                        onChange={e => setCustomerFeedbackForm({
                                                                            ...customerFeedbackForm,
                                                                            knowledgeOfRulesProcedures: e.target.value,
                                                                            knowledgeOfRulesProceduresError: ""
                                                                        })}
                                                                    />
                                                                </td>;
                                                            })
                                                        }
                                                    </tr>
                                                    <tr>
                                                        <td>Complaint handling response time*<span className='error text-danger'>{customerFeedbackForm.complaintHandlingResponseTimeError}</span></td>
                                                        {
                                                            feedbackOption.map((row, index) => {
                                                                return <td align="center" key={`Quality${index}`}>
                                                                    <input name="complaintHandlingResponseTime" type="radio" value={row}
                                                                        onChange={e => setCustomerFeedbackForm({
                                                                            ...customerFeedbackForm,
                                                                            complaintHandlingResponseTime: e.target.value,
                                                                            complaintHandlingResponseTimeError: ""
                                                                        })}
                                                                    />
                                                                </td>;
                                                            })
                                                        }
                                                    </tr>
                                                    <tr>
                                                        <td>Response time on quaeries by our excutives*<span className='error text-danger'>{customerFeedbackForm.responseTimeOnQuaeriesByOurExcutivesError}</span></td>
                                                        {
                                                            feedbackOption.map((row, index) => {
                                                                return <td align="center" key={`Quality${index}`}>
                                                                    <input name="responseTimeOnQuaeriesByOurExcutives" type="radio" value={row}
                                                                        onChange={e => setCustomerFeedbackForm({
                                                                            ...customerFeedbackForm,
                                                                            responseTimeOnQuaeriesByOurExcutives: e.target.value,
                                                                            responseTimeOnQuaeriesByOurExcutivesError: ""
                                                                        })}
                                                                    />
                                                                </td>;
                                                            })
                                                        }
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="col-md-12 form-group">

                                        <textarea name="remark" cols="40" rows="5" className="form-control" id="" placeholder="Remark" value={customerFeedbackForm.remark} onChange={e => setCustomerFeedbackForm({
                                            ...customerFeedbackForm,
                                            remark: e.target.value,
                                            remarkError: ""
                                        })} ></textarea>
                                        <span className='error text-danger'>{customerFeedbackForm.remarkError}</span>
                                    </div>
                                </div>
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

export default CustomerFeedback;
