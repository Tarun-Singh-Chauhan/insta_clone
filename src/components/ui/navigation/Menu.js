import styles from "./Menu.module.css";
import { ReactComponent as Home } from "../../../images/home.svg";
import { ReactComponent as Explore } from "../../../images/explore.svg";
import { ReactComponent as Notification } from "../../../images/notification.svg";
import { ReactComponent as Inbox } from "../../../images/inbox.svg";
import ProfileIcon from "./ProfileIcon";
import image from '../../../images/profileImg.jpg'

const Menu = () => {
  return (
    <>
      <div className={styles.menu}>
        <Home className={styles.icons} />
        <Explore className={styles.icons} />
        <Inbox className={styles.icons} />
        <Notification className={styles.icons} />
        <ProfileIcon iconSize={'small'}  storyBorder={true} image={image} />
      </div>
    </>
  );
};

export default Menu;
