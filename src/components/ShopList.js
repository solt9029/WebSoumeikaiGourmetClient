import React, { Component, Fragment } from 'react';
import Shop from '../containers/Shop';
import { Col, Row } from 'reactstrap';
import styled from 'styled-components';

const StyledRow = styled(Row)`
  margin-bottom: 100px;
`;

const Title = styled.h1`
  font-weight: bold;
`;

const groupBy = function(xs, key) {
  return xs.reduce(function(rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

export default class ShopList extends Component {
  render() {
    const sortedList = groupBy(this.props.list, 'area');

    console.log(sortedList);
    return (
      <Fragment>
        {Object.keys(sortedList).map(key => {
          return (
            <StyledRow>
              <Col xs={12}>
                <Title>{key}</Title>
              </Col>
              {sortedList[key].map(shop => {
                // console.log(sortedList[key]);
                return <Shop shop={shop} key={shop.id} />;
              })}
            </StyledRow>
          );
        })}
      </Fragment>
    );
  }
}
