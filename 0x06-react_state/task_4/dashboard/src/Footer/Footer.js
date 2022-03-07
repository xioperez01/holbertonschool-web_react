import React from "react";
import { getFullYear, getFooterCopy } from "../utils/utils";
import { StyleSheet, css } from "aphrodite";
import AppContext from "../App/AppContext";

const Footer = () => {
  return (
    <AppContext.Consumer>
      {(context) => {
        return (
          <footer className={css(styles.footerStyle)}>
            <p>
              Copyright {getFullYear()} - {getFooterCopy(true)}
            </p>
            {context.user.isLoggedIn && <a href="#">Contact us</a>}
          </footer>
        );
      }}
    </AppContext.Consumer>
  );
};

const styles = StyleSheet.create({
  footerStyle: {
    maxHeight: "10vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontStyle: "italic",
  },
});

export default Footer;
