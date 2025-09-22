const Lembrete = (props) => {
  return (
    <div className="card mb-3">
      <div className="card-body d-flex align-items-center">
        <p className="mb-0 flex-grow-1 text-center">{props.descricao}</p>
      </div>
    </div>
  )
}

export default Lembrete