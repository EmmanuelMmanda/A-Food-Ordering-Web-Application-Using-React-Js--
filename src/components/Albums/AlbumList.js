import Album from "./Album";
import "./AlbumList.css";

const AlbumList = (props) => {
  const AlbumsData = props.albums;
  const inputFilter = props.onfilter.toLowerCase().toString();

  const filteredAlbums = AlbumsData.filter((item) => {
    const i =
      item.singer.toLowerCase().toString().includes(inputFilter) ||
      item.desc.toLowerCase().toString().includes(inputFilter) ||
      item.title.toLowerCase().toString().includes(inputFilter);
      return i;
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
