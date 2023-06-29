import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validations } from "./validations";

const Form = ({ login }) => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = event => {
    const { value, name } = event.target;
    setUserData({
      ...userData,
      [name]: value
    });

    setErrors(validations({ ...userData, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    login(userData);
    console.log("Submit clicked");
    navigate("/home"); // Navegar a la página de inicio después del inicio de sesión exitoso
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label>Email(pabloganin@gmail.com)</label>
        <input
          name="email"
          type="text"
          placeholder="Email"
          value={userData.email}
          onChange={handleInputChange}
        />
        {errors.email &&
          <p>
            {errors.email}
          </p>}
        <label>Password(123456)</label>
        <input
          name="password"
          type="text"
          placeholder="Ingrese tu password"
          value={userData.password}
          onChange={handleInputChange}
        />
        {errors.password &&
          <p>
            {errors.password}
          </p>}
        <button type="Ingresar" />
      </form>
    </div>
  );
};

export default Form;
