import React, { useState } from 'react';
import axios from 'axios';
import ErrorInput from './ErrorInput';
import  { useNavigate }  from "react-router-dom";

const Login = () => {
	const [input,setInput] = useState({level:0});
    const [error,setError] = useState({})
	let navigate = useNavigate()

	const changeInput = (e) => {
		let name = e.target.name;
		setInput({...input,[name]:e.target.value})
	}

	const login = () =>{
        axios.post("http://localhost/laravel/laravel/public/api/login", input)
		.then((res)=>{
			localStorage.setItem("token",JSON.stringify(res.data.success.token))
			localStorage.setItem("auth",JSON.stringify(res.data.Auth))
			navigate('/')
		})
		.catch((err)=>{console.log(err)})
    }

	const onLogin = (e) =>{
		e.preventDefault();
		let err={}
        if(!input.email ){
            err.name = 'ban can nhap email'
        }
        if(!input.password ){
            err.password = 'ban can nhap mat khau'
        }
		setError(err)
		if(!err.length){
			login()
		}
	}

    return (
        <div className="login-form">
						<h2>Login to your account</h2>
						<form action="#" onSubmit={(e)=>onLogin(e)}>
							<input onChange={(e)=>changeInput(e)} name='email' type="text" placeholder="Email Address" />
							<input onChange={(e)=>changeInput(e)} name='password' type="text" placeholder="password" />
							<button type="submit" className="btn btn-default">Login</button>
						</form>
						<ErrorInput error={error}/>
					</div>
    );
};

export default Login;