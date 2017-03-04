import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as homeActions from '../actions/homeActions';
import LoadingSpinner from '../components/LoadingSpinner';
import UserProfile from '../components/UserProfile';

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
  }

  render() {
    return (
      <div className="page-container home-container">
        {this.props.loading ? <LoadingSpinner/> :
                              <UserProfile userData={this.props.userData}
                                userInfoLocation={this.state.userData.profileLocation}
                                userImageLocation={this.state.userData.imageLocation}
                                onDragStop={this.onDragStop}/>
        }
      </div>
    );
  }
}

HomePage.propTypes = {
  actions: PropTypes.object.isRequired,
  userData: PropTypes.object.isRequired,
  username: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  const { login, home, ajaxCallsInProgress } = state;
  return {
    loading: ajaxCallsInProgress.currentlySending,
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
