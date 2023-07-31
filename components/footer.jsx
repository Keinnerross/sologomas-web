import { FaPhoneAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { MdPlace } from "react-icons/md";
import logo from "../assets/img/logo_sologomas.png";

import styles from "../styles/components/footer.module.css";
const Footer = () => {
  return (
    <>
      <footer className={styles.footerContainer}>
        <div className={styles.footerSection}>
          <div className={styles.columnInfo}>
            <div
              className={styles.logo}
              style={{ backgroundImage: `url(${logo.src})` }}
            ></div>
            <div className={styles.infoContainer}>
              <FaPhoneAlt />
              <p>(51) 239 0331</p>
            </div>
            <div className={styles.infoContainer}>
              <GrMail />
              <p>ventas@sologomas.cl</p>
            </div>
            <div className={styles.infoContainer}>
              <MdPlace />

              <div>
                <p>Los Perales 654 - LS</p>
                <p>Balmaceda 1130 - LS</p>
              </div>
            </div>
          </div>
          <div className={styles.columnInfo}>
            <h4>Navegación</h4>
            <ul>
              <li>
                <a href="#galeria">Nosotros</a>
              </li>
              <li>
                <a href="#productos">Producto</a>s
              </li>
              <li>
                <a href="#sectores">Sectores</a>
              </li>
              <li>
                <a href="#horario">Contacto</a>
              </li>
            </ul>
          </div>
          <div className={styles.columnInfo}>
            <h4>Categorias</h4>
            <ul>
              <li>
                <a href="#productos">Mangueras de Radiador</a>
              </li>
              <li>
                <a href="#productos">Mangueras Turbo</a>
              </li>
              <li>
                <a href="#productos">Correas PK</a>
              </li>
              <li>
                <a href="#productos">Correas Industriales</a>
              </li>
              <li>
                <a href="#productos">Bujes/Soportes</a>
              </li>
            </ul>
          </div>

          <div className={styles.columnInfo}>
            <h3>Suscribete a nuestro Newsletter!</h3>
            <form action="">
              <input type="text" placeholder="Nombre" />
              <input type="text" placeholder="Correo" />
              <button>Suscribirse</button>
            </form>
          </div>
        </div>
      </footer>
      <div className={styles.barFooter}>
        <span>Sologomas.cl</span>
        <span>©2023 Solo Gomas Todos los derechos reservados</span>
      </div>
    </>
  );
};

export default Footer;
