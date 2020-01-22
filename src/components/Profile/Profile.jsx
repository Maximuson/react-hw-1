import React from "react";
import styles from './profile.module.css'

const Profile = ({user}) => {

    return (
        <div className={styles.profile}>
        <div className={styles.description}>
            <img
            src="https://i.pinimg.com/originals/a0/40/66/a04066a2d1fcf25df39c599e093995c8.jpg"
            alt="user avatar"
            className={styles.avatar}
            />
            <p className={styles.name}>{user.name}</p>
            <p className={styles.tag}>@{user.tag}</p>
            <p className={styles.location}>{user.location}</p>
        </div>

        <ul className={styles.stats}>
            <li>
                <span className={styles.label}>Followers</span>
                <span className={styles.quantity} >{user.stats.followers.toLocaleString()}</span>
            </li>
            <li>
                <span className={styles.label}>Views</span>
                <span className={styles.quantity}>{user.stats.views.toLocaleString()}</span>
            </li>
            <li>
                <span className={styles.label}>Likes</span>
                <span className={styles.quantity}>{user.stats.likes.toLocaleString()}</span>
            </li>
        </ul>
        </div>
    );
};

export default Profile;