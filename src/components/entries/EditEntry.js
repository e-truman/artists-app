import React, { useState, useEffect } from "react"
import { useHistory, useParams, Link } from "react-router-dom"
import "./Entries.css";

export const EditEntry = (props) => {
    console.log(props)
    const history = useHistory()
    const { morningPageId } = useParams()
    const [entries, setEntry] = useState([])
    const [morningPages, setPage] = useState({
        "title": "",
        "userId": parseInt(localStorage.getItem("artist_login")),
        "morningPage": "",
        "blurt": "",
        "reframe": "",
        "date": ""
    })

    useEffect(
        () => {
            return fetch(`https://artists-api-f85cm.ondigitalocean.app/thoughtDistortions?_expand=morningPage&_expand=distortionDetail&morningPageId=${morningPageId}`)
                .then(response => response.json()) // make request and converts data back into a javascript object

                .then((data) => {
                    console.log(data)
                    setEntry(data)
                })
        },
        []
    )

    useEffect(
        () => {
            return fetch(`https://artists-api-f85cm.ondigitalocean.app/morningPages/${morningPageId}`)
                .then(response => response.json()) // make request and converts data back into a javascript object
                .then((data) => {
                    setPage(data)

                })
        },

        []
    )

    const SubmitEntry = (evt) => {  // this submits my edits
        evt.preventDefault()
        const newMorningPage = {

            "title": morningPages.title,
            "userId": morningPages.userId,
            "morningPage": morningPages.morningPage,
            "blurt": morningPages.blurt,
            "reframe": morningPages.reframe,
            "date": morningPages.date
        };

        return fetch(`https://artists-api-f85cm.ondigitalocean.app/morningPages/${morningPageId}`, {

            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newMorningPage) //this replaces the morning page you're editing
        })
            .then(res => res.json())
            .then((data) => {
                history.push(`/entries`)
            })
    }


    return (
        <>

            <form className="form">
                <h2 className="title">EDIT YOUR MORNING PAGE</h2>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="description">TITLE:</label>
                        <input
                            required autoFocus
                            type="text"
                            className="form-control edit-title"
                            value={morningPages?.title}
                            onChange={
                                (evt) => {
                                    const copy = { ...morningPages }
                                    copy.title = evt.target.value
                                    setPage(copy)
                                }
                            } />
                    </div>

                    <div className="form-group">
                        <label htmlFor="name">MORNING PAGE:</label>
                        <textarea
                            required
                            type="text"
                            className="form-control journal"
                            value={morningPages.morningPage}
                            onChange={
                                (evt) => {
                                    const copy = { ...morningPages }
                                    copy.morningPage = evt.target.value
                                    setPage(copy)
                                }
                            }
                        />
                    </div>

                    <div className="form-group journal">
                        <label htmlFor="name">BLURT:</label>
                        <textarea
                            required
                            type="text"
                            className="form-control journal"
                            value={morningPages.blurt}
                            onChange={
                                (evt) => {
                                    const copy = { ...morningPages }
                                    copy.blurt = evt.target.value
                                    setPage(copy)
                                }
                            }
                        />
                    </div>
                    <div className="distortion-list">
                        <p>THOUGHT DISTORTIONS PRESENT:</p>
                        {
                            entries.map((distortion) => {

                                if (distortion?.morningPageId === parseInt(morningPageId)) {
                                    return <p><Link className="distortions" to={`/distortionDetail/${distortion?.distortionDetail?.id}`}>{distortion.distortionDetail.name}</Link></p>


                                }
                            })
                        }
                    </div>

                    <div className="form-group">
                        <label htmlFor="name">REFRAME:</label>
                        <textarea
                            required
                            type="text"
                            className="form-control journal"
                            defaultValue={morningPages.reframe}
                            onChange={
                                (evt) => {
                                    const copy = { ...morningPages }
                                    copy.reframe = evt.target.value
                                    setPage(copy)
                                }
                            }
                        />
                    </div>
                </fieldset>


                <button className="btn btn-secondary" onClick={SubmitEntry}>
                    SUBMIT
                </button>
            </form>
        </>

    )
}

