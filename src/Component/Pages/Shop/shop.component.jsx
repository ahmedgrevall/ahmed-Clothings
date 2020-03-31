import React from "react";
import Shop_data from "./shopData";
import PreviewCollection from "../../PreviewCollectionComponent/previewCollection.component";

class ShopPage extends React.Component {
  constructor() {
    super();
    this.state = { Shop_data };
  }
  render() {
    const { Shop_data } = this.state;
    return (
      <div className="shop-page">
        {Shop_data.map(({ id, ...otherCollectionsProps }) => (
          <PreviewCollection key={id} {...otherCollectionsProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
