import React from 'react'

import  { shallow } from "enzyme";
import Count from '../Count';
import Table from './Table';
import toJson from 'enzyme-to-json';

describe.skip("Count page testing",()=>{
    const countInstance=shallow(<Count/>)

    it("simulate check",()=>{
        expect(countInstance.find('.count-0').length).toEqual(1)
        countInstance.find('button').simulate('click')
        expect(countInstance.find('.count-1').length).toEqual(1)
    })
    it("dive",()=>{
        expect(countInstance.find(Table).dive().find('.custome-border').length).toBe(1)
    })
    it("snapShot tabel",()=>{
        const tableInstance=shallow(<Table/>)
        expect(toJson(tableInstance)).toMatchSnapshot()
    })
    it("snapShot table 1",()=>{
        const tableInstance=shallow(<Table/>)
        expect(toJson(tableInstance)).toMatchSnapshot()
    })
    it("snapShot table 2",()=>{
        const tableInstance=shallow(<Table/>)
        expect(toJson(tableInstance)).toMatchSnapshot()
    })
})