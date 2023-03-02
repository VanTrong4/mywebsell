import axios from 'axios';
import React, { useState } from 'react';
import ErrorInput from './ErrorInput';

const Register = () => {
    const [data,setData] = useState({})
    const [error,setError] = useState({})

    const changeInput = (e) => {
         let nameInput = e.target.name
        setData({...data, [nameInput]:e.target.value})
    }
    
    const register = async () =>{
        const res = await axios.post("http://localhost/laravel/laravel/public/api/register", data)
        try {
            console.log("success");
        } catch (error) {
            console.log(error);
        }
    }

    const submitSignup = (e) => {
        e.preventDefault()
        let err={}
        if(!data.password ){
            err.password = 'ban can nhap mat khau'
        }
        if(!data.name ){
            err.name = 'ban can nhap ten'
        }
        if(!data.email ){
            err.email = 'ban can nhap email'
        }
        if(!data.address ){
            err.email = 'ban can nhap address'
        }
        if(!data.phone ){
            err.email = 'ban can nhap phone'
        }
        setError(err)
        if(!err.length){
            register()
        }
    }

    return (
        <div>
            <div className="signup-form">
						<h2>New User Signup!</h2>
						<form onSubmit={submitSignup}>
							<input name='name' type="text" placeholder="Name" onChange={(e)=>changeInput(e)}/>
							<input name='email' type="text" placeholder="Email Address" onChange={(e)=>changeInput(e)}/>
							<input name='password' type="password" placeholder="Password" onChange={(e)=>changeInput(e)}/>
							<input name='address' type="text" placeholder="Address" onChange={(e)=>changeInput(e)}/>
							<input name='phone' type="number" placeholder="Phone" onChange={(e)=>changeInput(e)}/>
							<button type="submit" className="btn btn-default">Signup</button>
						</form>
                        <ErrorInput error = {error}/>
					</div>
        </div>
    );
};

export default Register;