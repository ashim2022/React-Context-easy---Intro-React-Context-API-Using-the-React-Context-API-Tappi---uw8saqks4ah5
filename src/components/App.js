import React from "react";
import "../styles/App.css";
import { UserProfile } from "./UserProfile";
import { createContext } from "react";
const UserContext = createContext();
const App = () => {
  return (
    <div id="main">
      <UserContext.Provider value={{name:"Newton",age:3}}>
        <UserProfile />
      </UserContext.Provider>
    </div>
  );
};

export default App;
export { UserContext };
