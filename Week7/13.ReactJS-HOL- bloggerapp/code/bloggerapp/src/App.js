import React, { useState } from 'react';
import CourseDetails from './components/CourseDetails';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';

function App() {
  const [showBooks, setShowBooks] = useState(true);
  const [hasBlogs, setHasBlogs] = useState(true);

  const courses = [
    { id: 1, name: 'Angular', date: '4/5/2021' },
    { id: 2, name: 'React', date: '6/3/20201' }
  ];

  const books = [
    { id: 1, title: 'Master React', price: 670 },
    { id: 2, title: 'Deep Dive Into Angular 11', price: 800 },
    { id: 3, title: 'Mongo Essentials', price: 450 }
  ];

  const blogs = [
    { id: 1, title: 'React Learning', author: 'Stephen Biz', content: 'Welcome to learning React!' },
    { id: 2, title: 'Installation', author: 'Schewzdenier', content: 'You can install React from npm.' }
  ];

  function toggleBooks() {
    setShowBooks(!showBooks);
  }

  function toggleBlogs() {
    setHasBlogs(!hasBlogs);
  }

  return (
    <div className="container">
      <button onClick={toggleBooks}>
        {showBooks ? 'Hide Books' : 'Show Books'}
      </button>
      <button onClick={toggleBlogs}>
        {hasBlogs ? 'Hide Blogs' : 'Show Blogs'}
      </button>
      <div className="section">
        <CourseDetails courses={courses} />
      </div>
      <div className="section">
        <BookDetails showBooks={showBooks} books={books} />
      </div>
      <div className="section">
        <BlogDetails hasBlogs={hasBlogs} blogs={blogs} />
      </div>
    </div>
  );
}

export default App;
