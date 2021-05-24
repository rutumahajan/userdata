import React from "react";
import Pagination from'./Pagination'
import ReactDOM from 'react-dom';
import { shallow,render} from 'enzyme';
import { ExpansionPanelActions } from "@material-ui/core";
const onPage = jest.fn();
const totalPages = 10;

beforeEach(() => {
   jest.clearAllMocks();
    
}),
it('should have input type as Number',()=>{
    const wrapper = shallow(<Pagination onPage = {onPage} totalPage = {totalPages}/>);
    expect(wrapper.find('input').getElement().props.type).toBe('number');
   }),
   
it('Should go to previous page of current page ',()=>{
    const wrapper = shallow(<Pagination onPage = {onPage} totalPage = {totalPages}/>);
    wrapper.find("#backward-button").props().onClick();
    expect((onPage)).toHaveBeenCalled();
   }),


   it('Should go to next page if current page is not the last page',()=>{
    const wrapper = shallow(<Pagination onPage = {onPage} totalPage = {totalPages}/>);
    wrapper.find("#forward-button").props().onClick();
    expect((onPage)).toHaveBeenCalled();
   })
