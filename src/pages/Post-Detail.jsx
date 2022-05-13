import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Paper  from "@mui/material/Paper";
import { Divider } from "@mui/material";


const Post_Detail = () => {
    const [post, setPost] = useState([])
    const [comments, setComments] = useState([])
    let [username, setUsername] = useState([])
    const { id } = useParams() 


    useEffect(()=> {

        const getPostDetails = async() => {

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

    

    return  (
        <div>
            <Paper sx={{
                maxWidth: '50vw',
            }} >
            <h1>{post.title}</h1>
            <h3>user: {username.userName}</h3>
            <p>{post.content}</p>
            </Paper>
            <Divider />
            <Paper sx={{
                height: '100vh'
            }}>
                <h4>{comments.content}</h4>
            </Paper>
            
        </div>
     
    )

}

export default Post_Detail