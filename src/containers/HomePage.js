import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as homeActions from '../actions/homeActions';
import UserProfile from '../components/UserProfile';
import UserAvatar from '../components/UserAvatar';
import Draggable from 'react-draggable';

class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userData: Object.assign({}, this.props.userData)
    };

    this.onDragStop = this.onDragStop.bind(this);
  }

  componentDidMount() {
    this.props.actions.getUserStorageData(this.props.username);
  }

  onDragStop(event, position) {
    const field = event.target.id;
    let userData = this.props.userData;
    userData[field] = {x: position.x, y: position.y};

    this.setState({
      userData: userData
    });

    this.props.actions.saveUserData(this.props.username, this.state.userData);
  }

  render() {
    return (
      <div className="page-container-column">
        <Draggable position={this.state.userData.imageLocation} onStop={this.onDragStop}>
          <div className="draggble-component">
            <UserAvatar id="imageLocation"
                        avatarSrc={this.props.userData.image}
                        alt="user image"
                        className="user-avatar"/>
          </div>
        </Draggable>

        <Draggable position={this.state.userData.profileLocation} onStop={this.onDragStop}>
          <div className="draggble-component">
            <UserProfile id="profileLocation"
                         username={this.props.username}
                         className="user-profile"/>
          </div>
        </Draggable>
      </div>
    );
  }
}

HomePage.propTypes = {
  actions: PropTypes.object.isRequired,
  userData: PropTypes.object.isRequired,
  username: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
  const { login, home } = state;
  return {
    userData: home,
    username: login.loggedInUser
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(homeActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
