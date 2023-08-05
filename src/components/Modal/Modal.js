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
            <a href={characterIdData.url}><span className="modal__span">{characterIdData.name || 'null'}</span></a>
          </li>
          <li className="modal__li">
            status:
            <span className="modal__span">{characterIdData.status|| 'null'}</span>
          </li>
          <li className="modal__li">
            species:
            <span className="modal__span">{characterIdData.species|| 'null'}</span>
          </li>
          <li className="modal__li">
            type:
            <span className="modal__span">{characterIdData.type || 'null'}</span>
          </li>
          <li className="modal__li">
            gender:
            <span className="modal__span">{characterIdData.gender|| 'null'}</span>
          </li>
          <li className="modal__li">
            origin:
            <div className="modal__box">
              <span className="modal__span">
                name: {characterIdData.origin?.name|| 'null'}
              </span>
              <a className="modal__link" href={characterIdData.origin?.url|| 'null'}>
                <span className="modal__span">
                  url: {characterIdData.origin?.url|| 'null'}
                </span>
              </a>
            </div>
          </li>
          <li className="modal__li">
            location:
            <div className="modal__box">
              <span className="modal__span">
                name: {characterIdData.location?.name|| 'null'}
              </span>
              <a className="modal__link" href={characterIdData.location?.url|| 'null'}>
                <span className="modal__span">
                  url: {characterIdData.location?.url|| 'null'}
                </span>
              </a>
            </div>
          </li>
          <li className="modal__li">
            episode:
            <a className="modal__link" href={characterIdData.episode}><span className="modal__span">episodes</span></a>
          </li>  
          <li className="modal__li">
            url:
            <a className="modal__link" href={characterIdData.url}><span className="modal__span">{characterIdData.url|| 'null'}</span></a>
          </li>
          <li className="modal__li">
            created:
            <span className="modal__span">{characterIdData.created?.slice(0, 10) || ''}</span>
          </li>
        </ul>
      </div>
      <TfiClose className="modal__btn-close" onClick={closePopup}/>
    </section>
  );
};

export default Modal;
