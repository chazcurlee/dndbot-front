import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Paper  from "@mui/material/Paper";
import { Divider, Box, Button, ListItemSecondaryAction, TextField } from "@mui/material";
import { useTheme, Input } from "@mui/material";




const Post_Detail = () => {
    const [post, setPost] = useState([])
    const [comments, setComments] = useState([])
    let [username, setUsername] = useState([])
    let [isUser, toggleIsUser] = useState(false)
    let [edit, toggleEdit] = useState(false)
    const [formValues, setFormValues] = useState({
        title: '',
        content: ''
    })
    const { id } = useParams() 
    const theme = useTheme()

    


    useEffect(()=> {

        

        const getPostDetails = async() => {
            window.scrollTo(0, 0)

            const postDetails = await axios.get(`http://localhost:3001/posts/${id}`)
            const postComments = await axios.get(`http://localhost:3001/comments/${id}`)
            let postUser = postDetails.data.user_id
            let userInfo = await axios.get(`http://localhost:3001/users/${postUser}`)

            setPost(postDetails.data)
            setComments(postComments.data)
            setUsername(userInfo.data)
        }
        getPostDetails()

        
        
            
         

    }, [])

    const handleSubmit = async (e) => {
        console.log('out')
        const formTitle = !post.title
        const formContent = !post.content

        if (!formTitle && !formContent){
            console.log('in')
            toggleEdit(!edit)
            await axios.put(`/posts/${id}`, post)
        }
        


    }

    const handleChange = (e) => {

        setPost({ ...post, [e.target.name]: e.target.value })

    }
    
   

    return  (parseInt(localStorage.getItem('user'))===username.id)?(
        <div>
            {(edit)?(
                <Box sx={{
                    height: '100%'
                    }}>
                        <Paper sx={{
                            maxWidth: '50vw',
                            
                        }} >
                        <Input value={post.title} onChange={handleChange} name="title"></Input>
                        <h3>user: {username.userName}</h3>
                        <TextField value={post.content} name='content' onChange={handleChange}/>
                        </Paper>
                        {<Button onClick={() => handleSubmit()}variant='outlined' sx={{
                            color: theme.palette.primary.main,
                            backgroundColor: theme.palette.secondary.main
                        }}>Edit</Button>}
                        <Divider />
                        <Paper sx={{
                            height: 'auto',
                            maxWidth: '50vw'
                        }}>
                            <h4>{comments.content}</h4>
                        </Paper>
                    </Box>
                ):(
                <Box sx={{
                height: '100%'
                }}>
                    <Paper sx={{
                        maxWidth: '50vw',
                        
                    }} >
                    <h1>{post.title}</h1>
                    <h3>user: {username.userName}</h3>
                    <p>{post.content}</p>
                    </Paper>
                    {<Button onClick={() => toggleEdit(!edit)}variant='outlined' sx={{
                        color: theme.palette.primary.main,
                        backgroundColor: theme.palette.secondary.main
                    }}>Edit</Button>}
                    <Divider />
                    <Paper sx={{
                        height: 'auto',
                        maxWidth: '50vw'
                    }}>
                        <h4>{comments.content}</h4>
                    </Paper>
                </Box>
                )}
        
        </div>
     
    ) : (<div>
        <Box sx={{
            height: '100%'
        }}>
        <Paper sx={{
            maxWidth: '50vw',
            
        }} >
        <h1>{post.title}</h1>
        <h3>user: {username.userName}</h3>
        <p>{post.content}</p>
        </Paper>
       
        
    
        <Divider />
        <Paper sx={{
            height: 'auto',
            maxWidth: '50vw'
        }}>
            <h4>{comments.content}</h4>
        </Paper>
        </Box>
    </div>)

}

export default Post_Detail