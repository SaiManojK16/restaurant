import React from "react";
import "../styles/Menu.css"; // Import styles
import menuBanner from "/Users/saimanojk/Desktop/Rest/restaurants_website/frontend/src/menu-banner.jpg"; // Import image

const menuData = [
    {
        category: "Appetizers",
        items: [
            { name: "Veg Pakora", price: "$4.95", description: "Fresh vegetables dipped in spiced batter fried to golden perfection." },
            { name: "Veg Spring Roll", price: "$4.95", description: "Served with noodles, carrot, spinach wrapped in wheat and corn flour mixed wrap deep fried to golden perfection." },
            { name: "Veg Bullet", price: "$4.95", description: "Fresh vegetables mix with mashed potato fried to golden perfection." },
            { name: "Veg Samosa", price: "$4.95", description: "Crisp turnover and deeply fried with mildly special potatoes and peas." }
        ]
    },
    {
        category: "Special Street Style Appetizers",
        items: [
            { name: "Paani Puri 🌶️", price: "$5.95", description: "Wheat flour stuffed round pieces served with spicy water." },
            { name: "Bhel Puri", price: "$4.95", description: "Pulses flour, peas, corn, flake, peanut, masoor dal, chana dal, mixed with sweet and spicy sauce." },
            { name: "Chat Papdi", price: "$5.95", description: "Spiced combination of crispy chopped potatoes and chickpeas." },
            { name: "Chili Pakora 🌶️", price: "$4.95", description: "Fresh green chili dipped in spiced batter fried to golden perfection. Hot and spicy." }
        ]
    },
    {
        category: "Soups",
        items: [
            { name: "Lentil Soup", price: "$3.95", description: "Made with lentils, tomatoes and a touch of special spices and herbs." },
            { name: "Shrimp Soup", price: "$4.95", description: "Shrimp blended with lentils and Indian spices." },
            { name: "Coconut Soup", price: "$3.95", description: "An exotic soup with an exquisite flavor." },
            { name: "Chicken Soup", price: "$4.95", description: "Chunks of chicken blended with lentils and Indian spices." }
        ]
    }
];

const Menu = () => {
    return (
        <div className="menu-container">
            {/* Banner Section with Inline Style Fix */}
            <div className="menu-banner" style={{ backgroundImage: `url(${menuBanner})` }}>
                <h1>OUR MENU</h1>
            </div>

            {/* Menu Items */}
            <div className="menu-content">
                {menuData.map((section, index) => (
                    <div key={index} className="menu-section">
                        <h2>{section.category}</h2>
                        {section.items.map((item, idx) => (
                            <div key={idx} className="menu-item">
                                <div className="menu-text">
                                    <h3>{item.name}</h3>
                                    <p>{item.description}</p>
                                </div>
                                <span className="menu-price">{item.price}</span>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Menu;