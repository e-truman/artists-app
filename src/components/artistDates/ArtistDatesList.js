import React, { useState, useEffect } from "react"
import { useHistory, Link } from "react-router-dom"
import { Button } from 'reactstrap';
import "./ArtistDates.css";


// Purpose of this page: show throught distortions. allow you to select them. will post the selected thought distortions with the correct morning page Id. The selected thought distortions will appear on next page
export const ArtistDatesList = ({searchState}) => {
    const history = useHistory()
    const [artistDates, setADs] = useState([])
    

    useEffect(
        () => {
            return fetch(`http://localhost:8088/artistDates`)
                .then(response => response.json()) // make request and converts data back into an array of a javascript objects
                .then((data) => {
                    setADs(data)// the array will be called thoughtDistortionList

                })
        },
        []
    )






    return (
        <>
            <div className="artist-dates-container">
           
                <div className="dates-background">
                    <h2 className="title">Music Venues and Live Performances</h2>
                    {
                        artistDates.map((date) => {

                            if (date.categoryId === 1) {
                                return <>

                                    <ul>
                                        <li>
                                            <a className="date-link" href={date.link}>{date.title}</a>
                                        </li>
                                    </ul>
                                </>
                            }
                        })
                    }
                </div>
                <div className="dates-background">
                    <h2 className="title">Outdoors</h2>
                    {
                        artistDates.map((date) => {
                            if (date.categoryId === 2) {
                                return <>

                                    <ul>
                                        <li>
                                            <a className="date-link" href={date.link}>{date.title}</a>
                                        </li>
                                    </ul>
                                </>
                            }
                        })
                    }
                </div>

                <div className="dates-background">
                    <h2 className="title">Classes</h2>
                    {
                        artistDates.map((date) => {
                            if (date.categoryId === 3) {
                                return <>

                                    <ul>
                                        <li>
                                            <a className="date-link" href={date.link}>{date.title}</a>
                                        </li>
                                    </ul>
                                </>
                            }
                        })
                    }
                </div>
                <div className="dates-background">
                    <h2 className="title">Museums</h2>
                    {
                        artistDates.map((date) => {
                            if (date.categoryId === 4) {
                                return <>

                                    <ul>
                                        <li>
                                            <a className="date-link" href={date.link}>{date.title}</a>
                                        </li>
                                    </ul>
                                </>
                            }
                        })
                    }
                </div>
                <div className="dates-background">
                    <h2 className="title">Arts Stores</h2>
                    {
                        artistDates.map((date) => {
                            if (date.categoryId === 6) {
                                return <>

                                    <ul>
                                        <li>
                                            <a className="date-link" href={date.link}>{date.title}</a>
                                        </li>
                                    </ul>
                                </>
                            }
                        })
                    }
                </div>
                <div className="dates-background">
                    <h2 className="title">Other</h2>
                    {
                        artistDates.map((date) => {
                            if (date.categoryId === 5) {
                                return <>

                                    <ul>
                                        <li>
                                            <a className="date-link" href={date.link}>{date.title}</a>
                                        </li>
                                    </ul>
                                </>
                            }
                        })
                    }
                </div>
                <Button className="buttons home-entries" onClick={() => history.push("/")}>
                    HOME</Button>
            </div>


        </>
    )
}
