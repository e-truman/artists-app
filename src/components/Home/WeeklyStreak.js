// I ended up not using this module, but I learned a lot trying to get a weekly streak to show up so I didn't want to delete it. It's a mess
import React, { useState, useEffect } from "react"
import { useHistory, useParams, Link } from "react-router-dom"
import { summary, streakRanges, trackRecord } from 'date-streaks';
import { Card, CardTitle, CardText } from 'reactstrap';
import "./Home.css";


export const WeeklyStreak = (props) => {
    const [morningPages, setDates] = useState([])
    let history = useHistory();
    // let today = date()

    const EndDate = () => {
        // debugger
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0');
        let yyyy = today.getFullYear();
        today = `${mm}/${dd}/${yyyy}`;
        return today
    }

    // const Length = () => {
    //     let length = 7
    //     let day = new Date()
    //     let dayOfWeek = String(day.getDay())
    //     console.log(dayOfWeek)
    //     newDates = dates.slice(-dayOfWeek,7)

    // }

    // Length()

    const Record = () => {
        const dates = []
        const newDates = []
        let day = new Date()
        let dayOfWeek = String(day.getDay())
        console.log(dayOfWeek)
        dates.slice(-dayOfWeek, 7)
        console.log(dates)
        let endDate = EndDate()
        let length = 7
        morningPages.map((mp) => {
            dates.push(mp.date)
            // debugger
        })
        let recordDates = trackRecord({ dates, length, endDate })

        var object = { 456: "Hello", 512: "Bye" },
            key;

        const sunday = []
        const monday = []
        const tuesday = []
        const wednesday = []
        const thursday = []
        const friday = []
        const saturday = []

        for (key in recordDates) {
            if (!key.startsWith('Sun')) continue;
            sunday.push(key.slice(0, 3), recordDates[key]);
        }

        for (key in recordDates) {
            if (!key.startsWith('Mon')) continue;
            monday.push(recordDates[key]);
        }

        for (key in recordDates) {
            if (!key.startsWith('Tue')) continue;
            tuesday.push(recordDates[key]);
        }


        for (key in recordDates) {
            if (!key.startsWith('Wed')) continue;
            wednesday.push(recordDates[key]);
        }

        for (key in recordDates) {
            if (!key.startsWith('Th')) continue;
            thursday.push(recordDates[key]);
        }

        for (key in recordDates) {
            if (!key.startsWith('F')) continue;
            friday.push(recordDates[key]);
        }

        for (key in recordDates) {
            if (!key.startsWith('Sat')) continue;
            saturday.push(recordDates[key]);
        }


        console.log(saturday)


        return <>
            <Card body>
                {/* <CardTitle tag="h5">WEEKLY STREAK</CardTitle> */}
                <div className="streak-buttons">
                    <button className={sunday[0] === true  ? "btn-fill" : "streak-button"}
                    >S</button>
                    <button className={monday[0] === true  ? "btn-fill" : "streak-button"} >M</button>{''}
                    <button className={tuesday[0] === true  ? "btn-fill" : "streak-button"} >T</button>{''}
                    <button className={wednesday[0] === true  ? "btn-fill" : "streak-button"} >W</button>{''}
                    <button className={thursday[0] === true  ? "btn-fill" : "streak-button"} >T</button>{''}
                    <button className={friday[0] === true  ? "btn-fill" : "streak-button"}>F</button>{''}
                    <button className={saturday[0] === true ? "btn-fill" : "streak-button"} >S</button>
                </div>

            </Card>


        </>


    }





    // Need to find if the day of the week is true, and if it was this week


    // recordDates.map((rd)=> {
    //     newDates.push(rd)
    //     console.log(newDates)



    // let date = () => {
    //     // debugger
    //     let today = new Date();
    //     let day = String(today.getDay())
    //     let dd = String(today.getDate()).padStart(2, '0');
    //     let mm = String(today.getMonth() + 1).padStart(2, '0'); 
    //     let yyyy = today.getFullYear();

    //     console.log(day)
    //     if (day === "0") {
    //         day = "Sunday"
    //     } else if (day === "1") {
    //         day = "Monday"
    //     } else if (day === "2") {
    //         day = "Tuesday"
    //     } else if (day === "3") {
    //         day = "Wednesday"
    //     } else if (day === "4") {
    //         day = "Thursday"
    //     } else if (day === "5") {
    //         day = "Friday"
    //     } else {
    //         day = "Saturday"
    //     }

    //     today = `${day} ${mm}/${dd}/${yyyy}`;
    //     return today
    // }

    // console.log(date())

    // const results = [];

    // const toSearch = "Wed";

    // for(var i=0; i<record.length; i++) {
    //   for(key in record[i]) {
    //     if(record[i][key].indexOf(toSearch)!=-1) {
    //       results.push(record[i]);
    //     }
    //   }
    // }

    // 

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


    return (
        <>


            {Record()}





        </>


    )
}