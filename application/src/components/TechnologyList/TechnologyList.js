import React from "react";
import styles from "./TechnologyList.module.css";
import TechnologyCard from "../TechnologyCard/TechnologyCard";

class TechnologyList extends React.Component {
  state = { selectedCard: 1 };

  onToggle = (cardNumber) => {
    if (cardNumber !== this.state.selectedCard) {
      alert(cardNumber);
      this.setState({ selectedCard: cardNumber });
    }
  };

  renderTechnologyCards = (counter) => {
    let technologyCards = [];

    technologyCards = this.props.technologyCards.map((item) => {
      return (
        <TechnologyCard
          ionicon={item.ionicon}
          headerLine={item.headerLine}
          description={item.description}
          cardNumber={counter}
          // isActive={counter === this.state.selectedCard}
        />
      );
    });

    return technologyCards;
  };

  render() {
    let counter = 1;

    return (
      <div className={styles.technologyList}>
        {this.renderTechnologyCards(counter++)}
      </div>
    );
  }
}

export default TechnologyList;
