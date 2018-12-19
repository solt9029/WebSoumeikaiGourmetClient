import React, { Component } from 'react';
import {
  Card,
  Col,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
} from 'reactstrap';
import { apiConfig } from '../config/api';
import styled from 'styled-components';
import '@fortawesome/fontawesome';
import '@fortawesome/fontawesome-free-solid';
import '@fortawesome/fontawesome-free-regular';
import '@fortawesome/fontawesome-free-brands';

const Group = styled.div`
  margin-bottom: 15px;
  margin-top: 15px;
  color: ${props => (props.gray ? '#888' : '#000')};
  font-size: 0.9em;
`;

const SearchSpan = styled.span`
  text-decoration: underline;
  :hover {
    cursor: pointer;
  }
`;

const StyledCardText = styled(CardText)`
  margin-bottom: 0px;
`;

const StyledCardTitle = styled(CardTitle)`
  font-weight: bold;
  font-size: 1.5em;
  margin-bottom: 0px;
  color: rgb(74, 89, 167);
`;

const StyledCard = styled(Card)`
  margin-top: 15px;
  margin-bottom: 15px;
  box-shadow: 1px 1px 2px;
  :hover {
    box-shadow: 3px 3px 6px;
  }
`;

const StyledCardImg = styled(CardImg)`
  width: 100%;
  height: 230px;
  object-fit: cover;
`;

const StyledCardBody = styled(CardBody)`
  padding: 0.75rem;
`;

export default class Shop extends Component {
  render() {
    return (
      <Col lg={4} md={6} sm={12} xs={12}>
        <StyledCard>
          <StyledCardImg
            src={`http://${apiConfig.host}:${apiConfig.port}/storage/${
              this.props.shop.img
            }`}
          />
          <StyledCardBody>
            <StyledCardTitle>{this.props.shop.name}</StyledCardTitle>
            <Group>
              <StyledCardText>
                {this.props.shop.owner_graduated_at}卒{' '}
                <SearchSpan
                  onClick={() => this.props.update(this.props.shop.owner_group)}
                >
                  {this.props.shop.owner_group}
                </SearchSpan>
              </StyledCardText>
              <StyledCardText>
                {this.props.shop.owner_name} (部活:{' '}
                <SearchSpan
                  onClick={() => this.props.update(this.props.shop.owner_club)}
                >
                  {this.props.shop.owner_club}
                </SearchSpan>
                所属)
              </StyledCardText>
            </Group>
            <Group gray>
              <StyledCardText>{this.props.shop.comment}</StyledCardText>
            </Group>
            <Group>
              <StyledCardText>
                <i className="fa fa-phone" /> {this.props.shop.phone_number}
              </StyledCardText>
              <StyledCardText>
                <i className="fa fa-map-marker" /> {this.props.shop.address}
              </StyledCardText>
            </Group>
            <Button
              outline
              color="warning"
              block
              onClick={() => {
                window.open(this.props.shop.link, '_blank');
              }}
            >
              食べログで確認
            </Button>
          </StyledCardBody>
        </StyledCard>
      </Col>
    );
  }
}
