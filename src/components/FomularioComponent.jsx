import React, { useEffect, useRef, useState } from "react";
import { useForm } from "../hooks/useForm";

export const FomularioComponent = () => {
  const focusRef = useRef();

  const inicialForm = {
    userName: "",
    email: "",
    password: "",
  };
  const { formState, userName, email, password, onImputChange } =
    useForm(inicialForm);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
  };

  useEffect(() => {
    focusRef.current.focus();
  }, []);

  return (
    <>
      <h1>Custom Hook para formularios</h1>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="useName" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            name="userName"
            placeholder="Enter your username"
            value={userName}
            onChange={onImputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            ref={focusRef}
            type="email"
            className="form-control"
            name="email"
            placeholder="Enter your Email"
            value={email}
            onChange={onImputChange}
          />
          <div name="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            className="form-control"
            name="password"
            value={password}
            onChange={onImputChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};
