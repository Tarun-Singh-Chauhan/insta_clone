import styles from "./Stories.module.css";
import HorizontalScroll from "react-scroll-horizontal";
import Story from "./Story";

const Stories = () => {
  return ( 
    <>
      <div className={styles.stories}>
        <HorizontalScroll className={styles.scroll} reverseScroll={true}>
            <Story />
            <Story />
            <Story />
            <Story />
            <Story />
            <Story />
            <Story />
            <Story />
            <Story />
        </HorizontalScroll>
      </div>
    </>
  );
};

export default Stories;
