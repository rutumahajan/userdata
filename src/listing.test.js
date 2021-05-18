import React from "react";
import Listing from'./listing'
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { ExpansionPanelActions } from "@material-ui/core";
//import { expect } from 'chai';


describe('Listing page', ()=>{
   it('Should display User Registry in header',()=>{
    const wrapper = shallow(<Listing/>);
    const header=wrapper.find('h1');
    expect(header).toBeDefined();
   })
})
// describe('Listing page', ()=>{
//    it('Should display User Registry in header',()=>{
//     const wrapper = shallow(<Listing/>);
//     const header=wrapper.find('h1');
//     expect(header).to.have.lengthOf(1);
//    })
// })
