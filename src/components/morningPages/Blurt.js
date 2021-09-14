import React, { useState } from "react"
import { useHistory } from "react-router-dom"

export const Blurt = () => {
    const [morningPage, setMp] = useState({
            "title": "",
            "userId": parseInt(localStorage.getItem("artist_login")),
            "morningPage": "",
            "blurt": "",
            "reframe": "",
            "date": Date()
    });


// const date = () => {
//     let today = new Date();
//     let dd = String(today.getDate()).padStart(2, '0');
//     let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
//     let yyyy = today.getFullYear();
    
//     today = mm + '/' + dd + '/' + yyyy;
//     return today
// }


    const history = useHistory() // hook that allows you to push to browser history


// save ticket uses the state variables to create an object to post to api

    const submitMorningPage = (event) => { // invoked when you push submit button
        event.preventDefault() // prevents form from being submitted without being able to see your fetch
        const newMorningPage ={
            title: morningPage.title,
            userId: morningPage.userId,
            morningPage: morningPage.morningPage,
            blurt: morningPage.blurt,
            reframe: morningPage.reframe,
            date: morningPage.date
            
        }
       const fetchOption = {
           method: "POST", //have to write options for fetch before writign fetch call
           headers: { // needs headers or json won't work. only need content type
               "Content-Type": "newMorningPage"
           },
           body: JSON.stringify(newMorningPage) // sends body of reqest. hast to be sent as string. cant be javascript objects
       }
    
    return fetch("http://localhost:8088/morningPages", fetchOption)
       .then(() => {
            history.push("/thought-distortions") // after you post a ticket, you are redirected to blurts
       })
    }
    return (
        <form className="morningPageForm">
            <h2 className="morningPage__title">How are you today?</h2>
            <fieldset>
                {/* <div className="form-group">
                    <label htmlFor="description">Title: </label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder=""
                        onChange={
                            (evt) => {
                                const copy = {...morningPage}
                                copy.title = evt.target.value
                                setMp(copy)
                            }
                        } />
                </div> */}
            </fieldset>
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
                                setMp(copy)
                            }
                        } 
                       />
                </div>
            </fieldset>
            <button className="btn btn-primary" onClick={submitMorningPage}> 
              Next
            </button>
        </form>
    )
}