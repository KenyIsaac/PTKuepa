import React from 'react';
import ReactDOM from 'react-dom';

import { Nav, Row, Col } from 'rsuite';



const styles = { width: 100 };

const CustomNav = ({ active, onSelect, ...props }) => {
  return (
    <Nav {...props} vertical activeKey={active} onSelect={onSelect} style={styles}>
      <Nav.Item eventKey="home" >
        Home
      </Nav.Item>
      <Nav.Item eventKey="news">News</Nav.Item>
      <Nav.Item eventKey="solutions">Solutions</Nav.Item>
      <Nav.Item eventKey="products">Products</Nav.Item>
      <Nav.Item eventKey="about">About</Nav.Item>
    </Nav>
  );
};



//Navbar todavía sin implementar

export default Nav;