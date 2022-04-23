import { useState } from "react";
import Login from "./Login";
import Private from "./Private";

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const login = (username) => setLoggedInUser(username);
  const logout = () => setLoggedInUser(null);

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
