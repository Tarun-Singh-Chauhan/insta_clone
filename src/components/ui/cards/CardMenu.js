import styles from "./CardMenu.module.css";
import { ReactComponent as Bookmark } from "../../../images/bookmark.svg";
import { ReactComponent as Notification } from "../../../images/notification.svg";
import { ReactComponent as Inbox } from "../../../images/inbox.svg";
import { ReactComponent as Comments } from "../../../images/comments.svg";

const CardMenu = () => {



  return (
    <>
      <div className={styles["card-menu"]}>
        <div className={styles.interactions}>
          <Notification className={styles.icon}   />
          <Comments className={styles.icon} />
          <Inbox className={styles.icon} />
        </div>
        <Bookmark className={styles.icon} />
      </div>
    </>
  );
};

export default CardMenu;
