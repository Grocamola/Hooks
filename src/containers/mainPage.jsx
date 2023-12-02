import React from 'react';
import { useNavigate } from 'react-router-dom';

import './mainStyles.css'
import Navbar from './navbar';

const MainPage = () => {

    const navigate = useNavigate();

    const hooksArray = ['useState','useEffect', 'useRef', 'useParams', 'useReducer', 'use4Context','CustomHooks', 'useSomething','useSomething','useSomething','useSomething']

    const openHookPageHandler = () => { 
        navigate('/hooks/useState', {replace: true});
    }

    return ( 
        <div className="mainPage">
            <Navbar />
            <div className="mainPage--Hooks">
                {hooksArray.map(el => <div className="workshopBox" onClick={openHookPageHandler}><h4>{el}</h4></div>)}

                {/* <div className="workshopBox">
                    <h4>useState</h4>
                </div>
                <div className="workshopBox">
                    <h4>useEffect</h4>
                </div>
                <div className="workshopBox">
                    <h4>useRef</h4>
                </div>
                <div className="workshopBox">
                    <h4>useParams</h4>
                </div>
                <div className="workshopBox">
                    <h4>useReducer</h4>
                </div>
                <div className="workshopBox">
                    <h4>useContext</h4>
                </div>
                <div className="workshopBox">
                    <h4>useSomething</h4>
                </div>
                <div className="workshopBox">
                    <h4>useSomething</h4>
                </div>
                <div className="workshopBox">
                    <h4>useSomething</h4>
                </div>
                <div className="workshopBox">
                    <h4>useSomething</h4>
                </div>
                <div className="workshopBox">
                    <h4>useSomething</h4>
                </div> */}
            </div>
        </div>
     );
}
 
export default MainPage;