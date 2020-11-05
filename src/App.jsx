import logo from './assets/images/logo.svg';
import './css/App.css';

//Components
import Card from "./components/Card";
import SearchBox from "./components/SearchBox";

//import others
import information from "./information.json";

export default function App() {
  
  return (
    <div className="App">
      <h1>Package Tracking Viewer</h1>
      <SearchBox />
      <Card />
      
    </div>
  );
}


