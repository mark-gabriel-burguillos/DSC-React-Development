import React from "react";
import styles from "./Bauble.module.css";
import "./Bauble.css";

class Bauble extends React.Component {
  state = { hoveredOn: false };

  toggleHover = () => {
    if (!this.props.withBauble) {
      if (this.state.hoveredOn) {
        this.setState({ hoveredOn: false });
      } else {
        this.setState({ hoveredOn: true });
      }
    }
  };

  getStyle = () => {
    var style;

    if (this.state.hoveredOn) {
      style = {
        color: this.props.itemHoverColor,
      };
    } else {
      style = {
        color: "white",
      };
    }

    return style;
  };

  render() {
    return (
      <div
        className={this.props.withBauble && styles.baubles__bubble}
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
      >
        <a
          href={this.props.referenceLink}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.bauble}
          style={this.getStyle()}
        >
          <ion-icon name={this.props.ionicon} />
        </a>
      </div>
    );
  }
}

Bauble.defaultProps = {
  referenceLink: "#",
  withBauble: false,
};

export default Bauble;
