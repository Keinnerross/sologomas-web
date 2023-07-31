import styles from "../styles/components/sectores.module.css";
import automotriz from "../assets/img/sectores/automotriz.jpg";
import agricultura from "../assets/img/sectores/agricultura.jpg";
import industrial from "../assets/img/sectores/industrial.jpg";
import hogar from "../assets/img/sectores/hogar.jpg";
import construccion from "../assets/img/sectores/construccion.jpg";
import SectorCard from "./sectorCard";
import balmacedaBg from "../assets/img/back-shop.png";

const Sectores = () => {
  return (
    <div
      className={styles.galleryCointainer}
      style={{ backgroundImage: `url(${balmacedaBg.src})` }}
      id="sectores"
    >
      <h2 className={styles.galleryTitle}>
        ¡Abarcamos los distintos Sectores de la región!
      </h2>

      <div className={styles.overlay}></div>

      <div className={styles.gallerySection}>
        <SectorCard textSector="Automotriz" imgSector={automotriz} />
        <SectorCard textSector="Construcción" imgSector={construccion} />
        <SectorCard textSector="Industrial" imgSector={industrial} />
        <SectorCard textSector="Agricultura" imgSector={agricultura} />
        <SectorCard textSector="Hogar" imgSector={hogar} />
      </div>
    </div>
  );
};

export default Sectores;
