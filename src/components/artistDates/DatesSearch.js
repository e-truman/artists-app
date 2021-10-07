export const DatesSearch = ({ updateSearchState }) => {

    return (
        <>
            <div className="search-container">

                <section>
                    <form className="form--search" onSubmit={(event) => { event.preventDefault() }}>
                        <fieldset className="searchField">
                            <input onChange={
                                (evt) => {
                                    const search = evt.target.value
                                    updateSearchState(search)
                                }
                            }
                                type="text"
                                className="search"
                                placeholder= "SEARCH"
                                required autoFocus />
                        </fieldset>
                    </form>
                </section>
            </div>
        </>
    )
}