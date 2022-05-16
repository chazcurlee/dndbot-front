import React from "react";
import { useEffect, useState } from "react";
import axios from 'axios'
import Paper  from "@mui/material/Paper";
import styled from "@emotion/styled";
import {Grid, useTheme} from "@mui/material";
import Divider  from "@mui/material/Divider";
import { useNavigate } from "react-router-dom";
import Client from "../services/API";

const ForumPaper = styled(Paper)`
    backgroundColor: ${props => props.theme.palette.paper.default}


`

const PageHeader = styled.h1`
    color: ${props => props.theme.palette.secondary.main}

`

const Forum = () => {
    const navigate = useNavigate()
    const theme = useTheme()
    const [posts, setPosts] = useState([])


    const navPostDetail = (postId) => {

        navigate(`${postId}`)


    }

    useEffect(() => {

        const getPosts = async () => {
            let allPosts = await axios.get(`${Client}/posts`)
            setPosts(allPosts.data)
        }
        getPosts()

    }, [])

    // console.log(posts)

    return (
        <div>
            <PageHeader theme={theme}>Forum</PageHeader >
            <Grid sx={{
                textAlign: 'center',
                justifyContent: 'center'
            }} container direction={'row'} spacing={0}>
                {posts.map((info) => (
                    <Grid sx={{
                        width: '30vw',
                        margin: '1vw',
                        
                    }} item>
                    <div onClick={() => navPostDetail(info.id)}>
                        <ForumPaper sx={{
                            maxWidth: '50vw',
                            textAlign: 'center',
                            marginBottom: '5px',
                            padding: '10px'
                        }} theme={theme} color='paper.default' elevation={3}> 
                            <h2>{info.title}</h2>
                            <Divider />
                            <p>{info.content}</p>
                        </ForumPaper>
                    </div>
                    </Grid>
                ))}
            </Grid>
        </div>
    )

}

export default Forum