import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./FormComponent.css";
import { useForm } from "react-hook-form";
import Login from "./Login";

// const FormComponent = ({ setFullName, setUsername: setPropUsername }) => {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [username, setUsername] = useState("");
//   const [email, setemail] = useState("");
//   const [password, setpassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const [toggle, setToggle] = useState(false);
//   const [age, setAge] = useState(0);

//   useEffect(() => {
//     setFullName(firstName + " " + lastName);
//     setPropUsername(username);
//   }, [isSubmitted]);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setIsSubmitted(true);
//     alert("Your application is submitted");
//   };

const FormComponent = ({ onSignUp }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    onSignUp(data.firstName + " " + data.lastName, data.username);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return <Login />;
  }

  return (
    <div className="innerContainer">
      <h1 className="pageTitle">SIGN UP</h1>
      <div className="pageContainer">
        {/* <div className="line"></div> */}
        {/* <form >
        <div className="container">
          uncontrolled input
          <input onChange={(value) => setFirstName()} />

          controlled input
          <input
            type="text"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            placeholder="First Name"
          />
          <input
            type="text"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            placeholder="Last Name"
          />
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            placeholder="Username"
          />
          <input
            type="number"
            value={age}
            onChange={(event) => setAge(event.target.value)}
            placeholder="Age"
          />
          <input
            type="email"
            value={email}
            onChange={(event) => setemail(event.target.value)}
            placeholder="Email"
          />
          <input
            type="password"
            value={password}
            onChange={(event) => setpassword(event.target.value)}
            placeholder="Password"
          />
          <input
            type="password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            placeholder="Confirm Password"
          />
          <button
            className="btn flexRow"
            onClick={(event) => handleSubmit(event)}
            type="submit"
          >
            SIGN UP
          </button>
        </div>
      </form> */}

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="container">
            <input
              placeholder="First Name"
              {...register("firstName", { required: true })}
            />
            {errors.firstName && <span>This field is required</span>}

            <input
              placeholder="Last Name"
              {...register("lastName", { required: true, minLength: 2 })}
            />
            {errors.lastName && <span>This field is required</span>}

            <input
              placeholder="Username"
              {...register("username", { required: true })}
            />
            {errors.username && <span>This field is required</span>}

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

            <input
              placeholder="Confirm Password"
              {...register("confirmPassword", { required: true })}
            />
            {errors.confirmPassword && <span>This field is required</span>}

            <button className="btn" type="submit">
              SIGN UP
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormComponent;
