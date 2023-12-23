import React, { useRef } from 'react';
import Navbar from '../../containers/navbar';

import './useRef.css'


const UseRef = () => {

        const nameInputRef = useRef(null);
        const emailInputRef = useRef(null);
        const passwordInputRef = useRef(null);
      
        const handleSubmit = (event) => {
          event.preventDefault();
      
          // Perform registration logic here
          const name = nameInputRef.current.value;
          const email = emailInputRef.current.value;
          const password = passwordInputRef.current.value;

          console.log(`New User: ${name} - ${email}`)

      
          // Reset input fields
          nameInputRef.current.value = '';
          emailInputRef.current.value = '';
          passwordInputRef.current.value = '';
      
          // Additional registration logic ...
        };

    
    return ( 
        <>
            <Navbar />
            <div className="useRef--container">
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Name" ref={nameInputRef} />
                    <input type="email" placeholder="Email" ref={emailInputRef} />
                    <input type="password" placeholder="Password" ref={passwordInputRef} />
                    <button type="submit">Register</button>
                </form>
            </div>
        </>

     );
}
 
export default UseRef;