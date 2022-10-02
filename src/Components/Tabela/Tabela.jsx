import { TR } from "../TR/TR";
import { Api } from "../../Service/Api";
import { useState, useEffect } from "react";

import styles from "./Tabela.module.css"

export const Tabela = () => {
  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    Api.get("/alunos").then((res) => setAlunos(res.data));
  });

  return (
    <table className={styles.tabela}>
      <thead>
        <tr>
          <th colSpan="4">Alunos</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>#</th>
          <th>Nome</th>
          <th>Turma</th>
          <th>Idade</th>
        </tr>
        {alunos.map((aluno) => (
          <TR
            key={aluno.id}
            id={aluno.id}
            nome={aluno.nome}
            turma={aluno.turma}
            idade={aluno.idade}
          />
        )).slice(0, 14)}
      </tbody>
    </table>
  );
};
