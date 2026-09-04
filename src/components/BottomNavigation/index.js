import "./BottomNavigation.css";

function BottomNavigation() {
  const navItems = [
    { id: "home", label: "Home", icon: "⌂" },
    { id: "shop", label: "Shop", icon: "▣" },
    { id: "emi", label: "EMI Dues", icon: "₹" },
    { id: "limit", label: "Limit", icon: "◉" },
    { id: "profile", label: "Profile", icon: "○" },
  ];

  return (
    <nav className="bottom-navigation" aria-label="Main navigation">
      {navItems.map((item) => (
        <button
          key={item.id}
          type="button"
          className={`bottom-nav-item ${
            item.id === "shop" ? "bottom-nav-item-active" : ""
          }`}
          aria-current={item.id === "shop" ? "page" : undefined}
        >
          <span className="bottom-nav-icon" aria-hidden="true">
            {item.icon}
          </span>

          <span className="bottom-nav-label">{item.label}</span>
        </button>
      ))}
    </nav>
  );
}

export default BottomNavigation;
