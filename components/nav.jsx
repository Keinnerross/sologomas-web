import styles from "../styles/components/nav.module.css";
const Nav = () => {
  return (
    <div className={styles.navContainer}>
      <div className={styles.navSection}>
        <div className={styles.logo}></div>
        <ul className={styles.navegation}>
          <li className={styles.li}>Nosotros</li>
          <li className={styles.li}>Productos</li>
          <li className={styles.li}>Marcas</li>
          <li className={styles.li}>Contacto</li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
