import "./ProductCard.css";

function ProductCard({ product, onClick }) {
  return (
    <article className="product-card" onClick={() => onClick(product)}>
      <div className="product-image-wrapper">
        <img src={product.image} alt={product.name} className="product-image" />
      </div>

      <div className="product-info">
        <p className="product-brand">{product.brand}</p>

        <h3 className="product-name">{product.name}</h3>

        <div className="product-price-row">
          <span className="product-price">
            ₹{product.price.toLocaleString("en-IN")}
          </span>

          <span className="product-original-price">
            ₹{product.originalPrice.toLocaleString("en-IN")}
          </span>
        </div>

        <p className="product-emi">
          EMI from ₹
          {Math.round(product.emiPlans[0].monthlyAmount).toLocaleString(
            "en-IN",
          )}
          /month
        </p>
      </div>
    </article>
  );
}

export default ProductCard;
