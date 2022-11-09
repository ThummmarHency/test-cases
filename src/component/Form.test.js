import React from "react";
import { shallow } from "enzyme";
import Form from "./Form";

jest.useFakeTimers();

describe("functional component form test cases", () => {
  const formInstance = shallow(<Form />);

  it("test state", () => {
    console.log(formInstance.find("p").text());
    formInstance.find("button").first().simulate("click");
    console.log(formInstance.find("p").text());
  });

  it("on delay", async () => {
    const btn = formInstance.find("button").last();

    btn.simulate("click");
    jest.advanceTimersByTime(2000);

    console.log(btn.props()["name"]);
    expect(formInstance.find("div").last().text()).toEqual("select Female");
    jest.useRealTimers();
  });
  /* 
  it("temp delay",()=>{
    expect.assertions(0)
    function call1(data){
      expect(data).tobe("male")
    }
    console.log('formInstance.instance() :>> ', formInstance.instance());
    formInstance.instance().handleClick((call1))
    jest.runAllTimers()
  }) */
});
