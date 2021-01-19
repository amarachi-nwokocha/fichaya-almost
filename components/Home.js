import {React  } from "react";
//import css
import '../index.css'
import 'bootstrap/dist/css/bootstrap.css';
import { Row, Col,  } from 'reactstrap';

import { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';

const Home = () => {
    return(
    <div className="container">
      
        <Btn />
       <Box />
        <Bet />
        </div>
        )
}

const Btn = () => {
  return(
    <button className='butt'>Request information</button>
  )
}
const Box = () => {
  return(
    <section className ='square'>
      <div className="cont">
     <Row class="align-items-start side">
    <Col sm={3} className="up side">
   REQUEST TYPE
    </Col>
    <Col sm={4} className="up">
      CUSTOMER NAME
    </Col>
      <Col sm={3} className="up">
      CLEANING DATE
    </Col>
    </Row>
    <Row>
       <Col sm={3} className ='down side'>POST-CON</Col>
       <Col sm={4} className ='down'>PETER ABU-EKPESHIE</Col>
       <Col sm={3} className ='down'>09.10.2019</Col>
     </Row> 
     <Row>
     <Col sm={3} className="up side">INVOICE STATUS</Col>
     <Col sm={4} className="up">REQUEST DATE</Col>
     <Col sm={4} className="up">REQUEST TIME</Col>
     <Col sm={3} className="down side orange">UNGENERATED</Col>
     <Col sm={4} className="down">06.10.2016</Col>
     <Col sm={3} className="down">8:00 AM</Col>
     </Row>
       <Row>
     <Col sm={3} className="up side">LOCATION</Col>
     <Col sm={4} className="up">HOUSE-TYPE</Col>
     </Row>
     <Row>
    < Col sm={3} className="down side ">8, YOVI STREET,<br/> IWAYA, ONIKE,YABA</Col>
     <Col sm={3} className="down ">5-BEDROOM DUPLEX</Col>
    </Row>
  </div>
    </section>
  )
}
/*
const Bet = () => {
  return (
    <div>
      <Button id="PopoverFocus main" type="button">
        ACTION
      </Button>
        <UncontrolledPopover trigger="focus" placement="bottom" target="PopoverFocus">
        <PopoverBody>
          <ul>
            <li className="list">Contact customer</li>
          <li className="list">Generate invoice</li>
          <li className="list">Reject request</li>
          </ul>
          </PopoverBody>
        </UncontrolledPopover>
</div>
  )
}
*/
  export default Home;