import React, {PropTypes} from 'react';

const UserInfo = ({id, username, className}) => {
  return (
    <div id={id} className={className} >{username}</div>
  );
};

UserInfo.propTypes = {
  username: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default UserInfo;
