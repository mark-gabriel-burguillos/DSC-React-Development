import React from "react";
import Hero from "../Hero/Hero";
import Navigation from "../Navigation/Navigation";
import SectionAboutUs from "../SectionAboutUs/SectionAboutUs";
import SectionTechnologyStack from "../SectionTechnologyStack/SectionTechnologyStack";
import SectionUpcomingEvents from "../SectionUpcomingEvents/SectionUpcomingEvents";
import Footer from "../Footer/Footer";
import styles from "./App.module.css";
import "./App.css";

/*  TODO
 *    > Default word while Word Carousel is loading
 *    > Colored Text. Color palette uses Google colors
 *    > Standardized socialMediaBaubles render
 */

//  Social Media Links
const socialMediaBaubles = [
  { referenceLink: "#", ionicon: "logo-twitter", itemHoverColor: "#1da1f2" },
  { referenceLink: "#", ionicon: "logo-discord", itemHoverColor: "#7289da" },
  { referenceLink: "#", ionicon: "logo-linkedin", itemHoverColor: "#0a66c2" },
  { referenceLink: "#", ionicon: "logo-github", itemHoverColor: "#24292d" },
  { referenceLink: "#", ionicon: "mail-outline", itemHoverColor: "#ea4335" },
];

class App extends React.Component {
  render() {
    return (
      <div>
        <header className={styles.hero} id="hero">
          <Navigation />
          <Hero socialMediaBaubles={socialMediaBaubles} />
        </header>
        <SectionUpcomingEvents id="sectionUpcomingEvents" />
        <SectionAboutUs id="sectionAboutUs" />
        <SectionTechnologyStack />
        <Footer socialMediaBaubles={socialMediaBaubles} />
      </div>
    );
  }
}

export default App;
