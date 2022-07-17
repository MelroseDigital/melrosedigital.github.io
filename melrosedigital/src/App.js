import './App.css';
import image from "./img/TMblack.svg";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={image} className="App-logo" alt="logo" />
          <p>
            Tenyce Melrose<code> : </code>Software Developer
          </p>
          <a
            className="App-link"
            href="https://github.com/MelroseDigital"
            target="_blank"
            rel="noopener"
          >
            View Github Profile
          </a>
          <a
            className="App-link"
            href="https://app.revature.com/profile/Melrose/6f3530d4bd907a14942dafda0fab0290 "
            target="_blank"
            rel="noopener"
          >
            View Professional Portfolio
            <a
            className="App-link"
            href="https://linkedin.com "
            target="_blank"
            rel="noopener"
          >
            View LinkedIn Profile
          </a>
          </a>
        </header>
      </div>
    </>
  );
}

export default App;
