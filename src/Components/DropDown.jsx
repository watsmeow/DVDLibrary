import {useState} from "react";

const DropDown = () => {
  const options = [
    {value: "", text: "Search Category", disabled: "true"},
    {value: "title", text: "Title", disabled: ""},
    {value: "releaseYear", text: "Release Year", disabled: ""},
    {value: "director", text: "Director Name", disabled: ""},
    {value: "rating", text: "Rating", disabled: ""}
  ];

  const [searchCategory, setSearchCategory] = useState(options[0].value);

  return (
    <select
      className="flex px-4 border-2 border-gray-300 rounded-md
        justify-between hover:shadow-lg focus:shadow-lg"
      value={searchCategory}
      onChange={(e) => setSearchCategory(e.target.value)}
    >
      {options.map(option => (
        <option
          key={option.value}
          value={option.value}
          disabled={option.disabled}
        >
          {option.text}
        </option>
      ))}
    </select>
  );
};

export default DropDown;
