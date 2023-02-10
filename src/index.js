import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import userInfo from './json-data/user.json'
import dataInfo from './json-data/data.json'
import friendsInfo from './json-data/friends.json'
import transactionsInfo from './json-data/transactions.json'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App userInfo={userInfo} dataInfo={dataInfo} friendsInfo={friendsInfo} transactionsInfo={transactionsInfo} />
  </React.StrictMode>
);
