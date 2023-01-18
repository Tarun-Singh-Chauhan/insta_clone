import styles from "./Sidebar.module.css";
import Sticky from "react-sticky-el";
import profileImg from "../../../images/profileImg.jpg";
import Profile from "./Profile";
import Suggestion from "./Suggestion";
import Footer from "./Footer";
import { Switch } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <Sticky topOffset={-80}>
        <div className={styles.sidebar}>
          <Profile
            userName={"chauhan271singh"}
            image={profileImg}
            caption={"Tarun Chauhan"}
            iconSize={"big"}
            urlText={"Switch"}
            storyBorder={true}
          />
          <Suggestion />
          <Footer />
        </div>
      </Sticky>
    </>
  );
};

export default Sidebar;
