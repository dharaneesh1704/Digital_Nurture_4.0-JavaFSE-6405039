import React from "react";

class Posts extends React.Component {
  constructor(props) {
      super(props);
      this.state={posts: [], error: ""};
  }

  loadPosts(){
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => {return response.json()})
    .then(data => {
      let myposts = [];
      for(let i=0;i < data.length;i++){
let post={id:data[i].id,title: data[i].title, body:data[i].body};
          myposts.push(post)
      }
      this.setState({posts:myposts});
    })
.catch(error => {
this.setState({error:"error on  loading posts!!"})
});
  }

componentDidMount(){
this.loadPosts()
}

render(){
  if(this.state.error !==""){
    return(
      <div>
        <p>Error: {this.state.error}</p>
      </div>
    )
  }
return(
<div>
<h2>Posts List</h2>
{this.state.posts.map(post => {
return(
<div>
<div style={{border:"1px solid red",margin:"9px",padding:"9px"}}>
<h3>{post.title}</h3>
<p>{post.body}</p>
</div>
</div>
)
})}
</div>
)
}
}
export default Posts;