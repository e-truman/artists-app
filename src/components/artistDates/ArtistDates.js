import React, { useState, useEffect } from "react"
import { useHistory, useParams, Link } from "react-router-dom"
import "./MorningPages.css";


// Purpose of this page: show throught distortions. allow you to select them. will post the selected thought distortions with the correct morning page Id. The selected thought distortions will appear on next page
export const ArtistDates = (props) => {
    console.log(props)
    const history = useHistory()
    const [thoughtDistortionsList, setDistortions] = useState([])
    const { morningPageId } = useParams()
    const [chosenThoughtDistortions, setChosenThoughtDistortions] = useState([])


    //I need to fetch the list of thought distortions. I will map throught them and display them as a list of links
    useEffect(
        () => {
            return fetch(`http://localhost:8088/distortionDetails?_embed=thoughtDistortions&_embed=morningPages`)
                .then(response => response.json()) // make request and converts data back into an array of a javascript objects
                .then((data) => {
                    setDistortions(data)// the array will be called thoughtDistortionList

                })
        },
        []
    )

    const submitThoughtDistortions = (evt) => { // invoked when you push submit button

        if (chosenThoughtDistortions.length > 0) {
            evt.preventDefault() // prevents form from being submitted without being able to see your fetch
            //needs to be inside an iteration of chosen thought distortions
            for (const distortion of chosenThoughtDistortions) { // for every distortion number in the chosenThoughtDistortion array, creating a new object for each number

                const newThoughtDistortion = {
                    "distortionDetailId": distortion,
                    "morningPageId": parseInt(morningPageId)
                }
                const fetchOption = { // for each object, a post will run
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(newThoughtDistortion) // sends body of reqest. hast to be sent as string. cant be javascript objects
                }
                fetch("http://localhost:8088/thoughtDistortions", fetchOption)
                    .then(res => res.json())
                    .then((data) => {
                        history.push(`/reframe/${morningPageId}`)
                    })
            }

        } else {
            history.push(`/reframe/${morningPageId}`)
        }
    }



    return (
        <>
            <h2 className="title">THOUGHT DISTORTIONS</h2>
            <form className="form">
                <fieldset className="checkbox-field">
                    <p>Select any thought distortions present:</p>
                    <div className="form-checkbox-group">

                        {thoughtDistortionsList.map((distortion) => {
                            return <>
                                <div className="checkbox-and-name">
                                    <input className="checkbox" value={distortion.id}
                                        onChange={
                                            (evt) => {
                                                let copy = [...chosenThoughtDistortions]
                                                if (copy.includes(distortion.id)) {
                                                    const position = copy.indexOf(distortion.id) // returns position in array
                                                    copy.splice(position, 1) // removes whatever at that position in array
                                                } else {
                                                    copy.push(distortion.id)
                                                }
                                                setChosenThoughtDistortions(copy)
                                            }
                                        }

                                        type="checkbox" />


                                    <Link className="distortions" to={`/distortionDetail/${distortion?.id}`}>{distortion.name}</Link>
                                </div>
                            </>
                        })}
                    </div>
                </fieldset>
                <button className="btn btn-secondary" onClick={submitThoughtDistortions}>
                    Next
                </button>
            </form>
        </>
    )
}
