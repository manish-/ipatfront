import React from 'react';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const EnvironmentServices = () => {
    const { menu, processing, error, errors } = useSelector(state => {
        return {
            menu: state.Utils_Reducers.headerMenu.menu,
            processing: state.Utils_Reducers.headerMenu.processing,
            error: state.Utils_Reducers.headerMenu.error,
            errors: state.Utils_Reducers.headerMenu.errors,
        }
    });
// console.log("menu[3]",menu[3]);
    return (
        <div className="home-sec-grey" data-aos="fade-right">
            <img src={`${process.env.PUBLIC_URL}/assets/images/h-ic1.png`} />
            <h3><Link to={`/${menu[3].slug}`}>Environment Services</Link></h3>
            <ul>{
                menu[3].submenu ?
                    menu[3].submenu.map((row, index) => {

                        return (index < 5 ? <li key={`Environment-Services-li-${index}`}><Link to={`/${row.slug}`}>{row.title}</Link></li> : "")
                    }) : ""
            }
            </ul>
            {
                <Link className="text-link" to={`/environment-services`}>Read More</Link>
            }
            
        </div>
    )
}

export default EnvironmentServices;
