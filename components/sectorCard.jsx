import styles from "../styles/components/sectorCard.module.css";
import { useState } from "react";
const SectorCard = ({ textSector, imgSector }) => {
  const [textShow, setTextShow] = useState(false);
  return (
    <div
      className={styles.sectorCard}
      onMouseEnter={() => setTextShow(true)}
      onMouseLeave={() => setTextShow(false)}
      style={{ position: "relative" }}
    >
      <p className={textShow ? styles.textCard : styles.hidden}>{textSector}</p>
      <div className={styles.overlayCard}></div>
      <div
        className={styles.sectorCard}
        style={{ backgroundImage: `url(${imgSector.src})` }}
      ></div>
    </div>
  );
};

export default SectorCard;
