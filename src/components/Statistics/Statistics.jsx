import React from "react";
import styles from "./Statistics.module.css";

const Statistics = props => {
  const { title, stats } = props;
  const colors = ["#4fc4f6", "#a33cf2", "#e64c65", "#009688", "#21b8c6"];
  const _randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  const getRandomColor = () => {
    const index = _randomIntegerFromInterval(0, colors.length - 1);
    return colors[index];
  };
  const items = stats.map(({ id, label, percentage }) => {
    return (
      <li
        key={id}
        className={styles.item}
        style={{ backgroundColor: getRandomColor() }}
      >
        <span className={styles.label}>{label}</span>
        <span className={styles.percentage}>{percentage}</span>
      </li>
    );
  });

  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>Upload stats</h2>}
      <ul className={styles["stat-list"]}>{items}</ul>
    </section>
  );
};

export default Statistics;
