import PropTypes from 'prop-types';
import css from './FriendListItem.module.css'
// import css from '../FriendList/FriendList.module.css';


export const FriendListItem = ({ friend }) => {
    const { avatar, name, isOnline } = friend;
    return (
        <li className={css.FriendContainer}>
            <img className={css.avatar} src={avatar} alt="Avatar" width="48" />
            <p className={css.name}>{name}</p>
             <p className={`${css.status} ${isOnline ? css.onlineText : css.offlineText}`}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
        </li>
    );
};


FriendListItem.protoTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.string.isRequired
};