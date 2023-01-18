import styles from "./Story.module.css";
import ProfileIcon from "../navigation/ProfileIcon";
import users from "../../../data/users";

const Story = () => {
  let accountName = users[Math.floor(Math.random() * users.length)].userName;

  if (accountName.length > 12) {
    accountName = accountName.substring(0, 12) + "...";
  }

  return (
    <>
      <div className={styles.story}>
        <ProfileIcon iconSize="big" storyBorder={true} />
        <span className={styles.accountName}> {accountName} </span>
      </div>
    </>
  );
};

export default Story;
