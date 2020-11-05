import logo from './assets/images/logo.svg';
import './css/App.css';

//import others
import information from "./information.json";

export default function App() {
  
  return (
    <div className="App">
      
      <div className="posts">
        <h1>Package Tracking Viewer</h1>
        { information.map(post => {
          return(
            <div key={ post.id} className="post">
              <h4>id:{ post.id }</h4>
              <p>Status:{ post.status }</p>
              <p>ETA:{ post.eta }</p>
            </div>
          )
        })}
      </div>
    </div>
  );
}


