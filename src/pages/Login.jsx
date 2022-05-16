import React from "react";
import { SignInUser } from '../services/Auth'
import { Input } from "@mui/material";
import { Alert, Box, Button, Collapse, FormGroup, IconButton, InputLabel } from "@mui/material";
import { FormLabel } from "@mui/material";
import { FormHelperText } from "@mui/material";
import { useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import { useState, useEffect } from "react";
import Client from "../services/API";
import FormControl from '@mui/material/FormControl';




const Login = ({toggleAuthenticated, setUser}) => {
    const theme = useTheme()
    const navigate = useNavigate()

    const [open, toggleOpen] = useState(false);
    const [alert, toggleAlert] = useState(false)

    const [formValues, setFormValues] = useState({
        userName: '',
        password: ''
    })

    const handleChange = (e) => {setFormValues({ ...formValues, [e.target.name]: e.target.value })} 

    const handleSubmit = async (e) => {

        try{
        e.preventDefault()
        const payload = await SignInUser(formValues)
        setFormValues({
        userName: "",
        password: "",
        })
        console.log(payload.id)
        localStorage.setItem('user', payload.id)
        toggleAuthenticated(true)
        setUser(payload)
        console.log(payload)
        navigate('/home')
        }catch(error){
            if(error.response.statusText === 'Unauthorized'){
                toggleOpen(true)
                toggleAlert(true)
            
            }
            
            
            
        }

    }

    return (
        <div>
            <Collapse in={open}>
            {(alert)? <Alert variant="filled" severity='error' action={<IconButton
                aria-label='close'
                color='inherit'
                size='small'
                onClick={()=>{
                    toggleOpen(false)
                }}
                >
                    <CloseIcon />
                </IconButton>
            }>Username and/or password incorrect. Please try again.</Alert>:null}
            </Collapse>
            <Box component={'form'} sx={{height: '100vh',}}>
                <FormLabel color='secondary' sx={{
                    color: theme.palette.secondary.main,
                    fontSize: '3rem'
                }}>Login</FormLabel>
                <FormGroup >

                    <FormControl sx={{
                    margin: '20px'
                }}>
                        <InputLabel sx={{
                        color: theme.palette.text.primary,
                    }} disableAnimation={true} variant="standard">Username </InputLabel>
                        <Input autoFocus={true} onChange={handleChange} sx={{color:'secondary', maxWidth: '50vw'}} color={'secondary'} placeholder={'Username '}  name="userName"/>
                    </FormControl>

                    <FormControl sx={{
                    margin: '20px'
                }}>
                        <InputLabel sx={{
                        color: theme.palette.text.primary,
                    }}disableAnimation={true} variant="standard">Password </InputLabel>
                        <Input type='password'onChange={handleChange} sx={{color:'secondary', maxWidth: '50vw'}} color={'secondary'} placeholder={'Password '}  name="password" /> 
                    </FormControl>
                    <Button  onClick={handleSubmit}variant='contained'color="secondary" 
                    disabled={
                        !formValues.userName ||
                        !formValues.password
                    } sx={{
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