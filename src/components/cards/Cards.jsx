import React from "react";
import "./Cards.css";

class cards extends React.Component {
  constructor() {
    super();
      this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }
  render() {
    const { cards } = this.props;

    return (
      <div class ="js-container">
        {cards.map((card) => {
          return (
            <section class="card-container">
              <div>
                <h2>{card.name}</h2>
                <h2>Type:{card.types[0]}</h2>
                <img
                  className="card-image"
                  src={card.images.small}
                  alt={card.name}
                />
                <h3>Series: {card.set.series}</h3>
                <p>{card.description}</p>
              </div>
            </section>
          );
        })}
      </div>
    );
  }
}



export default cards;

