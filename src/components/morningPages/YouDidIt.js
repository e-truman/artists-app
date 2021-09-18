import React, { useState, useEffect } from "react"
import { useHistory, useParams, Link } from "react-router-dom"

// Morning Page complete. WHat would you like to do next?
//Daily streak
//home button
//show options of what to do next- tasks, see 





export const YouDidIt = (props) => {
    let history = useHistory();
    function HomeButton() {
          history.push("/");
        }
    
      
   
    return (
        <>
            <form className="blurtForm">
            <button className="btn btn-primary" onClick={HomeButton}>
                    Home
                </button>
                <h2 className="blurt__title">Check in complete</h2>
                <div>
                    <h3> You did it! </h3>
                </div> 
            </form>
        </>
    )
}