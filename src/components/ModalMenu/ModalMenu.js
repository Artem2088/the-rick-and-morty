import { Link } from 'react-router-dom';
import './ModalMenu.scss';
import { TfiClose } from 'react-icons/tfi';


const ModalMenu = ({openMenu, openMobileMenu}) => {


    return (
        <section className={openMenu ? 'modalMobile_open' : 'modalMobile'}>
            <div className='modalMobile__wrapper'>
            <TfiClose className="modalMobile__btn-close" onClick={openMobileMenu}/>
                <div className="header__box modalMobile__box">
                    <Link to={'/'} className="header__link modalMobile__link">Character</Link>
                    <Link to={'/location'} className="header__link modalMobile__link">Location</Link>
                    <Link to={'/episode'} className="header__link modalMobile__link">Episode</Link>
                </div>
            </div>
        </section >
    )
};

export default ModalMenu;