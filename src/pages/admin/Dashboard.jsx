import React, { Fragment, useEffect } from "react";
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from 'react-router';
import * as CONSTANTS from '../../constants/Constants';
import ProcessingLoader from '../../components/admin/ProcessingLoader';

const Dashboard = (props) => {

    const dispatch = useDispatch();

    
    return <Fragment>
        <Helmet>
            <title>Admin Dashboard</title>
        </Helmet>
        <h1>Dashboard</h1>

    </Fragment>;
};

export default Dashboard;