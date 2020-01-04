import React from 'react';
import Container from '@material-ui/core/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/home.css';
import excelsiors from '../images/excelsiors.png';

class Home extends React.Component {
  render() {
    return (
      <Container>
        <div className='background'>
          <Row>
            <Col>
              <div className='affiliates'>
                <h2>Assosiated Affiliates </h2>
                <img src={excelsiors}></img>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}
export default Home;
