import React from "react";
import "./StatementCard.css";

/**
 * TODO
 *  > Refactor class names
 *    > misnamed left-part and right-part
 */
const StatementCard = ({
  ionicon,
  header = "[Input Header]",
  text = "[Input Text]",
  isLeft,
}) => {
  if (isLeft) {
    return (
      <div className="statement-card">
        <div className="statement-card__left-part">
          <div className="statement-card__icon statement-card__icon--left">
            <ion-icon name={ionicon} />
          </div>
        </div>
        <div className="statement-card__right-part">
          <div className="statement-card__content statement-card__content--left-side">
            <h2>{header}</h2>
            <p>{text}</p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="statement-card">
        <div className="statement-card__right-part">
          <div className="statement-card__content statement-card__content--right-side">
            <h2>{header}</h2>
            <p>{text}</p>
          </div>
        </div>
        <div className="statement-card__left-part">
          <div className="statement-card__icon statement-card__icon--right">
            <ion-icon name={ionicon} />
          </div>
        </div>
      </div>
    );
  }
};

export default StatementCard;
