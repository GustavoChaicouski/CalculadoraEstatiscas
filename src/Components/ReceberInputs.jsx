import "../assets/ReceberInputs.css";
import React, { useState, useRef } from "react";

function Inputs() {
  const fileInputRef = useRef(null);
  const [file, setFile] = useState(null);
  const [texto, setTexto] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    setFile(droppedFile);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleCalcular = () => {
    if (texto.trim()) {
      console.log("Texto digitado:", texto);
      // aqui você envia ou processa o texto
    } else if (file) {
      console.log("Arquivo enviado:", file.name);
      const formData = new FormData();
      formData.append("arquivo", file);

      fetch("/upload", {
        method: "POST",
        body: formData,
      })
        .then((res) =>
          res.ok
            ? alert("Arquivo enviado com sucesso!")
            : alert("Erro ao enviar arquivo")
        )
        .catch((err) => console.error("Erro:", err));
    } else {
      alert("Por favor, insira um texto ou envie um arquivo.");
    }
  };

  return (
    <div className="InputsAreas">
      <label htmlFor="texto">Coloque o texto aq:</label>
      <textarea
        name="texto"
        id="texto"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      ></textarea>

      <div
        id="DropArea"
        onClick={handleClick}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        {file ? (
          <p>Arquivo selecionado: {file.name}</p>
        ) : (
          <>
            ou <br /> jogue os arquivos aqui <br /> ou <br />
            <span className="DropInstruction">(clique para selecionar)</span>
          </>
        )}
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="
            application/pdf,
            application/msword,
            application/vnd.openxmlformats-officedocument.wordprocessingml.document,
            text/plain"
          style={{ display: "none" }}
        />
      </div>

      <button onClick={handleCalcular}>Calcular</button>
    </div>
  );
}

export default Inputs;
