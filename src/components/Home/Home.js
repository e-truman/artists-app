import { useHistory } from "react-router-dom"
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import React, { useState, useEffect } from "react"
import './Home.css';
import { Quotes } from "./Quotes";
import { WeeklyStreak } from "./WeeklyStreak";
import { ArtistDateStart } from "./ArtistDateStart";


export const Home = (props) => {
  const history = useHistory()



  return (
    <>

     <Quotes />
      <Card body>
        <CardTitle tag="h5">MORNING PAGES</CardTitle>
        <CardText>"Each morning, as we face the page, we meet ourselves. The pages give us a place to vent and a place to dream."</CardText>
        <Button onClick={() => history.push("/morning-pages")}>START</Button>
      </Card>
      <WeeklyStreak />
      <ArtistDateStart />
      
    </>
  )
}

