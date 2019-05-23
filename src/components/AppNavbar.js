// apply color to buttons with reactstrap
// （https://reactstrap.github.io/components/buttons/）

import React, { Component } from 'react';
import { Navbar, NavbarBrand, Container, Form } from 'reactstrap';
import { DebounceInput } from 'react-debounce-input';
import styled from 'styled-components';

const StyledNavbar = styled(Navbar)`
  background: linear-gradient(
    70deg,
    rgba(74, 89, 167, 0.9),
    rgba(100, 89, 167, 0.95)
  );
  color: #fff;
`;

const StyledNavbarBrand = styled(NavbarBrand)`
  font-weight: bold;
  font-size: 1.5em;
  :hover {
    cursor: pointer;
  }
`;

export default class AppNavbar extends Component {
  render() {
    return (
      <StyledNavbar>
        <Container>
          <StyledNavbarBrand
            onClick={() => {
              this.props.update('', this.props.area);
            }}
          >
            総明会グルメガイド
          </StyledNavbarBrand>
          <Form inline onSubmit={e => e.preventDefault()}>
            <DebounceInput
              onChange={e => this.props.update(e.target.value, this.props.area)}
              value={this.props.keyword}
              debounceTimeout={500}
              type="text"
              placeholder="検索"
              className="form-control"
            />
          </Form>
        </Container>
      </StyledNavbar>
    );
  }
}
