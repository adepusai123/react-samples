import React from "react";
import ReactDOM from "react-dom/client";
import { resList } from "./data";

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

const ResCard = (props) => {
    const { resData} = props;
    const cardInfoStyles = {
        'font-size': '12px'
    }
  return (
    <div className="res-card" key={resData?.info?.id}>
      <div>
        <img
          src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData?.info?.cloudinaryImageId}
          alt={resData?.info?.name}
        />
      </div>
      <div style={{'margin':'10px'}}>
        <span className="info">{resData?.info?.name}</span>
        <div style={cardInfoStyles}>
        <span className="d-block">{resData?.info?.cuisines.join(',')}</span>
        <span className="d-block">{resData?.info?.costForTwo}</span>
        <span className="d-block">{resData?.info?.avgRatingString} stars</span>
        <span className="d-block">{resData?.info?.locality}, {resData?.info?.areaName}</span>
        </div>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="main-container">
      <div className="search">Search</div>
      <div className="res-container">
        {
            resList.map((res)=> <ResCard resData={res}/>)
        }
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
