import styles from "../styles/components/nav.module.css";
const Nav = () => {
  return (
    <div className={styles.navContainer}>
      <div className={styles.navSection}>
        <a href="#top">
          {" "}
          <div className={styles.logo}></div>
        </a>
        <ul className={styles.navegation}>
          <li className={styles.li}>
            <a href="#galeria">Nosotros</a>
          </li>
          <li className={styles.li}>
            <a href="#productos">Productos</a>
          </li>
          <li className={styles.li}>
            <a href="#sectores">Sectores</a>
          </li>
          <li className={styles.li}>
            <a href="#horario">Contacto</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
