import React, { useState } from "react";

import useDeviceDetect from "../../hooks/useDeviceDetect ";

import styles from "./style.module.scss";
import BurgerMenu from "../Menu";

const Header = () => {
  const { isTablet, isMobile, isDesktop } = useDeviceDetect();
  return isDesktop ? <DesktopHeader /> : <NoDesktopHeader isMobile={isMobile} />;
};

export default Header;

const DesktopHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <img
          className={styles.header__logo}
          src="/images/logo.svg"
          alt="logo"
        />

        <div className={styles.header__verticalLine}></div>

        <ul className={styles.header__list}>
          <li className={styles.header__list__item}>
            <a href="#">Услуги</a>
          </li>
          <li className={styles.header__list__item}>
            <a href="#">Продукция</a>
          </li>
          <li className={styles.header__list__item}>
            <a href="#">Проекты</a>
          </li>
          <li className={styles.header__list__item}>
            <a href="#">Компания</a>
          </li>
        </ul>
      </div>
      <div className={styles.header__container}>
        <div className={styles.header__info}>
          <img src="/images/geo_icon.svg" alt="geo icon" />
          <span>Санкт-Петербург</span>
        </div>
        <div className={styles.header__verticalLine}></div>
        <div className={styles.header__info}>
          <img src="/images/phone_icon.svg" alt="geo icon" />
          <span>+7 (800) 941-34-28</span>
        </div>
      </div>
    </header>
  );
};

const NoDesktopHeader = ({isMobile}) => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <img
          className={styles.header__logo}
          src="/images/logo.svg"
          alt="logo"
        />
      </div>
      <div className={styles.header__container}>
        <div className={styles.header__info}>
          <img src="/images/phone_icon.svg" alt="geo icon" />
          <span>+7 (800) 941-34-28</span>
        </div>
        <div className={styles.header__verticalLine}></div>

        <BurgerMenu isMobile={isMobile} />
      </div>
    </header>
  );
};
