import React from "react";

function Inicio() {
  return (
    <div className="container mt-5">

      {/* Cabeçalho */}
      <div
        className="text-center text-white p-5 rounded shadow-lg"
        style={{
          background: "linear-gradient(135deg, #08a3f1)",
        }}
      >
        <h1 className="fw-bold">Meu Currículo</h1>
        <p className="lead mb-0">
          Desenvolvido com React + Vite + Bootstrap
        </p>
      </div>

      <div className="row mt-4">

        {/* Hard Skills */}
        <div className="col-md-6 mb-4">
          <div className="card shadow border-0 h-100">
            <div className="card-header bg-primary text-white">
              <h3 className="mb-0">Hard Skills</h3>
            </div>

            <div className="card-body">
              <span className="badge - m-1 p-2">HTML</span>
              <span className="badge - m-1 p-2">CSS</span>
              <span className="badge - m-1 p-2">JavaScript</span>
              <span className="badge - m-1 p-2">React</span>
              <span className="badge - m-1 p-2">Bootstrap</span>
              <span className="badge - m-1 p-2">Git</span>
              <span className="badge - m-1 p-2">GitHub</span>
              <span className="badge - m-1 p-2">SQL</span>
              <span className="badge - m-1 p-2">Python</span>
            </div>
          </div>
        </div>

        {/* Soft Skills */}
        <div className="col-md-6 mb-4">
          <div className="card shadow border-0 h-100">
            <div className="card-header bg-success text-white">
              <h3 className="mb-0">Soft Skills</h3>
            </div>

            <div className="card-body">
              <span className="badge  m-1 p-2">Comunicação</span>
              <span className="badge - m-1 p-2">Trabalho em equipe</span>
              <span className="badge - m-1 p-2">Organização</span>
              <span className="badge - m-1 p-2">Responsabilidade</span>
              <span className="badge - m-1 p-2">Proatividade</span>
              <span className="badge - m-1 p-2">Criatividade</span>
              <span className="badge - m-1 p-2">Resolução de problemas</span>
              <span className="badge - m-1 p-2">Adaptabilidade</span>
              <span className="badge - m-1 p-2">Liderança</span>
              <span className="badge - m-1 p-2">Gestão do tempo</span>
            </div>
          </div>
        </div>
      </div>

    

    </div>
  );
}

export default Inicio;