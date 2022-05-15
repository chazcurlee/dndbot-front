import { Button, FormControl, FormControlLabel, FormGroup, FormLabel, Paper, TextField } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";




const CommentForm = ({toggleCommentUpdate, post}) => {
    const theme = useTheme()
    const [comment, setComment] = useState({
        content: null
    })

    const userId = localStorage.getItem('user')

    const handleChange = (e) => {
        setComment(e.target.value)
    }

    const handleSubmit = async () => {

        await axios.post(`http://localhost:3001/comments/${post.user_id}/${post.id}`, comment)

    }

    // useEffect(()=>{
    //     const getPostInfo = async () => await axios.get(`http://localhost:3001/post/${post.id}`)

    // },[])
    



    return (!userId)? (
    
        <div>Test</div>
        
        
        
        ):(
        <Paper sx={{marginTop: '10px', padding: '10px', paddingBottom:'5px'}}>
            <FormLabel>Leave a Comment</FormLabel>
            <FormGroup>
                <TextField name="comment" multiline rows={4} onChange={handleChange} placeholder="Comment"></TextField>
                <Button variant='contained' disabled={!comment.content} color='secondary' sx={{color: theme.palette.primary.main, marginTop: '5px', width: '10vw'}} >Comment</Button>
                
            </FormGroup>
        </Paper>
    )


}

export default CommentForm