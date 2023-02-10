import Profile from './components/Profile/Profile'
import Statistics from 'components/Statistics/Statistics';
import FriendList from 'components/FriendList/FriendList';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';

const App = ({ userInfo, dataInfo, friendsInfo, transactionsInfo }) => {

  return (
    <div>
      <Profile userInfo={userInfo} />
      <Statistics stats={dataInfo} title="Upload stats" />
      <FriendList friendsInfo={friendsInfo} />
      <TransactionHistory items={transactionsInfo} />
    </div>
  );
};

export default App