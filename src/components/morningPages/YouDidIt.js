import React, { useState, useEffect } from "react"
import { useHistory, useParams, Link } from "react-router-dom"
import "./MorningPages.css";
import { summary } from 'date-streaks';


// Morning Page complete. WHat would you like to do next?
//Daily streak
//home button
//show options of what to do next- tasks, see 

export const YouDidIt = (props) => {
    const { morningPageId } = useParams()
    const [distortions, setDistortions] = useState([]) //chosen distortions is an array of objects
    const [morningPage, setPage] = useState([])
    const [entries, setEntries] = useState([])
    const [morningPages, setDates] = useState([])
    const dates = []
    let streak = summary({ dates })
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
                // FetchMorningPages();
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
                    setDates(data) // I gain access to the morning page object by invoking this function

                })
        },

        []
    )



    for (const morningPage of morningPages) {
        dates.push(morningPage.date)

    }



    return (
        <>
            <h2 className="title">CHECK IN COMPLETE</h2>

            <form className="form completed-checkin">

                <h4 className="mp-title" key={morningPage.id}>{morningPage.title}</h4>
                <p key={morningPage.morningPage}>MORNING PAGE: {morningPage.morningPage}</p>
                <p key={morningPage.blurts}>BLURTS: {morningPage.blurt}</p>
                <p>THOUGHT DISTORTIONS PRESENT: </p>
                {
                    distortions.map((distortion) => {
                        // if (distortion?.morningPageId === entry.id) {
                        return <p key={distortion.id}><Link className="distortions" to={`/distortionDetail/${distortion?.distortionDetail?.id}`}>{distortion.distortionDetail.name}</Link></p>


                    })
                }


                <p key={morningPage.reframe}>REFRAME: {morningPage.reframe}</p>

                <p>CURRENT STREAK: {streak.currentStreak}  </p>
                <p>LONGEST STREAK: {streak.longestStreak}  </p>
                <div className="buttons">
                    <button className="btn btn-secondary edit" value={morningPage.id} onClick={() => {
                        EditEntry(morningPage.id)
                    }}>

                        EDIT
                    </button>
                    {/* <p> */}
                    <button className="btn btn-secondary delete" onClick={() => {
                        deleteTicket(morningPage.id)
                    }}>DELETE</button>
                    {/* </p> */}
                    {/* <button className="btn btn-secondary home" onClick={HomeButton}>HOME</button> */}
                </div>
            </form>
        </>


    )
}