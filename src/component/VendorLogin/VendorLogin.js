import React from 'react';
// import { httpPost } from '../../api/index';
// import { savedata } from '../../api/index';
import {getLoginData} from '../../api/index';
import Homefooter from '../footer/footer'

// import { useForm } from "react-hook-form";

import "./VendorLogin.css"
import { loginurl } from '../../const';


const VendorLogin = () => {

    // const { register, handleSubmit, watch, formState: { errors } } = useForm();
    // const onSubmit = data => {
    //     httpPost(loginurl,data)
    // }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = document.getElementById('inputname').value
        const password = document.getElementById('inputPassword').value
        console.log(name,password)

        if (!name || !password) {
            alert(!name?'Enter UserID':'Enter Password')
        
        } else {
            const response = await getLoginData(name,password)
            console.log(response)
           
            if (response) {
                const c_name = response.cust_name
                console.log(c_name)
                localStorage.setItem('inputname', name)
                localStorage.setItem('inputPassword', password)
                localStorage.setItem('cust_name',c_name)
                window.location.href = '/home'
             }
            else{
                alert(`Invalid ${name} and Password ${password}`)
            }
        }
     }

    return (
        <div className="wrapper wrapper-login">
            <div className="container">
                <div className="row">
                    <div className=" login-box">
                        <div className="col-lg-12 login-form">
                            <div className="col-lg-12 login-form">
                                <form onSubmit={handleSubmit} autoComplete="off">
                              <a href="https://www.awlindia.com/" target="_blank"><img className="AwlImage" src="https://www.awlindia.com/img/logo.png" id="icon" alt="User Icon"/></a>
                                <div className="col-lg-12 login-title">PARTNER LOGIN </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="inputname" placeholder="Enter Username" />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" id="inputPassword" placeholder="Enter Password"/>
                                    </div>
                                    <div className="col-lg-12 loginbttm">
                                        <div className="col-lg-6 login-btm login-text">
                                        </div>
                                        <div className="col-lg-6 login-btm login-button">
                                            <button type="submit" className="btn btn-outline-primary">LOGIN</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Homefooter/>
        </div>
    )
}

export default VendorLogin;
