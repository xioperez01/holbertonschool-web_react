import React from "react";
import { shallow } from "enzyme";
import Login from "./Login";
import { StyleSheetTestUtils } from "aphrodite";

StyleSheetTestUtils.suppressStyleInjection();

describe("<Login />", () => {
  it("renders a <Login /> component", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper).toHaveLength(1);
  });

  it("renders a <Login /> component and checks contents", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find("div.App-login input")).toHaveLength(2);
    expect(wrapper.find("div.App-login label")).toHaveLength(2);
  });

  it("Login renders correctly", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists()).toEqual(true);
  });

  it("Verify that render 3 inputs", () => {
    const wrapper = shallow(<Login />);
    wrapper.update();
    expect(wrapper.find("div input")).toHaveLength(3);
  });

  it("Verify that render 2 labels", () => {
    const wrapper = shallow(<Login />);
    wrapper.update();
    expect(wrapper.find("div label")).toHaveLength(2);
  });

  it("Verify that render label 2", () => {
    const wrapper = shallow(<Login />);
    const submitInput = wrapper.find("form input[type='submit']");

    expect(submitInput).toHaveLength(1);
    expect(submitInput.prop("disabled")).toEqual(true);
  });

  it("Verify simulates", () => {
    const wrapper = shallow(<Login />);
    const emailInput = wrapper.find("#email");
    const passwordInput = wrapper.find("#password");

    emailInput.simulate("change", {
      target: { name: "email", value: "Larry@email.com" },
    });

    let submitInput = wrapper.find("form input[type='submit']");

    expect(submitInput.prop("disabled")).toEqual(true);

    passwordInput.simulate("change", {
      target: { name: "password", value: "123456789" },
    });

    submitInput = wrapper.find("form input[type='submit']");
    expect(submitInput.prop("disabled")).toEqual(false);
  });
});
