import "./Header.css";

function Search({setSearchText, searchText}){
    return (
        <div className="searchbar">
            <label htmlFor="search">Search Smoothie:</label>
            <input
                type="text"
                id="search"
                placeholder="Type a name to search..."
                onChange={(event) => {
                    setSearchText(event.target.value)
                }}
                value={searchText}
            />
        </div>
    )
}

export default Search;