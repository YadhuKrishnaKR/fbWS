import { Button } from '@mui/material'
import React from 'react'
import './register.css'
import { useState } from 'react'
import { useNavigate,Link } from "react-router-dom";
import { Register as RegisterUser  } from '../../services/loginService';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // loginClick();
        alert(inputs);
    }

    const registerClick = () => {
        console.log(inputs);
       let payload ={
        id: 6,
        name: inputs.firstname +" "+inputs.surname,
        username: inputs.firstname,
        email: inputs.email,
        password: inputs.password,
        profilePicture : "/assets/person/person1.jpg"
       }
        console.log(payload)
        RegisterUser(payload)
            .then((res) => {
                toast.success('Registered Successfully..!', {
                    position: "bottom-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
                
            
                    navigate("/login");
            })
            .catch(

                toast.error('Registration failed..!', {
                    position: "bottom-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    })
                
            );
    };


    return (
        <div>
            <div id="wrapper">

                <div className="registerContainer">


                    <img className="fb_logo _agiv img" src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="Facebook" />
                    <div className='registerDiv card'>
                    <h1>Create an account</h1>
                    <p>It's quick and easy.</p>
                    <hr></hr>
                    <form>
                    <div className='ragistrationForm'>
                        <div className='rowField'>
                        <input type="text" className='inputField' name='firstname' placeholder="First Name" value={inputs.firstname || ""}
                            onChange={handleChange} ></input>
                        <input type="text" className='inputField' name='surname' placeholder="Surname" value={inputs.surname || ""}
                            onChange={handleChange}></input>
                        </div>
                        <div className='rowField'>
                        <input type="text" className='inputField' name='phone' placeholder="Phone Number" value={inputs.phone || ""}
                            onChange={handleChange} ></input>
                        
                        </div>
                        <div className='rowField'>
                        <input type="text" className='inputField' name='email' placeholder="Email" value={inputs.email || ""}
                            onChange={handleChange} ></input>
                        
                        </div>
                        <div className='rowField'>
                        <input type="password" className='inputField' name='password' placeholder="New Password" value={inputs.password || ""}
                            onChange={handleChange} ></input>
                        
                        </div>
                        <p className='dob'>Date of birth </p>
                        <div className='rowField'>
                        <select className='inputField'><option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>10</option>
                        </select>
                <select className='inputField'><option>Jan</option>
                <option>Feb</option>
                <option>Mar</option>
                <option>Apr</option>
                <option>May</option>
                <option>Nov</option>
                </select>
                <select className='inputField'><option>1998</option>
                <option>1999</option>
                <option>2000</option>
                <option>2001</option>
                <option>2002</option>
                </select>
               
                        </div>  
                        <div className='rowField'>
                        <input type="radio" name='gender'/>Female
                         <input type="radio" name='gender'/>Male
                         <input type="radio" name='gender'/>Other
                            </div>
                            <div className='rowField'>
                                <Button  variant="contained" color="success" onClick={registerClick}>submit</Button>
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
                    </form>
                    
                    </div>
                </div>



            </div>
        </div>
    )
}

export default Register
