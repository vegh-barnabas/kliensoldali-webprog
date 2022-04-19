import { TextField } from "@mui/material";
import { useEffect, useRef } from "react";

import styles from "./Login.module.css";

console.log(styles);

const Login = ({ login }) => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  return (
    <form className={styles.bordered}>
      <label htmlFor="username">Felhasználónév: </label>
      <TextField
        ref={usernameRef}
        variant="standard"
        type="text"
        id="username"
        name="username"
        defaultValue=""
        label="Felhasználónév"
        autoFocus
      />
      <br />
      <label htmlFor="password">Jelszó: </label>
      <TextField
        ref={passwordRef}
        variant="standard"
        type="password"
        id="password"
        name="password"
        defaultValue=""
        label="Jelszó"
      />
      <br />
      <button type="submit"> Elküld</button>
    </form>
  );
};

export default Login;
