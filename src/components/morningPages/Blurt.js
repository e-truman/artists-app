import React, { useState, useEffect } from "react"
import { useHistory, useParams } from "react-router-dom"
import "./MorningPages.css";

export const Blurt = (props) => {
    console.log(props)
    const history = useHistory()
    const { morningPageId } = useParams()
    const [morningPage, setPage] = useState({})
    const [blurtTransientState, updateBlurt] = useState({})

    useEffect(
        () => {
            return fetch(`https://artists-api-f85cm.ondigitalocean.app/morningPages/${morningPageId}`)
                .then(response => response.json()) // make request and converts data back into a javascript object
                .then((data) => {
                    setPage(data) // I gain access to the morning page object by invoking this function

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
            "blurt": blurtTransientState.blurt,
            "reframe": "",
            "date": morningPage.date
        };

        return fetch(`https://artists-api-f85cm.ondigitalocean.app/morningPages/${morningPageId}`, {

            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newMorningPage)
        })
            .then(res => res.json())
            .then((data) => {
                history.push(`/thought-distortions/${data.id}`)
            })
    }


    return (
        <form className="form">
            <h2 className="title">BLURTS</h2>
            <fieldset>
                <div className="form-group">
                    <textarea
                        required autoFocus
                        type="text"
                        className="form-control journal"
                        placeholder="Did you have any unhelpful thoughts?"
                        onChange={
                            (evt) => {
                                const copy = { ...morningPage }
                                copy.blurt = evt.target.value
                                updateBlurt(copy)
                            }
                        }
                    />
                </div>
            </fieldset>
            <button className="btn btn-secondary" onClick={updateMorningPage}>
                Next
            </button>
        </form>
    )
}