import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import React, { useState, useEffect } from "react"
import './Home.css';


export const Quotes = (props) => {
  const [quote, setQuote] = useState({
    "quote": "It does not matter how slow you go so long as you do not stop.",
    "author": "Confucius"
  })
  const [number, setNumber] = useState(0)

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
      <Card body>
        <CardText>
          <p>"{quote.quote}"</p>
          <p>-{quote.author}</p>
        </CardText>
        <Button onClick={RandomNumber}>NEW QUOTE</Button>
      </Card>

    </>
  )
}