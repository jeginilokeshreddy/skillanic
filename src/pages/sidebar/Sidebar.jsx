


import React, { useState, useEffect } from 'react'
import { Outlet, NavLink } from 'react-router-dom';
import "./Sidebar.scss"

export default function Sidebar() {
    const [hovered, setHovered] = useState(null);
    const [active, setActive] = useState(1);
    const [animate, setAnimate] = useState(false);
    const [expanded, setExpanded] = useState(false);


    let menuItems = [
        {
            name: "Dashboard",
            iconName: "menu",
            linkdata: "sidebar"
        },
        {
            name: "Forgot",
            iconName: "home",
            type: "solid",
            linkdata: "forgot"   //when we use nested route to display componet we will not use / for the to attribute
            //when we did not use slash the text will appen to the url place
        },
        {
            name: "Hostelmanagement",
            iconName: "compass",
            linkdata: "/login"
        },
        {
            name: "Login",
            iconName: "envelope",
            linkdata: "/"
        },
        {
            name: "Menumanagement",
            iconName: "spreadsheet",
            type: "solid",
            linkdata: "/login"
        },
        {
            name: "Notification",
            iconName: "star",
            type: "solid",
            linkdata: "/login"
        },
        {
            name: "Order",
            iconName: "cog",
            type: "solid",
            linkdata: "/login"
        },
        {
            name: "Signup",
            iconName: "log-out",
            color: "red",
            rotate: "180",
            linkdata: "/login"
        },
        {
            name: "Support",
            iconName: "log-out",
            color: "red",
            rotate: "180",
            linkdata: "/login"
        },

    ];
    return (
        <div className={`sidebar-container sidebar  ${expanded && "expanded"}`}>
            <section>
                {menuItems.map((item) => {
                    return (<>
                        <NavLink to={`${item.linkdata}`} key={item.name}>
                            {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                        </NavLink>
                    </>)
                })}
            </section>

            <Outlet />
        </div>
    )
}


//https://codepen.io/darenhua/pen/bGYEzjo