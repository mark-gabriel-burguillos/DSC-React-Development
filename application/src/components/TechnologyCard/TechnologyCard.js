import React from "react";
import styles from "./TechnologyCard.module.css";

class TechnologyCard extends React.Component {
  render() {
    return (
      <div
        className={
          styles.technologyCard +
          " " +
          (this.props.isActive && styles.technologyCard__active)
        }
        onClick={this.props.onToggle(this.props.cardNumber)}
      >
        <div className={styles.technologyCard_ionicon}>
          <ion-icon name={this.props.ionicon} />
        </div>
        <div className={styles.technologyCard_column} />
        <div className={styles.technologyCard_content}>
          <h2>{this.props.headerLine}</h2>
          <p>{this.props.description}</p>
        </div>
      </div>
    );
  }
}

export default TechnologyCard;
