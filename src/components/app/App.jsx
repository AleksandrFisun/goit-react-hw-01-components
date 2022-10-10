import { Profile } from '../profile/Profile';
import { Statistics } from '../statistics/Statistics';
import { FriendList } from '../friendList/FriendList';
import { TransactionHistory } from '../transaction_history/TransactionHistory';
import profiles from '../../data-base/user.json';
import statistics from '../../data-base/data.json';
import friends from '../../data-base/friends.json';
import transactions from '../../data-base/transactions.json';
import { Wraper } from './App.styled';

export const App = () => {
  return (
    <Wraper>
      <Profile profile={profiles} />
      <Statistics title="Upload stats" statistics={statistics} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </Wraper>
  );
};
