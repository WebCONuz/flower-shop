import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";

import Container from "../../Layout/Container";
import logo from "../../images/Logo.png";
import links from "../../routes/categories";
import classes from "./Header.module.scss";
import classNames from "classnames";

const Header = () => {
  const { pathname } = useLocation();
  return (
    <header className={classes["header"]}>
      <Container className={classes["header__contaner"]}>
        <Link to="/" className={classes["header__logo"]}>
          <img src={logo} alt="Greenpease" />
        </Link>
        <FontAwesomeIcon icon={faHeart} className={classes["header__heart"]} />
        <FontAwesomeIcon
          icon={faBagShopping}
          className={classes["header__bag"]}
        />
      </Container>
      <Container>
        <ul className={classes["header__list"]}>
          {links.map((item) => (
            <li key={item.image}>
              <Link
                to={item.link}
                key={item.link}
                className={classNames(classes["header__link"], {
                  [classes["header__link_active"]]: pathname === item.link,
                })}
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </header>
  );
};

export default Header;
