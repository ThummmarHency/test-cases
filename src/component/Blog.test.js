import React from "react";
import { shallow } from "enzyme";
import Blog from "./blog";
import Count from '../Count';

describe.skip("Blog page testing", () => {
  const blogInstance = shallow(<Blog />);

  it("check class", () => {
    expect(blogInstance.exists(".mainCls")).toEqual(true);
  });
  // it('check state',()=>{
  //     console.log('blogInstance.debug() :>> ', blogInstance.debug());
  //     expect(blogInstance.state('temp')).toEqual(true)
  // })
  it("check html contain", () => {
    expect(blogInstance.contains(<li>React</li>)).toEqual(true);
  });
  it("check with all without classname", () => {
    expect(
      blogInstance.containsAllMatchingElements([
        <div>Test</div>, //true
        <span>one</span>, //true
      ])
    ).toEqual(true);
  });
  it("check with any without classname", () => {
    expect(
      blogInstance.containsAnyMatchingElements([
        <div>Tes</div>, //false
        <span>one</span>, //true
      ])
    ).toEqual(true);
  });
  it("find check", () => {
    expect(blogInstance.find(".liCls").length).toBe(2);
  });
  it("at check", () => {
    expect(blogInstance.find(".liCls").at(0).key()).toBe("Node");
  });
  it("child check", () => {
    expect(blogInstance.find(".number").childAt(0).type()).toBe("span");
  });
  it("children length check", () => {
    expect(blogInstance.find("ul").children().length).toBe(3);
  });
  it("has class check", () => {
    expect(blogInstance.find(".my-button").hasClass('disable')).toBe(true);
  });
  it("is class check", () => {
    expect(blogInstance.is('.mainCls')).toBe(true);
  });
});

describe.skip('shallow vs mount',()=>{
  const blogInstanceShallow = shallow(<Count />);
  // const blogInstanceMount = mount(<Count />);

  // console.log('blogInstanceShallow'.blogInstanceShallow.debug())
  it("shallow",()=>{
    // console.log('blogInstanceMount>>',blogInstanceMount.debug())
  })
})