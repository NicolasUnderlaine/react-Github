import React from "react";

// Componente que apresenta as experiências profissionais e acadêmicas
function Experiencia() {
  return (
    // Card do Bootstrap para organizar a seção
    <div className="card shadow-sm p-4 mt-4">
      <h2 className="text-info">Experiência Profissional</h2>

      {/* Lista das experiências */}
      <ul className="list-group">
        <li className="list-group-item">
          Bolsista pela Caio Induscar Ltda.
        </li>

        <li className="list-group-item">
          Projetos acadêmicos em React, Python, JavaScript e Java.
        </li>

        <li className="list-group-item">
          Desenvolvimento de sites responsivos.
        </li>
      </ul>
    </div>
  );
}

export default Experiencia;