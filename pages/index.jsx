import Template from "../components/template";
import ProductCard from "../components/productCard";
import styles from "../styles/index.module.css";
const Index = () => {
  return (
    <>
      <Template>
        <div className={styles.sliderMain}>Slider</div>
        <div className="about-container">
          <div className="about-section">
            <h2>Sobre Nosotros</h2>
            <p>
              Nos dedicamos a la venta de todo tipo de gomas para los distintos
              sectores productivos de la región, contamos con gomas para
              actividad minera, construcción, el hogar y el campo automotriz,
              nuestra alta gama y variedad de productos en gomas nos posiciona
              como el distribuidor más relevante de la zona.
            </p>
            <div className="logo-circle">brand</div>
          </div>
          <div className="products-container">
            <div className="products-section">
              <ProductCard
                titleProduct="GOMAS AUTOMOTRICES"
                Product1="Mangueras Automotrices"
                Product2="Flexibles Multiuso"
                Product3="Correas tipo 9.5, A, B, C, PK, PJ y especiales."
                Product4="Gomas de piso delantero y trasero"
              />
              <ProductCard
                titleProduct="GOMAS PARA CONSTRUCCIÓN"
                Product1="Grada escala."
                Product2="Espepejos panorámicos"
                Product3="Lomos de Toro"
                Product4="Topes para estacionamiento"
              />
            </div>
            <div className="products-section">
              <ProductCard
                titleProduct="GOMAS INDUSTRIALES"
                Product1="Gomas para Minería."
                Product2="Gomas agricolas."
                Product3="Gomas para Construcción."
              />
              <ProductCard
                titleProduct="GOMAS PARA EL HOGAR"
                Product1="Linea Hogar."
                Product2="Todo para pisos."
                Product3="Basureros"
              />
            </div>
          </div>
          <div className="gallery-container">
            <div className="gallery-section">
              <h2>Galería de productos</h2>
              <p>
                Contamos con el mejor servicio y la mejor calidad en todos
                nuestros productos para así atender cada una de las necesidades
                de nuestros clientes.
              </p>
              <div className="gallery">img</div>
            </div>
          </div>
          <div className="contac-container">
            <div className="contact-section">
              <div className="contact-info-container">
                <h2>¡VISÍTANOS!</h2>
                <hr />
                <span>Av. Balmaceda 1130 La Serena</span>
                <span>Calle Los Perales 654 - La Serena</span>
                <span>sologomass@gmail.com</span>
                <span>512227715</span>
                <span>512390331</span>
              </div>
              <div className="contact-map"></div>
            </div>
          </div>
        </div>
      </Template>
    </>
  );
};

export default Index;
