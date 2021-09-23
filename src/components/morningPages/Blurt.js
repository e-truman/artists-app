import React, { useState, useEffect } from "react"
import { useHistory, useParams } from "react-router-dom"
import "./MorningPages.css";

export const Blurt = (props) => {
    console.log(props)
    const history = useHistory()
    const { morningPageId } = useParams()
    const [morningPage, setPage] = useState({}) // trying to get same morning page from previous module. It should be a single object
    const [blurtTransientState, updateBlurt] = useState({})

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

    const updateMorningPage = (evt) => {  // this submits my post.
        evt.preventDefault()
        const newMorningPage = {  
            "title": morningPage.title,
            "userId": morningPage.userId,
            "morningPage": morningPage.morningPage,
            "blurt": blurtTransientState.blurt,
            "reframe": "",
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
                history.push(`/thought-distortions/${data.id}`) 
            })
        }
        
            
    return (
        <form className="form">
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