import { useState } from "react";
import Login from "./Login";
import Private from "./Private";

const useAuthService = () => {
  // Data
  const [loggedInUser, setLoggedInUser] = useState(null);

  // Operations
  const login = (username) => setLoggedInUser(username);
  const logout = () => setLoggedInUser(null);

  // Service
  const service = { loggedInUser, login, logout };

  return service;
};

function App() {
  // const [loggedInUser, setLoggedInUser] = useState(null);

  // const login = (username) => setLoggedInUser(username);
  // const logout = () => setLoggedInUser(null);

  const { loggedInUser, login, logout } = useAuthService();

  return (
    <div>
      {loggedInUser ? (
        <Private logout={logout} username={loggedInUser} />
      ) : (
        <Login login={login} />
      )}
    </div>
  );
}

export default App;
