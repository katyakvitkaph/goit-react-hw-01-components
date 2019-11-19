import React from 'react';
import PropTypes from 'prop-types';
import s from './FriendList.module.css';

const FriendListItem = ({ isOnline, avatar, name }) => (
  <div className={s.item__div}>
    <span className={isOnline ? s.span : s.disabled} />
    <img className={s.avatar} src={avatar} alt="" width="48" />
    <p className="name">{name}</p>
  </div>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
