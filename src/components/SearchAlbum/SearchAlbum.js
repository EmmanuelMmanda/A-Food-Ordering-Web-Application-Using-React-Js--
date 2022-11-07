import React from "react";
import "./SearchAlbum.css";

const SearchAlbum = (props) => {  
 
  const inputHandler = (event) => {
    event.preventDefault();
    // console.log(event.target.value);
    props.onformSubmit(event.target.value);

  };

  
  return (
    <div className="Search_Album">
      <div className="Search">
        <i className="bx bx-search"></i>
          <input
            type="text"
            name="input"
            onChange={inputHandler}
            placeholder="Search Album or Artist"
          />
      </div>
    </div>
  );
};

export default SearchAlbum;
