import React, { Component } from "react";
import logo from "../assets/holberton-logo.jpg";
import { StyleSheet, css } from "aphrodite";
import AppContext from "../App/AppContext";

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { user, logOut } = this.context;

    return (
      <header className={css(styles.headerStyle)}>
        <img src={logo} className={css(styles.logoStyle)} alt="logo" />
        <h1 className={css(styles.titleStyle)}>School dashboard</h1>
        {user.isLoggedIn && (
          <p id="logoutSection" className={css(styles.logoutSection)}>
            Welcome <b>{`${user.email} `}</b>
            <span onClick={logOut} className={css(styles.logoutSectionSpan)}>
              (logout)
            </span>
          </p>
        )}
      </header>
    );
  }
}

const styles = StyleSheet.create({
  headerStyle: {
    display: "flex",
    alignItems: "center",
    height: "25vh",
    minHeight: 150,
  },

  logoStyle: {
    height: "100%",
  },

  titleStyle: {
    color: "#E0344B",
    fontSize: "2.5rem",
    marginLeft: "1rem",
  },
});

export default Header;
