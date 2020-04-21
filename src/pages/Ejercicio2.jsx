import React, { Component } from 'react';
import "../App.css";
import Cards from "../componets/Cards";
import CardsReact from "../componets/CardsReact";

class Ejercicio2 extends Component {
    state = {
        color: "",
        colors: [],
      };
      onChange = (e) => {
        this.setState({ color: e.target.value });
      };
      onClick = (e) => {
        this.state.colors.push({ color: this.state.color });
        this.setState({ color: "" });
        e.preventDefault();
      };
      delete = (id) => {
        const cardsFiltrados = this.state.colors.filter((e, i) => i !== id);
        this.setState({ colors: cardsFiltrados });
      };
      componentDidMount() {
        const statecached = JSON.parse(localStorage.getItem("state")) || [];
        this.setState(statecached);
      }
      componentDidUpdate() {
        localStorage.setItem("state", JSON.stringify(this.state));
      }
    render() {
        const cardsGrup = this.state.colors.map((c, i) => (
            <CardsReact key={i} id={i} color={c.color} delete={this.delete} />
          ));
        return (
            <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-3"></div>
          <div className="col-6">
            <Cards
              value={this.state.color}
              onChange={this.onChange}
              onClick={this.onClick}
              background={this.state.color}
            />
          </div>
          <div className="col-3"></div>
        </div>
        <div className="container">
          <div className="row">{cardsGrup}</div>
        </div>
      </div>
        );
    }
}

export default Ejercicio2;
