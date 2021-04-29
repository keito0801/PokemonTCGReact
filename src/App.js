import "./App.css";
import React from "react";
import axios from "axios";
import Cards from "./components/cards/Cards";
import Search from "./components/search/Search";


class App extends React.Component {
  
  state = {
    name: "pikachu",
    cards: []
  };
  componentDidMount() {
    this.searchFunc(this.state.name);
  }

  searchFunc = (search) => {
    axios
      .get(
        `https://api.pokemontcg.io/v2/cards?q=supertype:pokemon name:${search}`
      )
      .then((res) =>{
        console.log(res);
        this.setState({
          ...this.state,
          name: search,
          cards: res.data.data
        })
      }
      )
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <Search searchFunc={this.searchFunc} />
        
          <Cards cards={this.state.cards} />
      </div>
    );
  }
}

export default App;