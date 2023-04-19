import React, { useContext, useState } from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const SignUp = () => {

    const [error, setError] = useState('');
    const {createUser} = useContext(AuthContext);

    const handleSignUp =(event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        //console.log(email, password, confirm);
        
        setError('')
        if(password !== confirm){
            setError('password not match')
            return
        }
        else if(password.length < 6){
            setError('password must be 6 characters')
        }

        createUser(email, password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error =>{
            console.log(error);
            setError(error.message)
        })
    }
    
    return (
        <div className='form-container'>
        <h2 className='form-title'>SignUp Form </h2>
        <form onSubmit={handleSignUp}>
            <div className='form-control'>
                <label htmlFor="">Email</label>
                <input type="email" name="email" required id="" />
            </div>
            <div className='form-control'>
                <label htmlFor="">Password</label>
                <input type="password" name="password" required id="" />
            </div>
            <div className='form-control'>
                <label htmlFor="">Confirm Password</label>
                <input type="password" name="confirm" required id="" />
            </div>
            <input className='btn-submit' type="submit" value="SignUp" />
        </form>
        <p><small>Already have an account? <Link to='/login'>Login</Link></small></p>
        <p className='text-error'>{error}</p>
    </div>
    );
};

export default SignUp;