import React, {Component} from 'react';
import './Post.css';
import PropTypes from 'prop-types';

class Post extends Component{

    constructor(props){
        super(props);
        this.postContent = props.postContent;
        this.postId = props.postId;
    }
    render(props){
        return(
            <div className="post fade-in">
                <p className="postContent">{this.postContent}</p>
            </div>
        )
    }
}

Post.protoTypes = {
    postContent: PropTypes.string
}

export default Post;