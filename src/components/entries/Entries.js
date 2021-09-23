// purpose of this page: diplay a list of thought distortions selected for this morning page id, and provide a form where user can reframe

import React, { useState, useEffect } from "react"
import { useHistory, Link } from "react-router-dom"
import './Entries.css';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

export const Entries = (props) => {
    console.log(props)
    const history = useHistory()
    const [entries, setEntries] = useState([]) //chosen distortions is an array of objects
    const [distortions, setDistortions] = useState([])


    useEffect(
        () => {
            return fetch(`http://localhost:8088/thoughtDistortions?_expand=morningPage&_expand=distortionDetail`)
                .then(response => response.json()) // make request and converts data back into a javascript object
                .then((data) => {
                    setDistortions(data)
                })
        },


        []
    )


    const FetchEntries =
        () => {
            return fetch(`http://localhost:8088/morningPages`)
                .then(response => response.json()) // make request and converts data back into a javascript object
                .then((data) => {
                    setEntries(data)
                })
        }


    useEffect(
        () => {
            FetchEntries()
        },
        []
    )

    const editEntry = (id) => {
        history.push(`/edit/${id}`);
    }

    const deleteEntry = (id) => {
        fetch(`http://localhost:8088/morningPages/${id}`, {
            method: "DELETE"
        })
            .then(() => {
                FetchEntries()
            }
            )
    }



    return (
        <>

        <h2>PAST ENTRIES</h2>
            <div className="container">
                {/* <Row sm="0"> */}
{/* <Col sm="0"> */}
                <Card body>

                    {

                        entries.map((entry) => {
                            if (entry?.userId === parseInt(localStorage.getItem("artist_login"))) {
                                return <>

                                    <p className="space-between">
                                        <CardTitle tag="h5">{entry.title}</CardTitle>
                                        <CardText><p> <h6>MORNING PAGE:</h6> {entry.morningPage}</p>
                                            <p> Blurts: {entry.blurt}</p>
                                            {
                                                distortions.map((distortion) => {
                                                    if (distortion?.morningPageId === entry.id) {
                                                        return <p key={entry.id}><Link to={`/distortionDetail/${distortion?.distortionDetail?.id}`}>{distortion.distortionDetail.name}</Link></p>

                                                    }
                                                })
                                            }
                                            <p key={entry.id}>REFRAME: {entry.reframe}</p>
                                            <p>Date: {entry.date}</p>
                                        </CardText>
                                        <div className="button-container">
                                            <Button value={entry.id} onClick={() => { editEntry(entry.id) }}>EDIT</Button>
                                            <Button onClick={() => { deleteEntry(entry.id) }}>DELETE</Button>

                                        </div>
                                    </p>
                                </>


                            }
                        }
                        )
                    }
                </Card>
                {/* </Col> */}

                {/* </div> */}


            {/* </Row > */}


            </div>

            <Button onClick={() => history.push("/")}>
                HOME</Button>


   


        </>
    )
}











/* <button className="btn btn-primary" value={entry.id} onClick={() => {
editEntry(entry.id)
}}>
Edit
</button>
<button onClick={() => {
deleteEntry(entry.id)
}}>Delete</button>
</div>
</>
}
})
}
<button className="btn btn-primary" onClick={() => history.push("/")}>
Home
</button>   */