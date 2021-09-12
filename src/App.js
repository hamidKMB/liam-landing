import React from "react"

import Button from "./component/Button/button.component";
import Benefit from "./component/benefit/benefit.component";

import {ReactComponent as HamMenu} from "./hamburge-menu.svg";

import { menuItems, benefits } from "./data/data";

import './App.scss';

function App() {
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
          <div className="button-container">
            <Button text="خرید کنید" />
          </div>
        </div>
      </section>
      <section className="section-2">
        <div className="section-2-head">
          <h1>مزایای سرم روشن کننده تراست</h1>
          <div className="border-bottom" />
        </div>
        <div className="benefits-container">
          <img
            src={require("./assets/Pictures/brightening-serum1 1.png").default}
            alt="brightening-serum1"
            className="brightning-serum"
          />
          <div className="benefits-holder">
            {benefits.map((item, index) => (
              <Benefit key={index} benefit={item.benefit} logo={item.logo} />
            ))}
          </div>
        </div>
      </section>
      <section className="section-3">
        <div className="performance-part">
          <div className="performance-description">
            <h3 className="performance-head">عملکرد سرم روشن‌کننده تراست</h3>
            <p className="performance-paragraph">
              سرم روشن‌کننده تراست به عنوان یک محصول مراقبتی و درمانی پوست، ضمن
              آبرسانی و مرطوب‌کنندگی پوست، به مقابله با لک‌های آن می‌پردازد.
              مواد مؤثره موجود در این محصول با مهار آنزیم تیروزیناز، تولید
              ملانین در پوست را کاهش داده و از ایجاد لک بر روی آن جلوگیری
              می‌کند.
              <br /> این محصول با کاهش رنگدانه‌های پوست، پوست را روشن کرده و رنگ
              آن را در تمام نقاط یکسان می‌کند. <br />
              همچنین با داشتن خواص آنتی‌اکسیدانی، رادیکال‌های آزاد را مهار کرده
              و از آسیب آن‌ها به پوست جلوگیری می‌کند.
            </p>
          </div>
          <img
            src={require("./assets/Pictures/image 161360587.png").default}
            alt="skin"
            className="skin-image"
          />
        </div>
        <div className="buy-now-part">
        <div className="wrapper">
          <div className="container">
            <h1>برای دست‌یابی به پوستی روشن، یکدست و بدون لک عجله کنید!</h1>
          </div>
          <div className="button-and-brightness-text">
            <div className="button-container">
              <Button text="خرید کنید" white />
            </div>
            <span>BOOST BRIGHTNESS</span>
          </div>
        </div>
          <div className="image-container">
            <img
              src={
                require("./assets/Pictures/brightening-serum1 2.png").default
              }
              alt="serum-brightning-2"
              className="serum-brightning-2"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
