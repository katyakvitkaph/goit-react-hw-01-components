import React from 'react';
import PropTypes from 'prop-types';
import s from './Profile.module.css';

const Profile = ({ userData }) => (
  <div className={s.profile__item}>
    <div className="description">
      <img src={userData.avatar} alt="user avatar" className={s.avatar} />
      <p className={s.name}>{userData.name}</p>
      <p className="tag">{userData.tag}</p>
      <p className="location">{userData.location}</p>
    </div>

    <ul className={s.stats}>
      <li>
        <span className="label">Followers </span>
        <span className={s.quantity}>{userData.stats.followers}</span>
      </li>
      <li>
        <span className="label">Views </span>
        <span className={s.quantity}>{userData.stats.views}</span>
      </li>
      <li>
        <span className="label">Likes </span>
        <span className={s.quantity}>{userData.stats.likes}</span>
      </li>
    </ul>
  </div>
);

Profile.propTypes = {
  userData: PropTypes.shape({
    name: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    stats: PropTypes.shape({
      followers: PropTypes.number,
      views: PropTypes.number,
      likes: PropTypes.number,
    }),
    avatar: PropTypes.string,
  }).isRequired,
};

export default Profile;
