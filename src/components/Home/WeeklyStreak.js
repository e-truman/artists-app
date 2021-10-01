import React, { useState, useEffect } from "react"
import { trackRecord } from 'date-streaks';
import { Card } from 'reactstrap';
import "./Home.css";


export const WeeklyStreak = () => {
    const [morningPages, setDates] = useState([])
    let today = new Date();
    let day = parseInt(String(today.getDay()))
    console.log(day)

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

    const EndDate = () => {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0');
        let yyyy = today.getFullYear();
        today = `${mm}/${dd}/${yyyy}`;
        return today
    }


    const Record = () => {
        const dates = []
        console.log(dates)
        let endDate = EndDate()
        let length = 7
        morningPages.map((mp) => {
            if (mp.userId === parseInt(localStorage.getItem("artist_login")))
                dates.push(mp.date)
        })
        let recordDates = trackRecord({ dates, length, endDate })

        let object = trackRecord,
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
            sunday.push(recordDates[key]);
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

        return <>
            <Card body>
                <div className="streak-buttons">
                    <button className={sunday[0] === true ? "btn-fill" : "streak-button"}
                    >S</button>
                    <button className={monday[0] === true && day > 0 ? "btn-fill" : "streak-button"} >M</button>
                    <button className={tuesday[0] === true && day >= 2 ? "btn-fill" : "streak-button"} >T</button>
                    <button className={wednesday[0] === true && day >= 3 ? "btn-fill" : "streak-button"} >W</button>
                    <button className={thursday[0] === true && day >= 4 ? "btn-fill" : "streak-button"} >T</button>
                    <button className={friday[0] === true && day >= 5 ? "btn-fill" : "streak-button"}>F</button>
                    <button className={saturday[0] === true && day === 6 ? "btn-fill" : "streak-button"} >S</button>
                </div>
            </Card>


        </>


    }


    return (
        <>
            {Record()}
        </>


    )
}