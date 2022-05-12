import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Post_Detail = () => {
    const [post, setPost] = useState([])
    const { id } = useParams() 


    useEffect(()=> {

        const getPostDetails = async() => {

            const postDetails = await axios.get()

        }


    }, [])


    return (
        <div>
            <h1>Post Detail</h1>
        </div>
    )

}

export default Post_Detail