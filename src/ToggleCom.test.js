import React from "react";
import  { shallow } from "enzyme";
import ToggleCom from "./ToggleCom";

describe.skip("ToggleCom", () => {
  const toggleInstance = shallow(<ToggleCom />);
  it("should show the text", () => {
    console.log("toggleInstance :>> ", toggleInstance.debug());
    const element = toggleInstance.find("div h1");
    expect(element.text()).toBe("This will be toggled");
  });
  it("text shown after button click", () => {
    const toggleButton = toggleInstance.find("button");
    toggleButton.simulate("click");
    const element = toggleInstance.find("div h1");
    expect(element.length).toBeGreaterThan(0);
  });
  it("Is testclass exist", () => {
    expect(toggleInstance.exists(".testClass")).toEqual(true);
  });
});
