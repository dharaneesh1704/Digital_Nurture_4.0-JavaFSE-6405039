import React from 'react';

function BookDetails(props) {
  if (!props.showBooks) {
    return <p>Books are hidden</p>;
  }
  if (!props.books || props.books.length === 0) {
    return <p>No books available</p>;
  }
  return (
    <div>
      <h2 style={{ fontSize: '2rem', color: '#c62828' }}>Book Details:</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {props.books.map(book => (
          <li key={book.id} style={{ marginBottom: '16px' }}>
            <span style={{ fontSize: '1.3rem', color: '#ad1457', fontWeight: 'bold' }}>{book.title}</span>
            <br />
            <span style={{ fontSize: '1.1rem', color: '#424242' }}>{book.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookDetails;
