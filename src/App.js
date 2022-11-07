import "./App.css";
import AlbumList from "./components/Albums/AlbumList";
import SearchAlbum from "./components/SearchAlbum/SearchAlbum";
import DUMMY_DATA from "./DUMMY_DATA";
// import DUMMY_DATA from "./DUMMY_DATA";

function App() {



  return (
    <div className="App">
      <h2>React Js Live Search</h2>
      <SearchAlbum />
      <h2>- Albums -</h2>
      <AlbumList albums={DUMMY_DATA} />
    </div>
  );
}

export default App;
