import React from 'react';
import PropTypes from 'prop-types';
import style from './Statistics.module.css';
// import statisticalData from '../utils/statistical-data.json';

const Statistics = ({ title, stats }) => (
  <section className={style.statistics}>
    <h2 className={style.title}>{title}</h2>

    <ul className={style.stat__list}>
      {stats.map(user => (
        <li key={user.id} className={style.user__el}>
          <span className="label">{user.label}</span>
          <span className="percentage">{user.percentage} %</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.defaultProps = {
  title: 'UPLOAD STATS',
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }),
  ).isRequired,
  title: PropTypes.string,
};

export default Statistics;
