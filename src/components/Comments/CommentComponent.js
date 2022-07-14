import {Link} from "react-router-dom";

export default function CommentComponent({comment}) {

    return (
        <div >

            <Link to={comment.postId.toString()}>Post for comment</Link>
            Comment -{comment.id}
            Name - {comment.name}
            Email -{comment.email}
            <br/>
            {comment.body}
            <hr/>
        </div>
    );
}