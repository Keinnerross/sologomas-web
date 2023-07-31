import Slider from "react-slick";
import styles from "../styles/components/sliderProducts.module.css";
import transporta from "../assets/img/productsSlider/transporta.png";
import bujes from "../assets/img/productsSlider/bujes.png";
import codo from "../assets/img/productsSlider/codo.png";
import correapk from "../assets/img/productsSlider/correapk.png";
import correaa from "../assets/img/productsSlider/correaA.png";
import turbo from "../assets/img/productsSlider/l200.png";
import lomotoro from "../assets/img/productsSlider/lomotoro.png";
import radiador from "../assets/img/productsSlider/radiador.png";
import soporte from "../assets/img/productsSlider/soporte.png";

const SliderProducts = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    gap: 7,
    autoplay: true,
    speed: 400,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div style={{ width: "100%", padding: "50px 60px" }}>
      <h4 style={{ marginBottom: "10px" }}>Consulta por nuestros productos​</h4>
      <Slider {...settings}>
        <div className={styles.categoryCard}>
          <div
            className={styles.transportaImg}
            style={{ backgroundImage: `url(${transporta.src})` }}
          ></div>
          <h4>Mangueras</h4>
        </div>
        <div className={styles.categoryCard}>
          <div
            className={styles.pkImg}
            style={{ backgroundImage: `url(${correapk.src})` }}
          ></div>
          <h4>Correas Pk</h4>
        </div>
        <div className={styles.categoryCard}>
          <div
            className={styles.bujesImg}
            style={{ backgroundImage: `url(${bujes.src})` }}
          ></div>
          <h4>Bujes</h4>
        </div>
        <div className={styles.categoryCard}>
          <div
            className={styles.manguerasImg}
            style={{ backgroundImage: `url(${radiador.src})` }}
          ></div>
          <h4>Mangueras de Radiador</h4>
        </div>
        <div className={styles.categoryCard}>
          <div
            className={styles.turboImg}
            style={{ backgroundImage: `url(${turbo.src})` }}
          ></div>
          <h4>Mangueras Turbo</h4>
        </div>
        <div className={styles.categoryCard}>
          <div
            className={styles.soportesImg}
            style={{ backgroundImage: `url(${soporte.src})` }}
          ></div>
          <h4>Soportes Escape</h4>
        </div>
        <div className={styles.categoryCard}>
          <div
            className={styles.lomoToroImg}
            style={{ backgroundImage: `url(${lomotoro.src})` }}
          ></div>
          <h4>Lomos de Toro</h4>
        </div>
        <div className={styles.categoryCard}>
          <div
            className={styles.siliconaImg}
            style={{ backgroundImage: `url(${codo.src})` }}
          ></div>
          <h4>Codos de Silicona</h4>
        </div>
        <div className={styles.categoryCard}>
          <div
            className={styles.correasAImg}
            style={{ backgroundImage: `url(${correaa.src})` }}
          ></div>
          <h4>Correas A B y C</h4>
        </div>
      </Slider>
    </div>
  );
};

export default SliderProducts;
