import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,
        Routes,
        Route
} from 'react-router-dom';
import App from './App';
import Search from './routes/search';
import About from './routes/about';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="search" element={<Search />} />
    <Route path="about" element={<About />} />
  </Routes>
  </BrowserRouter>
);

