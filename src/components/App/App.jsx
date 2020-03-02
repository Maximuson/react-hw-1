import React from 'react';
import './App.css';

import Profile from '../Profile/Profile';
import user from '../Profile/user.json';

import statisticalData from '../Statistics/statistical-data.json';
import Statistics from '../Statistics/Statistics';

import friends from '../FriendList/friends.json';
import FriendList from '../FriendList/FriendList';

import transactions from '../TransactionHistory/transactions.json';
import TransactionHistory from '../TransactionHistory/TransactionHistory';

const App = () => (
  <div className="App">
    <Profile user={user} />
    <Statistics title="title" stats={statisticalData} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </div>
);

export default App;
