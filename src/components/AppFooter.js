import React, { Component } from 'react';
import { Container } from 'reactstrap';
import styled from 'styled-components';

const StyledContainer = styled(Container)`
  text-align: center;
  padding: 10px;
  background: linear-gradient(
    70deg,
    rgba(74, 89, 167, 0.9),
    rgba(100, 89, 167, 0.95)
  );
  color: #fff;
`;

export default class AppFooter extends Component {
  render() {
    return (
      <StyledContainer fluid>
        <small>Copyright © 2018 meiji soumeikai. All Rights Reserved.</small>
      </StyledContainer>
    );
  }
}
