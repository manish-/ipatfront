import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function ThankYou(props) {
  return (
    <>
      <Helmet>
        <meta name="robots" content="index, follow" />
        <title>{props.title || "GRC India"}</title>
      </Helmet>

      <div
        className="bread-sec"
        style={{ backgroundImage: `url( ${process.env.PUBLIC_URL}/images/h-bg2.jpg)` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="head-bread">
                <h1>Thank You</h1>
                <ol className="breadcrumb">
                  <li>
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li>/</li>
                  <li className="active">Thank You</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="thank-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="svr-content">
                <h2 className="men-heading">Thank You</h2>
                <p>
                  Thank you for contacting us. <br />
                  We will be in touch with you very soon.
                </p>
                <Link to="/" className="btn btn-default">Go Back</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
