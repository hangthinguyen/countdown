import image from "../../images/gift.jpeg";
import InfoSection from "../InfoSection/InfoSection";
import styles from "./MainContent.module.scss";

const MainContent = () => {
  return (
    <div className={styles.mainContent}>
      <div className={styles.imgContainer}>
        <img src={image} alt="img" />
      </div>
      <InfoSection />
    </div>
  );
};

export default MainContent;
