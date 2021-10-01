import React, { useState, useEffect } from "react"
import { useHistory, useParams, Link } from "react-router-dom"
import "./MorningPages.css";

export const Reframe = (props) => {
    console.log(props)
    const history = useHistory()
    const { morningPageId } = useParams()
    const [morningPage, setPage] = useState({})
    const [reframeTransientState, updateReframe] = useState({})
    const [chosenDistortions, setTD] = useState([])


    useEffect(
        () => {
            return fetch(`http://localhost:8088/thoughtDistortions?_expand=morningPage&_expand=distortionDetail`)
                .then(response => response.json())
                .then((data) => {
                    setTD(data)
                })
        },

        []
    )

    useEffect(
        () => {
            return fetch(`http://localhost:8088/morningPages/${morningPageId}`)
                .then(response => response.json())
                .then((data) => {
                    setPage(data)
                })
        },
        []
    )

    const updateMorningPage = (evt) => {
        evt.preventDefault()
        const newMorningPage = {
            "title": morningPage.title,
            "userId": morningPage.userId,
            "morningPage": morningPage.morningPage,
            "blurt": morningPage.blurt,
            "reframe": reframeTransientState.reframe,
            "date": morningPage.date
        };

        return fetch(`http://localhost:8088/morningPages/${morningPageId}`, {

            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newMorningPage) //this replaces the morning page you're editing
        })
            .then(res => res.json())
            .then((data) => {
                history.push(`/checkInComplete/${morningPageId}`)
            })
    }


    return (
        <form className="form">
            <h2 className="title">REFRAME</h2>
            <div>
                <p> THOUGHT DISTORTIONS PRESENT:</p>
                {
                    chosenDistortions.map((distortion) => {
                        if (distortion?.morningPageId === parseInt(morningPageId)) {
                            return <p><Link className="distortions" to={`/distortionDetail/${distortion?.distortionDetail?.id}`}>{distortion.distortionDetail.name}</Link></p>
                        }
                    })
                }
            </div>
            <fieldset>
                <div className="form-group">
                    <textarea
                        required autoFocus
                        type="text"
                        className="form-control journal"
                        placeholder="What is another way to think bout your unhelpful thoughts?"
                        onChange={
                            (evt) => {
                                const copy = { ...morningPage }
                                copy.reframe = evt.target.value
                                updateReframe(copy)
                            }
                        }
                    />
                </div>
            </fieldset>
            <button className="btn btn-secondary" onClick={updateMorningPage}>
                SUBMIT
            </button>
        </form>
    )
}