const App = () => {
  return (
    <div className="container mt-4" style={{ backgroundColor: '#033568ff' }}>
      <div>
        <h1 className="text-white">Hello, Lembretes</h1>
      </div>
      <div>
        <button className="btn btn-primary mt-3">Apenas favoritos</button>
      </div>
      <div className="row">
        <div className="col-12 col-lg-6 col-xxl-3">
          <div className="card mb-3 mt-3">
            <div className="card-body text-center">
              Lembrete
            </div>
          </div>
          <div className="card mb-3 text-center">
            <div className="card-body">
              Lembrete
            </div>
          </div>
          <div className="card mb-3 text-center">
            <div className="card-body">
              Lembrete
            </div>
          </div>
        </div>
        <div className="mt-3 mb-3">
          <input></input>
        </div>
        <div className="mt-3 mb-3">
          <button className="btn btn-primary">Ok</button>
        </div>
      </div>
    </div>

  )
}

export default App
