import React from "react";
import TechnologyList from "../TechnologyList/TechnologyList";
import styles from "./SectionTechnologyStack.module.css";

//  Importing Logos
// const websiteDesignTechnologies = [
//   { image: GitHubLogo, alternative: "Github" },
// ];

const technologyCards = [
  {
    ionicon: "bulb-outline",
    headerLine: "Developer Tools",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    ionicon: "bulb-outline",
    headerLine: "Developer Tools",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

class SectionAboutUs extends React.Component {
  render() {
    return (
      <section className="sectionContainer">
        <h1 className={`header__medium ${styles.headerLine}`}>
          Developer Technologies Fostered
        </h1>
        <div className={styles.content}>
          <div className={styles.content_technologyList}>
            <TechnologyList technologyCards={technologyCards} />
          </div>
          <div></div>
        </div>
      </section>
    );
  }
}

export default SectionAboutUs;
