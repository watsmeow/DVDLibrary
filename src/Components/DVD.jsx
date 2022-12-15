import contactImgUrl from '../Images/contact.png'

function DVD({ imgSrc = contactImgUrl, title, releaseYear, director, rating, notes }) {
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
    </figure>
  );
}

export default DVD;
