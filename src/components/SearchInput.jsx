import React from 'react'

const SearchInput = () => {
  return (
    <div className="search-bar">
      <form>
        <div className="search-bar-box flex">
          {/* <span className="search-icon flex">
            <img src="images/search-icon-dark.png" alt="" />
          </span> */}
          <input
            type="search"
            className="search-control"
            placeholder="Search here"
          />
        </div>
      </form>
    </div>
  );
}

export default SearchInput