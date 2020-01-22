import React from "react";
import "./App.css";
import styles from "./App.module.css";
import Profile from "./components/Profile/Profile";
import user from "./user.json";
import statisticalData from "./statistical-data.json";
import Statistics from "./components/Statistics/Statistics";
import friends from "./friends.json";
import FriendList from "./components/FriendList/FriendList";

function App() {
  return (
    <div className="App">
      <div className={styles.item}>
        <Profile user={user} />
      </div>
      <div className={styles.item}>
        <Statistics title="title" stats={statisticalData} />
      </div>
      <div className={styles.item}>
        <FriendList friends={friends} />
      </div>
      <div className={styles.item}>
        <Statistics title="title" stats={statisticalData} />
      </div>
    </div>
  );
}

export default App;
