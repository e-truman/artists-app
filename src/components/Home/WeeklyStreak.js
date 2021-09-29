import React, { useState, useEffect } from "react"
import { useHistory, useParams, Link } from "react-router-dom"
import { summary, streakRanges, trackRecord } from 'date-streaks';
import { Card, CardTitle, CardText } from 'reactstrap';
import "./Home.css";


export const WeeklyStreak = (props) => {
    const [morningPages, setDates] = useState([])
    const dates = [];
    let streak = summary({ dates })
    let length = 7
    let endDate = Date()
    let record = trackRecord({dates})
    let history = useHistory();
    // let today = date()

    let date = () => {
        // debugger
        let today = new Date();
        let day = String(today.getDay())
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); 
        let yyyy = today.getFullYear();

        console.log(day)
        if (day === "0") {
            day = "Sunday"
        } else if (day === "1") {
            day = "Monday"
        } else if (day === "2") {
            day = "Tuesday"
        } else if (day === "3") {
            day = "Wednesday"
        } else if (day === "4") {
            day = "Thursday"
        } else if (day === "5") {
            day = "Friday"
        } else {
            day = "Saturday"
        }

        today = `${day} ${mm}/${dd}/${yyyy}`;
        return today
    }

console.log(date())

// const results = [];

// const toSearch = "Wed";

// for(var i=0; i<record.length; i++) {
//   for(key in record[i]) {
//     if(record[i][key].indexOf(toSearch)!=-1) {
//       results.push(record[i]);
//     }
//   }
// }

// console.log(results)

// if (endDate.startsWith("Sun")) {
//     dates.length = 1
   
// } else if (endDate.startsWith("Mon")) {
//     dates.length = 2
// } else if (endDate.startsWith("Tue")) {
//     dates.length = 3
// } else if (endDate.startsWith("Wed")) {
//     dates.length = 4
// } else if (endDate.startsWith("Th")) {
//   dates.length = 5
// } else if (endDate.startsWith("F")) {
//     dates.length = 6
// }
// else {
//     dates.length = 7
// }

    
   useEffect(
        () => {
            return fetch(`http://localhost:8088/morningPages`)
                .then(response => response.json()) // make request and converts data back into a javascript object
                .then((data) => {
                    setDates(data)

                })
        },

        []
    )
    // console.log(endDate)
    console.log(dates)
    console.log(record)
// console.log(streak)


morningPages.map((morningPage)=> {
        if (morningPage.userId === parseInt(localStorage.getItem("artist_login"))){
           dates.push(morningPage.date)
        }
    })


    return (
        <>
        
            


        <Card body>
        {/* <CardTitle tag="h5">WEEKLY STREAK</CardTitle> */}
        <div className="streak-buttons">
        <button className="streak-button btn-outline" >S</button>
        <button className="streak-button btn-outline" >M</button>{''}
        <button className="streak-button btn-outline" >T</button>{''}
        <button className="streak-button btn-outline" >W</button>{''}
        <button className="streak-button btn-outline" >T</button>{''}
        <button className="streak-button btn-outline">F</button>{''}
        <button className="streak-button btn-outline" >S</button>{''}
        </div>
        
      </Card>




           
        </>


    )
}