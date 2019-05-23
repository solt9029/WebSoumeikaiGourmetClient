import React, { Component, Fragment } from 'react';
import AppNavbar from '../containers/AppNavbar';
import AppJumbotron from '../containers/AppJumbotron';
import ShopList from '../containers/ShopList';
import AppFooter from '../containers/AppFooter';
import qs from 'qs';
import {
  Container,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import styled from 'styled-components';

const StyledContainer = styled(Container)`
  margin-top: 40px;
  margin-bottom: 40px;
`;

const StyledDropdown = styled(Dropdown)`
  margin-bottom: 40px;
`;

const groupBy = function(xs, key) {
  return xs.reduce(function(rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

export default class App extends Component {
  state = {
    isOpen: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  };

  onClick = e => {
    let text = e.currentTarget.textContent;
    console.log(text);
  };

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
    const sortedList = groupBy(this.props.list, 'area');

    return (
      <div>
        <AppNavbar />
        {this.props.keyword === '' && <AppJumbotron />}
        <StyledContainer>
          {this.props.loading ? (
            '読み込み中です'
          ) : (
            <Fragment>
              <StyledDropdown isOpen={this.state.isOpen} toggle={this.toggle}>
                <DropdownToggle caret>地域を選択してください</DropdownToggle>
                <DropdownMenu>
                  {Object.keys(sortedList).map((key, index) => {
                    return (
                      <DropdownItem onClick={this.onClick} key={index}>
                        {key}
                      </DropdownItem>
                    );
                  })}
                </DropdownMenu>
              </StyledDropdown>
              <ShopList />
            </Fragment>
          )}
        </StyledContainer>

        <AppFooter />
      </div>
    );
  }
}
