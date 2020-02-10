import React from 'react';
import styles from './FriendList.module.css';
import PropTypes from 'prop-types';

const FriendList = props => {
  const { friends } = props;
  const items = friends.map(({ id, avatar, name, isOnline }) => {
    return (
      <li key={id} className={styles.item}>
        <span
          className={`${styles.status} ${isOnline && styles.online}`}
        ></span>
        <img className={styles.avatar} src={avatar} alt="" width="48" />
        <p className={styles.name}>{name}</p>
      </li>
    );
  });
  return <ul className={styles['friend-list']}>{items}</ul>;
};

FriendList.defaultProps = {
  friends: [],
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
    }),
  ),
};
export default FriendList;
