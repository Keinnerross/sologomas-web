const ProductCard = ({
  titleProduct,
  Product1,
  Product2,
  Product3,
  Product4,
}) => {
  return (
    <div className="product-card-container">
      <div className="icon-product"></div>
      <div className="text-product-container">
        <h4>{titleProduct}</h4>
        <ul>
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
