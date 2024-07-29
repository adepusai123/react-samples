import React from "react";
import ReactDOM from "react-dom/client";

/**
 * AppLayout
 *  Header
 *   Logo
 *   Menu
 *  Body
 *   Search
 *   Restuarant Card Container
 *     RestroCard
 *
 *  Footer
 *   CopyRight
 *   Links
 *   Contact Us
 *
 */
const Header = () => {
  return <div className="header">
    <div >
      <img  className="logo" src="https://marketplace.canva.com/EAFaFUz4aKo/2/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-JmYWTjUsE-Q.jpg" alt="logo" />
    </div>
    <div className="nav-list">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
};

const AppLayout = () => {
  return (
    <div className="layout">
      <Header />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
