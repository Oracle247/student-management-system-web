import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import RedirectPage from './Pages/RedirectPage'
import Home from './Pages/Home'

function App() {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://buttons.github.io/buttons.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <Router>
      <main className="oApp">
        <Routes>
          <Route path="/" element={<RedirectPage />} />
          {/* <Route path="/redirect" element={<RedirectPage />} /> */}
        </Routes>
      </main>
    </Router>

  );
}

export default App;
