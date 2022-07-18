import {useEffect, useState} from "react";
import {getPosts} from "../../services/posts.servisec";
import {useParams} from "react-router-dom";
import PostComponent from "../Post/PostComponent";


export default function PostsComponent() {
    const {id:postId} = useParams()

    const[posts,setPosts]= useState([])
    useEffect(()=>{
        getPosts(postId).then(({data})=> setPosts(data))

    },[postId])
    return (
        <div>
            {
               <PostComponent post={posts}/>
            }
        </div>
    );
}