//listens for when url changes and pattern matches url endings
import React from "react"
import { Route } from "react-router-dom"
import { MorningPage } from "./morningPages/MorningPage"
import { Home } from "./Home"
import { Blurt } from "./morningPages/Blurt"
import { ThoughtDistortion } from "./morningPages/ThoughtDistortions"
import { Reframe } from "./morningPages/Reframe"
import { Details } from "./morningPages/Details"
import { YouDidIt } from "./morningPages/YouDidIt"


export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/morning-pages">
                <MorningPage />
            </Route>
            <Route exact path="/blurts/:morningPageId(\d+)">
                <Blurt />
            </Route>
            <Route exact path="/thought-distortions/:morningPageId(\d+)">
                <ThoughtDistortion />
            </Route>
            <Route exact path="/reframe/:morningPageId(\d+)">
                <Reframe />
            </Route>
            <Route exact path="/distortionDetail/:distortionDetailId(\d+)">
                <Details />
            </Route>
            <Route exact path="/checkInComplete">
                <YouDidIt />
            </Route>

        </>
    )
}