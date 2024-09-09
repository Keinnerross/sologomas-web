import { Fragment } from "react"
import styles from "../../styles/components/index/sliderMain.module.css";
import Slider from "react-slick";
import bannerOne from "../../assets/img/Banners/banner1.png";
import bannerTwo from "../../assets/img/Banners/banner2.jpg";
import Modal from "./modal";

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
    <Fragment>
      <Modal />
      <Slider className={styles.bannerContainer} {...settings}>
        <div>
          <a href="https://keinnerross.github.io/SologomasApp/" target="_blank">
            <div
              className={styles.banner1}
              style={{ backgroundImage: `url(${bannerOne.src})` }}
            ></div>
          </a>
        </div>

        <div>
          <a href="https://keinnerross.github.io/SologomasApp/" target="_blank">

            <div
              className={styles.banner2}
              style={{ backgroundImage: `url(${bannerTwo.src})` }}
            ></div>
          </a>

        </div>
      </Slider >
    </Fragment>
  );
};

export default SliderMain;
