import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import bugjuice from '../images/bugjuicelogo.png';
import '../styles/nav.css';

class Navigation extends React.Component {
  render() {
    return (
      <Navbar bg='primary'>
        <Navbar.Brand>
          <a href='#'>
            <img src={bugjuice} style={{ width: 150, height: 215 }} />
          </a>
        </Navbar.Brand>
        <Nav className='mr-auto'>
          <a className='header' href='#home'>
            Home
          </a>
          <a className='header' href='#home'>
            About Us
          </a>
          <a className='header' href='#home'>
            Where to Purchase
          </a>
          <a className='header' href='#home'>
            Kid Zone
          </a>
        </Nav>
      </Navbar>
    );
  }
}
export default Navigation;
