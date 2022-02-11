import "./App.css";
import logo from "./Holberton_Logo.jpg";
import { getFooterCopy, getFullYear } from "./utils";

function App() {
  return (
    <>
      <div className="App-header">
        <img src={logo} alt="Holberton Logo" />
        <h1>School Dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email" >Email</label>
        <input id="email" type="email" />
        <label htmlFor="password">Password</label>
        <input id="password" type="password" />
        <button>OK</button>
      </div>
      <div className="App-footer">
        <p>{`Copyright ${getFullYear()} - ${getFooterCopy(true)}`}</p>
      </div>
    </>
  );
}

export default App;
