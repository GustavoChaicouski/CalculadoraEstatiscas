import { MediaDosNumeros } from "../ProcessamentoDosDados/ProcessarNumeros";

function MostrarNumeros({ texto }) {
  return (
    <div>
      <MediaDosNumeros texto={texto} />
    </div>
  );
}

export default MostrarNumeros;
