const Lembrete = (props) => {

  const iconeFavoritar = props.favorito ? "fa-solid fa-star" : "fa-regular fa-star";

  return (
    <div className="card mb-3">
      <div className="card-body d-flex align-items-center">
        <p className="mb-0 flex-grow-1 text-center">{props.descricao}</p>
        <button
            type="button"
            className="btn text-warning p-0"
            aria-pressed={props.favorito ? "true" : "false"}
            onClick={props.onToggleFavoritar}>
            <i className={`${iconeFavoritar} fa-2x`}></i>
          </button>

        <button
          type="button"
          className="btn text-danger p-0"
          onClick={props.onRemover}>
          <i className={`${props.iconeRemover} fa-2x`}></i>
        </button>
      </div>
    </div>
  )
}

export default Lembrete