const LembreteEntrada = (props) => {
  return (
    <div className="d-flex w-100">
      <input
        type="text"
        className="form-control"
        placeholder="Digite seu novo lembrete"
        value={props.value}
        onChange={props.onChange}
      />
      <button
        type="button"
        className="btn btn-primary"
        onClick={props.funcaoOK}>
          {props.textoOK}
      </button>
    </div>
  )
}

export default LembreteEntrada