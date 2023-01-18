import styles from "./Navigation.module.css";
import instaLogo from "../../../images/instagram-logo.png";
import searchIcon from "../../../images/search-icon.png";
import Menu from './Menu';

const Navigation = () => {
  return (
    <>
      <div className={styles.navigation}>
        <div className={styles.container}>
          <img className={styles.logo} src={instaLogo} alt="inta-logo" />
          <div className={styles.search}>
            <img
              className={styles["search-icon"]}
              src={searchIcon}
              alt="search icon"
            />
            <span className={styles["search-text"]}> Search </span>
          </div>

          <Menu />
        </div>
      </div>
    </>
  );
};

export default Navigation;
