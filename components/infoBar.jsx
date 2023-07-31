import styles from "../styles/components/infoBar.module.css";
import { FaWhatsapp } from "react-icons/fa";
const InfoBar = () => {
  return (
    <div className={styles.infoBarContainer} id="productos">
      <div className={styles.infoBarSection}>
        <h4>Haz tus cotizaciones directamente a nuestro Whatsapp</h4>
        <div className={styles.wspContainer}>
          <div
            style={{
              background: "green",
              padding: "5px 6px",
              borderRadius: "100px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FaWhatsapp size={25} />
          </div>
          <a target="_blank" href="https://wa.me/56992664150">
            <p>+569 9266 4150</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default InfoBar;
