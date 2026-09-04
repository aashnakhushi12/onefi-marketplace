import { useState } from "react";
import "./Shop.css";
import PromoBanner from "../../components/PromoBanner";
import ShopTabs from "../../components/ShopTabs";
import SearchBar from "../../components/SearchBar";
import BottomNavigation from "../../components/BottomNavigation";
import Marketplace from "../Marketplace";

function Shop() {
  const [searchValue, setSearchValue] = useState("");
  const [activeTab, setActiveTab] = useState("marketplace");
  const [isProductDetailsOpen, setIsProductDetailsOpen] = useState(false);

  return (
    <div className="shop-page">
      <main className="shop-content">
        {!isProductDetailsOpen && (
          <>
            <h1 className="shop-title">Shop</h1>

            <PromoBanner />

            <ShopTabs activeTab={activeTab} onTabChange={setActiveTab} />

            <SearchBar
              value={searchValue}
              onChange={setSearchValue}
              placeholder="Search for products"
            />
          </>
        )}

        {activeTab === "marketplace" && (
          <Marketplace
            searchValue={searchValue}
            onProductDetailsChange={setIsProductDetailsOpen}
          />
        )}
      </main>

      <BottomNavigation />
    </div>
  );
}

export default Shop;
