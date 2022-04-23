import { Button, TextField } from "@mui/material";
import { useState } from "react";

// import "./private.css";
import styles from "./Login.module.css";

const Login = ({ login }) => {
  // console.log(styles);

  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
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

    login(username);
  };

  const handleChange = (e) => {
    // console.log(e.target.value);

    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.bordered}>
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
