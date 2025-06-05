import React from "react";

const extrairNumeros = (texto) => {
  const regex = /-?\d+(\.\d+)?/g;
  const matches = texto.match(regex);
  if (!matches) return [];
  return matches.map(Number);
};
const calcularMedia = (numeros) => {
  if (numeros.length === 0) return 0;
  const soma = numeros.reduce((acc, val) => acc + val, 0);
  return soma / numeros.length;
};

export function MediaDosNumeros({ texto }) {
  const numeros = React.useMemo(() => extrairNumeros(texto), [texto]);
  const media = React.useMemo(() => calcularMedia(numeros), [numeros]);

  return (
    <div>
      {numeros.length > 0 ? (
        <p>Média dos números: {media.toFixed(2)}</p>
      ) : (
        <p>Nenhum número válido encontrado.</p>
      )}
    </div>
  );
}
