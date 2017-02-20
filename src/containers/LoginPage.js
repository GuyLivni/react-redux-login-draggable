import React, {PropTypes, Component} from 'react';
import LoginForm from '../components/LoginForm';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as loginActions from '../actions/loginActions';

class LoginPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      formState: Object.assign({}, this.props.login.formState)
    };

    this.login = this.login.bind(this);
    this.updateCredentials = this.updateCredentials.bind(this);
  }

  login(event) {
    event.preventDefault();
    this.props.actions.login(this.state.formState.username, this.state.formState.password);
  }

  updateCredentials(event) {
    const field = event.target.name;
    let formState = this.state.formState;
    formState[field] = event.target.value;
    return this.setState({formState: formState});
  }

  render() {
    return (
      <div className="page-container">
        <LoginForm btnText="Let me in."
                   data={this.state.formState}
                   error={this.props.errorMessage}
                   onLogin={this.login}
                   onChange={this.updateCredentials}
                   submiting={this.props.ajaxInProgress}/>
      </div>
    );
  }
}

LoginPage.propTypes = {
  login: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  errorMessage: PropTypes.string,
  ajaxInProgress: PropTypes.bool
};

function mapStateToProps(state, ownProps) {
  const { login, ajaxCallsInProgress } = state;
  return {
    login,
    errorMessage: login.errorMessage,
    ajaxInProgress: ajaxCallsInProgress.currentlySending
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(loginActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
