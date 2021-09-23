// purpose of this page: diplay a list of thought distortions selected for this morning page id, and provide a form where user can reframe

import React, { useState, useEffect } from "react"
import { useHistory, useParams, Link } from "react-router-dom"
import "./MorningPages.css";

export const Reframe = (props) => {
    console.log(props)
    const history = useHistory()
    const { morningPageId } = useParams()
    const [morningPage, setPage] = useState({}) // trying to get same morning page from previous module. It should be a single object
    const [reframeTransientState, updateReframe] = useState({})
    const [chosenDistortions, setTD] = useState([]) //chosen distortions is an array of objects


    useEffect(
        () => {
            return fetch(`http://localhost:8088/thoughtDistortions?_expand=morningPage&_expand=distortionDetail`)
                .then(response => response.json()) // make request and converts data back into a javascript object
                .then((data) => {
                    setTD(data)    // gits me chosenDIstortionList 
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

    const updateMorningPage = (evt) => {  // this submits my post.
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
        <>
            <form className="blurtForm">
                <h2 className="blurt__title">Reframe</h2>
                <div>
                    <h3> Thought Distortions Present</h3>
                    {
                    chosenDistortions.map((distortion) => {
                       
                        if (distortion?.morningPageId === parseInt(morningPageId)) {
                            console.log(distortion)
                            return <p><Link to={`/distortionDetail/${distortion?.distortionDetail?.id}`}>{distortion.distortionDetail.name}</Link></p>
                            
            
                        }
                    })
                }
                </div> 
                <fieldset>
                    <div className="form-group">
                        {/* <label htmlFor="name">Specialty:</label> */}
                        <input
                            required autoFocus
                            type="text"
                            className="form-control"
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
                <button className="btn btn-primary" onClick={updateMorningPage}>
                    Submit
                </button>
            </form>
        </>
    )
}