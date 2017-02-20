import React from 'react';
import TextInput from './TextInput';
import LoadingSpinner from './LoadingSpinner';

const LoginForm = ({data, btnText, onLogin, onChange, submiting, error}) => {
  return (
    <form className="form-container" onSubmit={onLogin}>
      <h1 className="form-header">Login</h1>
      {error && <div className="form-error">{error}</div>}
      <TextInput
        name="username"
        placeholder="Username"
        value={data.username}
        onChange={onChange} />

      <TextInput
        name="password"
        placeholder="Password"
        value={data.password}
        onChange={onChange} />

      <button
        type="submit"
        className="form-btn"> {submiting ? <LoadingSpinner/> : btnText}</button>
    </form>
  );
};

LoginForm.propTypes = {
  btnText: React.PropTypes.string.isRequired,
  data: React.PropTypes.object.isRequired,
  onLogin: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  submiting: React.PropTypes.bool,
  error: React.PropTypes.string
};

export default LoginForm;
