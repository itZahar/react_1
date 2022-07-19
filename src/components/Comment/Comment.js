import React, {Component} from 'react';

class Comment extends Component {

    render() {
        const {id,name,body} = this.props.comment
        return (
            <div>
                {id} - {name}<br/>{body}
            </div>
        );
    }
}

export {Comment};