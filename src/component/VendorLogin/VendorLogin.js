import React, { useState } from 'react';
// import { httpPost } from '../../api/index';
// import { savedata } from '../../api/index';
import { getLoginData } from '../../api/index';
import logo from '../../images/awl_large_logo.png'
import logo1 from '../../images/awl_logo.png'
// import { useForm } from "react-hook-form";
import { FaRegCopyright } from "react-icons/fa"
import "./VendorLogin2.css"
import { loginurl } from '../../const';
import { RiUserFill } from 'react-icons/ri';
import { MdEmail } from 'react-icons/md';
import { AiFillLock } from 'react-icons/ai';
import { GoEye, GoEyeClosed } from 'react-icons/go';


const VendorLogin = () => {

    // const { register, handleSubmit, watch, formState: { errors } } = useForm();
    // const onSubmit = data => {
    //     httpPost(loginurl,data)
    // }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = document.getElementById('inputname').value
        const password = document.getElementById('inputPassword').value
        console.log(name, password)

        if (!name || !password) {
            alert(!name ? 'Enter UserID' : 'Enter Password')

        } else {
            const response = await getLoginData(name, password)
            console.log(response)

            if (response) {
                const c_name = response.cust_name
                console.log(c_name)
                localStorage.setItem('inputname', name)
                localStorage.setItem('inputPassword', password)
                localStorage.setItem('cust_name', c_name)
                window.location.href = '/home'
            }
            else {
                alert(`Invalid ${name} and Password ${password}`)
            }
        }
    }

    const [showpass, setShowpass] = useState(false);

    const toggleicon = () => {
        setShowpass(!showpass);
    }

    return (
        <div className='dad_div'>
            <h4 className='heading'>VENDOR PORTAL AWL INDIA</h4>

            <div className="loginbox">

                <div className='div_for_content'>
                    <h3>Sign In right now!</h3>

                    <hr style={{ height: "3px", width: "90%" }} />
                    <p style={{ fontSize: "18px" }}>Sign in to exprole vendor's portal, Login here and visit our site<br />We provide world's best</p>
                    <img className='awl_logo' src={logo} />
                </div>

                <div className="logininside" >
                    <h4 className='text-center my-3'>LOGIN<RiUserFill style={{ margin: '0 2px 6px 2px' }} /></h4>
                    <div className="col-lg-12 login-form">
                        <form onSubmit={handleSubmit} autoComplete="off">
                            <div className="form-group my-2">
                                <label>Username</label>
                                <div className='user_pass'>
                                    <MdEmail id="login_icon" />
                                    <input type="text" id="inputname" />
                                </div>
                            </div>
                            <div className="form-group my-3">
                                <label>Password</label>
                                <div className='user_pass'>
                                    {
                                        showpass ?
                                            <GoEye onClick={toggleicon} id="login_icon" />
                                            : <GoEyeClosed onClick={toggleicon} id="login_icon"/>
                                    }
                                    <input type={showpass?"text":"password"} id="inputPassword" />
                                </div>
                            </div>
                            <div className="col-lg-12 loginbttm">
                                <div className="col-lg-6 login-btm login-text">
                                </div>
                                <div className="col-lg-6 login-btm login-button">
                                    <button className='login_btn' type="submit">Login</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className='login_footer'>Copyright <FaRegCopyright style={{ marginBottom: "3px" }} /> 2022-2023 vendorportal.All right.reserved</div>
        </div>
    )
}

export default VendorLogin;

// V01865
// FDCC10601

// V01861
// DCIPL10604