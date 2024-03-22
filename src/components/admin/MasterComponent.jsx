import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import ViewListOutlinedIcon from '@mui/icons-material/ViewListOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import FestivalOutlinedIcon from '@mui/icons-material/FestivalOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Navigate } from 'react-router';
import * as AuthActions from '../../actions/admin/authenticateActions';
import { useDispatch } from 'react-redux';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';

const drawerWidth = 260;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(9)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);


const MasterComponent = (props) => {
    const theme = useTheme();
    const location = useLocation();
    let routePaths = location.pathname.split("/");
    const dispatch = useDispatch();

    const [currentMenuSelection, setCurrentMenuSelection] = React.useState({
        openMenu: null,
        manu: "dashboard",
        sub_menu: null,
    });
    const [currentOpenMenuSelection, setCurrentOpenMenuSelection] = React.useState((routePaths[2] ? routePaths[2] : ''));

    const setCurrentOpenMenuSelectionHandler = (openMenu) => {
        if (openMenu === currentOpenMenuSelection) {
            setCurrentOpenMenuSelection('');
        } else {
            setCurrentOpenMenuSelection(openMenu);
        }
    };

    const setMenuSelection = (menu, subMenu = null) => {
        setCurrentMenuSelection({
            menu: menu,
            sub_menu: subMenu
        });
        if (subMenu === null) {
            setCurrentOpenMenuSelectionHandler('');
        }
    };
    const [open, setOpen] = React.useState(true);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    React.useEffect(() => {
        if (routePaths.length >= 4) {
            setMenuSelection(routePaths[2], routePaths[3]);
        } else {
            setMenuSelection(routePaths[2]);
        }
    }, [routePaths.length, location.pathname])

    const logout = (e) => {
        dispatch(AuthActions.signout());
    };

    return (
        <React.Fragment>
            {
                (routePaths[2] === undefined || routePaths[2] === null || routePaths[2] === '') ? <Navigate to="/admin/dashbaord" /> : ""
            }
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="fixed" open={open}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{
                                marginRight: '36px',
                                ...(open && { display: 'none' }),
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap component="div">
                            GRC India
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer variant="permanent" open={open}>
                    <DrawerHeader>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                        </IconButton>
                    </DrawerHeader>
                    <Divider />
                    <List>
                        <ListItem button key={"dashboard"} component={NavLink} to="/admin/dashboard" onClick={(e) => setMenuSelection('dashboard')} selected={currentMenuSelection.menu === 'dashboard' || currentMenuSelection.menu === null}>
                            <ListItemIcon>
                                <DashboardOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Dashboard'} />
                        </ListItem>
                        <Divider />
                        <ListItem button key={"home-popup"} component={NavLink} to="/admin/home-popup" onClick={(e) => setMenuSelection('home-popup')} selected={currentMenuSelection.menu === 'home-popup' || currentMenuSelection.menu === null}>
                            <ListItemIcon>
                                <DashboardOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Home Popup'} />
                        </ListItem>
                        <Divider />
                        <ListItemButton onClick={(e) => setCurrentOpenMenuSelectionHandler('about-us-pages')} selected={currentMenuSelection.menu === 'about-us-pages' || currentMenuSelection.menu === 'about-us-page'}>
                            <ListItemIcon>
                                <EventNoteOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="About Us" />
                            {currentMenuSelection.menu === "about-us-pages" ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={currentOpenMenuSelection === 'about-us-pages' || currentOpenMenuSelection === 'about-us-page'} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }} component={NavLink} to="/admin/about-us-pages/list" onClick={(e) => setMenuSelection('about-us-pages', 'list')} selected={(currentMenuSelection.menu === 'about-us-pages' || currentMenuSelection.menu === 'about-us-page') && (currentMenuSelection.sub_menu === 'list')}>
                                    <ListItemIcon>
                                        <ViewListOutlinedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="List" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4 }} component={NavLink} to="/admin/about-us-pages/add" onClick={(e) => setMenuSelection('about-us-pages', 'add')} selected={(currentMenuSelection.menu === 'about-us-pages' || currentMenuSelection.menu === 'about-us-page') && (currentMenuSelection.sub_menu === 'add')}>
                                    <ListItemIcon>
                                        <AddBoxOutlinedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={"Add "} />
                                </ListItemButton>
                            </List>
                        </Collapse>

                        <ListItemButton onClick={(e) => setCurrentOpenMenuSelectionHandler('banner')} selected={currentMenuSelection.menu === 'banner' || currentMenuSelection.menu === 'banner'}>
                            <ListItemIcon>
                                <EventNoteOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Banners" />
                            {currentMenuSelection.menu === "banner" ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={currentOpenMenuSelection === 'banner' || currentOpenMenuSelection === 'banner'} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }} component={NavLink} to="/admin/banner/list" onClick={(e) => setMenuSelection('banner', 'list')} selected={(currentMenuSelection.menu === 'banner' || currentMenuSelection.menu === 'banner') && (currentMenuSelection.sub_menu === 'list')}>
                                    <ListItemIcon>
                                        <ViewListOutlinedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="List" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4 }} component={NavLink} to="/admin/banner/add" onClick={(e) => setMenuSelection('banner', 'add')} selected={(currentMenuSelection.menu === 'banner' || currentMenuSelection.menu === 'banner') && (currentMenuSelection.sub_menu === 'add')}>
                                    <ListItemIcon>
                                        <AddBoxOutlinedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={"Add "} />
                                </ListItemButton>
                            </List>
                        </Collapse>

                        <Divider />

                        <ListItemButton onClick={(e) => setCurrentOpenMenuSelectionHandler('clienteles')} selected={currentMenuSelection.menu === 'clienteles' || currentMenuSelection.menu === 'clientele'}>
                            <ListItemIcon>
                                <EventNoteOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Clientele" />
                            {currentMenuSelection.menu === "clienteles" ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={currentOpenMenuSelection === 'clienteles' || currentOpenMenuSelection === 'clientele'} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>

                                <ListItemButton sx={{ pl: 4 }} component={NavLink} to="/admin/clienteles/meta" onClick={(e) => setMenuSelection('clienteles', 'meta')} selected={(currentMenuSelection.menu === 'clienteles' || currentMenuSelection.menu === 'clientele') && (currentMenuSelection.sub_menu === 'meta')}>
                                    <ListItemIcon>
                                        <ViewListOutlinedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Meta" />
                                </ListItemButton>

                                <ListItemButton sx={{ pl: 4 }} component={NavLink} to="/admin/clienteles/list" onClick={(e) => setMenuSelection('clienteles', 'list')} selected={(currentMenuSelection.menu === 'clienteles' || currentMenuSelection.menu === 'clientele') && (currentMenuSelection.sub_menu === 'list')}>
                                    <ListItemIcon>
                                        <ViewListOutlinedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="List" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4 }} component={NavLink} to="/admin/clienteles/add" onClick={(e) => setMenuSelection('clienteles', 'add')} selected={(currentMenuSelection.menu === 'clienteles' || currentMenuSelection.menu === 'clientele') && (currentMenuSelection.sub_menu === 'add')}>
                                    <ListItemIcon>
                                        <AddBoxOutlinedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={"Add "} />
                                </ListItemButton>
                            </List>
                        </Collapse>



                        <ListItemButton onClick={(e) => setCurrentOpenMenuSelectionHandler('client-projects')} selected={currentMenuSelection.menu === 'client-projects' || currentMenuSelection.menu === 'client-project'}>
                            <ListItemIcon>
                                <EventNoteOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Client Projects" />
                            {currentMenuSelection.menu === "client-projects" ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={currentOpenMenuSelection === 'client-projects' || currentOpenMenuSelection === 'client-project'} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>

                                <ListItemButton sx={{ pl: 4 }} component={NavLink} to="/admin/client-projects/list" onClick={(e) => setMenuSelection('client-projects', 'list')} selected={(currentMenuSelection.menu === 'client-projects' || currentMenuSelection.menu === 'client-project') && (currentMenuSelection.sub_menu === 'list')}>
                                    <ListItemIcon>
                                        <ViewListOutlinedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="List" />
                                </ListItemButton>
                            </List>
                        </Collapse>


                        <ListItemButton onClick={(e) => setCurrentOpenMenuSelectionHandler('project-sectors')} selected={currentMenuSelection.menu === 'project-sectors' || currentMenuSelection.menu === 'project-sector'}>
                            <ListItemIcon>
                                <EventNoteOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Project Sectors" />
                            {currentMenuSelection.menu === "project-sectors" ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={currentOpenMenuSelection === 'project-sectors' || currentOpenMenuSelection === 'project-sector'} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }} component={NavLink} to="/admin/project-sectors/list" onClick={(e) => setMenuSelection('project-sectors', 'list')} selected={(currentMenuSelection.menu === 'project-sectors' || currentMenuSelection.menu === 'project-sector') && (currentMenuSelection.sub_menu === 'list')}>
                                    <ListItemIcon>
                                        <ViewListOutlinedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="List" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4 }} component={NavLink} to="/admin/project-sectors/add" onClick={(e) => setMenuSelection('project-sectors', 'add')} selected={(currentMenuSelection.menu === 'project-sectors' || currentMenuSelection.menu === 'project-sector') && (currentMenuSelection.sub_menu === 'add')}>
                                    <ListItemIcon>
                                        <AddBoxOutlinedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={"Add "} />
                                </ListItemButton>
                            </List>
                        </Collapse>

                        <ListItemButton onClick={(e) => setCurrentOpenMenuSelectionHandler('project-types')} selected={currentMenuSelection.menu === 'project-types' || currentMenuSelection.menu === 'project-type'}>
                            <ListItemIcon>
                                <EventNoteOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Project Types" />
                            {currentMenuSelection.menu === "project-types" ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={currentOpenMenuSelection === 'project-types' || currentOpenMenuSelection === 'project-type'} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }} component={NavLink} to="/admin/project-types/list" onClick={(e) => setMenuSelection('project-types', 'list')} selected={(currentMenuSelection.menu === 'project-types' || currentMenuSelection.menu === 'project-type') && (currentMenuSelection.sub_menu === 'list')}>
                                    <ListItemIcon>
                                        <ViewListOutlinedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="List" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4 }} component={NavLink} to="/admin/project-types/add" onClick={(e) => setMenuSelection('project-types', 'add')} selected={(currentMenuSelection.menu === 'project-types' || currentMenuSelection.menu === 'project-type') && (currentMenuSelection.sub_menu === 'add')}>
                                    <ListItemIcon>
                                        <AddBoxOutlinedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={"Add "} />
                                </ListItemButton>
                            </List>
                        </Collapse>


                        <Divider />

                        <ListItemButton onClick={(e) => setCurrentOpenMenuSelectionHandler('new-initiatives')} selected={currentMenuSelection.menu === 'new-initiatives' || currentMenuSelection.menu === 'new-initiative'}>
                            <ListItemIcon>
                                <EventNoteOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="New Initiatives" />
                            {currentMenuSelection.menu === "new-initiatives" ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>

                        <Collapse in={currentOpenMenuSelection === 'new-initiatives' || currentOpenMenuSelection === 'new-initiative'} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>

                                <ListItemButton sx={{ pl: 4 }} component={NavLink} to="/admin/new-initiatives/meta" onClick={(e) => setMenuSelection('new-initiatives', 'meta')} selected={(currentMenuSelection.menu === 'new-initiatives' || currentMenuSelection.menu === 'new-initiative') && (currentMenuSelection.sub_menu === 'meta')}>
                                    <ListItemIcon>
                                        <ViewListOutlinedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Meta" />
                                </ListItemButton>

                                <ListItemButton sx={{ pl: 4 }} component={NavLink} to="/admin/new-initiatives/list" onClick={(e) => setMenuSelection('new-initiatives', 'list')} selected={(currentMenuSelection.menu === 'new-initiatives' || currentMenuSelection.menu === 'new-initiative') && (currentMenuSelection.sub_menu === 'list')}>
                                    <ListItemIcon>
                                        <ViewListOutlinedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="List" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4 }} component={NavLink} to="/admin/new-initiatives/add" onClick={(e) => setMenuSelection('new-initiatives', 'add')} selected={(currentMenuSelection.menu === 'new-initiatives' || currentMenuSelection.menu === 'new-initiative') && (currentMenuSelection.sub_menu === 'add')}>
                                    <ListItemIcon>
                                        <AddBoxOutlinedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={"Add "} />
                                </ListItemButton>
                            </List>
                        </Collapse>

                        <Divider />

                        <ListItemButton onClick={(e) => setCurrentOpenMenuSelectionHandler('careers')} selected={currentMenuSelection.menu === 'careers' || currentMenuSelection.menu === 'career'}>
                            <ListItemIcon>
                                <EventNoteOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Careers" />
                            {currentMenuSelection.menu === "careers" ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={currentOpenMenuSelection === 'careers' || currentOpenMenuSelection === 'career'} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>

                                <ListItemButton sx={{ pl: 4 }} component={NavLink} to="/admin/careers/meta" onClick={(e) => setMenuSelection('careers', 'meta')} selected={(currentMenuSelection.menu === 'careers' || currentMenuSelection.menu === 'career') && (currentMenuSelection.sub_menu === 'meta')}>
                                    <ListItemIcon>
                                        <ViewListOutlinedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Meta" />
                                </ListItemButton>

                                <ListItemButton sx={{ pl: 4 }} component={NavLink} to="/admin/careers/list" onClick={(e) => setMenuSelection('careers', 'list')} selected={(currentMenuSelection.menu === 'careers' || currentMenuSelection.menu === 'career') && (currentMenuSelection.sub_menu === 'list')}>
                                    <ListItemIcon>
                                        <ViewListOutlinedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="List" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4 }} component={NavLink} to="/admin/careers/add" onClick={(e) => setMenuSelection('careers', 'add')} selected={(currentMenuSelection.menu === 'careers' || currentMenuSelection.menu === 'career') && (currentMenuSelection.sub_menu === 'add')}>
                                    <ListItemIcon>
                                        <AddBoxOutlinedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={"Add "} />
                                </ListItemButton>
                            </List>
                        </Collapse>

                        <ListItemButton onClick={(e) => setCurrentOpenMenuSelectionHandler('contact-us')} selected={currentMenuSelection.menu === 'contact-us' || currentMenuSelection.menu === 'contact-us'}>
                            <ListItemIcon>
                                <EventNoteOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Contact Us" />
                            {currentMenuSelection.menu === "contact-us" ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={currentOpenMenuSelection === 'contact-us' || currentOpenMenuSelection === 'contact-us'} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>

                                <ListItemButton sx={{ pl: 4 }} component={NavLink} to="/admin/contact-us/meta" onClick={(e) => setMenuSelection('contact-us', 'meta')} selected={(currentMenuSelection.menu === 'contact-us' || currentMenuSelection.menu === 'contact-us') && (currentMenuSelection.sub_menu === 'meta')}>
                                    <ListItemIcon>
                                        <ViewListOutlinedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Meta" />
                                </ListItemButton>

                                <ListItemButton sx={{ pl: 4 }} component={NavLink} to="/admin/contact-us/enquiry" onClick={(e) => setMenuSelection('contact-us', 'enquiry')} selected={(currentMenuSelection.menu === 'contact-us' || currentMenuSelection.menu === 'contact-us') && (currentMenuSelection.sub_menu === 'enquiry')}>
                                    <ListItemIcon>
                                        <ViewListOutlinedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Enquiry" />
                                </ListItemButton>


                            </List>
                        </Collapse>

                        <ListItem button key={"customer-complains"} component={NavLink} to="/admin/customer-complains" onClick={(e) => setMenuSelection('customer-complains')} selected={currentMenuSelection.menu === 'customer-complains' || currentMenuSelection.menu === null}>
                            <ListItemIcon>
                                <DashboardOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary={`Customer Complain`} />
                        </ListItem>

                        <ListItem button key={"customer-feedback"} component={NavLink} to="/admin/customer-feedback" onClick={(e) => setMenuSelection('customer-feedback')} selected={currentMenuSelection.menu === 'customer-feedback' || currentMenuSelection.menu === null}>
                            <ListItemIcon>
                                <DashboardOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary={`Customer Feedback`} />
                        </ListItem>

                        <ListItemButton onClick={(e) => setCurrentOpenMenuSelectionHandler('accreditations')} selected={currentMenuSelection.menu === 'accreditations' || currentMenuSelection.menu === 'accreditation'}>
                            <ListItemIcon>
                                <EventNoteOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Accreditations" />
                            {currentMenuSelection.menu === "accreditations" ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={currentOpenMenuSelection === 'accreditations' || currentOpenMenuSelection === 'accreditation'} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>

                                <ListItemButton sx={{ pl: 4 }} component={NavLink} to="/admin/accreditations/list" onClick={(e) => setMenuSelection('accreditations', 'list')} selected={(currentMenuSelection.menu === 'accreditations' || currentMenuSelection.menu === 'accreditation') && (currentMenuSelection.sub_menu === 'list')}>
                                    <ListItemIcon>
                                        <ViewListOutlinedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="List" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4 }} component={NavLink} to="/admin/accreditations/add" onClick={(e) => setMenuSelection('accreditations', 'add')} selected={(currentMenuSelection.menu === 'accreditations' || currentMenuSelection.menu === 'accreditation') && (currentMenuSelection.sub_menu === 'add')}>
                                    <ListItemIcon>
                                        <AddBoxOutlinedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={"Add "} />
                                </ListItemButton>
                            </List>
                        </Collapse>

                        <ListItemButton onClick={(e) => setCurrentOpenMenuSelectionHandler('downloads')} selected={currentMenuSelection.menu === 'downloads' || currentMenuSelection.menu === 'download'}>
                            <ListItemIcon>
                                <EventNoteOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Downloads" />
                            {currentMenuSelection.menu === "downloads" ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={currentOpenMenuSelection === 'downloads' || currentOpenMenuSelection === 'download'} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>

                                <ListItemButton sx={{ pl: 4 }} component={NavLink} to="/admin/downloads/meta" onClick={(e) => setMenuSelection('downloads', 'meta')} selected={(currentMenuSelection.menu === 'downloads' || currentMenuSelection.menu === 'download') && (currentMenuSelection.sub_menu === 'meta')}>
                                    <ListItemIcon>
                                        <ViewListOutlinedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Meta" />
                                </ListItemButton>

                                <ListItemButton sx={{ pl: 4 }} component={NavLink} to="/admin/downloads/list" onClick={(e) => setMenuSelection('downloads', 'list')} selected={(currentMenuSelection.menu === 'downloads' || currentMenuSelection.menu === 'download') && (currentMenuSelection.sub_menu === 'list')}>
                                    <ListItemIcon>
                                        <ViewListOutlinedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="List" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4 }} component={NavLink} to="/admin/downloads/add" onClick={(e) => setMenuSelection('downloads', 'add')} selected={(currentMenuSelection.menu === 'downloads' || currentMenuSelection.menu === 'download') && (currentMenuSelection.sub_menu === 'add')}>
                                    <ListItemIcon>
                                        <AddBoxOutlinedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={"Add "} />
                                </ListItemButton>
                            </List>
                        </Collapse>

                        <ListItem button key={"laboratory"} component={NavLink} to="/admin/laboratory" onClick={(e) => setMenuSelection('laboratory')} selected={currentMenuSelection.menu === 'laboratory' || currentMenuSelection.menu === null}>
                            <ListItemIcon>
                                <DashboardOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Laboratory'} />
                        </ListItem>


                        <ListItemButton onClick={(e) => setCurrentOpenMenuSelectionHandler('news')} selected={currentMenuSelection.menu === 'news' || currentMenuSelection.menu === 'news'}>
                            <ListItemIcon>
                                <EventNoteOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="NEWS" />
                            {currentMenuSelection.menu === "news" ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={currentOpenMenuSelection === 'news' || currentOpenMenuSelection === 'news'} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }} component={NavLink} to="/admin/news/list" onClick={(e) => setMenuSelection('news', 'list')} selected={(currentMenuSelection.menu === 'news' || currentMenuSelection.menu === 'news') && (currentMenuSelection.sub_menu === 'list')}>
                                    <ListItemIcon>
                                        <ViewListOutlinedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="List" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4 }} component={NavLink} to="/admin/news/add" onClick={(e) => setMenuSelection('news', 'add')} selected={(currentMenuSelection.menu === 'news' || currentMenuSelection.menu === 'news') && (currentMenuSelection.sub_menu === 'add')}>
                                    <ListItemIcon>
                                        <AddBoxOutlinedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={"Add "} />
                                </ListItemButton>
                            </List>
                        </Collapse>



                        <ListItemButton onClick={(e) => setCurrentOpenMenuSelectionHandler('services')} selected={currentMenuSelection.menu === 'services' || currentMenuSelection.menu === 'service'}>
                            <ListItemIcon>
                                <EventNoteOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Service" />
                            {currentMenuSelection.menu === "services" ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={currentOpenMenuSelection === 'services' || currentOpenMenuSelection === 'service'} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }} component={NavLink} to="/admin/services/list" onClick={(e) => setMenuSelection('services', 'list')} selected={(currentMenuSelection.menu === 'services' || currentMenuSelection.menu === 'service') && (currentMenuSelection.sub_menu === 'list')}>
                                    <ListItemIcon>
                                        <ViewListOutlinedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="List" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4 }} component={NavLink} to="/admin/services/add" onClick={(e) => setMenuSelection('services', 'add')} selected={(currentMenuSelection.menu === 'services' || currentMenuSelection.menu === 'service') && (currentMenuSelection.sub_menu === 'add')}>
                                    <ListItemIcon>
                                        <AddBoxOutlinedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={"Add "} />
                                </ListItemButton>
                            </List>
                        </Collapse>

                        <ListItemButton onClick={(e) => setCurrentOpenMenuSelectionHandler('seminars')} selected={currentMenuSelection.menu === 'seminars' || currentMenuSelection.menu === 'seminar'}>
                            <ListItemIcon>
                                <EventNoteOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Seminars" />
                            {currentMenuSelection.menu === "seminars" ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={currentOpenMenuSelection === 'seminars' || currentOpenMenuSelection === 'seminar'} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }} component={NavLink} to="/admin/seminars/list" onClick={(e) => setMenuSelection('seminars', 'list')} selected={(currentMenuSelection.menu === 'seminars' || currentMenuSelection.menu === 'seminar') && (currentMenuSelection.sub_menu === 'list')}>
                                    <ListItemIcon>
                                        <ViewListOutlinedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="List" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4 }} component={NavLink} to="/admin/seminars/add" onClick={(e) => setMenuSelection('seminars', 'add')} selected={(currentMenuSelection.menu === 'seminars' || currentMenuSelection.menu === 'seminar') && (currentMenuSelection.sub_menu === 'add')}>
                                    <ListItemIcon>
                                        <AddBoxOutlinedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={"Add "} />
                                </ListItemButton>
                            </List>
                        </Collapse>

                        <ListItemButton onClick={(e) => setCurrentOpenMenuSelectionHandler('address')} selected={currentMenuSelection.menu === 'address'}>
                            <ListItemIcon>
                                <EventNoteOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Address" />
                            {currentMenuSelection.menu === "address" ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={currentOpenMenuSelection === 'address'} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>

                                <ListItemButton sx={{ pl: 4 }} component={NavLink} to="/admin/address/list" onClick={(e) => setMenuSelection('address', 'list')} selected={(currentMenuSelection.menu === 'address') && (currentMenuSelection.sub_menu === 'list')}>
                                    <ListItemIcon>
                                        <ViewListOutlinedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="List" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4 }} component={NavLink} to="/admin/address/add" onClick={(e) => setMenuSelection('address', 'add')} selected={(currentMenuSelection.menu === 'address') && (currentMenuSelection.sub_menu === 'add')}>
                                    <ListItemIcon>
                                        <AddBoxOutlinedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={"Add "} />
                                </ListItemButton>
                            </List>
                        </Collapse>


                        <ListItemButton onClick={(e) => setCurrentOpenMenuSelectionHandler('faqs')} selected={currentMenuSelection.menu === 'faqs'}>
                            <ListItemIcon>
                                <EventNoteOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="FAQs" />
                            {currentMenuSelection.menu === "faqs" ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={currentOpenMenuSelection === 'faqs'} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }} component={NavLink} to="/admin/faqs/meta" onClick={(e) => setMenuSelection('faqs', 'meta')} selected={(currentMenuSelection.menu === 'faqs' || currentMenuSelection.menu === 'faq') && (currentMenuSelection.sub_menu === 'meta')}>
                                    <ListItemIcon>
                                        <ViewListOutlinedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Meta" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4 }} component={NavLink} to="/admin/faqs/list" onClick={(e) => setMenuSelection('faqs', 'list')} selected={(currentMenuSelection.menu === 'faqs') && (currentMenuSelection.sub_menu === 'list')}>

                                    <ListItemIcon>
                                        <ViewListOutlinedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="List" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4 }} component={NavLink} to="/admin/faq/add" onClick={(e) => setMenuSelection('faqs', 'add')} selected={(currentMenuSelection.menu === 'faqs') && (currentMenuSelection.sub_menu === 'add')}>
                                    <ListItemIcon>
                                        <AddBoxOutlinedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={"Add "} />
                                </ListItemButton>
                            </List>
                        </Collapse>
                        <ListItem button key={"pageedit"} component={NavLink} to="/admin/page/home" onClick={(e) => setMenuSelection('laboratory')} selected={currentMenuSelection.menu === 'page' || currentMenuSelection.menu === null}>
                            <ListItemIcon>
                                <DashboardOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Home Page'} />
                        </ListItem>
                    </List>
                    <Divider />
                    <List style={{ bottom: 0, position: "relative", width: "inherit" }}>

                        <ListItem button key={'Logout'} style={{ backgroundColor: "#951111", color: "#fff" }} onClick={(e) => logout()}>
                            <ListItemIcon>
                                <LogoutOutlinedIcon style={{ backgroundColor: "#951111", color: "#fff" }} />
                            </ListItemIcon>
                            <ListItemText primary={'Logout'} />
                        </ListItem>

                    </List>
                </Drawer>
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <DrawerHeader />
                    <Outlet />
                </Box>
            </Box>
        </React.Fragment>
    );
};

export default MasterComponent;
