import React, { Fragment } from 'react';
import { Box, Card, CardContent, CardMedia, Grid, IconButton, Typography } from '@mui/material';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import BarChartIcon from '@mui/icons-material/BarChart';
import DonutSmallIcon from '@mui/icons-material/DonutSmall';

export default function DashBoardWidget(props) {

    return <Fragment>
        <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
            {props.title}
        </Typography>
        <Grid container spacing={2} sx={{ pt: 1, pb: 2 }}>
            <Grid item xs={12} sm={3}>
                <Card sx={{ display: 'flex', flexDirection: 'row', justifyContent: "center" }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', backgroundColor: '#d3d3d347', width: "100%" }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Yesterday's
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                <IconButton aria-label="settings" size="small">
                                    <CurrencyRupeeOutlinedIcon /> {props.bookingYesterday ? props.bookingYesterday : 0}/-
                                </IconButton>
                            </Typography>
                        </CardContent>

                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', backgroundColor: "green" }}>
                        <IconButton aria-label="settings" size="large" sx={{ color: "white" }}>
                            <DonutSmallIcon sx={{ fontSize: "60px" }} />
                        </IconButton>
                    </Box>
                </Card>
            </Grid>
            <Grid item xs={12} sm={3}>
                <Card sx={{ display: 'flex', flexDirection: 'row', justifyContent: "center" }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', backgroundColor: '#d3d3d347', width: "100%" }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                This Month's
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                <IconButton aria-label="settings" size="small">
                                    <CurrencyRupeeOutlinedIcon /> {props.bookingThisMonth ? props.bookingThisMonth : 0}/-
                                </IconButton>
                            </Typography>
                        </CardContent>

                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', backgroundColor: "green" }}>
                        <IconButton aria-label="settings" size="large" sx={{ color: "white" }}>
                            <DonutSmallIcon sx={{ fontSize: "60px" }} />
                        </IconButton>
                    </Box>
                </Card>
            </Grid>
        </Grid>
    </Fragment>;
}
