import { useHistory } from "react-router-dom"
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import React, { useState, useEffect } from "react"
import './Home.css';


export const Home = (props) => {
  const history = useHistory()
  const [quotes, setQuotes] = useState([])
  const [quote, setQuote] = useState({
    "quote": "It does not matter how slow you go so long as you do not stop.",
    "author": "Confucius"
  })
  const [number, setNumber] = useState(1)

  useEffect(
    () => {
      return fetch(`http://localhost:8088/quotes`)
        .then(response => response.json()) // make request and converts data back into a javascript object
        .then((data) => {
          let num = Math.ceil(Math.random() * (data.length))
          console.log(data)
          setNumber(num)
        })
    },

    [quote]
  )


  useEffect(
    () => {

    },

    [number]
  )



  const RandomNumber = () => {
    if (number !== 0) {
      return fetch(`http://localhost:8088/quotes/${number}`)

        .then(response => response.json()) // make request and converts data back into a javascript object
        .then((data) => {
          setQuote(data)
        })
    }
  }


  return (
    <>

      {/* <Row> */}


      {/* <Col sm="6"> */}
      <Card body>
        {/* <CardTitle tag="h5">QUOTES</CardTitle> */}
        <CardText>
          <p>"{quote.quote}"</p>
          <p>-{quote.author}</p>
        </CardText>
        <Button onClick={RandomNumber}>NEW QUOTE</Button>
      </Card>
      {/* </Col> */}

      {/* <Col sm="6">  */}
      <Card body>
        <CardTitle tag="h5">MORNING PAGES</CardTitle>
        <CardText>"Each morning, as we face the page, we meet ourselves. The pages give us a place to vent and a place to dream."</CardText>
        <Button onClick={() => history.push("/morning-pages")}>START</Button>
      </Card>
      {/* </Col> */}

      {/* </Row> */}

    </>
  )
}

