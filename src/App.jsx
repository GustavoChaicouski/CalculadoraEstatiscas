import { useState } from "react";
import Cabecalho from "./components/Header";
import Receber from "./Components/ReceberInputs";
import PrintNumeros from "./Components/Numeros";
import CalcularEstatisticasStrings from "./ProcessamentoDosDados/ProcessarStrings";
import "./assets/App.css";

function App() {
  const [texto, setTexto] = useState("");
  const [palavras, setPalavras] = useState([]); // <- novo estado

  return (
    <div>
      <Cabecalho />
      <main>
        <Receber texto={texto} setTexto={setTexto} setPalavras={setPalavras} />
        <PrintNumeros texto={texto} />
        <CalcularEstatisticasStrings texto={palavras} />
      </main>
    </div>
  );
}

export default App;
