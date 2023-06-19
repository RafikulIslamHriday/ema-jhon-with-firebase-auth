import React from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';
const SignUp = () => {
    return (
        <div className='form-container'>
        <h2 className='form-title'>Sign Up   </h2>
        <form >
            <div className="form-control">
                <label htmlFor="">Email</label>
                <input type="email" name='email' placeholder=' email' required />
            </div>
            <div className="form-control">
                <label htmlFor="">Password</label>
                <input type="password" name='password' placeholder=' password' required />
            </div>
            <div className="form-control">
                <label htmlFor="">Confirm Password</label>
                <input type="password" name='confirm' placeholder=' password' required />
            </div>
            <input className='btn-login' type="submit" value="Log In" />
            <p><small>Already have an account? <Link to={'/login'}>Log In</Link> </small></p>
        </form>
    </div>
    );
};

export default SignUp;