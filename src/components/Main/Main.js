import "./Main.scss";
import CharacterList from "../CharacterList/CharacterList.js";

const Main = ({ characterInfo, decrementCount, incrementCount, pagination, done, createModal, openPopup, openCheckbox, onGetFilter, onGetName, filter,  handleOpenBox }) => {
  return (
    <main className="main"> 
      <CharacterList
        characterInfo={characterInfo}
        decrementCount={decrementCount}
        incrementCount={incrementCount}
        pagination={pagination}
        done={done}
        createModal={createModal}
        openPopup={openPopup}
        openCheckbox={openCheckbox}
        onGetFilter={onGetFilter}
        onGetName={onGetName}
        filter={filter}
        handleOpenBox={handleOpenBox}
      />
    </main>
  );
};

export default Main;
