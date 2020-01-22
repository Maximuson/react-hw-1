import React from "react";
import "./App.css";
import Profile from "./components/Profile/Profile";
import user from "./user.json";
import statisticalData from "./statistical-data.json";
import Statistics from "./components/Statistics/Statistics";

function App() {
  return (
    <div className="App">
      <Profile user={user} />
      <Statistics title="title" stats={statisticalData} />
    </div>
  );
}

export default App;
