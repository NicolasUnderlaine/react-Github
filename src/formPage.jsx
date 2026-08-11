import { useState } from "react";
import { useNavigate } from "react-router-dom";

function FormPage({ adicionarCadastro }) {
  const [nome, setNome] = useState("");

  const navigate = useNavigate();

  function salvar(tipo, rota) {
    if (nome.trim() === "") {
      alert("Digite um nome.");
      return;
    }

    adicionarCadastro(tipo, nome.trim());

    setNome("");

    navigate(rota);
  }

  return (
    <div className="cadastro">

      <h1>Cadastro</h1>

      <p className="descricao">
        Cadastre uma pessoa no sistema.
      </p>

      <label htmlFor="nome">
        Nome
      </label>

      <input
        id="nome"
        type="text"
        placeholder="Digite o nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <h2>Tipo de cadastro</h2>

      <div className="botoes">

        <button
          onClick={() => salvar("alunos", "/alunos")}
        >
          Salvar Aluno
        </button>

        <button
          onClick={() => salvar("professores", "/professores")}
        >
          Salvar Professor
        </button>

        <button
          onClick={() => salvar("coordenadores", "/coordenadores")}
        >
          Salvar Coordenador
        </button>

        <button
          onClick={() => salvar("diretor", "/diretor")}
        >
          Salvar Diretor
        </button>

      </div>

    </div>
  );
}

export default FormPage;