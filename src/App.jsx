import { useState } from "react";
import Cabecalho from "./components/Header";
import Receber from "./Components/ReceberInputs";
import PrintNumeros from "./Components/Numeros";

function App() {
  const [texto, setTexto] = useState("");

  return (
    <div>
      <Cabecalho />
      <main>
        <Receber texto={texto} setTexto={setTexto} />
        <PrintNumeros texto={texto} />
      </main>
    </div>
  );
}

export default App;
