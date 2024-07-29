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
  return (
    <div className="header">
      <div>
        <img
          className="logo"
          src="https://marketplace.canva.com/EAFaFUz4aKo/2/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-JmYWTjUsE-Q.jpg"
          alt="logo"
        />
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
  );
};

const ResCard = () => {
  return (
    <div className="res-card">
      <div>
        <img
          src="https://www.fabhotels.com/blog/wp-content/uploads/2018/08/Resize_290818_ABs.jpg"
          alt="resturant"
        />
      </div>
      <div className="info">Pandu Restuarant</div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="main-container">
      <div className="search">Search</div>
      <div className="res-container">
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <h6>Copy Right text</h6>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="layout">
      <Header />
      <Body />
      {Footer()}
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
