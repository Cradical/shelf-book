import React from 'react'

import BookShelf from '../BookShelf'
import ErrorBoundary from '../ErrorBoundary'
import TheLibrary from '../TheLibary'

import './mainContent.css'

export default class MainContent extends React.Component {
  state = {
    books: [],
  }

  componentDidMount() {
    this.fetchBooks()
  }

  fetchBooks = async () => {
    let response = await fetch('http://localhost:8080')
    let data = await response.json()

    this.setState({ books: data.books })
  }

  render() {
    return (
      <div className='mainContent'>
        <h2 className='main-content-header'>On The Shelve</h2>
        <div className='book-card-container'>
          <ErrorBoundary>
            <BookShelf books={this.state.books} />
          </ErrorBoundary>
        </div>
      </div>
    )
  }
}
