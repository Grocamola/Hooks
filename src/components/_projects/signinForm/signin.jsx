import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../../../containers/navbar';

import '../../../containers/mainStyles.css'

const DUMMY_USERS = [
    {username: 'Sophia', password: '1234', age: 56},
    {username: 'Jenna', password: '1234', age: 14},
    {username: 'Mamad', password: '1234', age:88}
]

const Signin = () => {

    const[signinState, setSigninState] = useState('signin')

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [age, setAge] = useState('')

    const usernameRef = useRef()
    const passwordRef = useRef()
    const usernameRefsignup = useRef()
    const passwordRefsignup = useRef()
    const ageRefsignup = useRef()

    // const inputChangeHandler = (e) => { 
        
    // }
    const signInSubmitHandler = (e) => { 
        e.preventDefault()
        const usernameTemp = usernameRef.current.value
        const passwordTemp = passwordRef.current.value
        setUsername(usernameTemp)
        setPassword(passwordTemp)

        usernameRef.current.value = null;
        passwordRef.current.value = null;
    }

    const signUpSubmitHandler = (e) => { 
        e.preventDefault()
        const usernameTempsignUp = usernameRefsignup.current.value
        const passwordTempsignup = passwordRefsignup.current.value
        const ageTempsignup = ageRefsignup.current.value
        setUsername(usernameTempsignUp)
        setPassword(passwordTempsignup)
        setAge(ageTempsignup)

        usernameRefsignup.current.value = null;
        passwordRefsignup.current.value = null;
        ageRefsignup.current.value = null;
    }

    useEffect(() => { 
        console.log(username, password, age)
    },[username, password, age])

    return (
        <>
            <Navbar />
            <div className="signinForm">
                <div className="signinForm--login" style={{display: signinState === 'signup' && 'none'}}>
                    <h1>SignIn</h1><br />
                    <div className="form" onSubmit={signInSubmitHandler}>
                        <form className="signinForm--form">
                            <label>username</label>
                            <input type="text" ref={usernameRef} />
                            <label>password</label>
                            <input type="password" ref={passwordRef} /><br />
                            <button type="submit" style={{marginBottom: 10}}>Sign in</button>
                            <div className="clickables" onClick={() => setSigninState('signup')}><p>Join our tribe today?</p></div>
                        </form>
                    </div>
                </div>
                <div className="signinForm--register" style={{display: signinState === 'signin' && 'none'}}>
                    <h1>SignUp</h1><br />
                    <div className="form">
                        <form className="signinForm--form" onSubmit={signUpSubmitHandler}>
                            <label>username</label>
                            <input type="text" ref={usernameRefsignup} />
                            <label>password</label>
                            <input type="password" ref={passwordRefsignup} />
                            <label>Age</label>
                            <input type="text" ref={ageRefsignup} /><br />
                            <button type="submit">Sign in</button>
                            <div className="clickables" onClick={() => setSigninState('signin')}><p>Already a member?</p></div>
                        </form>
                    </div>
                </div>
                

                <div className="result">
                    <p>Hi</p>
                </div>
            </div>
        </>
    );
}
 
export default Signin;