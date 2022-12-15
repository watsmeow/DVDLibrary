import contactImgUrl from '../Images/contact.png';
import {useNavigate, useParams} from "react-router-dom";

function DVD({ imgSrc = contactImgUrl, id, title, releaseYear, director, rating, notes }) {

  const navigate = useNavigate();
  let url = `http://dvd-library.us-east-1.elasticbeanstalk.com/dvd/${id}`;
  
  async function deleteContact() {
    await fetch(url, {
      method: "DELETE",
    });

    navigate("/");
  }

  return (
    <figure className="flex flex-row justify-between items-center gap-2 bg-gray-50  rounded-xl p-8 space-y-2 shadow-xl ">
      <div>
        <img
          className="w-24 h-24 rounded-full"
          src={imgSrc}
          alt="the contact's headshot"
        />
      </div>
      <h1 className="text-lg font-semibold">{title}</h1>
      <p className="font-light text-gray-500">{releaseYear}</p>
      <p className="font-light text-gray-500">{director}</p>
      <p className="font-light text-gray-500">{rating}</p>
      <p className="font-light text-gray-500">{notes}</p>                 
      <button
          className=" w-3 m-auto lg:w-1/6 text-center text-lg py-4 px-6 rounded-full border-2 lg:mr-16 text-gray-100 border-green-600 bg-green-600 hover:bg-gray-50 hover:border-green-600  hover:text-green-600 hover:shadow-2xl"
          onClick={() => navigate(`/${id}`)}>
            Edit
        </button>
        <button
          className=" w-3 m-auto lg:w-1/6 text-center text-lg py-4 px-6 rounded-full border-2 lg:mr-16 text-gray-100 border-green-600 bg-green-600 hover:bg-gray-50 hover:border-green-600  hover:text-green-600 hover:shadow-2xl"
          onClick={(deleteContact)}>
            Delete
        </button>
    </figure>
  );
}

export default DVD;
