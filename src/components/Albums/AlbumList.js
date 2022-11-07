import Album from "./Album";
import "./AlbumList.css";

const AlbumList = (props) => {
  const AlbumsData = props.albums;
  const inputFilter = props.onfilter.toLowerCase().toString();

  const filteredAlbums = AlbumsData.filter((item) => {
    const i =
      item.singer.toLowerCase().toString() ||
      item.title.toLowerCase().toString() ||
      item.desc.toLowerCase().toString()
    return i.includes(inputFilter);
  });


  return (
    <div className="Albums__List">
      {filteredAlbums.map((album) => (
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
