import React from 'react';
import { Navigate,Outlet } from "react-router-dom";
import LeftAccount from "./LeftAccount";

const Index = ( {children}) => {
    if(localStorage.getItem("auth")){

        let auth = JSON.parse(localStorage.getItem("auth"))

        const token= JSON.parse(localStorage.getItem("token"))
        let config = {
            headers: {
                'Authorization' : 'Bearer ' + token,
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept' : 'application/json',
            }
        };

        return(
            <div className="container">
                <div className="row">
                    <LeftAccount/>
                    <div className="col-sm-9 padding-right">
                        <Outlet context={[auth,config]}/>
                    </div>
                </div>
            </div>
        )
    }else{
        return <Navigate replace to="/login"/>
    }
};

export default Index;