import { useState } from "react";
import SearchBar from "./SearchBar";
import DVD from "./DVD";
import useFetch from "../Hooks/useFetch";
import { Link } from "react-router-dom";

function Search() {
  const [usersSearch, setUsersSearch] = useState("");
  const [userHasSearched, setUserHasSearched] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [dvdData] = useFetch("http://dvd-library.us-east-1.elasticbeanstalk.com/dvds");

  function filterdvdData(searchTerm) {
    setUserHasSearched(true);
    setUsersSearch(searchTerm);

    let filteredResults;

    if (searchTerm == "") {
      filteredResults = [];
      setUserHasSearched(false);
    } else {
      filteredResults = dvdData.filter((dvd) => {
        return dvd.title.includes(searchTerm) || dvd.title.includes(searchTerm);
      });
    }

    setSearchResults(filteredResults);
  }

  return (
    <div>
      {/* Create DVD and Search options */}
      <div className="grid grid-cols-2 gap-2 place-items-center m-4">
      <nav className="w-full m-8">
        <Link
          to="/create"
          className=" w-3 m-auto lg:w-1/6 text-center text-lg py-4 px-6 rounded-full border-2 lg:mr-16 text-gray-100 border-green-600 bg-green-600 hover:bg-gray-50 hover:border-green-600  hover:text-green-600 hover:shadow-2xl  "
        >
          {" "}
          Create DVD
        </Link>
      </nav>
      <SearchBar searchValue={usersSearch} searchValueFunction={filterdvdData} />
    </div>

      {/* List of all or searched DVDs or error */}
      <section className="flex justify-center m-4 w-screen">
        {userHasSearched ? (
          <>
            <div
              className={
                searchResults.length > 0
                  ? "hidden"
                  : "bg-red-100 border border-red-400 text-red-700  md:w-2/5 lg:max-w-md px-4 py-3 rounded-md"
              }
              role="alert"
            >
              <p className="text-center">
                <strong>Sorry!</strong> There are no dvds with the name of{" "}
                <strong>{usersSearch}</strong>
              </p>
            </div>
            <div
              className={
                searchResults.length > 0 ? "flex flex-col gap-2 place-items-center" : "hidden"
              }
            >
              {searchResults.map((dvd) => {
                return (
                  <Link key={dvd.id} to={`/${dvd.id}`}>
                    <DVD
                      title={dvd.title}
                      releaseYear={dvd.releaseYear}
                      director={dvd.director}
                      rating={dvd.rating}
                      notes={dvd.notes}
                    />
                  </Link>
                );
              })}
            </div>
          </>
        ) : (
          <div className="flex flex-col gap-2 place-items-center">
            {dvdData.map((dvd) => {
              return (
                <Link key={dvd.id} to={`/${dvd.id}`}>
                  <DVD
                      title={dvd.title}
                      releaseYear={dvd.releaseYear}
                      director={dvd.director}
                      rating={dvd.rating}
                      notes={dvd.notes}
                  />
                </Link>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}

export default Search;