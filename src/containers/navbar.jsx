import React from 'react';
import { useNavigate } from 'react-router-dom';


import './mainStyles.css'

const Navbar = () => {

    const navigate = useNavigate();

    return ( 
        <div className="navbar">
            <div className="navbar--container">
                <div className="logo"><h3>Grocamola</h3></div>
                <div className="nav--icons" onClick={() => navigate(`/hellow!`, {replace: true})}><p>Homepage</p></div>
            </div>
        </div>
     );
}
 
export default Navbar;