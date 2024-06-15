import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import useDeviceDetect from "../../hooks/useDeviceDetect ";

import ContactForm from "../ContactForm";

import styles from "./style.module.scss";

const FormPage = () => {
  const { isTablet, isMobile, isDesktop } = useDeviceDetect();

  const options = {
    items: 1,
    nav: isDesktop ? true : false,
    rewind: true,
    autoplay: isDesktop ? false : true,
    center: true,
    margin: 100,
    loop: true,
  };
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div
          className={`owl-carousel-container slider-one dots-one ${styles.slider}`}
        >
          <OwlCarousel className={styles.slider} {...options}>
            <div className={styles.slider__item}>
              <h4>
                Patriot —&nbsp;&nbsp;это ключ к успешному бизнесу по всей
                территории РФ
              </h4>
              <p>
                Роскошный, быстрый, практичный автомобиль на выгодных условиях
                лизинга. Станьте ближе к мечте и сократите налог на имущество в
                три раза.
              </p>
            </div>
            <div className={styles.slider__item}>
              <h4>
                Patriot — это ключ к успешному бизнесу по всей территории РФ
              </h4>
              <p>
                Роскошный, быстрый, практичный автомобиль на выгодных условиях
                лизинга. Станьте ближе к мечте и сократите налог на имущество в
                три раза.
              </p>
            </div>
          </OwlCarousel>
        </div>
        <div className={styles.form}>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default FormPage;
