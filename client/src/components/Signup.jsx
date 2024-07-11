import React, { useState } from 'react'
import LoginImg from "../assets/images/Login.png"
import TextField from '@mui/material/TextField';
import { Button, IconButton } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';

function Signup() {

    const navigate = useNavigate();

    const defaultLogin = {
        username: "",
        email: "",
        password: "",

    }
    const [signUpData, setSignupData] = useState(defaultLogin);
    const [isVisible, setIsVisible] = useState(false);


    const loginUser = () => {
        console.log(signUpData);
        setSignupData(defaultLogin);
    }

    return (
        <div className='w-screen  h-screen flex  flex-row bg-white' >

            <div className=' bg-white  w-full  flex basis-6/7  flex-col justify-center px-16  gap-5 items-start '>

                <LanguageIcon sx={{

                    color: "#5138EE"
                }} fontSize='large' />

                <h1 className='md:text-4xl font-semibold  font-poppins '>Get Started !</h1>
                <p className='-mt-2 mb-4 font-poppins'>Connect and Get Access to Unlimited Information.</p>

                <TextField name='username' value={signUpData.username} onChange={(e) => {
                    setSignupData(
                        { ...signUpData, [e.target.name]: e.target.value }
                    )
                }} fullWidth label="Username" type='text'></TextField>

                <TextField name='email' value={signUpData.email} onChange={(e) => {
                    setSignupData(
                        { ...signUpData, [e.target.name]: e.target.value }
                    )
                }} fullWidth label="Email" type='email'></TextField>



                <TextField name='password' value={signUpData.password} onChange={(e) => {
                    setSignupData(
                        { ...signUpData, [e.target.name]: e.target.value }
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
                <Button onClick={loginUser} sx={
                    {
                        backgroundColor: "#5138EE"
                    }
                } variant='contained' disabled = {signUpData.email=="" || signUpData.password =="" || signUpData.username ==""} size='large' fullWidth disableElevation color='info'><span className='font-semibold'> Register </span></Button>
                <div className='w-full  text-center '>
                    <p className='font-poppins text-center'>Already A User? <span onClick={()=>navigate("/login")} className='text-[#5138EE] cursor-pointer font-semibold underline'>Login</span></p>
                </div>

            </div>

            <div className='flex basis-full  bg-white  '>
                <img src={LoginImg} className='w-full' ></img>
            </div>

        </div>
    )

}

export default Signup