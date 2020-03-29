import React from "react";
import "./menuItem.styles.scss";

const MenuItem = ({ title, subtitle, image, size }) => (
  <div
    style={{ backgroundImage: `url(${image})` }}
    className={`${size} menu-item`}
  >
    <div className="content">
      <h1 className="title">{title}</h1>
      <span className="subtitle">{subtitle}</span>
    </div>
  </div>
);

export default MenuItem;

//``
