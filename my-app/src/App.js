import './App.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faCoffee);

export default function App() {
  return (
    <div className="App">
      <h1>Cup of Coffee</h1>
      <FontAwesomeIcon icon="coffee" />
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/about">About</Link>
        <Link to="/search">Search</Link>
      </nav>
    </div>
  );
}
