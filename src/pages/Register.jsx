import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios'
import FormControl from '@mui/material/FormControl';
import { Alert, Box, Button, Collapse, FormGroup, IconButton, InputLabel } from "@mui/material";
import { FormLabel } from "@mui/material";
import { FormHelperText } from "@mui/material";
import { Input } from "@mui/material";
import { useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { RegisterUser } from "../services/Auth";
import CloseIcon from '@mui/icons-material/Close';



const Register = () => {
    const theme = useTheme()

    const [samePswd, toggleSamePswd] = useState(true)
    const [formValues, setFormValues] = useState({
        firstName: '',
        userName: '',
        lastName: '',
        password: ''
    })
    const [pswd, setPswd] = useState('')
    const [alert, toggleAlert] = useState(false)
    const [open, setOpen] = useState(false);

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

    const toggleFunc = () => {

        if (pswd === formValues.password){
            toggleSamePswd(false)
        }else if ( pswd !== formValues.password){
            toggleSamePswd(true)
            console.log(pswd, formValues.password)
        }

    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        let formName = !usrnameChk.includes(formValues.userName)
        

            
        
        if(formName){
            await RegisterUser({
                firstName: formValues.firstName,
                lastName: formValues.lastName,
                username: formValues.userName,
                password:formValues.password
              })
                setFormValues({
                  firstName: '',
                  lastName: '',
                  userName: '',
                  password: ''
                })
                setPswd('')
            
                navigate('/login')
        }
        setFormValues({
            firstName: formValues.firstName,
            lastName: formValues.lastName,
            userName: '',
            password: formValues.password
        })
        toggleAlert(true)
        

        

    }

    const passwordChk = (e) => {

        setPswd( e.target.value )
        if (pswd === formValues.password){
            toggleSamePswd(false)
        }else if ( !(pswd === formValues.password)){
            toggleSamePswd(true)
            console.log(pswd, formValues.password)
        }


    }

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })

        if (!pswd){
            return
        }
        toggleFunc()


    } 


    return (
        <div>
            <Collapse in={open}>
            {(alert)? <Alert severity='error' action={<IconButton
                aria-label='close'
                color='inherit'
                size='small'
                onClick={()=>{
                    setOpen(false)
                }}
                >
                    <CloseIcon />
                </IconButton>
            }>Username already in use. Please try again with another username.</Alert>:null}
            </Collapse>
            <Box component={'form'} sx={{
                height: '100vh',
                
            }}>
            <FormLabel color='secondary' sx={{
                color: theme.palette.secondary.main,
                fontSize: '3rem'
            }} >New Account Register</FormLabel>
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
                    }} required={true} disableAnimation={true} variant="standard">{(samePswd)? 'Confirm Password' : 'Passwords not identical'}</InputLabel>

                    <Input sx={{color:'secondary', maxWidth: '50vw'}} type="password" onChange={passwordChk} color={'secondary'}  error={!samePswd} placeholder={'Confirm Password: '}/>

                </FormControl>

                <Button onClick={handleSubmit}  variant='contained'color="secondary" 
                    disabled={
                        pswd === ''  ||
                        !(pswd === formValues.password) ||
                        !formValues.password ||
                        !formValues.firstName ||
                        !formValues.lastName ||
                        !formValues.userName 
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

export default Register