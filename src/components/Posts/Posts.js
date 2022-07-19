import React, {Component} from 'react';
import {getPosts} from "../../services";
import {Post} from "../Post/Post";

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {posts : []}
    }

componentDidMount() {
    getPosts().then(value => this.setState({posts:value}))
}

    render() {
        return (
            <div>
                {
                    this.state.posts.map(post=><Post post={post} key={post.id}/>)
                }
            </div>
        );
    }
}

export {Posts};