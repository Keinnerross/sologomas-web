import Head from "next/head";
import React, { useEffect } from "react";
import Template from "../components/template";
import SliderMain from "../components/index/sliderMain";
import ProductCard from "../components/productCard";
import styles from "../styles/index.module.css";
import { FaHome, FaIndustry, FaCar, FaTools } from "react-icons/fa";
import SliderImg from "../components/sliderImg";


const Index = () => {
  useEffect(() => {
    const coordenadas = { lat: -29.92976838789285, lng: -71.25572081867122 };
    const map = new google.maps.Map(document.getElementById("map"), {
      center: coordenadas,
      zoom: 18,
    });
    const marcador = new google.maps.Marker({
      position: coordenadas,
      map: map,
    });
  }, []);

  /*Icons */

  const iconConstruction = <FaTools size={30} />;
  const iconHome = <FaHome size={30} />;
  const iconIndustrial = <FaIndustry size={30} />;
  const iconCar = <FaCar size={30} />;

  /*Slider */
  

  return (
    <>
      <Head>
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA5apBmVG75NmQ1Jl24_vrRVmZaAwY05SQ" />
      </Head>
      <Template>
        <SliderMain />
        {/* {"About Section"} */}
        <div className={styles.aboutContainer}>
          <div className={styles.aboutSection}>
            <h2 className={styles.aboutTitle}>Sobre Nosotros</h2>
            <p className={styles.aboutDescription}>
              Nos dedicamos a la venta de todo tipo de gomas para los distintos
              sectores productsivos de la región, contamos con gomas para
              actividad minera, construcción, el hogar y el campo automotriz,
              nuestra alta gama y variedad de productos en gomas nos posiciona
              como el distribuidor más relevante de la zona.
            </p>
            <div className={styles.logoCircle}></div>
          </div>
        </div>

        {/* {"Products section"} */}
        <div className={styles.productsContainer}>
          <div className={styles.productsSection}>
            <ProductCard
              icon={iconCar}
              titleProduct="SECTOR AUTOMOTRÍZ"
              Product1="Mangueras Automotrices"
              Product2="Flexibles Multiuso"
              Product3="Correas tipo 9.5, A, B, C"
              Product4=" Correas tipo PK, PJ y especiales."
            />
            <ProductCard
              icon={iconConstruction}
              titleProduct="SECTOR CONSTRUCCIÓN"
              Product1="Grada escala."
              Product2="Espepejos panorámicos"
              Product3="Lomos de Toro"
              Product4="Topes para estacionamiento"
            />
          </div>
          <div className={styles.productsSection}>
            <ProductCard
              icon={iconIndustrial}
              titleProduct="SECTOR INDUSTRIAL"
              Product1="Gomas para Minería."
              Product2="Gomas agricolas."
              Product3="Gomas para Construcción."
            />
            <ProductCard
              icon={iconHome}
              titleProduct="GOMAS PARA EL HOGAR"
              Product1="Linea Hogar."
              Product2="Todo para pisos."
              Product3="Basureros"
            />
          </div>
        </div>
        <div className={styles.galleryCointainer}>
          <div className={styles.overlay}></div>
          <div className={styles.gallerySection}>
            <h2 className={styles.galleryTitle}>Galería de productos</h2>
            <p className={styles.galleryDescription}>
              Contamos con el mejor servicio y la mejor calidad en todos
              nuestros productos para así atender cada una de las necesidades de
              nuestros clientes.
            </p>
            <div className={styles.gallery}>
              <SliderImg/>
            </div>
          </div>
        </div>
        <div className={styles.contactContainer}>
          <div className={styles.contactSection}>
            <div className={styles.contactInfoContainer}>
              <h2 className={styles.contactTitle}>¡VISÍTANOS!</h2>
              <div className={styles.contactLine} />
              <span className={styles.contactInfo}>
                Av. Balmaceda 1130 La Serena
              </span>
              <span className={styles.contactInfo}>
                Calle Los Perales 654 - La Serena
              </span>
              <span className={styles.contactInfo}>sologomass@gmail.com</span>
              <span className={styles.contactInfo}>512227715</span>
              <span className={styles.contactInfo}>512390331</span>
            </div>
            <div className={styles.contactMap}>
              <div id="map" style={{ width: "100%", height: "100%" }}></div>
            </div>
          </div>
        </div>
      </Template>
    </>
  );
};

export default Index;
