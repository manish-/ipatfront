import React from 'react';
import { NavLink, Link, useParams } from "react-router-dom";
import {
    Box,
    Breadcrumbs,
    Paper,
    Typography
} from '@mui/material';

import {
    MailOutlined,
    DashboardOutlined,
    VisibilityOutlined,
    SaveOutlined,
    RestartAltOutlined
} from '@mui/icons-material';


const Breadcrumb = (props) => {

    return <Paper elevation={3} sx={{ pt: 1, pb: 1 }}>
        <Box component="form" noValidate sx={{ mt: 1, mx: 2, my: 2 }}>
            <Breadcrumbs aria-label="breadcrumb">
                <Link component={NavLink}
                    underline="hover"
                    sx={{ display: 'flex', alignItems: 'center' }}
                    color="inherit"
                    to="/admin/dashboard"
                >
                    <DashboardOutlined sx={{ mr: 0.5 }} fontSize="inherit" />
                    Dashboard
                </Link>

                <Link component={NavLink}
                    underline="hover"
                    sx={{ display: 'flex', alignItems: 'center' }}
                    color="inherit"
                    to={props.listTitleUrl}
                >
                    <DashboardOutlined sx={{ mr: 0.5 }} fontSize="inherit" />
                    {props.listTitle}
                </Link>
                {
                    props.editTitle ?

                        <Typography
                            sx={{ display: 'flex', alignItems: 'center' }}
                            color="text.primary"
                        >
                            <MailOutlined sx={{ mr: 0.5 }} fontSize="inherit" />
                            {props.editTitle}
                        </Typography>
                        : ""}
            </Breadcrumbs>
        </Box>
    </Paper >
};

export default Breadcrumb;
