function TablePage({ titulo, descricao, nomes }) {
  return (
    <div>

      <div className="page-heading">

        <div>
          <span className="page-tag">
            LISTAGEM
          </span>

          <h1>{titulo}</h1>

          <p>{descricao}</p>
        </div>

        <div className="counter">
          <strong>{nomes.length}</strong>
          <span>cadastros</span>
        </div>

      </div>

      <div className="table-card">

        <div className="table-heading">

          <div>
            <h2>Lista de {titulo}</h2>
            <span>Pessoas cadastradas</span>
          </div>

        </div>

        {nomes.length === 0 ? (

          <div className="empty">

            <div className="empty-symbol">
              -
            </div>

            <h3>Nenhum cadastro encontrado</h3>

            <p>
              Ainda não existem pessoas cadastradas.
            </p>

          </div>

        ) : (

          <table className="custom-table">

            <thead>
              <tr>
                <th>#</th>
                <th>Nome</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>

              {nomes.map((nome, index) => (

                <tr key={index}>

                  <td>
                    {index + 1}
                  </td>

                  <td>
                    <div className="person-name">

                      <div className="avatar">
                        {nome.charAt(0).toUpperCase()}
                      </div>

                      <strong>{nome}</strong>

                    </div>
                  </td>

                  <td>
                    <span className="status">
                      Ativo
                    </span>
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        )}

      </div>

    </div>
  );
}

export default TablePage;