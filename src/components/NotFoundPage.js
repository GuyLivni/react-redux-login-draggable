import React, { Component } from 'react';
import { Link } from 'react-router';
import { PAGE_NOT_FOUND, PAGE_NOT_FOUND_RETURN } from '../constants/pagesConstants';

class NotFoundPage extends Component {
  render() {
    return(
      <div className="page-container not-found-container">
        <h1>{PAGE_NOT_FOUND}</h1>
        <Link to="/" className="btn">{PAGE_NOT_FOUND_RETURN}</Link>
      </div>
    );
  }
}

export default NotFoundPage;
