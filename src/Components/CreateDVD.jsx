import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validation } from "../Utils/validation";

function CreateDVD() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [releaseYear, setReleaseYear] = useState("");
  const [director, setDirector] = useState("");
  const [rating, setRating] = useState("");
  const [notes, setNotes] = useState("");

  async function addDVD(event) {
    event.preventDefault();
    await fetch("http://dvd-library.us-east-1.elasticbeanstalk.com/dvd", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        releaseYear: releaseYear,
        director: director,
        rating: rating,
        notes: notes,
      }),
    });

    navigate("/");
  }

  return (
    <>
      <nav className="md:w-3/4 m-auto mt-8">
        <button
          aria-label="Navigates back to the home page"
          onClick={() => navigate("/")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48px"
            viewBox="0 0 24 24"
            width="48px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
          </svg>
        </button>
      </nav>
      <h1 className="w-full bg-green-600 text-gray-100 text-center py-4 text-4xl uppercase tracking-wide mt-20 md:w-1/2 mx-auto rounded-t-md">
        Add New DVD
      </h1>
      <form
        className="grid grid-cols-2 md:w-1/2 mx-auto shadow-2xl rounded-md p-8"
        onSubmit={(e) => addDVD(e)}
      >
      
        {/* Title */}
        <div className="w-full px-3 col-span-full mb-6 md:mb-4">
          <label
            htmlFor="title"
            className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2"
          >
            <strong className="text-red-400">*</strong>Title:
          </label>

          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
        </div>

        {/* Release Year */}
        <div className="w-full px-3 col-span-full mb-6 md:mb-4">
          <label
            htmlFor="releaseYear"
            className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2"
          >
            <strong className="text-red-400">*</strong>Release Year:
          </label>

          <input
            type="text"
            id="releaseYear"
            value={releaseYear}
            onChange={(e) => setReleaseYear(e.target.value)}
            required
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
        </div>

        {/* Director */}
        <div className="w-full px-3 col-span-full mb-6 md:mb-4">
          <label
            htmlFor="director"
            className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2"
          >
            Director:
          </label>
          <input
            type="text"
            id="director"
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            value={director}
            onChange={(e) => setDirector(e.target.value)}
          />
        </div>
        {/* Rating */}
        <div className="w-full px-3 col-span-full mb-6 md:mb-4">
          <label
            htmlFor="rating"
            className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2"
          >
            Rating:
          </label>
          <input
            type="text"
            id="rating"
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </div>
        {/* Notes */}
        <div className="w-full px-3 col-span-full mb-6 md:mb-4">
          <label
            htmlFor="notes"
            className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2"
          >
            Notes:
          </label>
          <input
            type="text"
            id="notes"
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="col-span-full text-lg border-2 text-gray-100 border-green-600 bg-green-600 hover:bg-gray-50 hover:border-green-600  hover:text-green-600 hover:shadow-2xl  lg:w-2/5  justify-self-center rounded-full py-3 px-4 shadow-lg"
        >
          Add DVD
        </button>
      </form>
    </>
  );
}

export default CreateDVD;