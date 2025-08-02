import React from 'react';

function BlogDetails(props) {
  if (!props.hasBlogs) {
    return <p>No new blogs</p>;
  }
  if (!props.blogs || props.blogs.length === 0) {
    return <p>No blogs available</p>;
  }
  return (
    <div>
      <h2 style={{ fontSize: '2rem', color: '#6a1b9a' }}>Blog Details:</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {props.blogs.map(blog => (
          <li key={blog.id} style={{ marginBottom: '20px' }}>
            <span style={{ fontSize: '1.3rem', color: '#283593', fontWeight: 'bold' }}>{blog.title}</span>
            <br />
            <span style={{ fontSize: '1.1rem', color: '#00897b' }}>{blog.author}</span>
            <br />
            <span style={{ fontSize: '1rem', color: '#424242' }}>{blog.content}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogDetails;
