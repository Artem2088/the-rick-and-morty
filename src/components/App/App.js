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
} from "../../utils/MainApi";
import "./App.scss";

const App = () => {
  const [characterInfo, setCharacterInfo] = useState("");
  const [count, setCount] = useState(1);
  const [pagination, setPagination] = useState("");
  const [done, setIsDone] = useState(false);
  const [characterId, setCharacterId] = useState("");
  const [characterIdData, setCharacterIdData] = useState("");
  const [openModal, setIsOpenModal] = useState(false);
  const [openCheckbox, setIsOpenCheckbox] = useState(false);
  const [nameValue, setNameValue] = useState('');
  const [filter, setFilter] = useState('')

  useEffect(() => {
    getUserInfo();
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
        setCharacterInfo(user.results);
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
          setPagination(data.results);
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

  const getFilter = async (filterValue) => {
    setIsDone(false);
   await filterValue.map((item) => {
    console.log(nameValue)
      getCharacterFilter(nameValue, item)
      .then((data) => {
        setFilter(data);
        setIsDone(true);
      })
      .catch((err) => {
        console.log(err);
      });
    })
  };

  const getName = (name) => {
    setNameValue(name)
  }

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

  const handleOpenBox = () => {
    setIsOpenCheckbox(!openCheckbox);
  };

  return (
    <div className="page">
      <div className="page__container">
        <Header handleOpenBox={handleOpenBox} openCheckbox={openCheckbox} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Main
                characterInfo={characterInfo}
                decrementCount={decrementCount}
                incrementCount={incrementCount}
                pagination={pagination}
                done={done}
                createModal={createModal}
                openModal={openModal}
                openPopup={openPopup}
                openCheckbox={openCheckbox}
                onGetFilter={getFilter}
                onGetName={getName}
                filter={filter}
              />
            }
          />
          <Route path="/location" />
        </Routes>
        <Modal
          characterIdData={characterIdData}
          openModal={openModal}
          closePopup={closePopup}
        />
        <Footer />
      </div>
    </div>
  );
};

export default App;
