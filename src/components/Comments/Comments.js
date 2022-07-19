import React, {Component} from 'react';
import {Comment} from "../Comment/Comment";
import {getComments} from "../../services";

class Comments extends Component {

    constructor(props) {
        super(props);
        this.state = {comments:[]}
    }
    componentDidMount() {
        getComments().then(value => this.setState({comments:value}))
    }

    render() {
        return (
            <div>
                {
                    this.state.comments.map(comment=><Comment comment={comment} key={comment.id}/>)
                }
            </div>
        );
    }
}

export {Comments};