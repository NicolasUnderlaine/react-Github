import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import FormPage from "./FormPage";
import TablePage from "./TablePage";

function App() {
  const [cadastros, setCadastros] = useState({
    alunos: [],
    professores: [],
    coordenadores: [],
    diretor: []
  });

  function adicionarCadastro(tipo, nome) {
    setCadastros({
      ...cadastros,
      [tipo]: [...cadastros[tipo], nome]
    });
  }

  return (
    <BrowserRouter>
      <nav className="navbar-custom">
        <div className="nav-container">

          <Link to="/" className="logo">
            <div className="logo-icon">E</div>

            <div>
              <strong>Educa</strong>
              <span>Gestão Escolar</span>
            </div>
          </Link>

          <div className="nav-links">
            <Link to="/">Cadastrar</Link>
            <Link to="/alunos">Alunos</Link>
            <Link to="/professores">Professores</Link>
            <Link to="/coordenadores">Coordenadores</Link>
            <Link to="/diretor">Diretor</Link>
          </div>

        </div>
      </nav>

      <main className="main-container">
        <Routes>

          <Route
            path="/"
            element={
              <FormPage
                adicionarCadastro={adicionarCadastro}
              />
            }
          />

          <Route
            path="/alunos"
            element={
              <TablePage
                titulo="Alunos"
                descricao="Confira os alunos cadastrados."
                nomes={cadastros.alunos}
              />
            }
          />

          <Route
            path="/professores"
            element={
              <TablePage
                titulo="Professores"
                descricao="Confira os professores cadastrados."
                nomes={cadastros.professores}
              />
            }
          />

          <Route
            path="/coordenadores"
            element={
              <TablePage
                titulo="Coordenadores"
                descricao="Confira os coordenadores cadastrados."
                nomes={cadastros.coordenadores}
              />
            }
          />

          <Route
            path="/diretor"
            element={
              <TablePage
                titulo="Diretor"
                descricao="Confira o diretor cadastrado."
                nomes={cadastros.diretor}
              />
            }
          />

        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;