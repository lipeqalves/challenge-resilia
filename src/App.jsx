import { Footer } from "./Components/Footer/Footer";
import { Form } from "./Components/Form/Form";
import { Header } from "./Components/Header/Header";
import { Tabela } from "./Components/Tabela/Tabela";
import { Grafico } from "./Components/Grafico/Grafico";

import styles from "./App.module.css";


function App() {
  return (
    <main className={styles.app}>
      <Header />
      <div className={styles.container}>
        <Form />
        <h1>_dados</h1>
        <p>
          Observe abaixo a listagem de Resilientes estudantes e sua divisão por
          faixa etária
        </p>
        <div className={styles.dados}>
        <div className={styles.tabela}>
          <Tabela />
        </div>
        <div className={styles.grafico} >
        <Grafico />
        </div>
        </div>
        
      </div>
      <Footer />
    </main>
  );
}

export default App;
