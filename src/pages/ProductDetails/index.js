import { useState } from "react";
import "./ProductDetails.css";

function ProductDetails({ product, onBack }) {
  const [selectedVariant, setSelectedVariant] = useState(
    product?.variants?.[0]?.id,
  );

  const [selectedEmi, setSelectedEmi] = useState(product?.emiPlans?.[0]?.id);

  if (!product) {
    return (
      <div className="product-details-page">
        <div className="product-details-empty">
          <h2>Product not found</h2>

          <button type="button" onClick={onBack}>
            Back to Marketplace
          </button>
        </div>
      </div>
    );
  }

  const currentVariant =
    product.variants?.find((variant) => variant.id === selectedVariant) ||
    product.variants?.[0];

  const currentEmi =
    product.emiPlans?.find((plan) => plan.id === selectedEmi) ||
    product.emiPlans?.[0];

  const monthlyAmount = Math.ceil(currentVariant.price / currentEmi.duration);

  const totalAmount = monthlyAmount * currentEmi.duration;

  return (
    <div className="product-details-page">
      <button type="button" className="back-button" onClick={onBack}>
        ← Back
      </button>

      <div className="product-details-image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-details-content">
        <p className="product-details-brand">{product.brand}</p>

        <h1>{product.name}</h1>

        <div className="product-details-price">
          ₹{currentVariant.price.toLocaleString("en-IN")}
        </div>

        <p className="product-details-original-price">
          ₹{product.originalPrice.toLocaleString("en-IN")}
        </p>

        {/* Variants */}
        <div className="variant-section">
          <h2>Select Variant</h2>

          <div className="variant-options">
            {product.variants.map((variant) => (
              <button
                key={variant.id}
                type="button"
                className={`variant-button ${
                  selectedVariant === variant.id ? "variant-button-active" : ""
                }`}
                onClick={() => setSelectedVariant(variant.id)}
              >
                {variant.name}
              </button>
            ))}
          </div>
        </div>

        {/* EMI Plans */}
        <div className="emi-section">
          <h2>Select EMI Plan</h2>

          <div className="emi-options">
            {product.emiPlans.map((plan) => {
              const planMonthlyAmount = Math.ceil(
                currentVariant.price / plan.duration,
              );

              return (
                <button
                  key={plan.id}
                  type="button"
                  className={`emi-card ${
                    selectedEmi === plan.id ? "emi-card-active" : ""
                  }`}
                  onClick={() => setSelectedEmi(plan.id)}
                >
                  <div>
                    <strong>{plan.duration} Months</strong>

                    <p>
                      ₹{planMonthlyAmount.toLocaleString("en-IN")}
                      /month
                    </p>
                  </div>

                  <span>{selectedEmi === plan.id ? "✓" : ""}</span>
                </button>
              );
            })}
          </div>

          <p className="emi-total">
            Total payable: ₹{totalAmount.toLocaleString("en-IN")}
          </p>
        </div>

        {/* Product Details */}
        <div className="product-details-info">
          <h2>Product Details</h2>

          <div className="detail-row">
            <span>Brand</span>
            <strong>{product.brand}</strong>
          </div>

          <div className="detail-row">
            <span>Rating</span>
            <strong>★ {product.rating}</strong>
          </div>

          <div className="detail-row">
            <span>Selected EMI</span>
            <strong>{currentEmi.duration} Months</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
