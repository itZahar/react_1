import {useEffect, useState} from "react";
import {getComments} from "../../services";
import CommentComponent from "../Comment/CommentComponent";

export default function CommentsComponent() {

    let [comments,setComments] = useState([])
    useEffect(()=>{
        getComments().then(({data})=> setComments(data))
    },[])
    return (
        <div>
            {
                comments.map(comment => <CommentComponent comment={comment} key={comment.id}/>)
            }

        </div>
    );
}