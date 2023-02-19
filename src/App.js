import "./App.css";
import Dashboard from "./Dashboard";
import ImageLogo from "./images/whimsylogo3-white.png";

function App() {
  return (
    <div className="App">
      {/* App Header */}
      <header className="App-header">
        {/* Logo */}
        <div className="App_logo">
          <img className="App_logo_img" src={ImageLogo} alt="" />
        </div>
        {/* Company Name */}
        <div className="App_title">tms dispatch app</div>
        {/* App Welcome Info */}
        <div className="App_nameStamp">Welcome back, dee!</div>
      </header>
      <Dashboard />
    </div>
  );
}

export default App;
