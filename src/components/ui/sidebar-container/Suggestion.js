import Profile from "./Profile";
import styles from "./Suggestion.module.css";

const Suggestion = () => {
  return (
    <>
      <div className={styles.suggestion}>
        <div className={styles["title-container"]}>
          <div className={styles.title}>Suggestion for You</div>
          <a href="/" style={{ color: "black" }}>
            See All
          </a>
        </div>
        <Profile
          caption={`Followed by mapvalut + 3 more`}
          urlText={"Follow"}
          iconSize={"medium"}
          captionSize={"small"}
          storyBorder={true}
        />
        <Profile
          caption={`Followed by rajput + 2 more`}
          urlText={"Follow"}
          iconSize={"medium"}
          captionSize={"small"}
          storyBorder={true}
        />{" "}
        <Profile
          caption={`New to instagram`}
          urlText={"Follow"}
          iconSize={"medium"}
          captionSize={"small"}
          storyBorder={false}
        />{" "}
        <Profile
          caption={`Followed by maxx + 7 more`}
          urlText={"Follow"}
          iconSize={"medium"}
          captionSize={"small"}
          storyBorder={true}
        />{" "}
        <Profile
          caption={`Followed by chavii`}
          urlText={"Follow"}
          iconSize={"medium"}
          captionSize={"small"}
          storyBorder={true}
        />{" "}
       
      </div>
    </>
  );
};

export default Suggestion;
