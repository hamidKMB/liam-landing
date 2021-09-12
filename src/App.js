import React from "react"

import Button from "./component/Button/button.component";

import {ReactComponent as HamMenu} from "./hamburge-menu.svg";

import './App.scss';

function App() {
  const menuItems = ["مزایا", "عملکرد", "مواد موثره", "روش استفاده", "سوالات متداول"]
  return (
    <div className="App">
      <section className="section-1">
        <div className="head-menu">
          <div className="head-menu-holder">
            <HamMenu />
            <h4>سرم روشن کننده تراست </h4>
            {menuItems.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
            <Button text="خرید کنید" />
          </div>
        </div>
        <div className="product-preview">
          <h1 className="product-advertising-slogan">
            خداحافظی با لک‌های پوست !
          </h1>
          <div className="product-pictures">
            <img
              src={require("./assets/Pictures/product-1.png").default}
              alt="side-product-img"
              className="side-product-img"
            />
            <img
              src={require("./assets/Pictures/product.png").default}
              alt="main-product-img"
              className="main-product-img"
            />
            <img
              src={require("./assets/Pictures/square.png").default}
              alt="square"
              className="square"
            />
          </div>
          <p className="product-description">
            سرم روشن‌کننده تراست، ضمن آبرسانی و تأمین رطوبت پوست شما، آن را روشن
            کرده، لک‌های پوستی‌اش را برطرف ساخته و آن را با مواد مغذی مناسب
            تغذیه می‌کند. با این محصول دیگر پوست خسته و کدر معنا ندارد!
          </p>
        </div>
      </section>
      <section className="section-2">
          <div className="button-container">
            <Button text="خرید کنید"/>
          </div>

      </section>
    </div>
  );
}

export default App;
