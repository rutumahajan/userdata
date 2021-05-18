import React from "react";
import Listing from'./listing'
import ReactDOM from 'react-dom';
import { shallow,render} from 'enzyme';
import { ExpansionPanelActions } from "@material-ui/core";
//import { expect } from 'chai';



describe('Listing page', ()=>{
   it('Should display User Registry in header',()=>{
    const wrapper = shallow(<Listing/>);
    const header=wrapper.find('h1');
    expect(header).toBeDefined();
   })
})
// it('User Data should be fetched',()=>{
//     const wrapper=shallow(<Listing/>);
//      expect(Listing).toHaveBeenCalled();   
        
// })


it('Should display User Registry in header',()=>{
    const wrapper = shallow(<Listing/>);
    const header=wrapper.find('h1').text();
    expect(header).toEqual('User Registry');
   })
