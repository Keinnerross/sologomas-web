import styles from "../../styles/components/index/sliderMain.module.css";
import Slider from "react-slick";
import bannerOne from "../../assets/img/Banners/banner1.png";
import bannerTwo from "../../assets/img/Banners/banner2.jpg";

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
      <div>
        <div
          className={styles.banner1}
          style={{ backgroundImage: `url(${bannerOne.src})` }}
        ></div>
      </div>
      <div>
        <div
          className={styles.banner2}
          style={{ backgroundImage: `url(${bannerTwo.src})` }}
        ></div>
      </div>
    </Slider>
  );
};

export default SliderMain;
