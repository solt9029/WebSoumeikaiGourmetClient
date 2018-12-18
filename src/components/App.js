import React, { Component } from 'react';
import AppNavbar from '../containers/AppNavbar';
import AppJumbotron from '../containers/AppJumbotron';
import ShopList from '../containers/ShopList';
import AppFooter from '../containers/AppFooter';
import qs from 'qs';

export default class App extends Component {
  componentWillMount() {
    const query = qs.parse(this.props.location.search, {
      ignoreQueryPrefix: true,
    });

    // check keyword property exists (https://chaika.hatenablog.com/entry/2017/04/14/083000)
    if ('keyword' in query) {
      this.props.update(query.keyword);
    } else {
      this.props.update('');
    }
  }

  render() {
    return (
      <div>
        <AppNavbar />
        {this.props.keyword === '' && <AppJumbotron />}
        <ShopList />
        <AppFooter />
      </div>
    );
  }
}
