import React from "react";
import "./SearchAlbum.css";

const SearchAlbum = () => {
  

  return (
    <div className="Search_Album">
      <div className="Search">
        <i class="bx bx-search"></i>
        <form>
          <input type="text" placeholder="Search Album or Artist" />
        </form>
      </div>
    </div>
  );
};

export default SearchAlbum;
