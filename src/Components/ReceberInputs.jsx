import "../assets/ReceberInputs.css";

function inputs() {
  return (
    <div className="InputsAreas">
      <label htmlFor="">Coloque o texto aq:</label>
      <textarea name="" id=""></textarea>
      <div id="DropArea">
        Jogue os arquivos aqui <br />
        ou <br />
        <input
          type="file"
          accept="application/pdf,
                 application/msword,
                 application/vnd.openxmlformats-officedocument.wordprocessingml.document,
                 text/plain"
        />
      </div>

      <button>Calcular</button>
    </div>
  );
}
export default inputs;
