import styles from "../styles/components/horarios.module.css";
import balmaceda from "../assets/img/horarios/horarioBalma.jpg";
import losperales from "../assets/img/horarios/horarioLospe.jpg";

const Horarios = () => {
  // const balma =
  //   "https://sologomas.cl/wp-content/uploads/2023/06/bbcc-1024x768.jpg";
  return (
    <div className={styles.horariosContainer} id="horario">
      <div className={styles.horariosSection}>
        <div
          className={styles.horario}
          style={{ backgroundImage: `url(${balmaceda.src})` }}
        ></div>
        <div
          className={styles.horario}
          style={{ backgroundImage: `url(${losperales.src})` }}
        ></div>
      </div>
    </div>
  );
};

export default Horarios;
