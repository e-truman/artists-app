// purpose of this page: diplay a list of thought distortions selected for this morning page id, and provide a form where user can reframe

import React, { useState, useEffect } from "react"
import { useHistory, Link } from "react-router-dom"

export const Entries = (props) => {
    console.log(props)
    const history = useHistory()
    const [entries, setEntries] = useState([]) //chosen distortions is an array of objects
    const [distortions, setDistortions] = useState([])


    useEffect(
        () => {
            return fetch(`http://localhost:8088/thoughtDistortions?_expand=morningPage&_expand=distortionDetail`)
                .then(response => response.json()) // make request and converts data back into a javascript object
                .then((data) => {
                    setDistortions(data)
                })
        },


        []
    )


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

    const EditEntry = (id) => {
        history.push(`/edit/${id}`);
    }

    const deleteTicket = (id) => {
        fetch(`http://localhost:8088/morningPages/${id}`, {
            method: "DELETE"
        })
            .then(() => {
                FetchEntries();
            })
    }


    const generateKey = (pre) => {
        return `${ pre }_${ new Date().getTime() }`;
    }

    return (
        <>
           
                {
                    entries.map((entry) => {
                        if (entry?.userId === parseInt(localStorage.getItem("artist_login"))) {
                            return <>
                            
                                <h2 key={entry.id}>{entry.title}</h2>
                                <p key={ generateKey(entry.morningPage)}>Morning Page: {entry.morningPage}</p>
                                <p key={ generateKey(entry.blurts)}>Blurts: {entry.blurt}</p>
                                {
                                    distortions.map((distortion) => {
                                        if (distortion?.morningPageId === entry.id) {
                                            return <p key={ generateKey(distortion.id)}><Link to={`/distortionDetail/${distortion?.distortionDetail?.id}`}>{distortion.distortionDetail.name}</Link></p>
    
                                        }
                                    })
                                }
                                
                               
                                <p key={ generateKey(entry.reframe)}>Reframe: {entry.reframe}</p>
                              

                                <button className="btn btn-primary" value={entry.id} onClick={() => {
                                    EditEntry(entry.id)}}>
                                    Edit
                                </button>
                                <button onClick={() => {
                                    deleteTicket(entry.id)
                                }}>Delete</button>

                            </>
                        }
                    })
                }

           
            <button className="btn btn-primary" onClick={() => history.push(`/`)}>
                Home
            </button>

        </>
    )
}