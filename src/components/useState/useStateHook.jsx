import React, { useState } from 'react';
import Navbar from '../../containers/navbar';

import '../../containers/mainStyles.css'

const UseStateHook = () => {

    const [state, setState] = useState(false)

    return ( 
        <>
            <Navbar />
            <div className="UseStateHook">
                <div className="simpleBox" style={{width: 50, height: 50, border: '1px solid #111', margin: '500px auto', backgroundColor: state ? 'yellow' : 'red'}}>
                </div>
                <button onClick={() => setState(prev => !prev)}>ChangeColor</button>
            </div>
        </>
     );
}
 
export default UseStateHook;