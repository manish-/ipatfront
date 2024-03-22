import React, { Fragment, lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store/user';
import * as APP_CONSTANTS from "./constants/Constants";
import * as UTILS_ACTIONS from "./actions/user/utilsActions";
import Preloader from './components/Preloader';
import Header from "./components/Header";
import Footer from "./components/Footer";


const HomePage = lazy(() => import("./pages/HomePage"));
const GalleryPage = lazy(() => import("./pages/GalleryPage"));
const NewsList = lazy(() => import("./pages/NewsList"));
const NewsDetails = lazy(() => import("./pages/NewsDetails"));
const BecomeAnAssociate = lazy(() => import("./pages/ba2"));
const SeminarsList = lazy(() => import("./pages/SeminarsList"));
const SeminarsDetails = lazy(() => import("./pages/SeminarsDetails"));
const ThankYou = lazy(() => import("./pages/ThankYou"));
const JoinGRC = lazy(() => import("./pages/JoinGRC"));
const GRCGreenEComIndiaPvtLtd = lazy(() => import("./pages/GRCGreenEComIndiaPvtLtd"));

const GRCAcceleratorAndIncubatorFoundation = lazy(() => import("./pages/GRCAcceleratorAndIncubatorFoundation"));
const GRCGreenTIPTechnicalInteractivePlatform = lazy(() => import("./pages/GRCGreenTIPTechnicalInteractivePlatform"));
const GRCGreenERP = lazy(() => import("./pages/GRCGreenERP"));


const AboutUsTemplate = lazy(() => import("./templates/AboutUsTemplate"));
const ProjectsDetailsTemplate = lazy(() => import("./templates/ProjectsDetailsTemplate"));
const ProjectsTemplate = lazy(() => import("./templates/ProjectsTemplate"));
const ProjectListTemplate = lazy(() => import("./templates/ProjectListTemplate"));
const ServicesTemplate = lazy(() => import("./templates/ServicesTemplate"));
const ServicesListTemplate = lazy(() => import("./templates/ServicesListTemplate"));
const LaboratoryTemplate = lazy(() => import("./templates/LaboratoryTemplate"));

const ClienteleTemplate = lazy(() => import("./templates/ClienteleTemplate"));
const CareersTemplate = lazy(() => import("./templates/CareersTemplate"));
const CareersDetailsTemplate = lazy(() => import("./templates/CareersDetailsTemplate"));
const DownloadTemplate = lazy(() => import("./templates/DownloadTemplate"));
const ContactUsTemplate = lazy(() => import("./templates/ContactUsTemplate"));
const FaqsTemplate = lazy(() => import("./templates/FaqsTemplate"));
const NewInitiativesTemplate = lazy(() => import("./templates/NewInitiativesTemplate"));
const NewInitiativesListTemplate = lazy(() => import("./templates/NewInitiativesListTemplate"));

const NotFound = lazy(() => import("./pages/NotFound"));

const UserBaseComponent = (props) => {

    return <Fragment>
        <Provider store={store}>
            <UserRoutes {...props} />
        </Provider>
    </Fragment>

}

export default UserBaseComponent;


const UserRoutes = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(UTILS_ACTIONS.fetch_headermenu());

        const existingScript = document.getElementById('bootstrap-4.0.0');
        if (!existingScript) {
            const script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js'; script.id = 'bootstrap-4.0.0';
            document.body.appendChild(script);
        }

    }, []);

    const { menu, processing, error, errors } = useSelector(state => {
        return {
            menu: state.Utils_Reducers.headerMenu.menu,
            processing: state.Utils_Reducers.headerMenu.processing,
            error: state.Utils_Reducers.headerMenu.error,
            errors: state.Utils_Reducers.headerMenu.errors,
        }
    });

    return <Fragment>
        <Header menu={menu} />
        <Preloader {...props} />
        <Routes>
            {/* <Route exact path={"/"} element={<HomePage  {...props} slug={"/"} menu={menu} page={"Home"} type="list" fullmenu={menu}/>} /> */}
            <Route exact path={"/join-grc"} element={<JoinGRC />} />
            {
                menu.map((row, index) => {
                    {/* console.log(row); */ }
                    return <Route key={row.slug} exact path={"/" + row.slug} element={<LoadTemplate slug={row.slug} menu={row} page={row.page} type="list" fullmenu={menu} />} />
                })
            }
            {
                menu.map((row, index) => {
                    if (row.page === "career") {
                        return <Route key={row.slug} exact path={`/${row.slug}/:slug`} element={<LoadTemplate menu={row} page={"career_details"} type="details" />} />
                    } else if (row.page === "clientele") {
                        return <Route key={row.slug} exact path={`/${row.slug}/:slug`} element={<LoadTemplate menu={row} page={"clientele_details"} type="details" />} />
                    }
                })
            }
            {
                menu.map((row, index) => {
                    if (row.submenu) {
                        return row.submenu.map(submenu => {
                            if (row.slug) {
                                return <Route key={submenu.slug} exact path={`/${row.slug}/${submenu.slug}`} element={<LoadTemplate slug={submenu.slug} menu={row} page={row.page} type="details" />} />
                            } else {
                                return <Route key={submenu.slug} exact path={`/${submenu.slug}`} element={<LoadTemplate slug={submenu.slug} menu={row} page={row.page} type="details" />} />
                            }
                        })
                    }
                })
            }

            <Route path={"/gallery"} element={<GalleryPage {...props} />} />
            <Route path={"/news"} element={<NewsList {...props} />} />
            <Route path={"/news/:slug"} element={<NewsDetails {...props} />} />

            <Route path={"/seminars"} element={<SeminarsList {...props} />} />
            <Route path={"/seminars/:slug"} element={<SeminarsDetails {...props} />} />
            <Route path={"/grc-green-e-com-india-pvt-ltd"} element={<GRCGreenEComIndiaPvtLtd {...props} />} />
            <Route path={"/grc-accelerator-and-incubator-foundation"} element={<GRCAcceleratorAndIncubatorFoundation {...props} />} />
            <Route path={"/grc-green-tip"} element={<GRCGreenTIPTechnicalInteractivePlatform {...props} />} />
            <Route path={"/grc-green-erp"} element={<GRCGreenERP {...props} />} />
            <Route path={"/project-details/:id"} element={<ProjectsDetailsTemplate {...props} />} />
            <Route path={"/environment-services"} element={<ServicesListTemplate {...props} {...menu[2]} />} />
            <Route path={"/faqs"} element={<FaqsTemplate {...props} />} />
            <Route path={"/:sector/:state"} element={<ProjectsTemplate {...props} />} />
            <Route path={"/ba2"} element={<BecomeAnAssociate {...props} />} />
            <Route path={"/thank-you"} element={<ThankYou {...props} />} />
            {
                menu.length > 0 ? <Route path={"*"} element={<NotFound title="404 | Not Found" />} /> : ""
            }

        </Routes>
        <Footer menu={menu} />
    </Fragment>

}

const LoadTemplate = (props) => {

    if (props.page === "home") {
        return <HomePage {...props} />
    } else if (props.page === "about_us") {
        return <AboutUsTemplate {...props} />
    } else if (props.page === "projects") {
        // if (props.type === "list") {
        //     return <ProjectListTemplate {...props} />
        // } else {
        return <ProjectsTemplate {...props} />
        // }
        // return <ProjectsTemplate {...props} />
    } else if (props.page === "services") {
        if (props.type === "list") {
            return <ServicesListTemplate {...props} />
        } else {
            return <ServicesTemplate {...props} />
        }

    } else if (props.page === "laboratory") {
        return <LaboratoryTemplate {...props} />
    }
    else if (props.page === "clientele") {
        return <ClienteleTemplate {...props} />
    }
    else if (props.page === "career") {
        return <CareersTemplate {...props} />
    }
    else if (props.page === "career_details") {
        return <CareersDetailsTemplate {...props} />
    }
    else if (props.page === "downloads") {
        return <DownloadTemplate {...props} />
    }
    else if (props.page === "contact_us") {
        return <ContactUsTemplate {...props} />
    }
    else if (props.page === "new_initiatives") {
        if (props.type === "list") {
            return <NewInitiativesListTemplate {...props} />
        } else {
            return <NewInitiativesTemplate {...props} />
        }
    }
    else {
        return <h1>template pending</h1>
    }


}