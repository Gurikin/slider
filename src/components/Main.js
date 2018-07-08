import React, { Component } from 'react';


import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

import Slider from './slider'

const Repair = styled.div`    
  font-size: 40px;
  color: #ffffff;
  font-weight: 700;
  line-height: 50px;   

  span {
      display: block;
      font-size: 24px;
      line-height: 30px; 
  }
`

const LightText = styled.div`
  font-size: 18px;
  color: #ffffff;
  line-height: 28px;
  margin-top: 54px;
`

const CallButton = styled.button`
  border: none;
  border-radius: 32px;
  margin-top: 32px;
  background-color: #e9a052;
  width: 245px;
  height: 64px;
  font-size: 18px;
  color: #ffffff;
  line-height: 21px;
  font-weight: 700;
`

class Main extends React.Component {
    render() {
        return (
            <Row>
                <Col lg={5}>
                    <Repair>Качественный ремонт
                        <span>iphone за 35 минут и гарантия 1 год</span>
                    </Repair>
                    <LightText>Оставьте заявку на бесплатную диагностику без очереди,
                        и получите защитное стекло, стоимостью 1000 рублей,
                        с установкой в подарок!
                    </LightText>
                    <CallButton>Оставить заявку</CallButton>
                </Col>
                <Col lg={6} lgOffset={1}>
                    <Slider />
                </Col>
            </Row>
        )
    }
}

export default Main;