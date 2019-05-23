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
    this.props.update(this.props.keyword, e.currentTarget.textContent);
    console.log(text);
  };

  componentWillMount() {
    const query = qs.parse(this.props.location.search, {
      ignoreQueryPrefix: true,
    });

    const keyword = 'keyword' in query ? query.keyword : '';
    const area = 'area' in query ? query.area : '全ての地域';
    this.props.update(keyword, area);

    this.props.fetchAllList();
  }

  render() {
    const sortedList = groupBy(this.props.allList, 'area');

    return (
      <div>
        <AppNavbar />
        {this.props.keyword === '' && this.props.area === '全ての地域' && (
          <AppJumbotron />
        )}
        <StyledContainer>
          {this.props.loading ? (
            '読み込み中です'
          ) : this.props.error ? (
            'エラーが発生しました'
          ) : (
            <Fragment>
              <StyledDropdown isOpen={this.state.isOpen} toggle={this.toggle}>
                <DropdownToggle caret>地域：{this.props.area}</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem onClick={this.onClick}>全ての地域</DropdownItem>
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
