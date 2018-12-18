import React, { Component } from 'react';
import { Jumbotron, Container } from 'reactstrap';
import styled from 'styled-components';

const StyledJumbotron = styled(Jumbotron)`
  background: linear-gradient(45deg, rgba(50, 0, 0, 0.4), rgba(20, 0, 0, 0.5)),
    url('/images/header.jpg') center no-repeat;
  background-size: cover;
  text-align: center;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 4.5em;
  margin-top: 100px;
  margin-bottom: 50px;
  font-weight: bold;
`;

const Subtitle = styled.div`
  color: #fff;
  margin-top: 50px;
  margin-bottom: 40px;
  font-size: 1.1em;
`;

export default class AppJumbotron extends Component {
  render() {
    return (
      <StyledJumbotron>
        <Container>
          <Title>総明会グルメガイド</Title>
          <Subtitle>
            <p>一人でふらっと食べに行くときも、特別な日のお食事にも。</p>
            <p>せっかく行くなら総明会のお店。</p>
          </Subtitle>
        </Container>
      </StyledJumbotron>
    );
  }
}
