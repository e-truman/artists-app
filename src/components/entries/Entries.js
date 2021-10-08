import React, { useState, useEffect } from "react"
import { useHistory, Link } from "react-router-dom"
import './Entries.css';
import { Button } from 'reactstrap';

export const Entries = (props) => {
    console.log(props)
    const history = useHistory()
    const [entries, setEntries] = useState([])
    const [distortions, setDistortions] = useState([])


    useEffect(
        () => {
            return fetch(`https://artists-api-f85cm.ondigitalocean.app/thoughtDistortions?_expand=morningPage&_expand=distortionDetail`)
                .then(response => response.json()) // make request and converts data back into a javascript object
                .then((data) => {
                    setDistortions(data)
                })
        },
        []
    )

    const FetchEntries =
        () => {
            return fetch(`https://artists-api-f85cm.ondigitalocean.app/morningPages`)
                .then(response => response.json()) // make request and converts data back into a javascript object
                .then((data) => {
                    setEntries(data)
                })
        }


    useEffect(
        () => {
            FetchEntries()
        },
        []
    )

    const editEntry = (id) => {
        history.push(`/edit/${id}`);
    }

    const deleteEntry = (id) => {
        fetch(`https://artists-api-f85cm.ondigitalocean.app/morningPages/${id}`, {
            method: "DELETE"
        })
            .then(() => {
                FetchEntries()
            }
            )
    }


    return (
        <>

            <h2 className="title title-out-of-form">PAST ENTRIES</h2>
            <div id="entry">

                {
                    entries.map((entry) => {
                        if (entry?.userId === parseInt(localStorage.getItem("artist_login"))) {
                            return <>

                                <p className="space-between">
                                    <h4 className="mp-title">{entry.title}</h4>
                                    <p>
                                        <p> <span className="check-in-categories">MORNING PAGE: </span> {entry.morningPage}</p>
                                        <p> <span className="check-in-categories">BLURT:</span> {entry.blurt}</p>
                                        <p className="check-in-categories">THOUGHT DISTORTIONS PRESENT:</p>
                                        {
                                            distortions.map((distortion) => {
                                                if (distortion?.morningPageId === entry.id) {
                                                    return <p key={entry.id}><Link className="distortions" to={`/distortionDetail/${distortion?.distortionDetail?.id}`}>{distortion.distortionDetail.name}</Link></p>
                                                }
                                            })
                                        }
                                        <p> <span className="check-in-categories">REFRAME: </span>{entry.reframe}</p>
                                        <p className="check-in-categories">Date: {entry.date}</p>
                                    </p>
                                    <div className="buttons">
                                        <Button value={entry.id} onClick={() => { editEntry(entry.id) }}>EDIT</Button>
                                        <Button className="btn btn-secondary delete" value={entry.id} onClick={() => { deleteEntry(entry.id) }}>DELETE</Button>

                                    </div>
                                </p>
                            </>


                        }
                    }
                    )
                }

                <button className="btn btn-secondary" onClick={() => history.push("/")}>
                    HOME</button>
            </div>

        </>
    )
}

