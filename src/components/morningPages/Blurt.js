import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"

export const Blurt = (props) => {
    console.log(props)
    // const { morningPageId } = useParams() // object destructuring. Have to name the variable in curly brackets the same as what you named the variable in your route for app views. can use to capture this component in browser, not just URL
    const history = useHistory()
    const [morningPage, setPage] = useState({}) // need to hold our fetch as a variable in order to use it later in our code. it will be an object.  

    useEffect( 
        () => {
            return fetch(`http://localhost:8088/morningPages`) 
            //how to get a single morning page without useParams
                .then(response => response.json()) // make request and converts data back into a javascript object
                .then((data) => {
                    setPage(data)

                })
        },

        [] 
    )

    // have to fetch an object because otherwise you'd have to iterate over an array of objects
    const updateMorningPage = (clickEvent) => { 
        const newMorningPage = { 
            "title": morningPage.title,
            "userId": morningPage.UserId,
            "morningPage": morningPage.morningPage,
            "blurt": "",
            "reframe": "",
            "date": morningPage.date
    };
    
        return fetch(`http://localhost:8088/morningPages`,{

// need to iterate over morning pages to get the last one, or use use params in order to get the correct morning page to update

            method: "PUT",
            headers: {
                "Content-Type": "application/json" // needs metadata or it won't work
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
                                updateMorningPage(copy)
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