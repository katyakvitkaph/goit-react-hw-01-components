import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import s from './FriendList.module.css';

const FriendList = ({ friends = [] }) => (
  <ul className={s.friend_list}>
    {friends.length &&
      friends.map(el => (
        <li key={el.id} className={s.item}>
          <FriendListItem
            isOnline={el.isOnline}
            avatar={el.avatar}
            name={el.name}
          />
        </li>
      ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default FriendList;
