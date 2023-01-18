import styles from "./ProfileIcon.module.css";

const ProfileIcon = (props) => {
  const { iconSize, storyBorder, image } = props;

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  let randomId = getRandomInt(1, 70);

  let profileImage = image
    ? image
    : `https://i.pravatar.cc/150?img=${randomId}`;

  return (
    <>
      <div className={storyBorder ? styles["story-border"] : ""}>
        <img
          className={`${styles["profile-icon"]} ${styles[iconSize]} `}
          src={profileImage}
          alt="profile"
        />
      </div>
    </>
  );
};

export default ProfileIcon;
