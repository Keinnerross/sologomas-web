import styles from "../../styles/components/index/sliderMain.module.css";
import Slider from "react-slick";

const SliderMain = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    autoplaySpeed: 4000,
    autoplay: true,
    cssEase: "ease-in",
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider className={styles.bannerContainer} {...settings}>
      <div className={styles.banner1}></div>
      <div className={styles.banner2}></div>
      {/* <div className={styles.sliderMain}>
        <div className={styles.sliderSection}>
          <div className={styles.logoContainer}>
            <div className={styles.logo}></div>
          </div>
          <div className={styles.line}></div>
          <h4>AUTOMOTRÍZ - MINERÍA - CONSTRUCCIÓN - HOGAR</h4>
        </div>
      </div> */}
    </Slider>
  );
};

export default SliderMain;
