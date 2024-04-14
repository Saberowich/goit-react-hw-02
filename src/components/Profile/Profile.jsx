import css from "./Profile.module.css"

export const Profile = ({name, tag, location, image, stats}) => (
  <div className={css.profileContainer}>
  <div className={css.profileImg}>
    <img className={css.avatar}
      src={image}
      alt="User avatar"
    />
            <p className={css.userName}>{name}</p>
            <p className={css.userTag}>@{tag}</p>
            <p className={css.userTag}>{location}</p>
  </div>

  <ul className={css.profileList}>
    <li className={css.profileListItem}>
      <span className={css.label}>Followers</span>
                <span className={css.value}>{stats.followers}</span>
    </li>
    <li className={css.profileListItem}>
      <span className={css.label}>Views</span>
                <span className={css.value}>{stats.views}</span>
    </li>
    <li className={css.profileListItem}>
      <span className={css.label}>Likes</span>
                <span className={css.value}>{stats.likes}</span>
    </li>
  </ul>
</div>

);