import { Link, NavLink, useLocation } from "react-router-dom";
import "./Header.scss";
import logo from "../../icons/rick-sanchez.svg";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { useEffect, useState } from "react";
import ModalMenu from "../ModalMenu/ModalMenu";

const Header = ({ handleOpenBox, openCheckbox, closePopup }) => {
  const { pathname } = useLocation();
  const [closeSpan, setIsCloseSpan] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (pathname === "/") {
      setIsCloseSpan(true);
    } else {
      setIsCloseSpan(false);
    }
  }, [pathname]);

  const handleResize = () => {
    if (window.innerWidth < 500) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  const openMobileMenu = () => {
    setOpenMenu(!openMenu);
  };

  // const handleClass = () => {
  //   let
  // }

  return (
    <header className="header">
      <div className="header__container">
        <Link to={"/"}>
          <img src={logo} alt="logo" className="header__logo"></img>
        </Link>
        {isMobile ? (
          <RxHamburgerMenu
            className="header__mobileMenu"
            onClick={openMobileMenu}
          />
        ) : (
          <>
            <div className="header__box">
              <NavLink
                exact
                to="/"
                className={({ isActive }) =>
                  "header__link " + (isActive ? "header__link_active" : "")
                }
              >
                Character
              </NavLink>
              <NavLink
                to="/location"
                className={({ isActive }) =>
                  "header__link " + (isActive ? "header__link_active" : "")
                }
              >
                Location
              </NavLink>
              <NavLink
                to="/episodes"
                className={({ isActive }) =>
                  "header__link " + (isActive ? "header__link_active" : "")
                }
              >
                Episodes
              </NavLink>
            </div>
          </>
        )}
        <span
          className={
            closeSpan ? "header__span-text" : "header__span-text_close"
          }
          onClick={handleOpenBox}
        >
          Фильтр
          {openCheckbox ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </span>
      </div>
      <ModalMenu
        openCheckbox={openCheckbox}
        handleOpenBox={handleOpenBox}
        closePopup={closePopup}
        openMenu={openMenu}
        openMobileMenu={openMobileMenu}
      />
    </header>
  );
};

export default Header;
