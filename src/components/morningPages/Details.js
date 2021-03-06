import React, { useState, useEffect } from "react"
import { useHistory, useParams } from "react-router-dom"
import "./MorningPages.css";
export const Details = (props) => {
    console.log(props)
    const history = useHistory()
    const { distortionDetailId } = useParams()
    const [details, setDetails] = useState([])

    useEffect(
        () => {
            return fetch(`https://artists-api-f85cm.ondigitalocean.app/distortionDetails`)
                .then(response => response.json()) // make request and converts data back into a javascript object
                .then((data) => {
                    setDetails(data)

                })
        },

        []
    )

    return (
        <>
            <div className="distortion-details-background">
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
                <button className="btn btn-secondary" onClick={() => history.goBack()}>
                    BACK
                </button>
            </div>
        </>
    )
}