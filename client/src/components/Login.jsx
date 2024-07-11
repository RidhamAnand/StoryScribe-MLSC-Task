import React, { useState } from 'react'
import LoginImg from "../assets/images/Login.png"
import TextField from '@mui/material/TextField';
import { Button, IconButton } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';
function Login() {
    const navigate = useNavigate();

    const defaultLogin = {
        email: "",
        password: "",
    }
    const [loginData, setLoginData] = useState(defaultLogin);
    const [isVisible, setIsVisible] = useState(false);
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;

    const loginUser = () => {
        if (!re.test(loginData.email)) {
            window.alert("Enter Valid Email");
            return;
        }
        const weakPassword = false;
        if (!passwordRegex.test(loginData.password)) {
            let message = "Password must contain:";
            if (!/(?=.*\d)/.test(loginData.password)) {
                message += "\n- at least one digit (0-9)";
                weakPassword = true;
            }
            if (!/(?=.*[a-z])/.test(loginData.password)) {
                message += "\n- at least one lowercase letter (a-z)";
                weakPassword = true;

            }
            if (!/(?=.*[A-Z])/.test(loginData.password)) {
                message += "\n- at least one uppercase letter (A-Z)";
                weakPassword = true;

            }
            if (!/(?=.*[!@#$%^&*])/.test(loginData.password)) {
                message += "\n- at least one special character (!@#$%^&*)";
                weakPassword = true;

            }
            if (weakPassword) window.alert(message);

            return
        }




    }

    return (
        <div className='w-screen  h-screen flex  flex-row bg-white' >

            <div className=' bg-white  w-full  flex basis-6/7  flex-col justify-center px-16  gap-5 items-start '>

                <LanguageIcon sx={{

                    color: "#5138EE"
                }} fontSize='large' />

                <h1 className='md:text-4xl font-semibold  font-poppins '>Welcome Back!</h1>
                <p className='-mt-2 mb-4 font-poppins'>Login to get Unlimited Access to data and information.</p>
                <TextField name='email' value={loginData.email} onChange={(e) => {
                    setLoginData(
                        { ...loginData, [e.target.name]: e.target.value }
                    )
                }} fullWidth label="Email" type='email'></TextField>



                <TextField name='password' value={loginData.password} onChange={(e) => {
                    setLoginData(
                        { ...loginData, [e.target.name]: e.target.value }
                    )
                }} type={isVisible ? "text" : "password"} InputProps={{
                    endAdornment: (
                        !isVisible ? <IconButton onClick={
                            () => {
                                setIsVisible((prev) => !prev)
                            }
                        } ><VisibilityIcon /></IconButton> : <IconButton onClick={
                            () => {
                                setIsVisible((prev) => !prev)
                            }
                        } ><VisibilityOffIcon /></IconButton>
                    )
                }} fullWidth label="Password"></TextField>
                <Button disabled={loginData.email == "" || loginData.password == "" || loginData.username == ""} onClick={loginUser} sx={
                    {
                        backgroundColor: "#5138EE"
                    }
                } variant='contained' size='large' fullWidth disableElevation color='info'><span className='font-semibold'> Login </span></Button>
                <div className='w-full  text-center '>
                    <p className='font-poppins text-center'>New to StoryScribe? <span onClick={() => navigate("/signup")} className='text-[#5138EE] cursor-pointer font-semibold underline'>Sign Up</span></p>
                </div>

            </div>

            <div className='flex basis-full  bg-white  '>
                <img src={LoginImg} className='w-full' ></img>
            </div>

        </div>
    )
}

export default Login