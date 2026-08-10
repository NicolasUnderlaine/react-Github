import React from "react";

// Componente que exibe a seção de projetos
function Projetos() {
  return (
    // Card do Bootstrap para organizar o conteúdo
    <div className="card shadow-sm p-4 mt-4">
      <h2 className="text-warning">Projetos</h2>

      <ul>
        <li>
          {/* Link para abrir o projeto em uma nova aba */}
          <a
            href="https://nicolasunderlaine.github.io/profile/"
            target="_blank"
            rel="noreferrer"
          >
            Currículo online criado em Bootstrap
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Projetos;