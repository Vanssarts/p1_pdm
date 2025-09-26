import React from "react";
import Lembrete from "./Lembrete";
import LembreteEntrada from "./LembreteEntrada";

class App extends React.Component {

  state = {
    texto: "",
    lembretes: [],
    filtro: "todos"
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

    this.setState({lembretes: copia, texto: ""})
  }

  removerLembrete = (indexParaRemover) => {
    const novaLista = this.state.lembretes.filter((_, i) => i !== indexParaRemover)
    this.setState({lembretes: novaLista})
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

  setFiltro = (filtro) => {
    this.setState({filtro});
  };

  render() {
    const {texto, lembretes, filtro} = this.state

    const visiveis = lembretes
      .map((item, index) => ({ item, index }))
      .filter(({ item }) => (filtro === "favoritos" ? item.favorito : true))

    return (
      <div className="container">
        <div className="d-flex justify-content-center gap-2 m-2">
          <button
            type="button"
            className={`btn ${filtro === "todos" ? "btn-primary" : "btn-outline-primary"}`}
            onClick={() => this.setFiltro("todos")}
            aria-pressed={filtro === "todos" ? "true" : "false"}>
            Todos
          </button>

          <button
            type="button"
            className={`btn ${filtro === "favoritos" ? "btn-primary" : "btn-outline-primary"}`}
            onClick={() => this.setFiltro("favoritos")}
            aria-pressed={filtro === "favoritos" ? "true" : "false"}>
            Favoritos
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
          {visiveis.map(({ item, index }) => (
            <Lembrete
            descricao={item.descricao}
            favorito={item.favorito}
            iconeRemover={item.iconeRemover}
            iconeFavoritar={item.iconeFavoritar}
            onToggleFavoritar={() => this.toggleFavorito(index)}
            onRemover={() => this.removerLembrete(index)}/>
          ))}
        </div>
      </div>
    )
  }
}

export default App