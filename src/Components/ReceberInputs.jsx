import "../assets/ReceberInputs.css";
import React, { useState, useRef } from "react";

function Inputs({ texto, setTexto }) {
  const fileInputRef = useRef(null);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [textoTemp, setTextoTemp] = useState("");

  const MAX_FILE_SIZE = 5 * 1024 * 1024;

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile.size > MAX_FILE_SIZE) {
        console.log("Arquivo muito grande. O tamanho máximo permitido é 5MB.");
        return;
      }
      setFile(selectedFile);
      setTextoTemp("");
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      if (droppedFile.size > MAX_FILE_SIZE) {
        console.log("Arquivo muito grande. O tamanho máximo permitido é 5MB.");
        return;
      }
      setFile(droppedFile);
      setTextoTemp("");
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleRemoveFile = () => {
    setFile(null);
  };

  const handleTextoChange = (e) => {
    setTextoTemp(e.target.value);
    if (file) {
      setFile(null);
    }
  };

  const handleCalcular = () => {
    if (loading) return;

    if (textoTemp.trim()) {
      setTexto(textoTemp);
      console.log("Texto digitado:", textoTemp);
    } else if (file) {
      setLoading(true);
      console.log("Arquivo enviado:", file.name);

      const formData = new FormData();
      formData.append("arquivo", file);

      fetch("/upload", {
        method: "POST",
        body: formData,
      })
        .then((res) => {
          if (res.ok) {
            console.log("Arquivo enviado com sucesso!");
          } else {
            console.log("Erro ao enviar arquivo");
          }
        })
        .catch((err) => {
          console.error("Erro:", err);
        })
        .finally(() => setLoading(false));
    } else {
      console.log("Nenhum texto ou arquivo fornecido.");
    }
  };

  return (
    <div className="InputsAreas">
      <label htmlFor="texto">Coloque o texto aqui:</label>
      <textarea
        name="texto"
        id="texto"
        value={textoTemp}
        onChange={handleTextoChange}
      ></textarea>

      <p>ou</p>

      <div
        className="DropArea"
        id="DropArea"
        onClick={handleClick}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        role="button"
        tabIndex={0}
        aria-label="Área para arrastar e soltar arquivos ou clicar para selecionar"
        onKeyPress={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            handleClick();
          }
        }}
      >
        {file ? (
          <>
            <p>Arquivo selecionado: {file.name}</p>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleRemoveFile();
              }}
            >
              Remover arquivo
            </button>
          </>
        ) : (
          <>
            jogue os arquivos aqui <br /> ou <br />
            <span className="DropInstruction">clique para selecionar</span>
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

      <button onClick={handleCalcular} disabled={loading}>
        {loading ? "Enviando..." : "Calcular"}
      </button>
    </div>
  );
}

export default Inputs;
