import React from "react";
import styles from "./SpotlightCard.module.css";
import "./SpotlightCard.css";

/**
 * TODO
 *  >   Styled component types:
 *      >   Background image with white text
 *      >   Background image just for logo
 *  >   Whole Component is an anchor element
 *  >   'See more' anchor element
 *  >   Load all spotlightCards to load from a local JSON file
 */

class SpotlightCard extends React.Component {
  render() {
    return (
      <div className={styles.spotlight}>
        <div>
          <img src={this.props.image} alt={this.props.alternative} />
        </div>
        <div className={styles.spotlight__content}>
          <span>{this.props.headLine}</span>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default SpotlightCard;
