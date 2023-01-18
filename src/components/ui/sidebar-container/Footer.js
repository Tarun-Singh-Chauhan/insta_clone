import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <ul className={styles.links}>
          <li>About</li>
          <li>Help</li>
          <li>Press</li>
          <li>API</li>
          <li>Jobs</li>
          <li>Privacy</li>
          <li>Terms</li>
          <li>Locations</li>
          <li>Top Accounts</li>
          <li>Hastags</li>
          <li>Language</li>
        </ul>
        <div className={styles.copyright} > @ 2023 INSTAGRAM FROM Meta </div>
      </div>
    </>
  );
};

export default Footer;
