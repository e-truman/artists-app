import { useEffect, useState } from "react"
import { Link } from "react-router-dom"



export const DatesList = ({searchState}) => {
    const [searchResults, updateSearchResults] = useState({})
    const [artistDates, setADs] = useState([])

    useEffect(
        () => {
            return fetch(`http://localhost:8088/artistDates`)
                .then(response => response.json()) // make request and converts data back into an array of a javascript objects
                .then((data) => {
                    setADs(data)

                })
        },
        []
    )

    useEffect(
        () => {
            if (searchState !== "") {
                // debugger
                const filteredDates = artistDates.find(date => date.title.startsWith(searchState))
                if (filteredDates !== undefined) {
                   
                    updateSearchResults(filteredDates)
                } 
            } else {
                updateSearchResults({})
            }
        },
        [searchState]
    )

    return (
        <>
            <h2>Search Results:</h2>
            <a className="date-link" href={searchResults.link}>{searchResults?.title}</a>
        </>
    )
}