// purpose of this page: diplay a list of thought distortions selected for this morning page id, and provide a form where user can reframe

import React, { useState, useEffect } from "react"
import { useHistory, useParams } from "react-router-dom"

export const Reframe = (props) => {
    console.log(props)
    const history = useHistory()
    const { morningPageId } = useParams()
    const [morningPage, setPage] = useState({}) // trying to get same morning page from previous module. It should be a single object
    const [reframeTransientState, updateReframe] = useState({})

    useEffect( 
        () => {
            return fetch(`http://localhost:8088/morningPages/${morningPageId}?_embed=thoughtDistortions&_embed=thoughtDistortion`) 
                .then(response => response.json()) // make request and converts data back into a javascript object
                .then((data) => { //I have the javascript object and I'm calling it data
                    setPage(data) // I gain access to the morning page object with the thought distortions by invoking this function

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

    const updateMorningPage = (evt) => {  // this submits my post.
        evt.preventDefault()
        const newMorningPage = {  
            "title": morningPage.title,
            "userId": morningPage.UserId,
            "morningPage": morningPage.morningPage,
            "blurt": morningPage.blurt,
            "reframe": reframeTransientState.reframe,
            "date": morningPage.date
    };
    
        return fetch(`http://localhost:8088/morningPages/${morningPageId}`,{

            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newMorningPage) //this replaces the morning page you're editing
        })
            .then(res => res.json())
            .then((data) => {
                // history.push(`/thought-Distortions/${data.id}`) 
            })
        }
        
            
    return (
        <form className="blurtForm">
            <h2 className="blurt__title">Reframe</h2>
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
                                const copy = {...morningPage}
                                copy.reframe = evt.target.value
                               updateReframe(copy)
                            }
                        } 
                       />
                </div>
            </fieldset>
            <button className="btn btn-primary" onClick={updateMorningPage}> 
              Next
            </button>
        </form>
    )
}