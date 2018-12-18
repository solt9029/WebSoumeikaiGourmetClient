import React, { Component, Fragment } from 'react';
import Shop from '../containers/Shop';

export default class ShopList extends Component {
  render() {
    return (
      <Fragment>
        {this.props.list.map(shop => {
          return <Shop shop={shop} key={shop.id} />;
        })}
      </Fragment>
    );
  }
}
