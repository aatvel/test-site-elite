import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import useDeviceDetect from "../../hooks/useDeviceDetect ";

import { tariffs } from "./Tariffs";

import styles from "./style.module.scss";

const TariffsPage = () => {
  const { isTablet, isMobile, isDesktop } = useDeviceDetect();
  const options = {
    items: isDesktop ? 4 : isTablet ? 2 : 1,
    nav: true,
    dots: true,
    autoplay: false,
    margin: isDesktop ? 30 : isTablet ? 20 : 10,
    loop: true,
  };

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <h4>Тарифы</h4>
        <div
          className={`owl-carousel-container slider-two dots-two ${styles.slider}`}
        >
          <OwlCarousel
            className={`owl-carousel owl-theme ${styles.slider}`}
            {...options}
          >
            {tariffs.map((tariff, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.card__top}>
                  <img
                    src={tariff.image}
                    alt={tariff.title}
                    className={styles.card__image}
                  />
                  <div className={styles.card__top__labels}>
                    {tariff.labels.map((label, index) => (
                      <span
                        key={index}
                        className={styles.card__top__labels__label}
                      >
                        {label}
                      </span>
                    ))}
                  </div>

                  <h5 className={styles.card__top__title}>{tariff.title}</h5>
                </div>
                <div className={styles.card__bottom}>
                  <ul className={styles.card__bottom__features}>
                    <li className={styles.card__bottom__features__feature}>
                      <span>Visa, Master Card, МИР:</span> {tariff.features[0]}
                    </li>
                    <hr className={styles.card__bottom__divider} />
                    <li className={styles.card__bottom__features__feature}>
                      <span>Apple Pay, Android Pay:</span> {tariff.features[1]}
                    </li>
                    <hr className={styles.card__bottom__divider} />
                    <li className={styles.card__bottom__features__feature}>
                      <span>Электронные кошельки:</span> {tariff.features[2]}
                    </li>
                    <hr className={styles.card__bottom__divider} />
                    <li className={styles.card__bottom__features__feature}>
                      <span>Оборот:</span> {tariff.features[3]}
                    </li>
                  </ul>
                  <div className={styles.card__bottom__price}>
                    {tariff.price.old !== tariff.price.current ? (
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                        }}
                      >
                        <span>{tariff.price.current}</span>
                        <p className={styles.card__bottom__price__oldPrice}>
                          {tariff.price.old}
                        </p>
                      </div>
                    ) : (
                      <span>{tariff.price.current}</span>
                    )}

                    <button>Оплатить</button>
                  </div>
                </div>
              </div>
            ))}
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
};

export default TariffsPage;
