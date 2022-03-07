import React from "react";
import { shallow, mount } from "enzyme";
import App, { listNotificationsInitialState } from "./App";
import Notification from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import CourseList from "../CourseList/CourseList";
import { StyleSheetTestUtils } from "aphrodite";

StyleSheetTestUtils.suppressStyleInjection();

describe("<App />", () => {
  it("renders an <App /> component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  it("checks for a <Notifications /> component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Notification)).toHaveLength(1);
  });

  it("checks for a <Header /> component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header)).toHaveLength(1);
  });

  it("checks for a <Login /> component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Login)).toHaveLength(1);
  });

  it("checks for a <Footer /> component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Footer)).toHaveLength(1);
  });

  it("checks that <CourseList /> component is not displayed", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(CourseList)).toHaveLength(0);
  });

  it("checks component behavior when isLoggedIn === true", () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.find(Login)).toHaveLength(0);
    expect(wrapper.find(CourseList)).toHaveLength(1);
  });

  it("checks behavior of logOut prop", () => {
    const map = {};
    window.addEventListener = jest.fn().mockImplementation((event, cb) => {
      map[event] = cb;
    });
    window.alert = jest.fn();

    const testProps = {
      logOut: jest.fn(),
    };

    const wrapper = mount(<App isLoggedIn={true} {...testProps} />);
    map.keydown({ ctrlKey: true, key: "h" });
    expect(window.alert).toHaveBeenCalledWith("Logging you out");
    expect(testProps.logOut).toHaveBeenCalled();
    window.alert.mockRestore();
  });

  it("Default state for displayDrawer false", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().displayDrawer).toEqual(false);
  });

  it("displayDrawer changes to true when calling handleDisplayDrawer", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().displayDrawer).toEqual(false);

    const instance = wrapper.instance();

    instance.handleDisplayDrawer();

    expect(wrapper.state().displayDrawer).toEqual(true);
  });

  it("displayDrawer changes to false when calling handleHideDrawer", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().displayDrawer).toEqual(false);

    // const instance = wrapper.instance();

    wrapper.instance().handleDisplayDrawer();

    expect(wrapper.state().displayDrawer).toEqual(true);

    wrapper.instance().handleHideDrawer();

    expect(wrapper.state().displayDrawer).toEqual(false);
  });

  it("verify that markNotificationAsRead works", () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut }}>
        <App />
      </AppContext.Provider>
    );

    const instance = wrapper.instance();

    expect(wrapper.state().listNotifications).toEqual(
      listNotificationsInitialState
    );

    instance.markNotificationAsRead(4);

    expect(wrapper.state().listNotifications).toEqual(
      listNotificationsInitialState
    );

    instance.markNotificationAsRead(3);

    expect(wrapper.state().listNotifications).toEqual(
      listNotificationsInitialState.slice(0, 2)
    );

    instance.markNotificationAsRead(1);

    expect(wrapper.state().listNotifications).toEqual(
      listNotificationsInitialState.slice(1, 2)
    );
  });
});
