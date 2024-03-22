import React, { Fragment, useEffect, useState } from "react";
import Helmet from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AddressGrid from "../components/user/AddressGrid";
import REGX from "../constants/Regx";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function BecomeAnAssociate(props) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    processing: false,
    firstName: "",
    firstNameError: "",
    birth: "",
    birthError: "",
    location: "",
    locationError: "",
    education: "",
    educationError: "",
    mobile: "",
    mobileError: "",
    experience: "",
    experienceError: "",
    fullexp: "",
    fullexpError: "",
    other: "",
    otherError: "",
    message: "",
    messageError: "",
    message1: "",
    message1Error: "",
    file: "",
    fileError: "",

  });


  const handleOnSubmit = (e) => {
    e.preventDefault();
    let errorFound = false;

    setFormData({
      ...formData,
      processing: true
    });

    let formDataFields = { ...formData };

    if (!formDataFields.firstName) {
      errorFound = true;
      formDataFields.firstNameError = "this field is required!";
    } else if (!REGX.FIRST_NAME.test(formDataFields.firstName)) {
      errorFound = true;
      formDataFields.firstNameError = "alphabate only without white-space!";
    } else {
      formDataFields.firstNameError = "";
    }
    if (
      formDataFields.birth &&
      !REGX.DOB.test(formDataFields.birth)
    ) {
      errorFound = true;
      formDataFields.birthError = "Please choose date !";
    } else {
      formDataFields.birthError = "";
    }
    if (!formDataFields.location) {
      errorFound = true;
      formDataFields.locationError = "this field is required!";
    } else {
      formDataFields.locationError = "";
    }
    if (!formDataFields.mobile) {
      errorFound = true;
      formDataFields.mobileError = "this field is required!";
    } else if (!REGX.MOBILE_NUMBER.test(formDataFields.mobile)) {
      errorFound = true;
      formDataFields.mobileError = "provide 10 digit phone number!";
    } else {
      formDataFields.mobileError = "";
    }
    if (!formDataFields.education) {
      errorFound = true;
      formDataFields.educationError = "this field is required!";
    } else {
      formDataFields.educationError = "";
    }
    if (!formDataFields.experience) {
      errorFound = true;
      formDataFields.experienceError = "this field is required!";
    } else {
      formDataFields.experienceError = "";
    }
    if (!formDataFields.fullexp) {
      errorFound = true;
      formDataFields.fullexpError = "this field is required!";
    } else {
      formDataFields.fullexpError = "";
    }
    if (!formDataFields.other) {
      errorFound = true;
      formDataFields.otherError = "this field is required!";
    } else {
      formDataFields.otherError = "";
    }
    if (!formDataFields.file) {
      errorFound = true;
      formDataFields.fileError = "this field is required!";
    } else {
      formDataFields.fileError = "";
    }
    if (!formDataFields.message) {
      errorFound = true;
      formDataFields.messageError = "this field is required!";
    } else {
      formDataFields.messageError = "";
    }
    if (!formDataFields.message1) {
      errorFound = true;
      formDataFields.message1Error = "this field is required!";
    } else {
      formDataFields.message1Error = "";
    }

    setFormData({
      ...formDataFields,
    });

    if (errorFound) {
      setFormData({
        ...formDataFields,
        processing: false
      })
    } else {
      let formData = new FormData();
      formData.append("fullName", formDataFields.firstName);
      formData.append("birth", formDataFields.birth);
      formData.append("location", formDataFields.location);
      formData.append("education", formDataFields.education);
      formData.append("mobile", formDataFields.mobile);
      formData.append("experience", formDataFields.experience);
      formData.append("fullexp", formDataFields.fullexp);
      formData.append("other", formDataFields.other);
      formData.append("message", formDataFields.message);
      formData.append("message1", formDataFields.message1);
      formData.append("file", formDataFields.file);

      axios({
        url: ``,
        method: "post",
        responseType: 'json',
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(response => {
        if (response.data) {
          setFormData({
            processing: false,
            firstName: "",
            firstNameError: "",
            birth: "",
            birthError: "",
            location: "",
            locationError: "",
            education: "",
            educationError: "",
            mobile: "",
            mobileError: "",
            experience: "",
            experienceError: "",
            fullexp: "",
            fullexpError: "",
            other: "",
            otherError: "",
            message: "",
            messageError: "",
            message1: "",
            message1Error: "",
            file: "",
            fileError: "",
          });
          props.handleCancel();
          navigate("/thank-you");
        } else {
          alert(response.data.message);
        }
        // alert("success");
      }, error => {
        console.log("error", error);
        alert("error");
      });
    }
  }
  return (
    <Fragment>
      <Helmet>
        <title>Become An Associate</title>
      </Helmet>
      <div
        className="bread-sec"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/gallery/ba2-banner.jpg)`,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="head-bread">
                <h1>Become An Associate</h1>
                <ol className="breadcrumb">
                  <li>
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li>/</li>
                  <li className="active">Become An Associate</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="become-an-associate">
        <div className="container py-4">
            <div
              className="nav flex-column nav-pills nav-pills-custom"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              <ul className="nav nav-pills">
                <li>
                  <a href="#1a" data-toggle="tab" className="active">
                    <div className="become-box">
                      <i className="fa fa-user"></i>
                      <h5>BA EIA/EMP Lab</h5>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#2a" data-toggle="tab">
                    <div className="become-box">
                      <i className="fa fa-question-circle-o"></i>
                      <h5>FAQ's</h5>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#3a" data-toggle="tab">
                    <div className="become-box">
                      <i className="fa fa-pencil-square-o"></i>
                      <h5>Eligibility</h5>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#4a" data-toggle="tab">
                    <div className="become-box">
                      <i className="fa fa-file-text-o"></i>
                      <h5>Expression Of Interest (EOI) Form</h5>
                    </div>
                  </a>
                </li>
              </ul>
            </div>

            <div className="tab-content mt-4" id="v-pills-tabContent">
              <div className="tab-pane active" id="1a">
                <h3>
                  Join GRC India as Business Associate (BA) of EIA/EMP or LAB
                </h3>
                <p>
                  The introduction of NBD+NTP concept was done in order to
                  extract better work and involvement from our accredited
                  empanelled experts and accordingly compensate them instead of
                  a monthly retainership. This will ensure that full utilization
                  is being done for all the experts associated. It has been
                  ensured that this concept of ours is nowhere violating the QCI
                  Scheme. The model needs to be speedily implemented within a
                  set time frame to derive the benefits in the shortest possible
                  time. Initially, we could concentrate in faraway states, where
                  GRC India has already made in-roads such as Orissa, Karnataka,
                  Kerala, Maharashtra, Gujarat, etc. Once a particular state is
                  covered as mentioned above, this could be replicated in other
                  states as well. Similar model could be thought of for the
                  nearby states of UP, Uttarakhand, Punjab, Rajasthan, MP and
                  Chhattisgarh.
                </p>

                <h3>National Business Development</h3>
                <p>
                  National Business Development includes generation of business
                  in various sectors in which GRC is accredited and EIA can be
                  done and also contribution in Non-EIA work as well. The
                  business generation can be done either by the Headquarter or
                  the Business Associate or the accredited expert/s.
                </p>

                <h3>National Technical Pool</h3>
                <p>
                  National Technical Pool included technical experts who qualify
                  the requirements of QCI NABET and can become or can be applied
                  for becoming an EIA Coordinator (EC) or Functional Area Expert
                  (FAE). Being an expert in their own fields, their expertise
                  and experience can also be utilized in non-eia work apart from
                  the regular EIA projects.
                </p>

                <h3>AIMS &amp; OBJECTIVES: </h3>
                <ul>
                  <li>
                    Taking advantage of the QCI Scheme in expanding the EIA
                    business and continual improvement in quality of EIA
                    projects
                  </li>
                  <li>
                    Promote effective involvement of Empanelled QCI accredited
                    experts in the EIA projects
                  </li>
                  <li>
                    To expand the National Technical Pool for non-EIA and EIA
                    business
                  </li>
                  <li>
                    Tapping the business / generating business for GRC India
                    depending upon the potential of the second party
                  </li>
                  <li>
                    Create a WIN-WIN situation for the company as well as the
                    empanelled experts
                  </li>
                  <li>Target oriented revenue model with regular evaluation</li>
                </ul>

                <h3>BUSINESS MODEL &amp; STRATEGY </h3>
                <p>
                  The strategy would be to generate enough Work Orders in the
                  State depending on size and fees (say 20 WOs minimum) and
                  utilize the services of the QCI empanelled expert to take care
                  of all activities such as discussion with the client,
                  undertaking site visits and updating the technical book
                  prepared for each project and functional area wise as
                  necessary and presenting the case before the SEAC/SEIAA. Basic
                  proposal, report writing &amp; necessary support will be
                  provided by GRC India from its HQ office in Noida based on
                  intimation provided by the expert. This strategy is expected
                  to create additional surplus for the company, enhancing the
                  business base of a particular sector and optimization of EIA
                  business and manpower utilization. The QCI State Expert, RC
                  and BA shall work as a team with a clear JD (Job description).
                  More experts can be added as the workload increases after
                  getting them accredited.
                </p>
                <h3>The EC/FAE/BA can work in any of the below scenarios: </h3>
                <ul>
                  <li>
                    EC/BA – An EIA Coordinator can work both as an EC and BA for
                    a particular state
                  </li>
                  <li>
                    FAE/BA – An FAE can work both as a technical expert and also
                    generate work orders as a BA
                  </li>
                  <li>
                    BA – Business Associate only generating work orders for GRC
                  </li>
                </ul>

                <h3>Becoming the Business Associate Please contact:</h3>
                <p>Mr. Ankit Rana - +91 8510910966</p>
                <strong>e-Mail : ba@grc-india.com</strong>
              </div>

              <div className="tab-pane" id="2a">
                <p>
                  If you have any queries about becoming a Business Associate,
                  they are answered in this section. The FAQs will give you the
                  information you need to know.
                </p>

                <h3>What is the business model of BA-EIA/EMP ?</h3>
                <p>
                  The strategy would be to generate enough Work Orders in the
                  State depending on size and fees (say 20 WOs minimum) and
                  utilize the services of the QCI empanelled expert to take care
                  of all activities such as discussion with the client,
                  undertaking site visits and updating the technical book
                  prepared for each project and functional area wise as
                  necessary and presenting the case before the SEAC/SEIAA. Basic
                  proposal, report writing &amp; necessary support will be
                  provided by GRC India from its HQ office in Noida based on
                  intimation provided by the expert. This strategy is expected
                  to create additional surplus for the company, enhancing the
                  business base of a particular sector and optimization of EIA
                  business and manpower utilization. The QCI State Expert, RC
                  and BA shall work as a team with a clear JD (Job description).
                  More experts can be added as the workload increases after
                  getting them accredited. The business model and strategy is to
                  identify &amp; appoint:
                </p>
                <ul>
                  <li>
                    Identify for an accredited QCI expert from GRC in a
                    particular State – (QCI State Expert – X State)
                  </li>
                  <li>
                    Appoint a Regional Coordinator for the state (RC - X State )
                  </li>
                  <li>
                    Select Business Associate in that State (BA - X State )
                  </li>
                </ul>
                <p>
                  <strong>
                    The EC/FAE/BA can work in any of the below scenarios:
                  </strong>
                </p>
                <ul>
                  <li>
                    EC/BA – An EIA Coordinator can work both as an EC and BA for
                    a particular state
                  </li>
                  <li>
                    FAE/BA – An FAE can work both as a technical expert and also
                    generate work orders as a BA
                  </li>
                  <li>
                    BA – Business Associate only generating work orders for GRC
                  </li>
                </ul>
                <h3>What is the business model of BA-LAB ?</h3>
                <p>
                  As the concept says, NBD – LAB envisages fuller utilization of
                  our lab facilities and geographical expansion through a
                  network of Business Associates empanelled all across the
                  various states of India. There is a huge market prospect in
                  the environment field. As part of environmental compliance,
                  regular monitoring and testing is required to be done by the
                  industry on a regular basis. There are large numbers of
                  industrialized cities in each state of India housing varied
                  industries. Ministry has identified 88 critically and
                  seriously polluted areas restricting further industrial
                  activities. These areas require constant monitoring to control
                  pollution and bring them back on the path of further
                  development. As a first step, industrialized cities in various
                  states will be identified as thrust areas. Business Associates
                  (meeting the requirements) will be identified and an MOU will
                  be signed. The BAs in turn would be responsible for bringing
                  business for GRC LAB. We can also consider having an
                  MOU/Collaboration with SMALL LABS who may not be accredited.
                </p>
              </div>
              <div className="tab-pane" id="3a">
                <p>
                  <strong>Eligibility Criteria as mentioned below:-</strong>
                </p>
                <ul>
                  <li>Number of Years of experience (approximately 5 years)</li>
                  <li>
                    EIA/Environment/Laboratory/Business Development related
                    experience (minimum 5 years)
                  </li>
                  <li>
                    Master’s Degree in Science or Management OR Bachelors in
                    Engineering/Environment/Any other
                  </li>
                </ul>
              </div>
              <div className="tab-pane" id="4a">
                <div className="row">
                  <div className="col-md-6">
                    <div className="heading ">
                      {" "}
                      <span></span>
                      <h3 className="page-hd">
                        Expression Of Interest (EOI) Form
                      </h3>
                    </div>
                    <div
                      className="contact-form-box con-form"
                      ng-controller="FormController"
                    >
                      <form onSubmit={e => handleOnSubmit(e)}>
                        <p>
                          <strong>1. Personal Details:</strong>
                        </p>
                        <div className="form-group">
                          <input
                            name="cname"
                            className="cname form-control"
                            type="text"
                            placeholder="Name"
                            value={formData.firstName}
                            onChange={e => setFormData({
                              ...formData,
                              firstName: e.target.value,
                              firstNameError: ""
                            })} disabled={formData.processing} />
                          <span className="text-danger error">
                            {formData.firstNameError}
                          </span>
                        </div>
                        <div className="form-group">
                          <input
                            name="cbirth"
                            className="cbirth form-control"
                            type="date"
                            placeholder="Date of Birth"
                            value={formData.birth}
                            onChange={e => setFormData({
                              ...formData,
                              birth: e.target.value,
                              birthError: ""
                            })} disabled={formData.processing} />
                          <span className="text-danger error">
                            {formData.birthError}
                          </span>
                        </div>
                        <div className="form-group">
                          <input
                            name="clocation"
                            className="clocation form-control"
                            type="text"
                            placeholder="Location (State/District)"
                            value={formData.location}
                            onChange={e => setFormData({
                              ...formData,
                              location: e.target.value,
                              locationErrorError: ""
                            })} disabled={formData.processing} />
                          <span className="text-danger error">
                            {formData.locationError}
                          </span>
                        </div>
                        <div className="form-group">
                          <input
                            name="ceducation"
                            className="ceducation form-control"
                            type="text"
                            placeholder="Educational Qualification"
                            value={formData.education}
                            onChange={e => setFormData({
                              ...formData,
                              education: e.target.value,
                              educationError: ""
                            })} disabled={formData.processing} />
                          <span className="text-danger error">
                            {formData.educationError}
                          </span>
                        </div>
                        <div className="form-group">
                          <input
                            name="cmobile"
                            className="cmobile form-control"
                            type="text"
                            placeholder="Contact No. with email address"
                            value={formData.mobile}
                            onChange={e => setFormData({
                              ...formData,
                              mobile: e.target.value,
                              mobileError: ""
                            })} disabled={formData.processing} />
                          <span className="text-danger error">
                            {formData.mobileError}
                          </span>
                        </div>
                        <div className="form-group">
                          <input
                            name="cexperience"
                            className="cexperience form-control"
                            type="text"
                            placeholder="Overall Years of Experience (in years)"
                            value={formData.experience}
                            onChange={e => setFormData({
                              ...formData,
                              experience: e.target.value,
                              experienceError: ""
                            })} disabled={formData.processing} />
                          <span className="text-danger error">
                            {formData.experienceError}
                          </span>
                        </div>
                        <div className="form-group">
                          <input
                            name="cfullexp"
                            className="cfullexp form-control"
                            type="text"
                            placeholder="Experience in the field of environment (in years)"
                            value={formData.fullexp}
                            onChange={e => setFormData({
                              ...formData,
                              fullexp: e.target.value,
                              fullexpErrorError: ""
                            })} disabled={formData.processing} />
                          <span className="text-danger error">
                            {formData.fullexpError}
                          </span>
                        </div>

                        <p>
                          <strong>
                            2. From where did you come to know about our
                            Business Associate program? Tick the appropriate:
                          </strong>
                        </p>
                        <div className="row align-items-center mb-3">
                          <div className="col-md-3">
                            <div className="form-group">
                              <input
                                name="cabout"
                                type="checkbox"
                                value="LinkedIn"
                                style={{
                                  float: "left",
                                  width: "auto",
                                  marginRight: "5px",
                                  marginTop: "0.3rem",
                                  height: "auto",
                                }}
                                onChange={e => setFormData({
                                  ...formData,
                                  business: e.target.value,
                                  businessError: ""
                                })} disabled={formData.processing} />{" "}
                              LinkedIn
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="form-group">
                              <input
                                name="cabout"
                                type="checkbox"
                                value="Reference"
                                style={{
                                  float: "left",
                                  width: "auto",
                                  marginRight: "5px",
                                  marginTop: "0.3rem",
                                  height: "auto",
                                }}
                                onChange={e => setFormData({
                                  ...formData,
                                  business: e.target.value,
                                  businessError: ""
                                })} disabled={formData.processing} />
                              Reference
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="form-group">
                              <input
                                name="cabout"
                                type="checkbox"
                                value="Website"
                                style={{
                                  float: "left",
                                  width: "auto",
                                  marginRight: "5px",
                                  marginTop: "0.3rem",
                                  height: "auto",
                                }}
                                onChange={e => setFormData({
                                  ...formData,
                                  business: e.target.value,
                                  businessError: ""
                                })} disabled={formData.processing} />
                              Website
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <input
                            name="cother"
                            className="contact-name form-control"
                            type="text"
                            placeholder="Any other source (Mention, if any)"
                            value={formData.other}
                            onChange={e => setFormData({
                              ...formData,
                              other: e.target.value,
                              otherError: ""
                            })} disabled={formData.processing} />
                          <span className="text-danger error">
                            {formData.otherError}
                          </span>
                        </div>
                        <p>
                          <strong>
                            3. Mention in maximum 100 words how your association
                            as a Business Associate can mutually benefit both
                            yourself and GRC India in its business development
                            across PAN India. Mention the Strengths, Skill set
                            and other positive areas of yours in the area of
                            business development
                          </strong>
                        </p>
                        <div className="form-group">
                          <textarea
                            placeholder="Your Message*"
                            name="message"
                            className="form-control"
                            value={formData.message}
                            onChange={e => setFormData({
                              ...formData,
                              message: e.target.value,
                              messageError: ""
                            })} disabled={formData.processing} ></textarea>
                          <span className="text-danger error">
                            {formData.messageError}
                          </span>
                        </div>
                        <p>
                          <strong>
                            4. As a Business Associate, which all
                            states/district you can help us for expanding our
                            business in EIA/EMP and Laboratory. Mention the name
                            of the states.
                          </strong>
                        </p>
                        <div className="form-group">
                          <textarea
                            placeholder="Your Message*"
                            name="message1"
                            className="form-control"
                            value={formData.message1}
                            onChange={e => setFormData({
                              ...formData,
                              message1: e.target.value,
                              message1Error: ""
                            })} disabled={formData.processing} ></textarea>
                          <span className="text-danger error">
                            {formData.message1Error}
                          </span>
                        </div>
                        <p>
                          <strong>
                            5. Kindly attach a detailed Resume/CV along with
                            this format.
                          </strong>
                        </p>
                        <div className="form-group">
                          <input
                            type="file"
                            name="my_file"
                            className="form-control"
                            value={formData.file}
                            onChange={e => setFormData({
                              ...formData,
                              file: e.target.files[0],
                              fileError: ""
                            })} disabled={formData.processing} />
                          <span className="text-danger error">
                            {formData.fileError}
                          </span>
                        </div>
                        <p>
                          <strong>
                            For more details about our organization and its
                            related activities, please do visit our website
                            <a href="http://www.grc-india.com/" target="_blank">
                              www.grc-india.com
                            </a>{" "}
                            &amp;{" "}
                            <a
                              href="http://www.search-foundation.com/"
                              target="_blank"
                            >
                              {" "}
                              www.search-foundation.com
                            </a>
                          </strong>
                        </p>

                        <button
                          type="submit"
                          className="btn btn-primary"
                        >
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <p style={{ fontSize: "16px;" }}>
                      Download EOI Form &amp; submit with details at{" "}
                      <a href="mailto:ba@grc-india.com">ba@grc-india.com</a>
                      <br />
                      <strong>CLICK HERE for Download</strong>{" "}
                      <a href="EOI FORM.docx">
                        Expression Of Interest (EOI) Form
                      </a>
                      <br />
                      For any query kindly contact to Mr. Ankit Rana - +91
                      8510910966
                    </p>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>
    </Fragment>
  );
}
