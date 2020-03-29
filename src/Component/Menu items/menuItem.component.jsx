import React from "react";
import "./menuItem.styles.scss";
import { withRouter } from "react-router-dom";

const MenuItem = ({
  title,
  subtitle,
  history,
  image,
  size,
  linkUrl,
  match
}) => (
  <div
    style={{ backgroundImage: `url(${image})` }}
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">Shop Now</span>
    </div>
  </div>
);

export default withRouter(MenuItem);

//``
