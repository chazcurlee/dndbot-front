import axios from "axios";
import React from "react";
import CommentForm from "../components/CommentForm";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Paper  from "@mui/material/Paper";
import { Divider, Box, Button, ListItemSecondaryAction, TextField, Switch, FormGroup, FormControlLabel, Alert, Backdrop, IconButton, ClickAwayListener } from "@mui/material";
import { useTheme, Input } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';




const Post_Detail = () => {
    const navigate = useNavigate()
    const [post, setPost] = useState([])
    const [comments, setComments] = useState([])
    let [username, setUsername] = useState([])
    let [isUser, toggleIsUser] = useState(false)
    let [edit, toggleEdit] = useState(false)
    const [deleteAlert, toggleDeleteAlert] = useState(false)
    const [commentUpdate, toggleCommentUpdate] = useState(false)
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

        
        
            
         

    }, [commentUpdate])

    const handleSubmit = async (e) => {
        console.log(edit)
        const formTitle = !post.title
        const formContent = !post.content

        if (!formTitle && !formContent){
            console.log('in')
            toggleEdit(!edit)
            await axios.put(`http://localhost:3001/posts/${id}`, post)
            console.log(edit)
        }
        


    }

    const handleChange = (e) => {

        setPost({ ...post, [e.target.name]: e.target.value })

    }

    const handleDelete = async () => {

        await axios.delete(`http://localhost:3001/posts/${id}`)
        navigate('/forum')
        


    }
    
   console.log(comments)

    return  (parseInt(localStorage.getItem('user'))===username.id)?(
        <div>
            {(edit)?(
                <Box sx={{
                    height: '100%',
                    
                    }}>
                        <Paper sx={{
                            maxWidth: '50vw',
                            marginBottom: '10px',
                            
                            
                        }} >
                        <Input value={post.title} onChange={handleChange} name="title"></Input>
                        <h3>user: {username.userName}</h3>
                        <TextField multiline value={post.content} sx={{
                            marginBottom: '5px',
                            width: '40vw'
                        }} name='content' onChange={handleChange}/>
                        <FormGroup>
                            <FormControlLabel sx={{
                                color: theme.palette.secondary.main
                            }} control={<Switch onChange={()=>handleSubmit()}variant='outlined' checked={edit} sx={{
                            color: theme.palette.secondary.main,
                        
                            }} color='secondary' />} labelPlacement='start' label='Submit'/>
                        
                        </FormGroup>
                        </Paper>
                        

                        
                        <Divider />
                        <Paper sx={{
                            height: 'auto',
                            maxWidth: '50vw'
                        }}>
                            <CommentForm commentUpdate={commentUpdate} postId={id} toggleCommentUpdate={toggleCommentUpdate}/>
                            {comments.map((comment)=> (
                                <div>
                                <h4>{comment.content}</h4>
                                <Divider />
                                </div>
                            ))}
                        </Paper>
                    </Box>
                ):(
                <Box sx={{
                height: '100%',
                
                }}>
                    <Backdrop onClick={()=>toggleDeleteAlert(!deleteAlert)} open={deleteAlert}>
                        <Paper sx={{
                            height: '30vh',
                            width: '30vw',
                            
                        }}>
                            <h1>Are you sure you want to delete?</h1><br />
                            
                            <Button onClick={handleDelete} variant='contained' color='success' sx={{margin:'10px'}}><CheckIcon /></Button>
                            
                            <Button onClick={() =>toggleDeleteAlert(false)} variant='contained' color='error'sx={{margin:'10px'}}><CloseIcon /></Button>
                        </Paper>
                    </Backdrop>
                    <Paper sx={{
                        maxWidth: '50vw',
                        
                    }} >
                    <h1>{post.title}</h1>
                    <h3>user: {username.userName}</h3>
                    <p>{post.content}</p>
                    <FormGroup>
                            <FormControlLabel sx={{
                                color: theme.palette.secondary.main
                            }} control={<Switch onChange={() =>toggleEdit(!edit)}variant='outlined' sx={{
                                color: theme.palette.secondary.main,
                                }} />
                            } color='secondary' labelPlacement='start' label='Edit' />
                    
                    </FormGroup>

                    {(!deleteAlert)?<Button onClick={() => toggleDeleteAlert(!deleteAlert)}variant='outlined' sx={{
                            color: theme.palette.primary.main,
                            backgroundColor: theme.palette.secondary.main
                    }}>Delete</Button>:null}
                    </Paper>
                    
                    <Divider />
                    <Paper sx={{
                        height: 'auto',
                        maxWidth: '50vw'
                    }}>
                        <CommentForm commentUpdate={commentUpdate} post={post} toggleCommentUpdate={toggleCommentUpdate}/>
                        {comments.map((comment)=> (
                            <h4>{comment.content}</h4>
                        ))}
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
            <CommentForm commentUpdate={commentUpdate} postId={id} toggleCommentUpdate={toggleCommentUpdate}/>
            {comments.map((comment)=> (
                <h4>{comment.content}</h4>
            ))}
            
        </Paper>
        </Box>
    </div>)

}

export default Post_Detail