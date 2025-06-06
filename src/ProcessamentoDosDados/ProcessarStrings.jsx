import "../assets/MostrarStrings.css";

export default function CalcularEstatisticasStrings({ texto }) {
  if (!texto || texto.length === 0)
    return <p className="MostrarStrings">Nenhuma string para processar.</p>;

  const total = texto.length;
  const unicas = [...new Set(texto)].sort();

  const maisCurta = texto.reduce((a, b) => (a.length <= b.length ? a : b));
  const maisLonga = texto.reduce((a, b) => (a.length >= b.length ? a : b));

  const frequencia = texto.reduce((acc, str) => {
    acc[str] = (acc[str] || 0) + 1;
    return acc;
  }, {});

  const frequenciaOrdenada = Object.entries(frequencia).sort(
    (a, b) => b[1] - a[1]
  );

  return (
    <div className="MostrarStrings">
      <h2 className="text-xl font-semibold text-blue-700 mb-2">
        Estatísticas de Strings
      </h2>
      <p>
        <strong>Total:</strong> {total}
      </p>
      <p>
        <strong>Mais curta:</strong> {maisCurta}
      </p>
      <p>
        <strong>Mais longa:</strong> {maisLonga}
      </p>
      <p>
        <strong>Únicas:</strong> {unicas.join(", ")}
      </p>
      <div className="mt-2">
        <strong>Frequência:</strong>
        <ul className="list-disc list-inside">
          {frequenciaOrdenada.map(([str, count]) => (
            <li key={str}>
              {str}: {count}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
