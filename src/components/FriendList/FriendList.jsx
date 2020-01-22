import React from "react";
import styles from "./FriendList.module.css";

const FriendList = props => {
  const { friends } = props;
  const items = friends.map(({ avatar, name, isOnline }) => {
    return (
      <li className={styles.item}>
        <span
          className={`${styles.status} ${isOnline && styles.online}`}
        ></span>
        <img class={styles.avatar} src={avatar} alt="" width="48" />
        <p className={styles.name}>{name}</p>
      </li>
    );
  });
  return <ul class={styles["friend-list"]}>{items}</ul>;
};

export default FriendList;
