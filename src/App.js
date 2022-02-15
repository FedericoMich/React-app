import React, { useState } from 'react'
import { Outlet } from "react-router-dom";
import { Head } from './layout/head/Head'
import { User } from "./context/UserContext";
import './App.css';


function App() {

  
  const [log, setLog] = useState(User._currentValue2[0].session)
  const value = { log, setLog };

  console.log("Log = " + log);

  return (
    <User.Provider value={value}>
      <div className="App">
        <Head />
        <Outlet />
      </div>
    </User.Provider>
  );
}
export default App;
