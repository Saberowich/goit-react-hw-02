
import { Profile } from "./Profile/Profile.jsx";
import userData from "./userData.json";
import friends from "./friends.json";
import { FriendList } from "./FriendList/FriendList";
import transactions from "./Transaction/Transactions.json";
import { TransactionHistory } from "./Transaction/TransactionHistory";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};


export default App;

