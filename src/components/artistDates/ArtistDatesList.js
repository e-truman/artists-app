import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { Button } from 'reactstrap';
import "./ArtistDates.css";


export const ArtistDatesList = () => {
    const history = useHistory()
    const [artistDates, setADs] = useState([])


    useEffect(
        () => {
            return fetch(`https://artists-api-f85cm.ondigitalocean.app/artistDates`)
                .then(response => response.json()) 
                .then((data) => {
                    setADs(data)

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
                <Button className="buttons" onClick={() => history.push("/")}>
                    HOME</Button>
            </div>
        </>
    )
}
