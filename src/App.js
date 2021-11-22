import './App.css';
import React from 'react';
import Container from './components/Grid/Container';
import Row from './components/Grid/Row';
import Col from './components/Grid/Col';
import Ciao from './components/CiaoSection/Ciao';
import Calendar from './components/Calendar';

function App(){
  return <>
    <Container>
      <Row>
        <Col colNum={6}>
          <Ciao id={2} name="Elon"/>
        </Col>
        <Col colNum={6}>
        <Ciao id={3} name="Elen"/>
        </Col>
      </Row>
      <Row>
        <Col colNum={6}>
          <Ciao id={2} name="Elon"/>
        </Col>
        <Col colNum={6}>
        <Ciao id={3} name="Elen"/>
        </Col>
      </Row>
    </Container>
    <Calendar />
  </>;
}
export default App;

