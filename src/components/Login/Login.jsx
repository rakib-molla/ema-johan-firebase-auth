import React, { useContext, useState } from 'react';
import './Login.css'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { useLocation } from 'react-router-dom';
const Login = () => {

    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [show, setShow] = useState('')
    console.log(location);
    const from = location.state?.from?.pathname || '/';

    const handleLogin =(event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        signIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset()
            navigate(from, {replace : true})
        })
        .then(error =>{
            console.log(error=>{
                console.log(error);
            });
        })
    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Login </h2>
            <form onSubmit={handleLogin}>
                <div className='form-control'>
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" required id="" />
                </div>
                <div className='form-control'>
                    <label htmlFor="">Password</label>
                    <input type={show? 'text': "password"} name="password" required id="" />
                    <p onClick={()=>setShow(!show)}> <small>
                        {
                            show? <span>Hide Password</span>: <span>Show password</span>
                        }
                        </small></p>
                </div>
                <div className='form-control'>
                    <label htmlFor="">Confirm Password</label>
                    <input type="password" name="confirmPassword" required id="" />
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p><small>New to Ema-Johan</small><Link to='/signup'>SignUp</Link></p>
        </div>
    );
};

export default Login;