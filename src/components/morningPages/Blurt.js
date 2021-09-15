import React, { useState, useEffect } from "react"
import { useHistory, useParams } from "react-router-dom"

export const Blurt = (props) => {
    console.log(props)
    const history = useHistory()
    const { morningPageId } = useParams()
    const [morningPage, setPage] = useState({}) // trying to get same morning page from previous module. It should be a single object
    const [blurtTransientState, updateBlurt] = useState({
        "title": morningPage?.title,
        "userId": parseInt(localStorage.getItem("artist_login")),
        "morningPage": morningPage?.morningPage,
        // "blurt": blurtTransientState?.blurt,
        // "reframe": "",
        "date": morningPage?.date
    })

    useEffect( 
        () => {
            return fetch(`http://localhost:8088/morningPages/${morningPageId}`) 
                .then(response => response.json()) // make request and converts data back into a javascript object
                .then((data) => {
                    setPage(data) // I gain access to the morning page object by invoking this function

                })
        },

        [] // should I just do an initial render, or change whenever morningPageId changes? does it matter if I won't be changing morning page Id?
    )

    // useEffect( 
    //     () => {
    //         return fetch(`http://localhost:8088/morningPages/${morningPageId}`) 
    //             .then(response => response.json()) // make request and converts data back into a javascript object
    //             .then((data) => {
    //                 updateBlurt(data) // I gain access to the morning page object by invoking this function

    //             })
    //     },

    //     [morningPageId] // should I just do an initial render, or change whenever morningPageId changes? does it matter if I won't be changing morning page Id?
    // )


    const updateMorningPage = (evt) => {  // this submits my post. How to I track transient state? Do I need a new use effect?
        evt.preventDefault()
        const newMorningPage = {  
            "title": morningPage.title,
            "userId": morningPage.UserId,
            "morningPage": morningPage.morningPage,
            "blurt": blurtTransientState.blurt,
            "reframe": "",
            "date": morningPage.date
    };
    
        return fetch(`http://localhost:8088/morningPages/${morningPageId}`,{

// need to iterate over morning pages to get the last one, or use use params in order to get the correct morning page to update

            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newMorningPage) //this replaces the service ticket you're editing
        })
            .then(res => res.json())
            .then((data) => {
                history.push(`/thought-Distortions/${data.id}`) 
            })
        }
        
            
    return (
        <form className="blurtForm">
            <h2 className="blurt__title">Blurts</h2>
            <fieldset>
                <div className="form-group">
                    {/* <label htmlFor="name">Specialty:</label> */}
                    <input 
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Did you have any unhelpful thoughts?"
                        onChange={
                            (evt) => {
                                const copy = {...morningPage}
                                copy.blurt = evt.target.value
                               updateBlurt(copy)
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