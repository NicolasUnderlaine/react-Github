import React from "react";
import { HashRouter as Routes, Routes, Route, Link } from "react-router-dom";

import Inicio from "./pages/Inicio";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import Experiencia from "./pages/Experiencia";
import Projetos from "./pages/Projetos";

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <span className="navbar-brand">Meu Currículo</span>

            <div className="navbar-nav">
              <Link className="nav-link" to="/">
                Início
              </Link>

              <Link className="nav-link" to="/sobre">
                Sobre
              </Link>

              <Link className="nav-link" to="/experiencia">
                Experiência
              </Link>

              <Link className="nav-link" to="/projetos">
                Projetos
              </Link>

              <Link className="nav-link" to="/contato">
                Contato
              </Link>
            </div>
          </div>
        </nav>

        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/experiencia" element={<Experiencia />} />
            <Route path="/projetos" element={<Projetos />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;