import { useHistory } from "react-router-dom"
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import './Home.css';



export const ArtistDateStart = (props) => {
  const history = useHistory()

 
  return (
    <>

      <Card body>
        <CardTitle tag="h5">Artist Dates</CardTitle>
        <CardText>“Serious art is born from serious play.”</CardText>
        <Button onClick={() => history.push("/artist-dates")}>START</Button>
      </Card>
      
    </>
  )
}