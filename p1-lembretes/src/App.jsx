import React from "react";
import Lembrete from "./Lembrete";
import LembreteEntrada from "./LembreteEntrada";

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
      descricao,
      favorito: false,
      iconeRemover: "fa-solid fa-trash",
      iconeFavoritar: "fa-solid fa-star"
    }

    const ListaOriginal = this.state.lembretes
      const copia = [novo]
      for (let i = 0; i < ListaOriginal.length; i++) {
        copia.push(ListaOriginal[i])
      }

    this.setState({ lembretes: copia, texto: "" })
  }

  removerLembrete = (indexParaRemover) => {
    const novaLista = this.state.lembretes.filter((_, i) => i !== indexParaRemover)
    this.setState({ lembretes: novaLista })
  }

  toggleFavorito = (index) => {
    const atual = this.state.lembretes;
    const favoritoInvertido = [];
    for (let i = 0; i < atual.length; i++) {
      if (i === index) {
        const item = atual[i];
        favoritoInvertido.push({
          descricao: item.descricao,
          ...item,
          favorito: !item.favorito,
        });
      } else {
        favoritoInvertido.push(atual[i]);
      }
    }
    this.setState({lembretes: favoritoInvertido})
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
            funcaoOK={this.adicionarLembrete}/>
        </div>

        <div>
          {lembretes.map((lembrete, index) => (
            <Lembrete
            descricao={lembrete.descricao}
            favorito={lembrete.favorito}
            iconeRemover={lembrete.iconeRemover}
            iconeFavoritar={lembrete.iconeFavoritar}
            onToggleFavoritar={() => this.toggleFavorito(index)}
            onRemover={() => this.removerLembrete(index)}/>
          ))}
        </div>
      </div>
    )
  }
}

export default App