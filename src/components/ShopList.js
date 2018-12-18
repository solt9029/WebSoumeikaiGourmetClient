import React, { Component } from 'react';
import Shop from '../containers/Shop';
import { Container, Row } from 'reactstrap';
import styled from 'styled-components';

const StyledContainer = styled(Container)`
  margin-top: 60px;
  margin-bottom: 60px;
`;

export default class ShopList extends Component {
  render() {
    return (
      <StyledContainer>
        <Row>
          {this.props.list.map(shop => {
            return <Shop shop={shop} key={shop.id} />;
          })}
        </Row>
      </StyledContainer>
    );
  }
}
