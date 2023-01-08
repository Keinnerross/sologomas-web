import styles from "../../styles/components/index/slider.module.css";

const Slider = () => {
  return (
    <div className={styles.sliderMain}>
      <div className={styles.sliderSection}>
        <div className={styles.logoContainer}>
          <div className={styles.logo}></div>
        </div>
        <div className={styles.line}></div>
        <h4>AUTOMOTRÍZ - MINERÍA - CONSTRUCCIÓN - HOGAR</h4>
      </div>
    </div>
  );
};

export default Slider;
