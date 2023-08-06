import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../styles/components/sliderImg.module.css";
import Image from "next/image";
import codoPicture from "../public/imgCarousel/codos-silicona-turbo-agua.jpg";
import brochesPicture from "../public/imgCarousel/broches-carrocerria-tapabarro-molduras.jpg";
import bujesPicture from "../public/imgCarousel/bujes-goma-soportes-escape.jpg";
import pkPicture from "../public/imgCarousel/Correas-tipo-pk.jpg";
import rollosPicture from "../public/imgCarousel/pisos-goma-rollos.jpg";
import estacionamientoPicture from "../public/imgCarousel/topes-estacionamiento.jpg";
import slingaPicture from "../public/imgCarousel/slingas-seguridad.jpg";
import turbo from "../public/imgCarousel/Mangueras-silicona-turbo.jpg";

const SliderImg = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    gap: 3,
    responsive: [
      {
        breakpoint: 1180,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        <div className={styles.imgSlider}>
          <div
            className={styles.image}
            style={{
              backgroundImage: `url(${codoPicture.src})`,
            }}
          />
        </div>
        <div className={styles.imgSlider}>
          <div
            className={styles.image}
            style={{
              backgroundImage: `url(${brochesPicture.src})`,
            }}
          />
        </div>
        <div className={styles.imgSlider}>
          <div
            className={styles.image}
            style={{
              backgroundImage: `url(${bujesPicture.src})`,
            }}
          />
        </div>
        <div className={styles.imgSlider}>
          <div
            className={styles.image}
            style={{
              backgroundImage: `url(${pkPicture.src})`,
            }}
          />
        </div>
        <div className={styles.imgSlider}>
          <div
            className={styles.image}
            style={{
              backgroundImage: `url(${estacionamientoPicture.src})`,
            }}
          />
        </div>

        <div className={styles.imgSlider}>
          <div
            className={styles.image}
            style={{
              backgroundImage: `url(${rollosPicture.src})`,
            }}
          />
        </div>

        <div className={styles.imgSlider}>
          <div
            className={styles.image}
            style={{
              backgroundImage: `url(${turbo.src})`,
            }}
          />
        </div>

        <div className={styles.imgSlider}>
          <div
            className={styles.image}
            style={{
              backgroundImage: `url(${slingaPicture.src})`,
            }}
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderImg;
