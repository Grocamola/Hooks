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
    const [age, setAge] = useState()

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

        const userCheck = DUMMY_USERS.filter(el => el.username === usernameTemp);
        console.log(userCheck)
        if(userCheck.length === 1 && userCheck[0].password === passwordTemp) {
            setUsername(usernameTemp)
            setPassword(passwordTemp)

            usernameRef.current.value = null;
            passwordRef.current.value = null;

            console.log('User signed in: ',username, password)
        } else if(userCheck.length === 1 && userCheck.password !== passwordTemp) { 
            alert('Incorrect password. please try again.')
        } else {
            usernameRef.current.value = null;
            passwordRef.current.value = null;
        }
    }

    const signUpSubmitHandler = (e) => { 
        e.preventDefault()

        const usernameTempsignUp = usernameRefsignup.current.value
        const passwordTempsignup = passwordRefsignup.current.value
        const ageTempsignup = ageRefsignup.current.value

        const userCheckSignup = DUMMY_USERS.filter(el => el.username === usernameTempsignUp);

        console.log('User info: ', username, password, age)

        if(userCheckSignup.length < 1) { 
            setUsername(usernameTempsignUp)
            setPassword(passwordTempsignup)
            setAge(ageTempsignup)
    
            usernameRefsignup.current.value = null;
            passwordRefsignup.current.value = null;
            ageRefsignup.current.value = null;

            console.log('User added: ', username, password, age)
        } else { 
            alert('This user exists already. please try SIGN IN form instead.')
        }
    }

    useEffect(() => {},[username, password])


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
                    {username && <p>Hello {username}</p>}
                    {!username && <p>Hello, no one is here.</p>}
                </div>
            </div>
        </>
    );
}
 
export default Signin;