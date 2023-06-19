import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <div className='form-container'>
            <h2 className='form-title'>Login  </h2>
            <form >
                <div className="form-control">
                    <label htmlFor="">Email</label>
                    <input type="email" name='email' placeholder=' email' required />
                </div>
                <div className="form-control">
                    <label htmlFor="">Password</label>
                    <input type="password" name='password' placeholder=' password' required />
                </div>
                <input className='btn-login' type="submit" value="Log In" />
                <p><small>New to ema jhon? <Link to={'/sign-up'} >Create a new account</Link> </small></p>
            </form>
        </div>
    );
};

export default Login;