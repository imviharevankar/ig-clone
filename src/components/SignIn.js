import { TextField, Button } from "@material-ui/core";
import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";

import "./SignIn.scss";

function SignIn() {
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
  });
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setUserInfo(data);
    console.log(userInfo);
  };

  return (
    <div className="signIn">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Sign In</h1>

        <TextField
          variant="outlined"
          label="Username"
          placeholder="e.g imviharevankar"
          fullWidth
          className="signIn__input"
          type="text"
          watch
          {...register("username", { required: "Username is required" })}
          helperText={
            errors.username && (
              <span style={{ color: "salmon" }}>
                {errors.username?.message}
              </span>
            )
          }
        />

        <TextField
          variant="outlined"
          label="Password"
          type="password"
          placeholder="********"
          className="signIn__input"
          fullWidth
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password should be greater than 6 characters",
            },
          })}
          helperText={
            errors.username && (
              <span style={{ color: "salmon" }}>
                {errors.password?.message}
              </span>
            )
          }
        />
        <Button type="submit" variant="contained">
          Sign In
        </Button>
      </form>
    </div>
  );
}

export default SignIn;
