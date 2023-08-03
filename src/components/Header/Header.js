import { Link, useLocation } from "react-router-dom";
import "./Header.scss";
import logo from '../../icons/rick-sanchez.svg';
import { IoIosArrowDown } from "react-icons/io";
import {IoIosArrowUp} from 'react-icons/io';
import { useEffect, useState } from "react";


const Header = ({handleOpenBox, openCheckbox}) => {
  const {pathname} = useLocation();
  const [closeSpan, setIsCloseSpan] = useState(false);

  useEffect(() => {
    if(pathname === '/') {
setIsCloseSpan(true)
    }
    else {
      setIsCloseSpan(false)
    }
  }, [pathname])
  
  return (
    <header className="header">
      <div className="header__container">
        <Link to={'/'}>
        <img src={logo} alt="logo" className="header__logo"></img>
        </Link>
        <div className="header__box">
          <Link to={'/'} className="header__link">Character</Link>
          <Link to={'/location'} className="header__link">Location</Link>
          <Link to={'/episode'} className="header__link">Episode</Link>
        </div>
        <span className={closeSpan ? 'header__span-text' : 'header__span-text_close'} onClick={handleOpenBox}>
          Фильтр
          {openCheckbox ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </span>
      </div>
    </header>
  );
};

export default Header;
