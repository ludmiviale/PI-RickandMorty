import { useState, useEffect } from "react";
import validation from "./validation";
/* styles */
import "./loginForm.css";

const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    if (userData.email !== "" || userData.password !== "") {
      setErrors(validation(userData));
    }
  }, [userData]);

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <form onSubmit={handleSubmit} className="loginForm">
      <div className="loginField">
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <div className="loginField">
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
        />
        {errors.password && <p>{errors.password}</p>}
      </div>

      <button type="submit" className="btn">
        Log in
      </button>
    </form>
  );
};

export default Form;
