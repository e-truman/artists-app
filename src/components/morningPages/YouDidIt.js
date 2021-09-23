import React, { useState, useEffect } from "react"
import { useHistory, useParams, Link } from "react-router-dom"
import "./MorningPages.css";


// Morning Page complete. WHat would you like to do next?
//Daily streak
//home button
//show options of what to do next- tasks, see 

export const YouDidIt = (props) => {
    const { morningPageId } = useParams()
    const [distortions, setDistortions] = useState([]) //chosen distortions is an array of objects
    const [morningPages, setPage] = useState([])
    const [entries, setEntries] = useState([])
    let history = useHistory();
    const HomeButton = () => {
        history.push("/");
    }

    const EditEntry = () => {
        history.push(`/edit/${morningPageId}`);
    }


    // const FetchMorningPages =
    //     () => {
    //         return fetch(`http://localhost:8088/morningPages`)
    //             .then(response => response.json()) // make request and converts data back into a javascript object
    //             .then((data) => {
    //                 setPage(data) // I gain access to morningPages
    //             })
    //     }

    // useEffect(
    //     () => {
    //         FetchMorningPages()
    //     },
    //     []
    // )

    const deleteTicket = (id) => {
        fetch(`http://localhost:8088/morningPages/${id}`, {
            method: "DELETE"
        })
            .then(() => {
                // FetchMorningPages();
                history.push(`/entries`)
            })
    }


    useEffect(
        () => {
            return fetch(`http://localhost:8088/thoughtDistortions?_expand=morningPage&_expand=distortionDetail&morningPageId=${morningPageId}`)
                .then(response => response.json()) // make request and converts data back into a javascript object
                .then((data) => {
                    setDistortions(data)
                })
        },


        []
    )


    useEffect(
        () => {
            return fetch(`http://localhost:8088/morningPages/${morningPageId}`)
                .then(response => response.json()) // make request and converts data back into a javascript object
                .then((data) => {
                    setPage(data) // I gain access to the morning page object by invoking this function

                })
        },

        []
    )

    return (
        <>


            <form className="form">
                <h2 className="title">CHECK IN COMPLETE</h2>
               
        
            <h2 key={morningPages.id}>{morningPages.title}</h2>
            <p key={morningPages.morningPage}>Morning Page: {morningPages.morningPage}</p>
            <p key={morningPages.blurts}>Blurts: {morningPages.blurt}</p>
            {
                distortions.map((distortion) => {
                    // if (distortion?.morningPageId === entry.id) {
                    return <p key={distortion.id}><Link to={`/distortionDetail/${distortion?.distortionDetail?.id}`}>{distortion.distortionDetail.name}</Link></p>


                })
            }


            <p key={morningPages.reframe}>Reframe: {morningPages.reframe}</p>
<div className="buttons">
<div className="edit-delete-buttons">
            <button className="btn btn-secondary" value={morningPages.id} onClick={() => {
                EditEntry(morningPages.id)
            }}>
                Edit
            </button>

            <button className="btn btn-secondary" onClick={() => {
                deleteTicket(morningPages.id)
            }}>Delete</button>
</div>
            <button className="btn btn-secondary" onClick={HomeButton}>Home</button>
            </div>
            </form>
        </>


    )
}