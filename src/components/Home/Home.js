import { useHistory } from "react-router-dom"
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import './Home.css';


export const Home = (props) => {
  const history = useHistory()

  return (
    <>
      


      {/* <Row>

        <Col sm="6"> */}
          <Card body>
            <CardTitle tag="h5">MORNING PAGES</CardTitle>
            <CardText>"Each morning, as we face the page, we meet ourselves. The pages give us a place to vent and a place to dream."</CardText>
            <Button onClick={() => history.push("/morning-pages")}>START</Button>
          </Card>
        {/* </Col> */}


        {/* <Col sm="6">
          <Card body>
            <CardTitle tag="h5">MORNING PAGES</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            <Button onClick={() => history.push("/morning-pages")}>START</Button>
          </Card>
        </Col> */}


      {/* </Row> */}

    </>
  )
}




// card-title
// card-text












  // export default Home;




  // <Row>

  // <Col sm="6">
  // <Card body> 
  // <CardTitle tag="h5">MORNING PAGES</CardTitle>
  // <CardText>With supporting text below as a natural lead-in to additional content.</CardText> */}
  // <Button onClick={() => history.push("/morning-pages")}>START</Button>
  // </Card>
  // </Col>   


  // <Col sm="6">
  // <Card body>
  // <CardTitle tag="h5">MORNING PAGES</CardTitle>
  // <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
  // <Button onClick={() => history.push("/morning-pages")}>START</Button>
  // </Card>
  // </Col>


  // </Row>






