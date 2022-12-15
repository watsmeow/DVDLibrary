import './App.css';
import DVD from './Components/DVD';
import SearchBar from './Components/SearchBar';
import Search from './Components/Search';
import { Routes, Route } from "react-router-dom";
import CreateDVD from './Components/CreateDVD';
import DVDDetails from './Components/DVDDetails';

function App() {
  return (
    <>
      <Routes>
     	 <Route path="/" element={<Search />} />
        <Route path="/:id" element={<DVDDetails />} />
        <Route path="/create" element={<CreateDVD />} />
      </Routes>
    </>
  );
}

export default App;
