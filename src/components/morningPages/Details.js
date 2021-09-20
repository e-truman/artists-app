// purpose of this page: diplay a list of thought distortions selected for this morning page id, and provide a form where user can reframe

import React, { useState, useEffect } from "react"
import { useHistory, useParams, Link } from "react-router-dom"

export const Details = (props) => {
    console.log(props)
    const history = useHistory()
    const { morningPageId } = useParams()
    const { distortionDetailId } = useParams()
    const [details, setDetails] = useState([]) //chosen distortions is an array of objects
    // const [fullDistortionArray, setArray] = useState([])

    useEffect(
        () => {
            return fetch(`http://localhost:8088/distortionDetails`)
                .then(response => response.json()) // make request and converts data back into a javascript object
                .then((data) => {
                    setDetails(data) // I gain access to the fullDistortionArray by invoking this function

                })
        },

        []
    )

    return (
        <>
            <div>
                {
                    details.map((detail) => {
                        if (detail?.id === parseInt(distortionDetailId)) {
                            return <>
                                <h2>{detail.name}</h2>
                                <p>{detail.subtitle}</p>
                                <p>{detail.description}</p>
                                <p>{detail.example}</p>
                                <p>{detail.reframeExample}</p>
                            </>
                        }
                    })
                }

            </div>
            <button className="btn btn-primary" onClick={()=>history.goBack()}>
                Back
            </button>

        </>
    )
}