import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useRef } from "react";

// import "./private.css";
import styles from "./Login.module.css";

const Login = ({ login }) => {
  // console.log(styles);

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

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

  return (
    <form onSubmit={handleSubmit} className={styles.bordered}>
      <TextField
        autoFocus
        inputRef={usernameRef}
        defaultValue=""
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
        inputRef={passwordRef}
        defaultValue=""
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
