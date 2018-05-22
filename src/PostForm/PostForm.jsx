import React, {Component} from 'react';
import './PostForm.css';

class PostForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            newPostContent: '',
        };
        this.handleUserInput = this.handleUserInput.bind(this);
        this.writePost = this.writePost.bind(this);
    }
    handleUserInput(e){
        console.log(this);
        this.setState({
            newPostContent: e.target.value,
        })
    }
    writePost(){
        this.props.addPost(this.state.newPostContent);
        this.setState({
            newPostContent: '',
        })
    }
    render(){
        return(
            <div className="formWrapper">
                <input className="postInput"
                placeholder="Add a new Post.." 
                value={this.state.newPostContent}
                onChange={this.handleUserInput}/>
                <button className="postButton"
                onClick={this.writePost}>Add Post </button>

            </div>
        )
    }
}

export default PostForm;