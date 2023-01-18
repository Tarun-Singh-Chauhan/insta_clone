import styles from "./Profile.module.css";
import ProfileIcon from "../navigation/ProfileIcon";
import users from "../../../data/users";

const Profile = (props) => {
  const {
    userName,
    image,
    caption,
    iconSize,
    urlText,
    storyBorder,
    hideAccountName,
  } = props;

  let accountName = userName
    ? userName
    : users[Math.floor(Math.random() * users.length)].userName;

  return (
    <>
      <div className={styles.profile}>
        <ProfileIcon
          iconSize={iconSize}
          storyBorder={storyBorder}
          image={image}
        />

        {(accountName || caption) && !hideAccountName && (
          <div className={styles['text-container']}>
            <span className={styles["account-name"]}> {accountName} </span>
            <span className={styles.caption}> {caption} </span>
          </div>
        )}
        <a href="/"  > {urlText} </a>
      </div>
    </>
  );
}; 

export default Profile;
