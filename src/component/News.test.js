import React from "react";
import { shallow } from "enzyme";
import News from "./News";
// import mockAxios from 'axios'
import * as math from '../Mock';

jest.mock('axios')
var mockMultiply;
jest.mock('../mock',()=>{
  mockMultiply=jest.fn()
  return {
    ...jest.requireActual('../Mock'),
    add:jest.fn(),
    multi:mockMultiply
  }
})

describe("instance,state,props", () => {
  let newsinstance = shallow(<News />);

  it("instace testing", async () => {
    let anyfn = newsinstance.instance().anyTemp(); //function call
    expect(anyfn).toBe(true)//tobe for true,false,number
    console.log("anyfn :>> ", anyfn);
  });
  
  beforeAll(()=>{
    console.log("call before all");
  })

  beforeEach(()=>{
    console.log("call before each");
  })

  afterEach(()=>{
    console.log("call after each")
  })

  afterAll(()=>{
    console.log("call after all");
  })

  it('spyon componentdidmount',()=>{
      jest.spyOn(News.prototype,'componentDidMount')
      shallow(<News/>)
      expect(News.prototype.componentDidMount).toHaveBeenCalled()
      expect(News.prototype.componentDidMount).toHaveBeenCalledTimes(1)
      News.prototype.componentDidMount.mockRestore()
  })

  it('state',()=>{
      console.log('state >>',newsinstance.state())
       newsinstance.instance().changeStat()/* .then((data)=>{
          expect(data).toEqual({newsCount: 3})
      }) */
      console.log('state1 >>',newsinstance.state())
      expect(newsinstance.state()).toEqual({newsCount:3,age:0})//equal for object 
  })

  it("props",()=>{
      let inputProps= newsinstance.find('input').props();
      console.log('inputProps :>> ', inputProps);
      let matchProps = {type: 'text', name: 'test',value:"0"}
      expect(inputProps).toEqual(matchProps)
  })

  // it("axios for load data",()=>{
  //   console.log('before newsinstance.state :>> ', newsinstance.state());
  //   jest.spyOn(mockAxios,'default').mockRejectedValue({
  //     data:{
  //       age:36
  //     }
  //   })
  //   return newsinstance.instance().func().then((data)=>
  //   console.log('after newsinstance.state :>> ', newsinstance.state())
  //   )
  // })

  it("math function test",()=>{
    math.add.mockImplementation(()=>20)
    console.log('math add',math.add(11,11));
    console.log('math sub',math.sub(11,11));
  })

  it("call function check",()=>{
    newsinstance.find('button').simulate('click')
    expect(mockMultiply).toBeCalled()
    expect(mockMultiply).toHaveBeenCalledTimes(2)
  })
});
 