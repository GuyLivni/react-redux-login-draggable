import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import * as homeActions from '../actions/homeActions';
import * as loginActions from '../actions/loginActions';

class Nav extends Component {

  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
  }

  logoutBtn() {
    if (this.props.loggedIn) {
      return <a href="#" className="btn" onClick={this.logout}>Logout</a>;
    }
  }

  logout() {
    this.props.dispatch(homeActions.saveUserData(this.props.username, this.props.userData));
    this.props.dispatch(loginActions.logout());
  }

  render() {

    const messsage = this.props.loggedIn ?
      `Welcome, ${this.props.username}` :
      "Welcome guest, please login";

    return (
      <div className="nav-container">
        <div className="nav">
          <Link to="/" className="logo-container"><h1 className="logo">{messsage}</h1></Link>
          { this.logoutBtn() }
        </div>
      </div>
    );
  }
}

Nav.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  username: PropTypes.string.isRequired,
  userData: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default Nav;
