import { NavLink } from "react-router-dom";
import "./ModalMenu.scss";
import { TfiClose } from "react-icons/tfi";

const ModalMenu = ({ openMenu, openMobileMenu }) => {
  return (
    <section className={openMenu ? "modalMobile_open" : "modalMobile"}>
      <div className="modalMobile__wrapper">
        <TfiClose className="modalMobile__btn-close" onClick={openMobileMenu} />
        <div className="header__box modalMobile__box">
          <NavLink
            exact
            to={"/"}
            className={({ isActive }) =>
              "header__link modalMobile__link " +
              (isActive ? "modalMobile__link_active" : "")
            }
          >
            Character
          </NavLink>
          <NavLink
            to={"/location"}
            className={({ isActive }) =>
              "header__link modalMobile__link " +
              (isActive ? "modalMobile__link_active" : "")
            }
          >
            Location
          </NavLink>
          <NavLink
            to={"/episodes"}
            className={({ isActive }) =>
              "header__link modalMobile__link " +
              (isActive ? "modalMobile__link_active" : "")
            }
          >
            Episodes
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default ModalMenu;
