import React, { useState } from "react";
import { useForm } from "../hooks/useForm";

export const FomularioComponent = () => {
  const [formState, onImputChange] = useForm();

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form>
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
            onChange={onInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Enter your Email"
            value={email}
            onChange={onInputChange}
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
            onChange={onInputChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};
