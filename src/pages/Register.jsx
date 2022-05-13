import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios'
import FormControl from '@mui/material/FormControl';
import { Box, Button, FormGroup, InputLabel } from "@mui/material";
import { FormLabel } from "@mui/material";
import { FormHelperText } from "@mui/material";
import { Input } from "@mui/material";
import { useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";



const Login = () => {
    const theme = useTheme()
    const [formValues, setFormValues] = useState({
        firstName: '',
        lastName: '',
        userName: '',
        password: ''
    })
    const usrnameChk = []

    const navigate = useNavigate()

    useEffect(() => {

        const pullUsers = async() => {

            let allUsers = await axios.get('/users')
            allUsers.map((x) => {
                usrnameChk.push(x.userName)
            })
            pullUsers()

        }

    }, [])

    const handleSubmit = (e) => {
        navigate('/home')
        console.log('Testing')

    }

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
        console.log(formValues)


    } 


    return (
        <div>
            <Box component={'form'} sx={{
                height: '100vh',
                
            }}>
            <FormLabel color='secondary' sx={{
                color: theme.palette.secondary.main,
                fontSize: '3rem'
            }} >Login</FormLabel>
            <FormGroup  >

                <FormControl sx={{
                    margin: '20px'
                }}>
                    <InputLabel sx={{
                        color: theme.palette.text.primary,
                    }} required={true} disableAnimation={true} variant="standard" >First Name</InputLabel>

                    <Input sx={{color:'secondary', maxWidth: '50vw', textAlign: 'center'}} type={'text'} color={'secondary'} placeholder={'First Name: '} autoFocus={true} onChange={handleChange} name="firstName"/>

                </FormControl>

                <FormControl sx={{
                    margin: '20px'
                }}>
                    <InputLabel sx={{
                        color: theme.palette.text.primary
                    }} required={true} disableAnimation={true} variant="standard">Last Name</InputLabel>

                    <Input sx={{color:'secondary', maxWidth: '50vw'}} color={'secondary'} placeholder={'Last Name: '} onChange={ handleChange} name="lastName"/>

                </FormControl>

                <FormControl sx={{
                    margin: '20px',
                }}>
                    <InputLabel sx={{
                        color: theme.palette.text.primary
                    }} required={true} disableAnimation={true} variant="standard">Username</InputLabel>

                    <Input sx={{color:'secondary', maxWidth: '50vw'}} color={'secondary'} placeholder={'Username: '} onChange={handleChange} name="userName"/>

                </FormControl>

                <FormControl sx={{
                    margin: '20px'
                }}>
                    <InputLabel sx={{
                        color: theme.palette.text.primary
                    }} required={true} disableAnimation={true} variant="standard">Password</InputLabel>

                    <Input sx={{color:'secondary', maxWidth: '50vw'}} type="password" color={'secondary'} onChange={handleChange} placeholder={'Password: '} name="password"/>

                </FormControl>

                <FormControl sx={{
                    margin: '20px'
                }}> 
                    <InputLabel sx={{
                        color: theme.palette.text.primary
                    }} required={true} disableAnimation={true} variant="standard">Confirm Password</InputLabel>

                    <Input sx={{color:'secondary', maxWidth: '50vw'}} type="password" color={'secondary'}  placeholder={'Confirm Password: '}/>

                </FormControl>

                <Button onClick={handleSubmit}  variant='contained'color="secondary" sx={{
                    color: theme.palette.text.secondary,
                    marginTop: '15px',
                    maxWidth: '20vw'
                }}>Submit</Button>
            </FormGroup>
            </Box>
        </div>
    )

}

export default Login