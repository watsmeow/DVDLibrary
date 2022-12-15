import React from 'react'

const SearchBar = ({ searchValue, searchValueFunction }) => {
  return (
    <div className="md:w-1/2 lg:max-w-md">
      <form
        className="flex px-4 border-2 border-gray-300 rounded-md justify-between hover:shadow-lg focus:shadow-lg"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label htmlFor="searchBar" className="sr-only">
          Search Bar
        </label>
        <input
          id="searchBar"
          type="text"
          name="searchBar"
          placeholder="Search DVD Library"
          className="py-2 flex-auto focus:outline-none w-36"
          value={searchValue}
          onChange={(e) => searchValueFunction(e.target.value)}
        />

        <label htmlFor="searchSubmit" className="sr-only">
          Submit
        </label>
        <button
          id="searchSubmit"
          aria-label="Click to submit search"
          type="submit"
          className='m-4'
        >
          {" "}
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar