import Head from "next/head";
import Template from "../components/template";
import SliderMain from "../components/index/sliderMain";
import styles from "../styles/index.module.css";
import SliderImg from "../components/sliderImg";
import SliderProducts from "../components/sliderProducts";
import InfoBar from "../components/infoBar";
import Horarios from "../components/horarios";
import Sectores from "../components/sectores";
import losperalesbg from "../assets/img/perales-bg.jpg";

const Index = () => {
  return (
    <div className={styles.mainContainer}>
      <Template id="top">
        <SliderMain />
        <InfoBar></InfoBar>
        <SliderProducts />

        {/* {"About Section"}
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
        </div> */}

        {/* {"Products section"} */}
        {/* <div className={styles.productsContainer}>
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
        </div> */}
        <div className={styles.GaleryMainContainer}>
          <div
            className={styles.galeryContainer}
            id="galeria"
            style={{ backgroundImage: `url(${losperalesbg.src})` }}
          >
            <div className={styles.overlay}></div>
            <div className={styles.gallerySection}>
              <h1
                style={{
                  fontSize: "25px",
                }}
                className={styles.galleryTitle}
              >
                {" "}
                Especialistas en productos de goma
              </h1>

              <p className={styles.galleryDescription}>
                Contamos con el mejor servicio y la mejor calidad en todos
                nuestros productos para así atender cada una de las necesidades
                de nuestros clientes. <br></br>
              </p>
              <div className={styles.gallery}>
                <SliderImg />
              </div>
            </div>
          </div>
        </div>
        <Horarios></Horarios>
        <Sectores></Sectores>
      </Template>
    </div>
  );
};

export default Index;
