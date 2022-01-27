import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ReposPage } from './Pages/repos';
import { NotFound } from './components/notFound/notFound';
import { ClassesPage } from './Pages/classes';
import { UsersPage } from './Pages/users';
import { LogoutPage } from './Pages/logout';
import { LoginPages } from './Pages/login';
import { DetailsPage } from './Pages/details';

ReactDOM.render(

  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route path="/repos" element={<ReposPage />} />
          <Route path="/classes" element={<ClassesPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/dettagli/:login/:repoName" element={<DetailsPage />} />
        </Route>
        <Route path="/logout" element={<LogoutPage />} />
        <Route path="/login" element={<LoginPages />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>

  , document.getElementById('root')
);

reportWebVitals();
