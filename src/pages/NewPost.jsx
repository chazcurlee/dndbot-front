import React from "react";
import { useState } from "react";
import { Alert, Box, Button, Collapse, FormGroup, IconButton, InputLabel, FormControl, FormLabel, useTheme, Input, TextField } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close'
import Client from "../services/API";



const NewPost = ({user}) => {
    const theme = useTheme()
    const navigate = useNavigate()

    const [formValues, setFormValues] = useState({
        user_id: `${localStorage.getItem('user')}`,
        title: '',
        content: ''

    })
    
    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    } 

    const handleSubmit = async (e) => {
        e.preventDefault()

        await axios.post(`${Client}/posts/${formValues.user_id}`, formValues)
        navigate('/forum')

    }

    return(
        <div>
            <Box component={'form'} sx={{
                height: '100vh',
                
            }}>

            <FormLabel color='secondary' sx={{
                color: theme.palette.secondary.main,
                fontSize: '3rem'
            }} >Create a Post</FormLabel>
            <FormGroup  >

            <FormControl sx={{
                    margin: '20px'
                }}>
                    <InputLabel sx={{
                        color: theme.palette.text.primary,
                    }} required={true} disableAnimation={true} variant="standard" >Title</InputLabel>

                    <Input sx={{color:'secondary', maxWidth: '50vw', textAlign: 'center'}} type={'text'} color={'secondary'} placeholder={'Title'} autoFocus={true} onChange={handleChange} name="title"/>

            </FormControl>

            <FormControl sx={{
                    margin: '20px'
                }}>
                    

                    <TextField sx={{color:'secondary', maxWidth: '50vw', textAlign: 'center'}} InputLabelProps={{
                        shrink: true
                    }} multiline rows={4} type={'text'} color={'secondary'} placeholder={'Content '} onChange={handleChange} name="content"/>

            </FormControl>

            <Button onClick={handleSubmit}  variant='contained'color="secondary" 
                    disabled={
                        !formValues.title ||
                        !formValues.content 
                        } sx={{
                    color: theme.palette.text.secondary,
                    marginTop: '15px',
                    maxWidth: '20vw'
                }}>Post</Button>

            </FormGroup>

            </Box>
        </div>
    )


}

export default NewPost