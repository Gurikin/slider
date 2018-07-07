import React, { Component } from 'react';



import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

const Repair = styled.div`
  font-size: 18px;
  font-weight: 300;  
  color: #464646;  
`

const WorkTime = styled.div`    
  font-size: 12px;
  color: rgb(42, 42, 42);
  line-height: 2;

  span {    
        display: block;
        color: #464646;
        font-size: 21px;
        font-weight: 700;
  }
`

const Calls = styled.div`    
    font-size: 12px;
    color: rgb(42, 42, 42);
    line-height: 2;

    span {    
        display: block;
        color: #464646;
        font-size: 21px;
        font-weight: 700;
    }
`

const CallButton = styled.button`
    border-radius: 22px;
    border: none;
    color: #ffffff;
    background-color: #3fc7db;
    width: 173px;
    height: 45px;
    font-size: 15.244px;
    font-weight: 400;
`

class Address extends React.Component {
    render() {
        return (
            <span> {this.props.addr} </span>
        )
    }
}

class TelNumber extends React.Component {
    render() {
        return (
            <span> {this.props.tel} </span>
        )
    }
}

class Menu extends React.Component {
    render() {
        return (
            <Row>
                <Col lg={3}>
                    <Repair>Ремонт айфонов в сервисном
                    центре и на выезде
                    </Repair>
                </Col>
                <Col lg={3} lgOffset={1}>
                    <WorkTime>
                        Пн-пт с 10 до 20, сб-вс с 11 до 18
                        <Address addr="Ленинская, 301" />
                    </WorkTime>
                </Col>
                <Col lg={3}>
                    <Calls>
                        Звонки принимаются 24 часа
                        <TelNumber tel="8 (846) 922 55 44" />
                    </Calls>
                </Col>
                <Col lg={2}>
                    <CallButton>Заказать звонок</CallButton>
                </Col>
            </Row>
        )
    }
}

export default Menu;