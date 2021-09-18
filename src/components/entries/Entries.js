// purpose of this page: diplay a list of thought distortions selected for this morning page id, and provide a form where user can reframe

import React, { useState, useEffect } from "react"
import { useHistory, useParams, Link } from "react-router-dom"

export const Entries = (props) => {
    console.log(props)
    const history = useHistory()
    const { morningPageId } = useParams()
    const { distortionDetailId } = useParams()
    const [entries, setEntries] = useState([]) //chosen distortions is an array of objects
    // const [fullDistortionArray, setArray] = useState([])



    const FetchEntries =
        () => {
            return fetch(`http://localhost:8088/morningPages`)
                .then(response => response.json()) // make request and converts data back into a javascript object
                .then((data) => {
                    setEntries(data) // I gain access to the fullDistortionArray by invoking this function

                })
        }



    useEffect(
        () => {
            FetchEntries()
        },
        []
    )


    const deleteTicket = (id) => {
        fetch(`http://localhost:8088/morningPages/${id}`, {
            method: "DELETE"
        })
            .then(() => {
                FetchEntries();
            })
    }

    return (
        <>
            <div>
                {
                    entries.map((entry) => {
                        // debugger

                        if (entry?.userId === parseInt(localStorage.getItem("artist_login"))) {
                            return <>
                                <h2>{entry.title}</h2>
                                <p>{entry.morningPage}</p>
                                <p>{entry.blurt}</p>
                                <p>{entry.reframe}</p>
                                <button onClick={() => {
                                    deleteTicket(entry.id)
                                }}>Delete</button>
                            </>
                        }
                    })
                }

            </div>
            <button className="btn btn-primary" onClick={() => history.goBack()}>
                Back
            </button>

        </>
    )
}