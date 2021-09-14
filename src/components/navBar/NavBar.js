import React from 'react';
import './NavBar.css'
import { NavLink } from 'react-router-dom'
import { ImHome, ImBooks, ImLibrary} from "react-icons/im";
import {CgProfile} from "react-icons/cg";

const NavBar = () => {
    const actives = {color:"red"}
    return ( 
        <div className="NavBar">
            <div className="NavBar-profile">
                <NavLink to="/profile" className="NavLink">
                    <CgProfile size='3em'/>
                </NavLink>
            </div>
            <div className="NavBar-links">
                <NavLink exact={true} to="/" className="NavLink" activeClassName="activeRoute" activeStyle={actives}>
                    <ImHome size={'2em'}/>
                </NavLink>

                <NavLink to="/books" className="NavLink">
                    <ImBooks size={'2em'}/>
                </NavLink>

                <NavLink to="/myLibrary" className="NavLink">
                    <ImLibrary size={'2em'}/>
                </NavLink>
            </div>
        </div>
     );
}
 
export default NavBar;
