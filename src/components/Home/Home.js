import { useHistory } from "react-router-dom"
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import React, { useState, useEffect } from "react"
import './Home.css';
import { Quotes } from "./Quotes";
import { WeeklyStreak } from "./WeeklyStreak";
import { ArtistDateStart } from "./ArtistDateStart";
import { MorningPageStart } from "./MorningPageStart";


export const Home = (props) => {
  const history = useHistory()



  return (
    <>

      <Quotes />
      <MorningPageStart />
      <ArtistDateStart />
   <WeeklyStreak />


    </>
  )
}

