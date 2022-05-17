import React, { useState } from "react";
import arrow from "../images/icon-arrow.svg";
import icon from "../images/icon-error.svg";
import "./Input.css";

export const Input = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");

  const handleOnChange = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // don't remember from where i copied this code, but this works.
    let re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(email)) {
      setError(false);
    } else {
      setError(true);
    }
  };
  return (
    <>
      <form onSubmit={handleOnChange}>
      {error && <img className="icon-error" src={icon} alt="icon-error" />}
        <input
          type="text"
          className={`${error ? "error-input" : ""}`}
          placeholder="Email Address"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">
          <img src={arrow} alt="arrow" />
        </button>
      </form>
      {error && <span className="alert">Please provide a valid email</span>}
    </>
  );
};
