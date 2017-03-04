import React, {Component, PropTypes} from 'react';
import Nav from '../components/Nav';
import {connect} from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Nav loggedIn={this.props.loggedIn}
             username={this.props.username}
             userData={this.props.userData}
             dispatch={this.props.dispatch}/>
        { this.props.children }
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  userData: PropTypes.object.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  username: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  const {home, login} = state;
  return {
    userData: home,
    loggedIn: login.loggedIn,
    username: login.loggedInUser
  };
}

export default connect(mapStateToProps)(App);
