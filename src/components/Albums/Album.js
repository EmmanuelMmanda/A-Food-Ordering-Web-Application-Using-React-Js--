import React from "react";
import './Album.css';

const Album = (props) => {
  return (
    <div className="Album__card">
      <div className="Album__img">
          <img src={props.image} width="100%" alt="harmonize-album"/>
      </div>
      <div className="Album__description">
          <h3>{props.title}</h3>
          <p>{props.description}</p>
          <div>
              <i className="bx bxs-microphone-alt"/>
              <h4>{props.singer}</h4>

          </div>
      </div>
    </div>
  );
};

export default Album;
