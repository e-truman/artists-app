import { useHistory } from "react-router-dom"
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

export const Home = (props) => {
    const history = useHistory()
    
    return (
        <> 

            <h1>The Artist's App</h1>




            <Row>

            {/* <Col sm="6">
        <Card body> */}
          {/* <CardTitle tag="h5">MORNING PAGES</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText> */}
          {/* <Button onClick={() => history.push("/morning-pages")}>START</Button>
        </Card>
      </Col>   */}


      <Col sm="6">
        <Card body>
          <CardTitle tag="h5">MORNING PAGES</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button onClick={() => history.push("/morning-pages")}>START</Button>
        </Card>
      </Col>


      {/* <Col sm="6">
        <Card body>
          <CardTitle tag="h5">TASKS</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>START</Button>
        </Card>
      </Col>
   
      <Col sm="6">
        <Card body>
          <CardTitle tag="h5">ARTIST DATES</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button onClick={() => history.push("/morning-pages")}>START</Button>
        </Card>
      </Col>


      <Col sm="6">
        <Card body>
          <CardTitle tag="h5">TASKS</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>START</Button>
        </Card>
      </Col> */}

    </Row>
    
  



           
        </>
    )
}













    


export default Home;