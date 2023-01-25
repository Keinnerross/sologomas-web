import styles from "../styles/components/productCard.module.css";

const ProductCard = ({
  titleProduct,
  Product1,
  Product2,
  Product3,
  Product4,
  icon,
}) => {
  return (
    <div className={styles.productCardContainer}>
      <div className={styles.iconProduct}>{icon}</div>
      <div className={styles.textProductContainer}>
        <h4 className={styles.titleProduct}>{titleProduct}</h4>
        <ul className={styles.ul}>
          <li>{Product1}</li>
          <li>{Product2}</li>
          <li>{Product3}</li>
          {Product4 ? <li>{Product4}</li> : ""}
        </ul>
      </div>
    </div>
  );
};

export default ProductCard;
