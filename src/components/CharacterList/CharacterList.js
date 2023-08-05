import CharacterEach from "../CharacterEach/CharacterEach";
import Input from "../Input/Input";
import Loader from "../Loader/Loader";
import "./CharacterList.scss";

const CharacterList = ({
  characterInfo,
  decrementCount,
  incrementCount,
  done,
  createModal,
  openPopup,
  openCheckbox,
  onGetFilter,
  onGetName,
  filter,
}) => {

  return (
    <section className="characterList">
      {!done ? (
        <Loader />
      ) : (
        <>
          {
            <Input
              openCheckbox={openCheckbox}
              onGetFilter={onGetFilter}
              onGetName={onGetName}
            />
          }
          <ul className="characterList__container">
            {characterInfo && characterInfo.map((item) => (
                  <CharacterEach
                    key={item.id}
                    item={item}
                    createModal={createModal}
                    openPopup={openPopup}
                  />
                ))}
          </ul>
          <div className="characterList__button-container">
            <button
              className="button characterList__button-prev"
              type="button"
              onClick={decrementCount}
            >
              <span className="characterList__text">Prev</span>
            </button>
            <button
              className="button characterList__button-next"
              type="button"
              onClick={incrementCount}
            >
              <span className="characterList__text">Next</span>
            </button>
          </div>
        </>
      )}
    </section>
  );
};

export default CharacterList;
