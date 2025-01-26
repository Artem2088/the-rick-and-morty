import { useEffect, useState } from "react";
import "./Input.scss";

const Input = ({ openCheckbox, onGetFilter, onGetName,  handleOpenBox }) => {
  const [valueName, setValueName] = useState("");
  const [valueSpecies, setValueSpecies] = useState("");
  const [valueType, setValueType] = useState("");
  const [valueAlive, setValueAlive] = useState("");
  const [valueDead, setValueDead] = useState("");
  const [valueUnknown, setValueUnknown] = useState("");
  const [valueFemale, setValueFemale] = useState("");
  const [valueMale, setValueMale] = useState("");
  const [valueGenderless, setValueGenderless] = useState("");
  const [valueGenderUnknown, setValueGenderUnknown] = useState("");
  const [name, setName] = useState([]);

  useEffect (() => {
    onGetName(name)
  }, [name]);

  const onChangeValueName = (e) => {
    setName(prevName => {
      if (!prevName.includes(e.target.name)) {
        return [...prevName, e.target.name];
      }
      return prevName;
    });
    setValueName(e.target.value);
  };
  const onChangeValueSpecies = (e) => {
    setName(prevName => {
      if (!prevName.includes(e.target.name)) {
        return [...prevName, e.target.name];
      }
      return prevName;
    });
    setValueSpecies(e.target.value);
  };
  const onChangeValueType = (e) => {
    setName(prevName => {
      if (!prevName.includes(e.target.name)) {
        return [...prevName, e.target.name];
      }
      return prevName;
    });
    setValueType(e.target.value);
  };

  const onChangeCheckboxAlive = (e) => {
    setName(prevName => {
      if (!prevName.includes(e.target.name)) {
        return [...prevName, e.target.name];
      }
      return prevName;
    });
    setValueAlive(e.target.value);
  };

  const onChangeCheckboxDead = (e) => {
    setName(prevName => {
      if (!prevName.includes(e.target.name)) {
        return [...prevName, e.target.name];
      }
      return prevName;
    });
    setValueDead(e.target.value);
  };

  const onChangeCheckboxUnknown = (e) => {
    setName(prevName => {
      if (!prevName.includes(e.target.name)) {
        return [...prevName, e.target.name];
      }
      return prevName;
    });
    setValueUnknown(e.target.value);
  };

  const onChangeCheckboxFemale = (e) => {
    setName(prevName => {
      if (!prevName.includes(e.target.name)) {
        return [...prevName, e.target.name];
      }
      return prevName;
    });
    setValueFemale(e.target.value);
  };

  const onChangeCheckboxMale = (e) => {
    setName(prevName => {
      if (!prevName.includes(e.target.name)) {
        return [...prevName, e.target.name];
      }
      return prevName;
    });
    setValueMale(e.target.value);
  };

  const onChangeCheckboxGenderless = (e) => {
    setName(prevName => {
      if (!prevName.includes(e.target.name)) {
        return [...prevName, e.target.name];
      }
      return prevName;
    });
    setValueGenderless(e.target.value);
  };

  const onChangeCheckboxGenderUnknown = (e) => {
    setName(prevName => {
      if (!prevName.includes(e.target.name)) {
        return [...prevName, e.target.name];
      }
      return prevName;
    });
    setValueGenderUnknown(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onGetFilter(
      valueName,
      valueAlive,
      valueDead,
      valueUnknown,
      valueSpecies,
      valueType,
      valueFemale,
      valueMale,
      valueGenderless,
      valueGenderUnknown
    );
    onGetName(name);
  };

  return (
    <section className={openCheckbox ? "search search_open" : "search"} onClick={(e) => handleOpenBox(e)}>
      <div className="search__wrapper">
        <div className="search__container">
          <div className="search__box-input">
            <form method="get" onSubmit={handleSubmit}></form>
            <label className="search__label">Имя</label>
            <input
              onChange={onChangeValueName}
              className="search__input"
              type="text"
              name="name"
              placeholder="Введите имя"
              minLength="2"
              maxLength="30"
              required
              id="name"
              value={valueName || ""}
              autoComplete="off"
            />
            <label className="search__label">Вид</label>
            <input
              onChange={onChangeValueSpecies}
              className="search__input"
              type="text"
              placeholder="Введите вид"
              id="species"
              name="species"
              value={valueSpecies || ""}
              autoComplete="off"
              minLength="2"
              maxLength="30"
            />
            <label className="search__label">Тип</label>
            <input
              onChange={onChangeValueType}
              className="search__input"
              type="text"
              id="type"
              name="type"
              placeholder="Введите тип"
              value={valueType || ""}
              autoComplete="off"
              minLength="2"
              maxLength="30"
            />
          </div>
        </div>
        <div className="search__status-box">
          <span className="search__span-status">STATUS:</span>
          <label className="search__label">Alive</label>
          <input
            className="search__checkbox"
            type="checkbox"
            value="alive"
            id="alive"
            name="status"
            onChange={onChangeCheckboxAlive}
          />
          <label className="search__label">Dead</label>
          <input
            className="search__checkbox"
            type="checkbox"
            value="dead"
            id="dead"
            name="status"
            onChange={onChangeCheckboxDead}
          />
          <label className="search__label">Unknown</label>
          <input
            className="search__checkbox"
            type="checkbox"
            value="unknown"
            id="unknown"
            name="status"
            onChange={onChangeCheckboxUnknown}
          />
        </div>
        <div className="search__status-box">
          <span className="search__span-status">GENDER:</span>
          <label className="search__label">Female</label>
          <input
            className="search__checkbox"
            type="checkbox"
            value="female"
            id="female"
            name="gender"
            onChange={onChangeCheckboxFemale}
          />
          <label className="search__label">Male</label>
          <input
            className="search__checkbox"
            type="checkbox"
            value="male"
            id="male"
            name="gender"
            onChange={onChangeCheckboxMale}
          />
          <label className="search__label">Genderless</label>
          <input
            className="search__checkbox"
            type="checkbox"
            value="genderless"
            id="genderless"
            name="gender"
            onChange={onChangeCheckboxGenderless}
          />
          <label className="search__label">Unknown</label>
          <input
            className="search__checkbox"
            type="checkbox"
            value="genderlessUnknown"
            id="genderlessUnknown"
            name="gender"
            onChange={onChangeCheckboxGenderUnknown}
          />
        </div>
        <button className="button search__button-send" onClick={handleSubmit}>
          <span className="search__btn-text">Поиск</span>
        </button>
      </div>
    </section>
  );
};

export default Input;
