import React from 'react';
import Container from '@material-ui/core/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/home.css';
import excelsiors from '../images/excelsiors.png';
import north_stars from '../images/northstars.png';

class Home extends React.Component {
  render() {
    return (
      <Container>
        <div className='background'>
          <Row>
            <Col></Col>
            <Col></Col>
            <Col>
              <div className='affiliates'>
                <h2>Assosiated Affiliates </h2>
                <img src={excelsiors}></img>
                <img src={north_stars}></img>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}
export default Home;
