import { Button, FormControl, FormControlLabel, FormGroup, FormLabel, Paper, TextField } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
import Client from "../services/API";




const CommentForm = ({toggleCommentUpdate, post, commentUpdate}) => {
    const theme = useTheme()
    const [comment, setComment] = useState({
        content: null
    })

    const userId = localStorage.getItem('user')

    const handleChange = (e) => {
        setComment({[e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {

        await Client.post(`/comments/${post.user_id}/${post.id}`, comment)
        setComment({content: null})
        e.target.value = null
        toggleCommentUpdate(!commentUpdate)

    }

    // useEffect(()=>{
    //     const getPostInfo = async () => await axios.get(`http://localhost:3001/post/${post.id}`)

    // },[])
    



    return (!userId)? (
    
        <div>Login to Comment or Post</div>
        
        
        
        ):(
        <Paper sx={{marginTop: '10px', padding: '10px', paddingBottom:'5px'}}>
            <FormLabel>Leave a Comment</FormLabel>
            <FormGroup>
                <TextField name="content" multiline rows={4} onChange={handleChange} placeholder="Comment"></TextField>
                <Button variant='contained' disabled={!comment.content} color='secondary' sx={{color: theme.palette.primary.main, marginTop: '5px', width: '10vw'}} onClick={handleSubmit}>Comment</Button>
                
            </FormGroup>
        </Paper>
    )


}

export default CommentForm