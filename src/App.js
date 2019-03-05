import React from 'react'
import SearchBooks from './SearchBooks'
import ListBooks from './ListBooks'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }

    this.changeBookShelf = this.changeBookShelf.bind(this);
  }

  componentDidMount() {
    this.getAllBooks()
  }

  getAllBooks() {
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({
        books
      }))
    })
  }

  changeBookShelf(book, shelfName) {
    return BooksAPI.update(book, shelfName).then(() => {
      this.getAllBooks()
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <ListBooks
            books={this.state.books}
            onChangeBookShelf={this.changeBookShelf}
          />
        )}/>
        <Route exact path="/search" render={() => (
          <SearchBooks
            books={this.state.books}
            onChangeBookShelf={this.changeBookShelf}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp