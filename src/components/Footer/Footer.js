import "./Footer.scss";
import logo from "../../icons/rick-sanchez.svg";
import { Link } from "react-router-dom";

const Footer = ({ characterAbout, locationAbout, episodesAbout }) => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <Link to={"/"}>
          <img
            src={logo}
            alt="logo"
            className="header__logo footer__logo"
          ></img>
        </Link>
        <div className="footer__links-wrapper">
          <Link to={"/"} className="footer__link">
            <span className="footer__link-span">
              CHARACTERS: {characterAbout.info?.count}
            </span>
          </Link>
          <Link to={"/location"} className="footer__link">
            <span className="footer__link-span">
              LOCATIONS: {locationAbout.info?.count}
            </span>
          </Link>
          <Link to={"/episodes"} className="footer__link">
            <span className="footer__link-span">
              EPISODES: {episodesAbout.info?.count}
            </span>
          </Link>
        </div>
        <p className="footer__copyright">&copy; Artem Yablonsky, 2023</p>
      </div>
    </footer>
  );
};

export default Footer;
