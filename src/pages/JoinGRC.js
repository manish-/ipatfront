import React, { Fragment, useEffect } from 'react';
import Helmet from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as PAGES_ACTIONS from '../actions/user/pagesActions';
import { render_inner_html } from '../utils/html_util';

const JoinGRC = (props) => {

    const dispatch = useDispatch();


    const { processing, details, error, errors, message } = useSelector(state => {
        return {
            processing: state.Pages_Reducers.services.details.processing,
            details: state.Pages_Reducers.services.details.details,
            error: state.Pages_Reducers.services.details.error,
            errors: state.Pages_Reducers.services.details.errors,
            message: state.Pages_Reducers.services.details.message

        }
    });

    useEffect(() => {
        dispatch(PAGES_ACTIONS.fetch_service_page_content(props.slug));
    }, [props.slug]);
    // //console.log('details', details);

    return (
        <Fragment>

            {
                processing ? "" :

                    (
                        !error ? <p className='btn btn-danger'>{message}</p> :

                            <Fragment>
                                <Helmet>
                                    <title>{details.title ? details.title : "----"}</title>
                                </Helmet>
                                <div className="tab-right py-5">
                                    <div className="container py-4">

                                        <div className="row">
                                            <div className="col-md-3" data-aos="fade-right">
                                                <div className="nav flex-column nav-pills nav-pills-custom" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                                    <a className="nav-link mb-3 p-3 shadow active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-qciec" role="tab" aria-controls="v-pills-home" aria-selected="true">
                                                        <i className="fa fa-flask mr-2"></i>
                                                        <span className="font-weight-bold small text-uppercase">BA EIA/EMP Lab</span></a>

                                                    <a className="nav-link mb-3 p-3 shadow" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-qcifae" role="tab" aria-controls="v-pills-profile" aria-selected="false">
                                                        <i className="fa fa-question mr-2"></i>
                                                        <span className="font-weight-bold small text-uppercase">FAQ's</span></a>

                                                    <a className="nav-link mb-3 p-3 shadow" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-tech-ad" role="tab" aria-controls="v-pills-messages" aria-selected="false">
                                                        <i className="fa fa-graduation-cap mr-2"></i>
                                                        <span className="font-weight-bold small text-uppercase">Eligibility</span></a>

                                                    <a className="nav-link mb-3 p-3 shadow" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-house" role="tab" aria-controls="v-pills-settings" aria-selected="false">
                                                        <i className="fa fa-file-text-o mr-2"></i>
                                                        <span className="font-weight-bold small text-uppercase">Expression Of Interest (EOI) Form</span></a>

                                                </div>
                                            </div>


                                            <div className="col-md-9" data-aos="fade-left">
                                                <div className="tab-content" id="v-pills-tabContent">
                                                    <div className="tab-pane fade shadow rounded bg-white show active p-4" id="v-pills-qciec" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                                        <div className="tab-con">
                                                            <h5>Join GRC India As Business Associate (BA) Of EIA/EMP Or LAB</h5>
                                                            <p>The introduction of NBD+NTP concept was done in order to extract better work and involvement from our accredited empanelled experts and accordingly compensate them instead of a monthly retainership. This will ensure that full utilization is being done for all the experts associated. It has been ensured that this concept of ours is nowhere violating the QCI Scheme. The model needs to be speedily implemented within a set time frame to derive the benefits in the shortest possible time. Initially, we could concentrate in faraway states, where GRC India has already made in-roads such as Orissa, Karnataka, Kerala, Maharashtra, Gujarat, etc. Once a particular state is covered as mentioned above, this could be replicated in other states as well. Similar model could be thought of for the nearby states of UP, Uttarakhand, Punjab, Rajasthan, MP and Chhattisgarh.</p>
                                                            <h5>National Business Development</h5>
                                                            <p>National Business Development includes generation of business in various sectors in which GRC is accredited and EIA can be done and also contribution in Non-EIA work as well. The business generation can be done either by the Headquarter or the Business Associate or the accredited expert/s.</p>
                                                            <h5>National Technical Pool</h5>
                                                            <p>National Technical Pool included technical experts who qualify the requirements of QCI NABET and can become or can be applied for becoming an EIA Coordinator (EC) or Functional Area Expert (FAE). Being an expert in their own fields, their expertise and experience can also be utilized in non-eia work apart from the regular EIA projects.</p>
                                                            <h5>Aims & Objectives:</h5>
                                                            <ul>
                                                                <li>Taking advantage of the QCI Scheme in expanding the EIA business and continual improvement in quality of EIA projects</li>
                                                                <li>Promote effective involvement of Empanelled QCI accredited experts in the EIA projects</li>
                                                                <li>To expand the National Technical Pool for non-EIA and EIA business</li>
                                                                <li>Tapping the business / generating business for GRC India depending upon the potential of the second party</li>
                                                                <li>Create a WIN-WIN situation for the company as well as the empanelled experts</li>
                                                                <li>Target oriented revenue model with regular evaluation</li>
                                                            </ul>
                                                            <h5>Business Model & Strategy</h5>
                                                            <p>The strategy would be to generate enough Work Orders in the State depending on size and fees (say 20 WOs minimum) and utilize the services of the QCI empanelled expert to take care of all activities such as discussion with the client, undertaking site visits and updating the technical book prepared for each project and functional area wise as necessary and presenting the case before the SEAC/SEIAA. Basic proposal, report writing & necessary support will be provided by GRC India from its HQ office in Noida based on intimation provided by the expert. This strategy is expected to create additional surplus for the company, enhancing the business base of a particular sector and optimization of EIA business and manpower utilization. The QCI State Expert, RC and BA shall work as a team with a clear JD (Job description). More experts can be added as the workload increases after getting them accredited.</p>
                                                            <h5>The EC/FAE/BA Can Work In Any Of The Below Scenarios:</h5>
                                                            <ul>
                                                                <li>EC/BA – An EIA Coordinator can work both as an EC and BA for a particular state</li>
                                                                <li>FAE/BA – An FAE can work both as a technical expert and also generate work orders as a BA</li>
                                                                <li>BA – Business Associate only generating work orders for GRC</li>
                                                            </ul>
                                                            <p><strong>Becoming The Business Associate Please Contact:</strong></p>
                                                            <p><strong>Mr. Ankit Rana</strong> - +91 8510910966</p>
                                                            <p><strong>e-Mail</strong> : ba@grc-india.com</p>
                                                        </div>
                                                    </div>

                                                    <div className="tab-pane fade shadow rounded bg-white p-4" id="v-pills-qcifae" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                                                        <div className="tab-con">
                                                            <p>If you have any queries about becoming a Business Associate, they are answered in this section. The FAQs will give you the information you need to know.</p>
                                                            <h5>What Is The Business Model Of BA-EIA/EMP ?</h5>
                                                            <p>The strategy would be to generate enough Work Orders in the State depending on size and fees (say 20 WOs minimum) and utilize the services of the QCI empanelled expert to take care of all activities such as discussion with the client, undertaking site visits and updating the technical book prepared for each project and functional area wise as necessary and presenting the case before the SEAC/SEIAA. Basic proposal, report writing & necessary support will be provided by GRC India from its HQ office in Noida based on intimation provided by the expert. This strategy is expected to create additional surplus for the company, enhancing the business base of a particular sector and optimization of EIA business and manpower utilization. The QCI State Expert, RC and BA shall work as a team with a clear JD (Job description). More experts can be added as the workload increases after getting them accredited. The business model and strategy is to identify & appoint:</p>
                                                            <ul>
                                                                <li>Identify for an accredited QCI expert from GRC in a particular State – (QCI State Expert – X State)</li>
                                                                <li>Appoint a Regional Coordinator for the state (RC - X State )</li>
                                                                <li>Select Business Associate in that State (BA - X State )</li>
                                                            </ul>
                                                            <p><strong>The EC/FAE/BA can work in any of the below scenarios:</strong></p>
                                                            <ul>
                                                                <li>EC/BA – An EIA Coordinator can work both as an EC and BA for a particular state</li>
                                                                <li>FAE/BA – An FAE can work both as a technical expert and also generate work orders as a BA</li>
                                                                <li>BA – Business Associate only generating work orders for GRC</li>
                                                            </ul>
                                                            <h5>What Is The Business Model Of BA-LAB ?</h5>
                                                            <p>As the concept says, NBD – LAB envisages fuller utilization of our lab facilities and geographical expansion through a network of Business Associates empanelled all across the various states of India. There is a huge market prospect in the environment field. As part of environmental compliance, regular monitoring and testing is required to be done by the industry on a regular basis. There are large numbers of industrialized cities in each state of India housing varied industries. Ministry has identified 88 critically and seriously polluted areas restricting further industrial activities. These areas require constant monitoring to control pollution and bring them back on the path of further development. As a first step, industrialized cities in various states will be identified as thrust areas. Business Associates (meeting the requirements) will be identified and an MOU will be signed. The BAs in turn would be responsible for bringing business for GRC LAB. We can also consider having an MOU/Collaboration with SMALL LABS who may not be accredited.</p>
                                                        </div>

                                                    </div>

                                                    <div className="tab-pane fade shadow rounded bg-white p-4" id="v-pills-tech-ad" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                                                        <div className="tab-con">
                                                            <h5>Eligibility Criteria as mentioned below</h5>
                                                            <ul>
                                                                <li>Number of Years of experience (approximately 5 years)</li>
                                                                <li>EIA/Environment/Laboratory/Business Development related experience (minimum 5 years)</li>
                                                                <li>Master’s Degree in Science or Management OR Bachelors in Engineering/Environment/Any other)</li>
                                                            </ul>
                                                        </div>

                                                    </div>

                                                    <div className="tab-pane fade shadow rounded bg-white p-4" id="v-pills-house" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                                                        <div className="row">
                                                            <div className="col-md-12">
                                                                <div className="join-form">

                                                                    <div className="form-content">
                                                                        <p>Download EOI Form & submit with details at <a href="mailto:ba@grc-india.com">ba@grc-india.com</a></p>
                                                                        <p>CLICK HERE for Download <a href="pdf/EOI-FORM.docx">Expression Of Interest (EOI) Form</a></p>
                                                                        <p>For any query kindly contact to <strong>Mr. Ankit Rana - +91 8510910966</strong></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
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

export default JoinGRC;