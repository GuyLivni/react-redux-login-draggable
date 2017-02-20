import React, {PropTypes} from 'react';

const UserAvatar = ({avatarSrc, alt, className, id}) => {
  return (
    <img id={id} draggable="false" className={className} src={avatarSrc} alt={alt}/>
  );
};

UserAvatar.propTypes = {
  avatarSrc: PropTypes.string,
  alt: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired
};

export default UserAvatar;
