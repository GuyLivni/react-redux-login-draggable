import React, { Component } from 'react';
import { Link } from 'react-router';
import { PAGE_NOT_FOUND } from '../constants/pagesConstants';

class NotFoundPage extends Component {
  render() {
    return(
      <div className="page-container-column">
        <h1>{PAGE_NOT_FOUND}</h1>
        <Link to="/" className="btn">Return to Login page</Link>
      </div>
    );
  }
}

export default NotFoundPage;
