import React from "react";
// link from react router dom
import { Link } from "react-router-dom";
import "./Header.css";

/**
 * Displays the header
 * @returns header component
 */

const Header = () => {
  console.log()
    return (
        <div className="nav-bar">
            <h1 className="title">My Home Finder</h1>
            {/* NOTE :style links as buttons not  button as links */}
            <div className="header_menus">
                <Link className={(window.location.pathname==="/")? "menu_item_selected" : "menu_items"} to="/">
                    Price Estimator
                </Link>
                <Link className={(window.location.pathname==="/NearbyAmenities")? "menu_item_selected" : "menu_items"} to="/NearbyAmenities">
                    Nearby Amenties
                </Link>
                <Link className={(window.location.pathname==="/PricingTrends")? "menu_item_selected" : "menu_items"} to="/PricingTrends">
                    Pricing Trends
                </Link>
            </div>
        </div>
    );
};

export default Header;
