import React from "react"
import './App.scss';
import Button from "./component/Button/button.component";
import {ReactComponent as HamMenu} from "./hamburge-menu.svg";
function App() {
  const menuItems = ["مزایا", "عملکرد", "مواد موثره", "روش استفاده", "سوالات متداول"]
  return (
    <div className="App">
      <section className="section-1">
        <div className="head-menu">
          <div className="head-menu-holder">
            <HamMenu/>
            <h4>سرم روشن کننده تراست </h4>
            {
              menuItems.map((item, index) => <span key={index}>{item}</span>)
            }
            <Button text="خرید کنید"/>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
