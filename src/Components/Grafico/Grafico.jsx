import { Chart } from "react-google-charts";
import { Api } from "../../Service/Api";
import { useState, useEffect } from "react";

export const Grafico = () => {
  const [rengeIdades1, setRengeIdades1] = useState([]);
  const [rengeIdades2, setRengeIdades2] = useState([]);
  const [rengeIdades3, setRengeIdades3] = useState([]);
  const [rengeIdades4, setRengeIdades4] = useState([]);
  const [rengeIdades5, setRengeIdades5] = useState([]);

  useEffect(() => {
    Api.get("/alunos").then((res) => {
      graficoIdade(res.data);
    });
    const idades1 = [];
    const idades2 = [];
    const idades3 = [];
    const idades4 = [];
    const idades5 = [];

    const graficoIdade = (alunos) => {
      alunos.map((alunoIdade) => {
        if (alunoIdade.idade >= 18 && alunoIdade.idade <= 21) {
          setRengeIdades1([idades1.push(parseInt(alunoIdade.idade))]);
        } else if (alunoIdade.idade > 21 && alunoIdade.idade <= 25) {
          setRengeIdades2([idades2.push(parseInt(alunoIdade.idade))]);
        } else if (alunoIdade.idade > 25 && alunoIdade.idade <= 29) {
          setRengeIdades3([idades3.push(parseInt(alunoIdade.idade))]);
        } else if (alunoIdade.idade > 29 && alunoIdade.idade <= 33) {
          setRengeIdades4([idades4.push(parseInt(alunoIdade.idade))]);
        } else {
          setRengeIdades5([idades5.push(parseInt(alunoIdade.idade))]);
        }
      });
    };
  });

  const mediaIdade = (rengeIdades) => {
    return rengeIdades.reduce((prev, corrent) => {
      return (prev + corrent) / rengeIdades.length;
    }, 0);
  };
  const options = {
    title: "Media das idades por faixa etária",
    pieHole: 0.3,
    Color: "#fff",
    is3D: false,
    backgroundColor: "#ffdd00",
    width: "320px",
    height: "300px",
  };
  return (
    <Chart
      chartType="PieChart"
      data={[
        ["Task", "Hours per Day"],
        ["De 18 a 21 anos", mediaIdade(rengeIdades1)],
        ["de 22 a 25 anos", mediaIdade(rengeIdades2)],
        ["de 26 a 29 anos", mediaIdade(rengeIdades3)],
        ["De 30 a 33 anos", mediaIdade(rengeIdades4)],
        ["Acima de 33 anos", mediaIdade(rengeIdades5)],
      ]}
      options={options}
    />
  );
};
