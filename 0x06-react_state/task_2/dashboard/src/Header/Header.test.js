import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";
import { StyleSheetTestUtils } from "aphrodite";

StyleSheetTestUtils.suppressStyleInjection();

describe("<Header />", () => {
  it("renders a <Header /> component", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toHaveLength(1);
  });

  it("renders a <Header /> component and checks contents", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find("header h1")).toHaveLength(1);
    expect(wrapper.find("header img")).toHaveLength(1);
  });

  it("Header renders without crashing", () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut }}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.exists()).toEqual(true);
  });

  it("mounts the Header with a default context", () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut }}>
        <Header />
      </AppContext.Provider>
    );

    expect(wrapper.find("#logoutSection")).toHaveLength(0);
  });

  it("mounts the Header component with a user defined", () => {
    const wrapper = mount(
      <AppContext.Provider
        value={{ user: { ...user, isLoggedIn: true }, logOut }}
      >
        <Header />
      </AppContext.Provider>
    );

    expect(wrapper.find("#logoutSection")).toHaveLength(1);
  });

  it("mounts the Header component with a user define", () => {
    const logOutSpy = jest.fn();

    const wrapper = mount(
      <AppContext.Provider
        value={{
          user: {
            email: "angie@hudson.com",
            password: "123456789",
            isLoggedIn: true,
          },
          logOut: logOutSpy,
        }}
      >
        <Header />
      </AppContext.Provider>
    );

    expect(wrapper.find("#logoutSection")).toHaveLength(1);
    wrapper.find("#logoutSection span").simulate("click");

    expect(logOutSpy).toHaveBeenCalled();

    jest.restoreAllMocks();
  });
});
