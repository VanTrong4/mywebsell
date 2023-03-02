import axios from 'axios';
import React, { useState } from 'react';

const Account = () => {

    const [avatar,setAvatar] = useState("")

    let auth = localStorage.getItem("auth");
    let user = JSON.parse(auth);

    const [input,setInput] = useState(user)

    const changeInput = (e) =>{
        let name = e.target.name;
        setInput({...input,[name]:e.target.value})
        console.log(input);
    }

    const handleImage = (e) => {
        let file = e.target.files;
        let reader = new FileReader();
        reader.onload = (e)=>{
            setAvatar(e.target.result);
        }
        reader.readAsDataURL(file[0])
    }

    const updateUser = (e)=>{
        e.preventDefault()

        const form = document.getElementById("formUpdate")
        const formdata = new FormData(form)
        formdata.delete("image")
        formdata.append('password', "");
        formdata.append("avatar",avatar)

        const token= JSON.parse(localStorage.getItem("token"))
        let config = {
            headers: {
                'Authorization' : 'Bearer ' + token,
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept' : 'application/json',
            }
        };
        axios.post('http://localhost/laravel/laravel/public/api/user/update/'+ user.id, formdata, config )
        .then((res)=>{
            let newUser = res.data.Auth;
            delete newUser["password"]
            localStorage.setItem("auth",JSON.stringify(newUser))
        })
        .catch((err)=>console.log(err))
    }

    return (
        <div>
            <h3>User Update</h3>
                <div className="col-sm-9">
                    <div className="signup-form" >
                        <form action="#" id="formUpdate" onSubmit={updateUser}>
                            <input onChange={(e)=>changeInput(e)} value={input.name || ""} type="text" name="name" placeholder='name' className="form-control" />
                            <input onChange={(e)=>changeInput(e)} value={input.email || ""} type="email" name="email" readOnly placeholder='email'  className="form-control" />
                            <input onChange={(e)=>changeInput(e)} value={input.address || ""} type="text" name="address" placeholder='address' className="form-control" />
                            <input onChange={(e)=>changeInput(e)} value={input.country || ""} type="text" name="country" placeholder='country' className="form-control" />
                            <input onChange={(e)=>changeInput(e)} value={input.phone || ""} type="text" name="phone" placeholder='phone' className="form-control" />
                            <input onChange={(e)=>handleImage(e)}  type="file" name="image" placeholder='image' className="form-control" />
                            <button type="submit" className="btn btn-default">Submit</button>
                        </form>
                    </div>
                </div>
        </div>
    );
};

export default Account;