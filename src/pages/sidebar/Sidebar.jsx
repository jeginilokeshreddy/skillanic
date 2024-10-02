import React, { useState, useEffect } from 'react'
import { Outlet ,NavLink} from 'react-router-dom';
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
        },
        {
            name: "order",
            iconName: "home",
            type: "solid",
        },
        {
            name: "Explore",
            iconName: "compass",
            type: "solid",
        },
        {
            name: "Messages",
            iconName: "envelope",
            type: "solid",
        },
        {
            name: "Resources",
            iconName: "spreadsheet",
            type: "solid",
        },
        {
            name: "Starred",
            iconName: "star",
            type: "solid",
        },
        {
            name: "Settings",
            iconName: "cog",
            type: "solid",
        },
        {
            name: "Log Out",
            iconName: "log-out",
            color: "red",
            rotate: "180",
        },
    ];
  return (
      <div className={`sidebar sidebar-container ${expanded && "expanded"}`}> 
    
          {menuItems.map((item)=>{
              return (<>
                  <NavLink to={`${item.name}`} key={item.name}>
                      {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                  </NavLink>
              </>)
          })}
       
          <Outlet/>
    </div>
  )
}


//https://codepen.io/darenhua/pen/bGYEzjo