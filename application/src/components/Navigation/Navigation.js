import React from "react";
import { Link } from "react-scroll";
import styles from "./Navigation.module.css";
import NavigationItem from "../NavigationItem/NavigationItem";
import GDGLogo from "../../assets/images/DSC-logo.png";
import "./Navigation.css";

//  Instantiate the NavigationItem(s) here
const navigationItems = [
  {
    itemName: "Become A Member",
    itemHoverColor: "#4285f4",
  },
  {
    itemName: "Organizational Events",
    itemHoverColor: "#ea4335",
    navigateToID: "sectionUpcomingEvents",
  },
  {
    itemName: "About Us",
    itemHoverColor: "#fbbc05",
    navigateToID: "sectionAboutUs",
  },
  {
    itemName: "Our Social Hubs",
    itemHoverColor: "#34a853",
  },
];

class Navigation extends React.Component {
  state = {
    stickyNavigation: false,
  };

  componentDidMount() {
    window.addEventListener("scroll", this.toggleStickyNavigation);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll");
  }

  toggleStickyNavigation = () => {
    if (window.pageYOffset > 0) {
      if (!this.state.stickyNavigation) {
        this.setState({ stickyNavigation: true });
      }
    } else {
      if (this.state.stickyNavigation) {
        this.setState({ stickyNavigation: false });
      }
    }
  };

  renderNavigationState = () => {
    if (this.state.stickyNavigation) {
      return styles.navigation__sticky;
    }
  };

  renderNavigationItems = () =>
    navigationItems.map((item) => {
      return (
        <div className={styles.navigationItem}>
          <NavigationItem
            itemName={item.itemName}
            itemHoverColor={item.itemHoverColor}
            navigateToID={item.navigateToID}
            stickyNavigation={this.state.stickyNavigation}
          />
        </div>
      );
    });

  render() {
    return (
      <nav className={this.renderNavigationState()}>
        <Link
          className={styles.logo}
          activeClass="active"
          to="hero"
          spy={true}
          smooth={true}
          offset={-70}
          duration={800}
        >
          <span>DLSU DSC</span>
          <img src={GDGLogo} alt="DSC-Logo" />
        </Link>
        <div className={styles.navigationList}>
          {this.renderNavigationItems()}
        </div>
      </nav>
    );
  }
}

export default Navigation;
