import React from 'react';
import Container from '@material-ui/core/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import '../styles/home.css';
import excelsiors from '../images/excelsiors.png';
import north_stars from '../images/northstars.png';
import bjuice1 from '../images/bjuice1.png';

class Home extends React.Component {
  render() {
    return (
      <Container>
        <div className='background'>
          <Row>
            <Col>
              <h2>Add Font Awesome Here</h2>
              <Carousel>
                <Carousel.Item>
                  <img
                    className='d-block w-100'
                    src={bjuice1}
                    alt='First slide'
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className='d-block w-100'
                    src={bjuice1}
                    alt='Second slide'
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className='d-block w-100'
                    src={bjuice1}
                    alt='Third slide'
                  />
                </Carousel.Item>
              </Carousel>
            </Col>
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
