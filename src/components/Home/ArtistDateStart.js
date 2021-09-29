import { useHistory } from "react-router-dom"
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import React, { useState, useEffect } from "react"
import './Home.css';
import { Quotes } from "./Quotes";
import { WeeklyStreak } from "./WeeklyStreak";


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