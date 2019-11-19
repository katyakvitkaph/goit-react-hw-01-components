import React from 'react';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import user from './components/utils/user.json';
import statisticalData from './components/utils/statistical-data.json';
import FriendsList from './components/FriendList/FriendList';
import friends from './components/utils/friends.json';
import transactions from './components/utils/transactions.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';

const App = () => (
  <div>
    <Profile userData={user} />,
    <Statistics stats={statisticalData} />,
    <FriendsList friends={friends} />,
    <TransactionHistory items={transactions} />,
  </div>
);

export default App;
