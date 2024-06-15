import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./style.scss";

export default class BurgerMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItems: [
        { id: 1, title: "Услуги", isOpen: false },
        { id: 2, title: "Продукция", isOpen: false },
        { id: 3, title: "Проекты", isOpen: false },
        { id: 4, title: "Компания", isOpen: false },
      ],
    };
  }

  toggleServices = (itemId) => {
    this.setState((prevState) => ({
      menuItems: prevState.menuItems.map((item) =>
        item.id === itemId ? { ...item, isOpen: !item.isOpen } : item
      ),
    }));
  };

  render() {
    return (
      <Menu
        className="menu"
        right
        width={"100%"}
        customBurgerIcon={<img src="/images/menu_icon.svg" />}
        customCrossIcon={<img src="/images/menu_close_icon.svg" />}
      >
        {this.state.menuItems.map((item) => (
          <div className="menu-item-wrapper" key={item.id}>
            <div
              className="menu-item"
              onClick={() => this.toggleServices(item.id)}
            >
              {item.title}
              <div className={`arrow ${item.isOpen ? "arrow-open" : ""}`}></div>
            </div>
            <ul className={`submenu ${item.isOpen ? "submenu-open" : ""}`}>
              <li>
                <a href="#">Управление активами и инвестиции</a>
              </li>
              <li>
                <a href="#">Автоматизация бизнеса</a>
              </li>
              <li>
                <a href="#">Финансовый аудит</a>
              </li>
              <li>
                <a href="#">Юридическая практика</a>
              </li>
              <li>
                <a href="#">Лизинг</a>
              </li>
              <li>
                <a href="#">Информационная безопасность</a>
              </li>
            </ul>

            <hr class="divider" />
          </div>
        ))}
        <div className="info">
          <img src="/images/geo_icon.svg" alt="geo icon" />
          <span>Санкт-Петербург</span>
        </div>
        {this.props.isMobile && (
          <div className="info">
            <img src="/images/phone_icon.svg" alt="geo icon" />
            <span>+7 (800) 941-34-28</span>
          </div>
        )}
      </Menu>
    );
  }
}
