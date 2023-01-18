import styles from "./Comment.module.css";

const Comment = (props) => {
  const { accountName, comment } = props;

  return (
    <>
      <div className={styles["comments-container"]}>
        <div className={styles["account-name"]}> {accountName} </div>
        <div className={styles.comment}> {comment} </div>
      </div>
    </>
  );
};

export default Comment;
