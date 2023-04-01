import React from 'react'
import './login.css'
import { Login as LoginService } from '../../services/loginService';
import { useState } from 'react'
import { useNavigate, Link } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
    const navigate = useNavigate();
    const [authenticated, setauthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated") || false));

    const loginClick = () => {
        console.log(inputs);
       
        console.log(inputs)
        LoginService(inputs)
            .then((res) => {
                console.log("success....", res);
                localStorage.setItem("authenticated", true);
                setauthenticated(true);
                //navigate("/dashboard");
                navigate("/home");
            })
            .catch(()=>{
                toast.error('Login Failed.', {
                    position: "bottom-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
            });
    };

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        loginClick();
        alert(inputs);
    }

    return (
        <div className='fblogin'>
            <img className="fb_logo _agiv img" src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="Facebook" />
            <p className='tagline'>Facebook helps you connect and <br></br> share with the people in your life.</p>
            <div id="wrapper">
                <div className="main-content">
                    <div className="header">

                    </div>
                    <div className="l-part">
                        <input type="text" placeholder="Username" className="input-1" name="email"
                            value={inputs.email || ""}
                            onChange={handleChange} />
                        <div className="overlap-text">
                            <input type="password" placeholder="Password" className="input-2" name="password"
                                value={inputs.password || ""}
                                onChange={handleChange} />

                        </div>
                        <input type="button" value="Log in" onClick={loginClick} className="btn" />
                    </div>
                </div>
                <div className="sub-content">
                    <div className="s-part">
                        Don't have an account?<Link to="/register" >Sign up</Link>
                    </div>
                    <ToastContainer
                        position="bottom-center"
                        autoClose={3000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="dark"
                    />
                </div>
            </div>
        </div>
    )
}

export default Login
