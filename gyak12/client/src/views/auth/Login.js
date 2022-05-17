import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../state/authSlice";
import { useLoginMutation } from "../../state/graphilogicsApiSlice";

const Login = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();

  const [authLogin] = useLoginMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { username, password } = data;

    const newErrors = {};
    if (username === "") {
      newErrors.username = "Username is required";
    }
    if (password === "") {
      newErrors.password = "Password is required";
    }
    setErrors(newErrors);

    if (Object.values(newErrors).length > 0) {
      return;
    }

    try {
      const result = await authLogin({
        strategy: "local",
        email: username,
        password: password,
      }).unwrap();

      dispatch(
        login({
          user: result.user,
          token: result.accessToken,
        })
      );
    } catch (err) {
      newErrors.username = "Login error";
      setErrors(newErrors);
    }
  };

  const handleChange = (e) => {
    // console.log(e.target.value);

    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        autoFocus
        value={data.username}
        onChange={handleChange}
        variant="standard"
        type="text"
        id="username"
        name="username"
        label="Felhasználónév"
        error={errors.username !== undefined}
        helperText={errors.username}
      />
      <br />
      <TextField
        value={data.password}
        onChange={handleChange}
        variant="standard"
        type="password"
        id="password"
        name="password"
        label="Jelszó"
        error={errors.password !== undefined}
        helperText={errors.password}
      />
      <br />
      <Button type="submit" variant="contained">
        Elküld
      </Button>
    </form>
  );
};

export default Login;
