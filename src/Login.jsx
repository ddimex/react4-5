import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./FormComponent.css";

const Login = ({ onLogin }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    onLogin();
    setIsSubmitted(true);
  };

  return (
    <div className="innerContainer">
      <h1 className="pageTitle">LOG IN</h1>
      <div className="pageContainer">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="container">
            <input
              placeholder="Email"
              {...register("email", { required: true })}
            />
            {errors.email && <span>This field is required</span>}

            <input
              placeholder="Password"
              {...register("password", { required: true })}
            />
            {errors.password && <span>This field is required</span>}

            <button className="btn" type="submit">
              LOG IN
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
