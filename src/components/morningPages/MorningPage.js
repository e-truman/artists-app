import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import "./MorningPages.css";
import "../Artists.css";

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
        today = `${mm}/${dd}/${yyyy}`;
        return today
    }


    const history = useHistory()

    const submitMorningPage = (event) => {
        event.preventDefault()
        const newMorningPage = {
            title: morningPage.title,
            userId: morningPage.userId,
            morningPage: morningPage.morningPage,
            blurt: morningPage.blurt,
            reframe: morningPage.reframe,
            date: date()
        }
        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newMorningPage)
        }

        return fetch("http://localhost:8088/morningPages", fetchOption)
            .then(res => res.json())
            .then((data) => {
                history.push(`/blurts/${data.id}`) // This redirects me to the blurts form with the correct id
            })
    }
    return (
        <>

            <form className="form">
                <h2 className="title">MORNING PAGES</h2>
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