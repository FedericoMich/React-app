import React, { useState } from 'react'
import { Outlet } from "react-router-dom";
import { Head } from './layout/head/Head'
import { User } from "./context/UserContext";
import { students } from "./api/userMock";

import './App.css';



function App() {
  const [user, setUser]= useState(students)
  const value = { user, setUser };
 
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
