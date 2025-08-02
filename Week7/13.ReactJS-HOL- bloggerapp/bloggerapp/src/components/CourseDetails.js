import React from 'react';

function CourseDetails(props) {
  if (!props.courses || props.courses.length === 0) {
    return <p>No courses available</p>;
  }
  return (
    <div>
      <h2 style={{ fontSize: '2rem', color: '#1976d2' }}>Course Details:</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {props.courses.map(course => (
          <li key={course.id} style={{ marginBottom: '16px' }}>
            <span style={{ fontSize: '1.3rem', color: '#388e3c', fontWeight: 'bold' }}>{course.name}</span>
            <br />
            <span style={{ fontSize: '1rem', color: '#616161' }}>{course.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseDetails;
