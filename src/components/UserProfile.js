import React, {PropTypes} from 'react';
import UserInfo from '../components/UserInfo';
import UserAvatar from '../components/UserAvatar';
import Draggable from 'react-draggable';

const UserProfile = ({userData, userInfoLocation, userImageLocation, onDragStop}) => {
  return (
    <div className="user-profile">
      <Draggable position={userImageLocation} onStop={onDragStop}>
        <div className="draggable-component">
          <UserAvatar id="imageLocation"
                      avatarSrc={userData.image}
                      alt="user image"
                      className="user-avatar"/>
        </div>
      </Draggable>

      <Draggable position={userInfoLocation} onStop={onDragStop}>
        <div className="draggable-component">
          <UserInfo id="profileLocation"
                    username={userData.username}
                    className="user-profile"/>
        </div>
      </Draggable>
    </div>
  );
};

UserProfile.propTypes = {
  userData: PropTypes.object.isRequired,
  userInfoLocation: PropTypes.object.isRequired,
  userImageLocation: PropTypes.object.isRequired,
  onDragStop: PropTypes.func.isRequired
};

export default UserProfile;
