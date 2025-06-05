import React from "react";
import "../assets/MostrarNumCss.css";

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

const calcularMediana = (numeros) => {
  const ordenado = [...numeros].sort((a, b) => a - b);
  const meio = Math.floor(ordenado.length / 2);

  if (ordenado.length % 2 === 0) {
    return (ordenado[meio - 1] + ordenado[meio]) / 2;
  } else {
    return ordenado[meio];
  }
};
const calcularModa = (numeros) => {
  const freq = {};
  numeros.forEach((n) => (freq[n] = (freq[n] || 0) + 1));
  const max = Math.max(...Object.values(freq));
  return Object.keys(freq)
    .filter((k) => freq[k] === max)
    .map(Number);
};

const SomaTotal = (numeros) => {
  if (numeros.length === 0) return 0;
  const soma = numeros.reduce((acc, val) => acc + val, 0);
  return soma;
};
const MaiorNumero = (numeros) => {
  if (!numeros.length) return null;
  return Math.max(...numeros);
};

const MenorNumero = (numeros) => {
  if (!numeros.length) return null;
  return Math.min(...numeros);
};

export function MediaDosNumeros({ texto }) {
  const numeros = React.useMemo(() => extrairNumeros(texto), [texto]);
  const media = React.useMemo(() => calcularMedia(numeros), [numeros]);
  const mediana = React.useMemo(() => calcularMediana(numeros), [numeros]);
  const moda = React.useMemo(() => calcularModa(numeros), [numeros]);
  const Soma = React.useMemo(() => SomaTotal(numeros), [numeros]);
  const Maior = React.useMemo(() => MaiorNumero(numeros), [numeros]);
  const Menor = React.useMemo(() => MenorNumero(numeros), [numeros]);

  return (
    <div className="MostrarNum">
      <p>Números encontrados: {numeros.join(", ")}</p>
      {numeros.length > 0 ? (
        <p>Média dos números: {media.toFixed(2)}</p>
      ) : (
        <p>Nenhum número válido encontrado.</p>
      )}
      <p>Mediana dos números: {mediana}</p>
      <p>Moda dos Números: {moda.join(", ")}</p>
      <p>
        Menor Numero: {Menor} <br />
        Maior Numero: {Maior}
      </p>
      <p>A soma dos Números: {Soma}</p>
    </div>
  );
}
