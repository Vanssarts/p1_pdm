import React from "react";
import Lembrete from "./Lembrete";
import LembreteEntrada from "./LembreteEntrada";
import LembreteLista from "./LembreteLista";

class App extends React.Component {

  state = {
    texto: "",
    lembretes: []
  }

  onChange = (input) => {
    this.setState({texto: input.target.value})
  }

  adicionarLembrete = () => {
    const descricao = this.state.texto

    const novo = {
      descricao
    }

    this.setState({
      lembretes: [novo].concat(this.state.lembretes),
      texto: ""
    })
  }

  render() {
    const {texto, lembretes} = this.state

    return (
      <div className="container">
        <div className="d-flex justify-content-evenly m-3">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => alert("Filtrando apenas os lembretes favoritos.")}>
            Apenas favoritos
          </button>
        </div>

        <div className="d-flex justify-content-evenly m-3">
          <LembreteEntrada
            value={texto}
            onChange={this.onChange}
            textoOK="Ok"
            funcaoOK={this.adicionarLembrete}
          />
        </div>

        <div className="row">
          <LembreteLista />
          
          {/* {lembretes.map(lembrete => (
            <div className="col-12 col-lg-6 col-xxl-3">
              <Lembrete descricao={lembrete.descricao}/>
            </div>
          ))} */}

        </div>
      </div>
    )
  }
}

export default App