import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';
const colors = ['#4fc4f6', '#a33cf2', '#e64c65', '#009688', '#21b8c6'];
const _randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const getRandomColor = () => {
  const index = _randomIntegerFromInterval(0, colors.length - 1);
  return colors[index];
};
const Statistics = ({ title = '', stats = [] }) => {
  const items = stats.map(({ id, label, percentage }) => (
    <li
      key={id}
      className={styles.item}
      style={{ backgroundColor: getRandomColor() }}
    >
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}</span>
    </li>
  ));

  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>Upload stats</h2>}
      <ul className={styles.statList}>{items}</ul>
    </section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }),
  ),
  title: PropTypes.string,
};
export default Statistics;
