import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"

export const Home = () => {
    const history = useHistory()
    
    return (
        <> 
            <h1>The Artist's App</h1>
            <div>
                <h2>Morning Pages</h2>
                <button onClick={() => history.push("/morning-pages")}>Start</button>
            </div> 
           
        </>
    )
}