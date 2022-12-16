import contactImgUrl from '../Images/contact.png';
import {useNavigate} from "react-router-dom";

function DVD({ imgSrc = contactImgUrl, id, title, releaseYear, director, rating, notes, setDeleteDVD}) {

  const navigate = useNavigate();
  let url = `http://dvd-library.us-east-1.elasticbeanstalk.com/dvd/${id}`;


  async function deleteContact() {
    await fetch(url, {
      method: "DELETE",
    });
      setDeleteDVD(true)
  }

  return (
    <figure className="w-11/12 flex flex-row justify-between items-center gap-2 bg-gray-50  rounded-xl p-8 space-y-2 shadow-xl ">
      <div>
        <img
          className="min-w-24 min-h-24 max-w-24 max-h-24 rounded-full"
          src={imgSrc}
          alt="the contact's headshot"
        />
      </div>
      <h1 
      className="text-lg font-semibold cursor-pointer" 
      onClick={() => 
        navigate(`/${id}`)}>
        {title}
        </h1>
      <p className="font-light text-gray-500">{releaseYear}</p>
      <p className="font-light text-gray-500">{director}</p>
      <p className="font-light text-gray-500">{rating}</p>
      <p className="font-light text-gray-500">{notes}</p>  
      <div className='flex flex-row justify-between gap-2'>      
        <button
          className="m-auto  text-center text-lg py-4 px-6 rounded-full border-2 text-gray-100 border-green-600 bg-green-600 hover:bg-gray-50 hover:border-green-600  hover:text-green-600 hover:shadow-2xl"
          onClick={() => 
            navigate(`/${id}`)}>
            Edit
        </button>
        <button
          className="m-auto text-center text-lg py-4 px-6 rounded-full border-2 text-gray-100 border-red-600 bg-red-600 hover:bg-gray-50 hover:border-green-600  hover:text-red-600 hover:shadow-2xl"
          onClick={(deleteContact)}
          >
            Delete
        </button>
        </div>               

    </figure>
  );
}

export default DVD;
