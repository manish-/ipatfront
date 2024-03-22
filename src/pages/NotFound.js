import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Helmet from "react-helmet"; 
import { FaFrown } from "react-icons/fa";


const NotFound = (props) =>{
    return(
        <div className="serchengne01">
            <Helmet>
            <meta name="robots" content="index, follow" />
            <title>{props.title || "GRC India"}</title>  
            <meta name="keyword" content={props.title || "GRC India"} />
             <meta name="description" content={props.title || "GRC India"} />      
            </Helmet>

            <div className="bread-sec" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/home-sec1-bg.jpg)` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="head-bread">
                                <h1>Not Found</h1>
                                <ol className="breadcrumb">
                                    <li><Link to={"/"}>Home</Link></li>
                                    <li>/</li>
                                    <li className="active">Not Found</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          {/* <!-- not-found start --> */}
            <div className="not-found-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div className="svr-content">
                                <h2 className="men-heading">4 <FaFrown /> 4</h2>
                                <p className="mb-4">The page you were looking for was moved or doesn't exist.<br />Let's get you back.</p>
                                <Link className="custom-btn" to="/">Back to Home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFound;