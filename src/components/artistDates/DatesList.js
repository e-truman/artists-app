import { useEffect, useState } from "react"

export const DatesList = ({ searchState }) => {
    const [searchResults, updateSearchResults] = useState({})
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

    useEffect(
        () => {
            if (searchState !== "") {
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
            <div className="search-results-container">
                <p ><a className={searchState === "" ? "no-style" : "date-link search-results"} href={searchResults.link}>{searchResults?.title}</a></p>
            </div>
        </>
    )
}