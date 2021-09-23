import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import "./MorningPages.css";

export const MorningPage = () => {
    const [morningPage, setMp] = useState({
        "title": "",
        "userId": parseInt(localStorage.getItem("artist_login")),
        "morningPage": "",
        "blurt": "",
        "reframe": "",
        "date": ""
    });

   let date = () => {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); 
        let yyyy = today.getFullYear();

        today = mm + '/' + dd + '/' + yyyy;
        return today
    }


    const history = useHistory() 

    const submitMorningPage = (event) => { // invoked when you push submit button
        event.preventDefault() // prevents form from being submitted without being able to see your fetch
        const newMorningPage = {
            title: morningPage.title,
            userId: morningPage.userId,
            morningPage: morningPage.morningPage,
            blurt: morningPage.blurt,
            reframe: morningPage.reframe,
            date: date()
        }
        const fetchOption = {
            method: "POST", //have to write options for fetch before writign fetch call
            headers: { // needs headers or json won't work. only need content type
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newMorningPage) // sends body of reqest. hast to be sent as string. cant be javascript objects
        }

        return fetch("http://localhost:8088/morningPages", fetchOption)
            .then(res => res.json())
            .then((data) => {
                history.push(`/blurts/${data.id}`) // This redirects me to the blurts form with the correct id
            })
    }
    return (
        <>
        <h2 className="title">MORNING PAGES</h2>
        <form className="form">
            <fieldset>
                <div className="form-group">
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Title"
                        onChange={
                            (evt) => {
                                const copy = { ...morningPage }
                                copy.title = evt.target.value
                                setMp(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    {/* <label htmlFor="name">Specialty:</label> */}
                    <textarea
                        required 
                        type="text"
                        className="form-control journal"
                        placeholder="How are you today?"
                        onChange={
                            (evt) => {
                                const copy = { ...morningPage }
                                copy.morningPage = evt.target.value
                                setMp(copy)
                            }
                        }
                    />
                </div>
            </fieldset>
            <button className="btn btn-secondary" onClick={submitMorningPage}>
                Next
            </button>
        </form>
        </>
    )
}