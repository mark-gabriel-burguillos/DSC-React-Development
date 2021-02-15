import React from "react";
import Bauble from "../Bauble/Bauble";
import styles from "./Footer.module.css";
import "./Footer.css";

const Footer = (props) => {
  const renderBaubles = props.socialMediaBaubles.map((item) => {
    return (
      <div className={styles.baublesItem}>
        <Bauble
          referenceLink={item.referenceLink}
          ionicon={item.ionicon}
          itemHoverColor={item.itemHoverColor}
        />
      </div>
    );
  });

  return (
    <footer>
      <div className={styles.footerContainer}>
        <div className={styles.footerContainer__baublesList}>
          {renderBaubles}
        </div>
        <p>Copyright &copy; 2021 by DLSU GDG. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
