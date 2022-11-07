import Album from "./Album";
import "./AlbumList.css";

const AlbumList = (props) => {
  const AlbumsData = props.albums;

  return (
    <div className="Albums__List">
      {AlbumsData.map((album) => (
        <Album
        key={album.id}
          image={album.img}
          title={album.title}
          description={album.desc}
          singer={album.singer}
        />
      ))}
    </div>
  );
};

export default AlbumList;
