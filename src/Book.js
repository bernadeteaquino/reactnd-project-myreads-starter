import React, { Component } from 'react'

class Book extends Component {
  render() {
    const { book, onChangeBookShelf } = this.props

    return(
      <div className="book">
          <div className="book-top">
          <div className="book-cover">
              <img src={book.imageLinks? book.imageLinks.thumbnail : ''} alt={book.title}/>
          </div>
          <div className="book-shelf-changer">
              <select onChange={(event) => onChangeBookShelf(book, event.target.value)} value={book.shelf}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
              </select>
          </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors ? book.authors.join(', ') : ''}</div>
      </div>
    )
  }
}

export default Book