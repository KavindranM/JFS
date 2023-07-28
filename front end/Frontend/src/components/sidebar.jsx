import React, { useState } from "react";

import { NavLink } from "react-router-dom";
import {
    FaRegChartBar,
    FaTh,
    FaThList,
    FaCommentAlt,
    FaShoppingBag,
    FaBars,
    FaSearch

} from "react-icons/fa";
const SideBar = ({children}) => {
    const [isOpen,setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem=[
        {
            path:"/home",
            name:"Home",
            icon:<FaTh/>
        },
        {
            path:"/search",
            name:"Search",
            icon:<FaSearch/>
        },
        // {
        //     path:"/analytics",
        //     name:"Analytics",
        //     icon:<FaRegChartBar/>
        // },
        {
            path:"/contact",
            name:"Contact Us",
            icon:<FaCommentAlt/>
        },
        {
            path:"/product",
            name:"Product",
            icon:<FaShoppingBag/>
        },
        // {  
        //     path:"/productList",
        //     name:"ProductList",
        //     icon:<FaThList/>
        // }
    ]
    return(
        <div className="container">
            <div style={{width:isOpen ? "300px" : "50px"}}className="sidebar">
                <div className="top_section">
                    <h1 style={{display:isOpen ? "block" : "none"}} className="logo" >La-La </h1>
                    <div  style={{marginLeft:isOpen ? "0px" : "-15px"}} className="bars">
                        <FaBars onClick={toggle}/>
                    </div>
                </div>
                {
                    menuItem.map((item,index)=>(
                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
                            <div className="icon">{item.icon}</div>
                            <div style={{display:isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            <main>{children}</main>
        </div>
    );
};
export default SideBar;