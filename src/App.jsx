import { useState } from "react";
import Cabecalho from "./components/Header";
import Receber from "./Components/ReceberInputs";
import PrintNumeros from "./Components/Numeros";
import CalcularEstatisticasStrings from "./ProcessamentoDosDados/ProcessarStrings";
import "./assets/App.css";

function App() {
  const [texto, setTexto] = useState("");

  const palavras = texto
    .split(/[\s,.;:\n\t]+/)
    .map((p) => p.trim())
    .filter((p) => /^[A-Za-zÀ-ÿ]+$/.test(p));
  return (
    <div>
      <Cabecalho />
      <main>
        <Receber texto={texto} setTexto={setTexto} />
        <PrintNumeros texto={texto} />
        <CalcularEstatisticasStrings texto={palavras} />
      </main>
    </div>
  );
}

export default App;
