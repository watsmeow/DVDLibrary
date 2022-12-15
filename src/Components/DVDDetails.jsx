import React from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import useFetch from '../Hooks/useFetch';
import { validation } from '../Utils/validation';
import contactImgUrl from "../Images/contact.png"


function DVDDetails() {
    let { id } = useParams();
    const navigate = useNavigate();
    let url = `http://dvd-library.us-east-1.elasticbeanstalk.com/dvd/${id}`;
    const [data, error] = useFetch(url);
    const [updateDVDData, setupdateDVDData] = useState(data);
    const [editing, setEditing] = useState(true);
  
    useEffect(() => {
      setupdateDVDData(data);
    }, [data]);
  
    function handleUpdatingValue(e) {
      setupdateDVDData({
        ...updateDVDData,
        [e.target.id]: e.target.value,
      });
    }
  
    function updateContact() {
      if (editing === true) {
        setEditing(!editing);
  
        fetch(url, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updateDVDData),
        });
      } else {
        setEditing(!editing);
      }
    }
  
    async function deleteContact() {
      await fetch(url, {
        method: "DELETE",
      });
  
      navigate("/");
    }
  
    return (
      <>
        <nav className="md:w-3/4 m-auto mt-8 ">
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
  
        {/* Show Error if data is null */}
        {error !== null ? (
          <div
            className="bg-red-100 border border-red-400 text-red-700  md:w-2/5 lg:max-w-md px-4 py-3 rounded-md m-auto mt-24"
            role="alert"
          >
            <p className=" text-xl text-center">
              <strong>Sorry!</strong> It seems that this contact is missing or has
              been deleted.
            </p>
          </div>
        ) : (
          <div className="flex flex-col items-center my-16 mx-2 md:w-1/2 lg:w-2/5 md:mx-auto shadow-xl bg-gray-50 rounded  pt-8 p-4 px-8">
            <div className="flex flex-col items-center ">
              {/* Start of Head shot and Name */}
              <div className="flex flex-col justify-center w-64 h-64 bg-gray-300 border-gray-300 rounded-full border-2 shadow-xl text-center p-8 -m-32">
                <figure>
                  <img
                    className="m-auto"
                    src={updateDVDData.imgSrc || contactImgUrl}
                    alt="the contact's head shot"
                  />
                </figure>

              </div>
              {/* End of Head shot and Name */}
  
              {/* Remaining contact fields */}
  
              {!editing ? (
                <div className="grid grid-cols-2 gap-3 items-center justify-items-center mt-32 pt-8">
                  {/* Title */}
                  <h2 className="font-bold text-xl ">Title:</h2>
                  <p className="font-light text-xl p-1 rounded ">
                    {updateDVDData.title}
                  </p>
  
                  {/*Release Year  */}
                  <h2 className="font-bold text-xl">Release Year:</h2>
                  <p className="font-light text-xl p-1 rounded ">
                    {/* {validation(updateDVDData.releaseYear)} */}
                    {updateDVDData.releaseYear}
                  </p>
  
                  {/* Director */}
                  <h2 className="font-bold text-xl">Director:</h2>
                  <p className="font-light text-xl p-1 rounded">
                    {updateDVDData.director}
                  </p>

                  {/* Director */}
                  <h2 className="font-bold text-xl">Rating:</h2>
                  <p className="font-light text-xl p-1 rounded">
                    {updateDVDData.rating}
                  </p>

                  {/* Director */}
                  <h2 className="font-bold text-xl">Notes:</h2>
                  <p className="font-light text-xl p-1 rounded">
                    {updateDVDData.notes}
                  </p>
                </div>
              ) : (
                <form className="grid grid-cols-2 gap-3 items-center justify-items-center mt-32 pt-8">
                  <label htmlFor="title" className="font-bold text-xl">
                    Title:
                  </label>
                  <input
                    type="text"
                    id="title"
                    placeholder={updateDVDData.title}
                    onChange={handleUpdatingValue}
                    className="font-light text-xl"
                  />
                  <label htmlFor="releaseYear" className="font-bold text-xl">
                    Release Year:
                  </label>
                  <input
                    type="text"
                    id="releaseYear"
                    placeholder={updateDVDData.releaseYear}
                    onChange={handleUpdatingValue}
                    className="font-light text-xl"
                  />
                  <label htmlFor="director" className="font-bold text-xl">
                    Director:
                  </label>
                  <input
                    type="text"
                    id="director"
                    placeholder={updateDVDData.director}
                    onChange={handleUpdatingValue}
                    className="font-light text-xl"
                  />
                  <label htmlFor="rating" className="font-bold text-xl">
                    Rating:
                  </label>
                  <input
                    type="text"
                    id="rating"
                    placeholder={updateDVDData.rating}
                    onChange={handleUpdatingValue}
                    className="font-light text-xl"
                  />
                  <label htmlFor="notes" className="font-bold text-xl">
                    Notes:
                  </label>
                  <input
                    type="text"
                    id="notes"
                    placeholder={updateDVDData.notes}
                    onChange={handleUpdatingValue}
                    className="font-light text-xl"
                  />
                </form>
              )}
  
              {/* End of contact fields */}
  
              {/* Edit and Delete Buttons */}
              <div className="flex justify-around my-6 w-2/5 mx-auto pt-2 space-x-4">
                <button
                  className="bg-blue-600 rounded-full py-4 px-8 text-white hover:bg-gray-50 hover:border-blue-400  hover:text-blue-400 hover:shadow-2xl border-2"
                  onClick={updateContact}
                >
                  {!editing ? "Edit" : "Save"}
                </button>
  
                {/* Delete Button */}
                <button
                  className="bg-red-600 rounded-full py-4 px-8 text-white hover:bg-gray-50 hover:border-red-400  hover:text-red-400 hover:shadow-2xl border-2"
                  onClick={deleteContact}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
  
  export default DVDDetails;