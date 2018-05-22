import React, { Component } from 'react';
import Post from './Post/Post';
import PostForm from './PostForm/PostForm';
import './App.css';
import { DB_CONFIG } from './Config/config';
import firebase from 'firebase/app';
import 'firebase/database';

class App extends Component {
  constructor(props){
    super(props);
    this.addPost = this.addPost.bind(this);
    this.app = firebase.initializeApp(DB_CONFIG);
    this.database = this.app.database().ref().child('posts');
  
    this.state = {
      posts: [],
    }
  }

  componentWillMount(){
    const previousPosts = this.state.posts;
    this.database.on('child_added', snap => {
      previousPosts.push({
        id: snap.key,
        postContent: snap.val().postContent,
      })

      this.setState({
        posts: previousPosts
      })
    })
    this.database.on('child_removed', snap => {

    })

  }

  addPost(post){
    this.database.push().set({ postContent: post});
  }

  render() {
    return (
      <div className="postsWrapper">
        <div className="postsHeader">
          <div>Posts</div>
        </div>
        <div className="postsBody">
        {
          this.state.posts.map((post) => {
            return(
              <Post postContent={post.postContent} postId={post.id} key={post.id}/>
            )
          })
        }
        </div>
        <div className="postsFooter">
          <PostForm addPost={this.addPost}/>
        </div>
      </div>
    );
  }
}

export default App;
