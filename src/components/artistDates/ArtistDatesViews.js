import { useState } from "react"
import { DatesList } from "./DatesList"
import { DatesSearch } from "./DatesSearch"
import { ArtistDatesList } from "./ArtistDatesList"


export const ArtistDates = () => {
    const [searchTerm, updateSearchTerm] = useState("")


    return (
        <>
            <DatesSearch updateSearchState={updateSearchTerm}/>
            <DatesList searchState={searchTerm}/>
            <ArtistDatesList />
        </>
    )

}