import "./ShopTabs.css";

function ShopTabs({ activeTab, onTabChange }) {
  const tabs = [
    { id: "brands", label: "Top Brands" },
    { id: "nearby", label: "Nearby Stores" },
    { id: "marketplace", label: "1Fi Marketplace" },
  ];

  return (
    <div className="shop-tabs">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          className={`shop-tab ${
            activeTab === tab.id ? "shop-tab-active" : ""
          }`}
          onClick={() => onTabChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

export default ShopTabs;
