import { useEffect, useState } from "react";
import "./CharacterEach.scss";

const CharacterEach = ({ item, createModal, openPopup }) => {
  const [point, isPoint] = useState('');
  const status = {
    green: "characterEach__point",
    red: "characterEach__point-red",
    gray: "characterEach__point-gray",
  };

  useEffect(() => {
    checkStatus();
  }, [])

  const checkStatus = () => {
    if(item.status === "Alive"){
      isPoint(status.green)
    }
    else if(item.status === 'Dead'){
      isPoint(status.red)
    }
    else {
      isPoint(status.gray)
    }
  }

  const handleClick = () => {
    createModal(item.id);
    openPopup()
  }

  return (
    <li className="characterEach" onClick={handleClick}>
      <div className="characterEach__wrapper" >
        <img
          className="characterEach__image"
          src={item.image}
          alt="avatar"
        ></img>
        <div className="characterEach__container" >
          <a href={item.url}><h2 className="characterEach__name">{item.name}</h2></a>
          <div className="characterEach__box">
          <span className={point}></span>
            <span className="characterEach__status">{item.status}</span>
          </div>
          <span className="characterEach__gender">{item.gender}</span>
        </div>
      </div>
    </li>
  );
};

export default CharacterEach;
