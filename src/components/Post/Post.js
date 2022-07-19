import React, {Component} from 'react';

class Post extends Component {

    render() {
       const {id,title} = this.props.post
        return (
            <div>
                {id} {title}
            </div>
        );
    }
}

export {Post};