import { useHistory } from "react-router-dom"
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import './Home.css';


export const Home = (props) => {
  const history = useHistory()

  return (
    <>
      <h1 className="title">The Artist's App</h1>


      <Row>

        <Col sm="6">
          <Card body>
            <CardTitle tag="h5">MORNING PAGES</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            <Button onClick={() => history.push("/morning-pages")}>START</Button>
          </Card>
        </Col>


        {/* <Col sm="6">
          <Card body>
            <CardTitle tag="h5">MORNING PAGES</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            <Button onClick={() => history.push("/morning-pages")}>START</Button>
          </Card>
        </Col> */}


      </Row>

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






