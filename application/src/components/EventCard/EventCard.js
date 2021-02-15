import React from "react";
import styles from "./EventCard.module.css";
import "./EventCard.css";

class EventCard extends React.Component {
  render() {
    return (
      <div className={styles.eventCard}>
        <div className={styles.eventCard_image}>
          <img src={this.props.image} alt={this.props.alternative} />
        </div>
        <div className={styles.eventCard_column} />
        <div className={styles.eventCard_content}>
          <h3>{this.props.date}</h3>
          <h2>{this.props.headline}</h2>
          <p>{this.props.text}</p>
          <a
            className="button__blue"
            href="#"
            onClick={(event) => event.preventDefault()}
          >
            View Details
          </a>
        </div>
      </div>
    );
  }
}

EventCard.defaultProps = {};

export default EventCard;
