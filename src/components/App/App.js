import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import Modal from "../Modal/Modal";
import {
  getCharacterInfo,
  getCharacterPagination,
  getCharacterId,
  getCharacterFilter,
  getLocationInfo,
  getEpisodesInfo,
} from "../../utils/MainApi";
import "./App.scss";
import PageNotFaund from "../PageNotFaund/pageNotFaund";
import LocationLists from "../LocationLists/LocationLists";
import EpisodesLists from "../EpisodesLists/EpisodesLists";

const App = () => {
  const [characterInfo, setCharacterInfo] = useState("");
  const [count, setCount] = useState(1);
  const [done, setIsDone] = useState(false);
  const [characterId, setCharacterId] = useState("");
  const [characterIdData, setCharacterIdData] = useState("");
  const [openModal, setIsOpenModal] = useState(false);
  const [openCheckbox, setIsOpenCheckbox] = useState(false);
  const [nameValue, setNameValue] = useState("");
  const [characterAbout, setCharacterAbout] = useState("");
  const [locationAbout, setLocationAbout] = useState("");
  const [episodesAbout, setEpisodesAbout] = useState("");

  useEffect(() => {
    getUserInfo();
    getLocation();
    getEpisodes();
  }, []);

  useEffect(() => {
    getPagination();
  }, [count]);

  useEffect(() => {
    getCharacter();
  }, [characterId]);

  const getUserInfo = async () => {
    setIsDone(false);
    await getCharacterInfo()
      .then((user) => {
        setCharacterAbout(user);
        setCharacterInfo(user.results);
        setIsDone(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getLocation = async () => {
    setIsDone(false);
    await getLocationInfo()
      .then((location) => {
        setLocationAbout(location);
        setIsDone(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getEpisodes = async () => {
    setIsDone(false);
    await getEpisodesInfo()
      .then((episodes) => {
        setEpisodesAbout(episodes);
        setIsDone(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getPagination = async () => {
    setIsDone(false);
    await getCharacterPagination(count)
      .then((data) => {
        if (data.info.next == null) {
          return count;
        }
        if (data.info.next == null) {
          return;
        } else {
          setCharacterInfo([...data.results]);
          setIsDone(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getCharacter = async () => {
    setIsDone(false);
    await getCharacterId(characterId)
      .then((data) => {
        setCharacterIdData(data);
        setIsDone(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getFilter = async (...filterValue) => {
    setIsDone(false);
    let curentItem = filterValue.filter(item => {
      return item !== '';
    });
    await getCharacterFilter(nameValue, curentItem)
      .then((filter) => {
        setCharacterInfo([...filter.results]);
        setIsDone(true);
        setIsOpenCheckbox(!openCheckbox);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getName = (name) => {
    setNameValue(name);
  };

  const decrementCount = () => {
    if (count === 1) {
      return count;
    }
    setCount(count - 1);
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  const createModal = (id) => {
    setCharacterId(id);
  };

  const openPopup = () => {
    setIsOpenModal(true);
  };

  const closePopup = () => {
    setIsOpenModal(false);
  };

  const handleOpenBox = (e) => {
    if (e.target.className === 'search search_open' || e.target.className === 'header__span-text') {
      setIsOpenCheckbox(!openCheckbox);
    }
  };

  return (
    <div className={openModal || openCheckbox ? "page_open" : "page"}>
      <div className='page__container'>
        <Header
          handleOpenBox={handleOpenBox}
          openCheckbox={openCheckbox}
          closePopup={closePopup}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Main
                characterInfo={characterInfo}
                decrementCount={decrementCount}
                incrementCount={incrementCount}
                done={done}
                createModal={createModal}
                openModal={openModal}
                openPopup={openPopup}
                openCheckbox={openCheckbox}
                onGetFilter={getFilter}
                onGetName={getName}
                handleOpenBox={handleOpenBox}
              />
            }
          />
          <Route
            path='/location'
            element={<LocationLists locationAbout={locationAbout} />}
          />
          <Route
            path='/episodes'
            element={<EpisodesLists episodesAbout={episodesAbout} />}
          />
          <Route path='*' Component={PageNotFaund} />
        </Routes>
        <Modal
          characterIdData={characterIdData}
          openModal={openModal}
          closePopup={closePopup}
        />
        <Footer
          characterAbout={characterAbout}
          locationAbout={locationAbout}
          episodesAbout={episodesAbout}
        />
      </div>
    </div>
  );
};

export default App;
