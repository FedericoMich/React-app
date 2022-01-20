import './App.css';
import { Outlet} from "react-router-dom";
import {Head } from './layout/head/Head'


function App() {

  return (
    <div className="App">
      <Head/>
      <Outlet />
    </div>
  );
}
export default App;
