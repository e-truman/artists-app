export const DatesSearch = ({updateSearchState}) => {

    return (
        <>
            <h2 className="title">SEARCH</h2>

            <section>
                <form className="form--search" onSubmit={(event) => {event.preventDefault()}}>
                    <fieldset className="searchField">
                        <input onChange = {
                            (evt) => {
                                 const search = evt.target.value
                                 updateSearchState(search)
                            }
                        }
                            type="text"
                            className="search"
                            placeholder="Enter search terms here"
                            required autoFocus />
                    </fieldset>
                </form>
            </section>
        </>
    )
}