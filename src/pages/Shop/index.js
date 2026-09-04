import "./Shop.css";
import PromoBanner from "../../components/PromoBanner";
import ShopTabs from "../../components/ShopTabs";

function Shop() {
  return (
    <div className="shop-page">
      <main className="shop-content">
        <h1 className="shop-title">Shop</h1>

        <PromoBanner />

        <ShopTabs />
      </main>
    </div>
  );
}

export default Shop;
