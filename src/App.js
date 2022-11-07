import { useState } from "react";
import "./App.css";
import AlbumList from "./components/Albums/AlbumList";
import SearchAlbum from "./components/SearchAlbum/SearchAlbum";
import DUMMY_DATA from "./DUMMY_DATA";

const App = () => {
  const [input, setinput] = useState("");

  const formHandler = (formdata) => {
      setinput(formdata);
  };


  return (
    <div className="App">
      <h2>React Js Render Dynamic Lists</h2>
      <SearchAlbum onformSubmit={formHandler} />
      <h2>- Albums -</h2>
      <AlbumList albums={DUMMY_DATA} onfilter={input} />
    </div>
  );
};

export default App;
