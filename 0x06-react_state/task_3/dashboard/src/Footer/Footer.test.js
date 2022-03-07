import React from "react";
import { shallow } from "enzyme";
import Footer from "./Footer";
import { StyleSheetTestUtils } from "aphrodite";

StyleSheetTestUtils.suppressStyleInjection();

describe("<Footer />", () => {
  it("renders a <Footer /> component", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toHaveLength(1);
  });

  it("renders a <Footer /> component and checks contents", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find("footer p").text()).toContain("Copyright");
  });

  it("verify that the link is not displayed", () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut }}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find("div.footer a")).toHaveLength(0);
  });

  it("verify that the link is displayed", () => {
    const wrapper = mount(
      <AppContext.Provider
        value={{ user: { ...user, isLoggedIn: true }, logOut }}
      >
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find("div.footer a")).toHaveLength(1);
    expect(wrapper.find("div.footer a").text()).toEqual("Contact us");
  });
});
