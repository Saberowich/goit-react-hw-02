
import { FriendListItem } from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css"


export const FriendList = ({ friends }) => {
    return (
        <ul className={css.friendList}>
            {friends.map((friend) => {
                return <FriendListItem key={friend.id} friend={friend}/>;
            })}
        </ul>
    );
};