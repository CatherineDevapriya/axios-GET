import React, { Component } from 'react';
import axios from 'axios'
class DataFetching extends Component{
    
        constructor(props) {
            super(props);
            this.state = {posts:[] ,
            error:'' }
        }
        componentDidMount(){
            axios.get('https://jsonplaceholder.typicode.com/posts').then(res=>{
                this.setState({posts:res.data})
            })
            .catch(error=>{
                this.setState({error:"Something went wrong while loading"})
            })
        }
        render() {
            const {posts,error}=this.state;
            return (
                <div>
                    {posts.map(post=>
                        <div key={post.id} className="container">
                            <div><b>userId:</b> {post.userId}</div>
                            <div><b>id:</b> {post.id}</div>
                            <div><b>title:</b> {post.title}</div>
                            <div><b>body:</b> {post.body}</div>
                            <hr/>
                            </div>
                            )}
                            <div className="text-center">{error?error:null}</div>
                </div>

            );
        }
    }
     
    export default DataFetching ;
