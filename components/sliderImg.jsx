import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../styles/components/sliderImg.module.css";
import Image from "next/image";

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
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        <div className={styles.imgSlider}>
          <Image
            className={styles.image}
            src="/imgCarousel/slingas-seguridad.jpg"
            width={700}
            height={700}
          />
        </div>

        <div className={styles.imgSlider}>
          <Image
            className={styles.image}
            src="/imgCarousel/codos-silicona-turbo-agua.jpg"
            width={700}
            height={900}
          />
        </div>
        <div className={styles.imgSlider}>
          <Image
            className={styles.image}
            src="/imgCarousel/bujes-goma-soportes-escape.jpg"
            width={700}
            height={700}
          />
        </div>
        <div className={styles.imgSlider}>
          <Image
            className={styles.image}
            src="/imgCarousel/Correas-tipo-pk.jpg"
            width={700}
            height={700}
          />
        </div>
        <div className={styles.imgSlider}>
          <Image
            className={styles.image}
            src="/imgCarousel/gomas-viales-lomo-toro.jfif"
            width={700}
            height={700}
          />
        </div>
        <div className={styles.imgSlider}>
          <Image
            className={styles.image}
            src="/imgCarousel/broches-carrocerria-tapabarro-molduras.jpg"
            width={700}
            height={900}
          />
        </div>
        <div className={styles.imgSlider}>
          <Image
            className={styles.image}
            src="/imgCarousel/Mangueras-silicona-turbo.jpg"
            width={700}
            height={700}
          />
        </div>
        <div className={styles.imgSlider}>
          <Image
            className={styles.image}
            src="/imgCarousel/pisos-goma-rollos.jpg"
            width={700}
            height={700}
          />
        </div>

        <div className={styles.imgSlider}>
          <Image
            className={styles.image}
            src="/imgCarousel/topes-estacionamiento.jpg"
            width={700}
            height={700}
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderImg;
