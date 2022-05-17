import { useState } from "react";
import logo from "./images/logo.svg";
import "./App.css";
import { Input } from "./components/Input";
import pattern from './images/bg-pattern-desktop.svg'
import women from "./images/hero-desktop.jpg";
import womenMobile from "./images/hero-mobile.jpg";

function App() {
  return (
    <main className="App">
      <img src={pattern} alt="pattern" className="pattern" />
      <div className="left">
        <img src={logo} alt="logo" className="logo" />
        <span className="left__header-span">WE'RE</span>
        <h1 className="left__header">COMING SOON</h1>
        <p className="left__subtitle">
          Hello fellow shoppers! We're currently building our new fashion store.
          Add your email below to stay up-to-date with announcements and our
          launch deals.
        </p>
        <Input />
      </div>
      <div className="right">
        <img className="women" src={women} alt="" />
        <img className="women-mobile" src={womenMobile} alt="" />
      </div>
    </main>
  );
}

export default App;
