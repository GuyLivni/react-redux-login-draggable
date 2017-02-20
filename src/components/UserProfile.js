import React, {PropTypes} from 'react';

const UserProfile = ({id, username, className}) => {
  return (
    <div id={id} className={className} >{username}</div>
  );
};

UserProfile.propTypes = {
  username: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default UserProfile;
