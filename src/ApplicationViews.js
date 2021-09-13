//listens for when url changes and pattern matches url endings
import React from "react"
import { Route } from "react-router-dom"


export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/home">
                <Home />
            </Route>
            <Route exact path="/morning-pages">
                <MorningPages />
            </Route>
        </>
    )
}