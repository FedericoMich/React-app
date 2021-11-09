import './App.css';
import { Head } from './components/head/Head';
import { IndexContent } from './components/content/indexContent';
import { ListRepos } from './api/repos';


function App() {
  return (
    <div className="App">
      <Head/>
      <IndexContent/>
      <ListRepos/>
    </div>
  );
}
export default App;
