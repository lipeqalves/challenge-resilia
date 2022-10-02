import { Chart } from "react-google-charts";
import { Api } from "../../Service/Api";
import { useState, useEffect } from "react";


export const Grafico = () => {
  const [alunos, setAlunos] = useState([]);
  const [rengeIdades1, setRengeIdades1] = useState([]);
  const [rengeIdades2, setRengeIdades2] = useState([]);
  const [rengeIdades3, setRengeIdades3] = useState([]);
  const [rengeIdades4, setRengeIdades4] = useState([]);
  const [rengeIdades5, setRengeIdades5] = useState([]);

  useEffect(() => {
    Api.get("/alunos").then((res) => {
      setAlunos(res.data);
      graficoIdade(res.data);
    });
    const graficoIdade = (alunoIdades) => {
      const idades1 = [];
      const idades2 = [];
      const idades3 = [];
      const idades4 = [];
      const idades5 = [];
      alunoIdades.map((alunoIdade) => {
        if (alunoIdade.idade >= 18 && alunoIdade.idade <= 21) {
          idades1.push(parseInt(alunoIdade.idade));
          setRengeIdades1(idades1);
        } else if (alunoIdade.idade > 21 && alunoIdade.idade <= 25) {
          idades2.push(parseInt(alunoIdade.idade));
          setRengeIdades2(idades2);
        } else if (alunoIdade.idade > 25 && alunoIdade.idade <= 29) {
          idades3.push(parseInt(alunoIdade.idade));
          setRengeIdades3(idades3);
        } else if (alunoIdade.idade > 29 && alunoIdade.idade <= 33) {
          idades4.push(parseInt(alunoIdade.idade));
          setRengeIdades4(idades4);
        } else {
          idades5.push(parseInt(alunoIdade.idade));
          setRengeIdades5(idades5);
        }
      });
    };
  }, []);

  const mediaIdade = (rengeIdades) => {
    return rengeIdades.reduce((prev, corrent) => {
      return (prev + corrent) / alunos.length;
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
        ["Acima de 33 anos",mediaIdade(rengeIdades5)],
      ]}
      options={options}
    />
  );
};
