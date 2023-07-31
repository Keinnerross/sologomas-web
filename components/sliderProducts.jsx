import Slider from "react-slick";
import styles from "../styles/components/sliderProducts.module.css";

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
          <div className={styles.transportaImg}></div>
          <h4>Mangueras</h4>
        </div>
        <div className={styles.categoryCard}>
          <div className={styles.pkImg}></div>
          <h4>Correas Pk</h4>
        </div>
        <div className={styles.categoryCard}>
          <div className={styles.bujesImg}></div>
          <h4>Bujes</h4>
        </div>
        <div className={styles.categoryCard}>
          <div className={styles.manguerasImg}></div>
          <h4>Mangueras de Radiador</h4>
        </div>
        <div className={styles.categoryCard}>
          <div className={styles.turboImg}></div>
          <h4>Mangueras Turbo</h4>
        </div>
        <div className={styles.categoryCard}>
          <div className={styles.soportesImg}></div>
          <h4>Soportes Escape</h4>
        </div>
        <div className={styles.categoryCard}>
          <div className={styles.lomoToroImg}></div>
          <h4>Lomos de Toro</h4>
        </div>
        <div className={styles.categoryCard}>
          <div className={styles.siliconaImg}></div>
          <h4>Codos de Silicona</h4>
        </div>
        <div className={styles.categoryCard}>
          <div className={styles.correasAImg}></div>
          <h4>Correas A B y C</h4>
        </div>
      </Slider>
    </div>
  );
};

export default SliderProducts;
