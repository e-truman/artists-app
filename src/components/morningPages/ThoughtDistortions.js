import React, { useState, useEffect } from "react"
import { useHistory, useParams } from "react-router-dom"


// Purpose of this page: show throught distortions. allow you to select them. will post the selected thought distortions with the correct morning page Id. The selected thought distortions will appear on next page
export const ThoughtDistortion = (props) => {
    console.log(props)
    // const { morningPageId } = useParams() // object destructuring. Have to name the variable in curly brackets the same as what you named the variable in your route for app views. can use to capture this component in browser, not just URL
    const history = useHistory()
    const [thoughtDistortionsList, setDistortions] = useState([]) // need to hold our fetch as a variable in order to use it later in our code. it will be an object. 
    const { morningPageId } = useParams()
    const [thoughtDistortion, addThoughtDistortion] = useState({
        "thoughtDistortionId": 1,
        "morningPageId": morningPageId
    });  // this is transient state. The on-change function 


    //I need to fetch the list of thought distortions. I will map throught them and display them as a list of links
    useEffect(
        () => {
            return fetch(`http://localhost:8088/thoughtDistortion?_embed=thoughtDistortions&_embed=morningPages`)
                .then(response => response.json()) // make request and converts data back into an array of a javascript objects
                .then((data) => {
                    setDistortions(data)// the array will be called thoughtDistortionList

                })
        },
        []
    )


    // have to fetch an object because otherwise you'd have to iterate over an array of objects
    const submitThoughtDistortions = (event) => { // invoked when you push submit button
        event.preventDefault() // prevents form from being submitted without being able to see your fetch
        const newThoughtDistortion = {
            "thoughtDistortionId": 1,
            "morningPageId": morningPageId
        }
        const fetchOption = {
            method: "POST", //have to write options for fetch before writign fetch call
            headers: { // needs headers or json won't work. only need content type
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newThoughtDistortion) // sends body of reqest. hast to be sent as string. cant be javascript objects
        }
        return fetch("http://localhost:8088/thoughtDistortions", fetchOption)
            .then(res => res.json())
            .then((data) => {
                history.push(`/reframe/${morningPageId}`) // This redirects me to the blurts form with the correct id
            })
        }



        return (
            <form className="blurtForm">
                <h2 className="blurt__title">Select the thought distortions present</h2>
                <fieldset>
                    <div className="form-group">
                        {/* <label htmlFor="name">Specialty:</label> */}
                        {thoughtDistortionsList.map((distortion) => {
                            <input value="distortion.id"
                                onChange={
                                    (evt) => {
                                        const copy = { ...thoughtDistortion }
                                        copy.thoughtDistortionId = evt.target.value
                                        addThoughtDistortion(copy)
                                    }
                                }

                                type="checkbox" />
                        })}
                    </div>
                </fieldset>
                <button className="btn btn-primary" onClick={submitThoughtDistortions}>
                    Next
                </button>
            </form>
        )
    }



//http://localhost:8088/morningPages?_embed=thoughtDistortions&_embed=thoughtDistortion

//http://localhost:8088/thoughtDistortion?_embed=thoughtDistortion&_embed=morningPages