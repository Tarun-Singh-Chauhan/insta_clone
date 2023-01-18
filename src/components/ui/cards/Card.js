import styles from "./Card.module.css";
import Profile from "../sidebar-container/Profile";
import { ReactComponent as CardButton } from "../../../images/cardBtn.svg";
import CardMenu from "./CardMenu";
import Comment from "../Comment";
import { useRef } from "react";

const Card = (props) => {
  const { storyBorder, comments, image, likedByText, likedByNumber, hours } =
    props;

  return (
    <>
      <div className={styles.card}>
        <header>
          <div className={styles.profile}>
            <Profile storyBorder={storyBorder} iconSize={"medium"} />
          </div>
          <CardButton className={styles["card-button"]} />
        </header>
        <img className={styles["card-image"]} src={image} alt="card content" />
        <CardMenu />
        <div className={styles["liked-by"]}>
          <Profile iconSize={"small"} hideAccountName={true} />
          <span>
            {" "}
            Liked By <strong> {likedByText} </strong> and{" "}
            <strong> {likedByNumber} others </strong>{" "}
          </span>
        </div>
        <div className={styles.comments}>
          {comments.map((comments) => {
            return (
              <Comment
                key={comments.id}
                accountName={comments.user}
                comment={comments.text}
              />
            );
          })}
        </div>
        <div className={styles["time-posted"]}>{hours} Hours ago</div>
        <div className={styles["add-comment"]}>
          <div className={styles["comment-text"]}>Add a comment...</div>
          <div className={styles["post-text"]}> Post </div>
        </div>
      </div>
    </>
  );
};

export default Card;
