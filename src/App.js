import React, { useState } from 'react'
import { Outlet } from "react-router-dom";
import { Head } from './layout/head/Head'
import { User } from "./context/UserContext";
import { getSession } from './context/getSession';
import './App.css';


function App() {

  
  const [log, setLog] = useState(getSession())
  const value = { log, setLog };

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
