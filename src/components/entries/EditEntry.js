import React, { useState, useEffect } from "react"
import { useHistory, useParams, Link } from "react-router-dom"

export const EditEntry = (props) => {
    console.log(props)
    const history = useHistory()
    const { morningPageId } = useParams()
    const [morningPage, setPage] = useState({}) // trying to get same morning page from previous module. It should be a single object
    const [entryTransientState, updateEntry] = useState({})
    const [entries, setEntry] = useState([]) //chosen distortions is an array of objects

    useEffect(
        () => {
            return fetch(`http://localhost:8088/thoughtDistortions?_expand=morningPage&_expand=distortionDetail`)
                .then(response => response.json()) // make request and converts data back into a javascript object
                .then((data) => {
                    setEntry(data)    // gits me chosenDIstortionList , mp, and details
                })
        },


        []
    )

    // useEffect(
    //     () => {
    //         return fetch(`http://localhost:8088/morningPages/${morningPageId}`)
    //             .then(response => response.json()) // make request and converts data back into a javascript object
    //             .then((data) => {
    //                 setPage(data) // I gain access to the morning page object by invoking this function

    //             })
    //     },

    //     []
    // )

    const SubmitEntry = (evt) => {  // this submits my edits
        evt.preventDefault()
        const newMorningPage = {
            "title": entryTransientState.morningPage.title,
            "userId": entryTransientState.morningPage.userId,
            "morningPage": entryTransientState.morningPage.morningPage,
            "blurt": entryTransientState.morningPage.blurt,
            "reframe": entryTransientState.morningPage.reframe,
            "date": entryTransientState.morningPage.date
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
                history.push(`/entries`)
            })
    }


    return (

    //       const foundEntry = entries.find((entry) => {
    //     entry.morningPageId === parseInt(morningPageId)
    // }
    // )


entries.map((entry) => {
    // debugger

    if (entry?.morningPage.id === parseInt(morningPageId)) {

        return <>
            <h2 key={entry.morningPage.id} className="morningPage__title">Edit Your Morning Page</h2>
            <form>
            <fieldset>
                <div key={entry.morningPage.id} className="form-group">
                    <label htmlFor="description">Title: </label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder={entry.morningPage.title}
                        onChange={
                            (evt) => {
                                const copy = { ...entry }
                                copy.morningPage.title = entry.morningPage.title
                                updateEntry(copy)
                            }
                        } />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Morning Page:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder={entry.morningPage.morningPage}
                        onChange={
                            (evt) => {
                                const copy = { ...entry }
                                copy.morningPage.morningPage = entry.morningPage.morningPage
                                updateEntry(copy)
                            }
                        }
                    />
                </div>
            </fieldset>

                <div>
                    <p> Thought Distortions Present:</p>
                    {
                        entries.map((distortion) => {

                            if (distortion?.morningPageId === parseInt(morningPageId)) {
                                console.log(distortion)
                                return <p key={distortion?.distortionDetail?.id}><Link to={`/distortionDetail/${distortion?.distortionDetail?.id}`}>{distortion.distortionDetail.name}</Link></p>


                            }
                        })
                    }
                </div>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="name">Reframe:</label>
                        <input
                            required autoFocus
                            type="text"
                            className="form-control"
                            placeholder={entry.morningPage.reframe}
                            onChange={
                                (evt) => {
                                    const copy = { ...entry }
                                    copy.morningPage.reframe = entry.morningPage.reframe
                                    updateEntry(copy)
                                }
                            }
                        />
                    </div>
                </fieldset>


                <button className="btn btn-primary" onClick={SubmitEntry}>
                    Submit
                </button>
            </form>
        </>
    }
})
    )
}