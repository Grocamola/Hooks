import React from 'react';
import './memoryCard.css'


const Box = (props) => {

    return ( 
    <div className="box--box" onClick={() => props.boxClick(props.id, props.image)}>
        {props.view === 'front' ? 
            <div style={{marginTop: 65}}>{props.children}</div> : 
            <img alt="box" style={{width: 130, height: 130, margin: 10}} src={props.image} 
        />}
    </div>
 );
}
 
export default Box;