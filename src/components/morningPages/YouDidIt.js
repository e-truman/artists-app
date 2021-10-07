import React, { useState, useEffect } from "react"
import { useHistory, useParams, Link } from "react-router-dom"
import "./MorningPages.css";
import { summary } from 'date-streaks';


export const YouDidIt = (props) => {
    const { morningPageId } = useParams()
    const [distortions, setDistortions] = useState([]) //chosen distortions is an array of objects
    const [morningPage, setPage] = useState([])
    const [morningPages, setDates] = useState([])
    let streak = {}
    console.log(streak)



    let history = useHistory();
    const HomeButton = () => {
        history.push("/");
    }

    const EditEntry = () => {
        history.push(`/edit/${morningPageId}`);
    }


    const deleteTicket = (id) => {
        fetch(`http://localhost:8088/morningPages/${id}`, {
            method: "DELETE"
        })
            .then(() => {
                history.push(`/entries`)
            })
    }


    useEffect(
        () => {
            return fetch(`http://localhost:8088/thoughtDistortions?_expand=morningPage&_expand=distortionDetail&morningPageId=${morningPageId}`)
                .then(response => response.json()) // make request and converts data back into a javascript object
                .then((data) => {
                    setDistortions(data)
                })
        },


        []
    )


    useEffect(
        () => {
            return fetch(`http://localhost:8088/morningPages/${morningPageId}`)
                .then(response => response.json()) // make request and converts data back into a javascript object
                .then((data) => {
                    setPage(data) // I gain access to the morning page object by invoking this function

                })
        },

        []
    )

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


    const Streak = () => {

        const dates = []
        let streak = {}
        morningPages.map((mp) => {
            if (mp.userId === parseInt(localStorage.getItem("artist_login"))) {
                dates.push(mp.date)
            }
        })

        streak = summary({ dates })
        console.log(streak)
        return <>
            <p><span className="check-in-categories">CURRENT STREAK:</span> {streak?.currentStreak} {streak.currentStreak === 1 ? "DAY" : "DAYS"}  </p>
            <p><span className="check-in-categories">LONGEST STREAK:</span> {streak?.longestStreak} {streak.longestStreak === 1 ? "DAY" : "DAYS"}  </p>
        </>
    }

    return (
        <>

            <h2 className=" check-in-title">CHECK IN COMPLETE</h2>
            <div className="completed-checkin">

                <h4 className="mp-title" key={morningPage.id}> {morningPage.title}</h4>
                <p><span className="check-in-categories">MORNING PAGE: </span>  {morningPage.morningPage}</p>
                <p><span className="check-in-categories">BLURTS: </span>{ morningPage.blurt}</p>
                <p><span className="check-in-categories">THOUGHT DISTORTIONS PRESENT: </span></p>
                {
                    distortions.map((distortion) => {
                        return <p key={distortion.id}><Link className="distortions" to={`/distortionDetail/${distortion?.distortionDetail?.id}`}>{distortion.distortionDetail.name}</Link></p>
                    })
                }

                <p> <span className="check-in-categories">REFRAME: </span>  {morningPage.reframe}</p>
                {Streak()}
                <div className="buttons">
                    <button className="btn btn-secondary edit" value={morningPage.id} onClick={() => {
                        EditEntry(morningPage.id)
                    }}>EDIT</button>
                    <button className="btn btn-secondary delete" onClick={() => {
                        deleteTicket(morningPage.id)
                    }}>DELETE</button>
                </div>
            </div>
        </>


    )
}