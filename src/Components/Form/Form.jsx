import styles from "./Form.module.css";
import { useState } from "react";
import { Success } from "../../Util/Util"


import { Api } from "../../Service/Api";
export const Form = () => {


  const [nome, setNome] = useState();
  const [turma, setTurma] = useState();
  const [idade, setIdade] = useState();


  const cadastraAlunos = (nome, turma, idade) => {
    Api.post("alunos", {
      nome,
      turma,
      idade,
    });
  };

  return (
    <form className={styles.form}>
      <div>
        <input
          className={styles.input}
          placeholder="Nome do Estudante"
          type="text"
          nome="nome"
          id="nome"
          onChange={(e) => {
            setNome(e.target.value);

          }}
        />
      </div>
      <div>
        <input
          className={styles.input}
          placeholder="Turma"
          type="text"
          turma="turma"
          id="turma"
          onChange={(e) => {
            setTurma(e.target.value);
            
          }}
        />
      </div>
      <div>
        <input
          className={styles.input}
          placeholder="Idade"
          type="idade"
          idade="idade"
          id="idade"
          onChange={(e) => {
            setIdade(e.target.value);
          }}
        />
      </div>
      <div>
        <button
          className={styles.btn}
          onClick={(e) => {
            e.preventDefault();
            cadastraAlunos(nome, turma, idade);
            Success();
          }}
        >
          Enviar{" "}
        </button>
      </div>
    </form>
  );
};
