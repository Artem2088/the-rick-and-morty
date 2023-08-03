import { TfiClose } from 'react-icons/tfi';
import "./Modal.scss";


const Modal = ({ characterIdData, openModal, closePopup }) => {
  return (
    <section className={openModal ?' modal__open' : 'modal'}>
      <div className="modal__container">
        <img
          src={characterIdData.image}
          alt="avatar"
          className="modal__avatar"
        />
        <ul className="modal__ul">
          <li className="modal__li">
            name:
            <span className="modal__span">{characterIdData.name}</span>
          </li>
          <li className="modal__li">
            status:
            <span className="modal__span">{characterIdData.status}</span>
          </li>
          <li className="modal__li">
            species:
            <span className="modal__span">{characterIdData.species}</span>
          </li>
          <li className="modal__li">
            type:
            <span className="modal__span">{characterIdData.type}</span>
          </li>
          <li className="modal__li">
            gender:
            <span className="modal__span">{characterIdData.gender}</span>
          </li>
          <li className="modal__li">
            origin:
            <div className="modal__box">
              {/* <span className="modal__span">
                name: {characterIdData.origin.name}
              </span>
              <a className="modal__link" href="#">
                <span className="modal__span">
                  url: {characterIdData.origin.url}
                </span>
              </a> */}
            </div>
          </li>
          <li className="modal__li">
            location:
            <div className="modal__box">
              {/* <span className="modal__span">
                name: {characterIdData.location.name}
              </span>
              <a className="modal__link" href="#">
                <span className="modal__span">
                  url: {characterIdData.location.url}
                </span>
              </a> */}
            </div>
          </li>
          <li className="modal__li">
            episode:
            <a className="modal__link" href="#"></a>
          </li>
          <li className="modal__li">
            url:
            <span className="modal__span">{characterIdData.url}</span>
          </li>
          <li className="modal__li">
            created:
            <span className="modal__span">{characterIdData.created}</span>
          </li>
        </ul>
      </div>
      <TfiClose className="modal__btn-close" onClick={closePopup}/>
    </section>
  );
};

export default Modal;
