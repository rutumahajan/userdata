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
it('Should go to previous page of current page ',()=>{
    const wrapper = shallow(<Pagination onPage = {onPage} totalPage = {totalPages}/>);
    wrapper.find("#backward-button").props().onClick();
    expect((onPage)).toHaveBeenCalled();
   }),

//    it('Should not go to previous page if current page is 1',()=>{
//     const wrapper=shallow(<Pagination onPage = {onPage}  totalPage = {totalPages}/>);
//     wrapper.find("#backward-button").props().onClick();
//     expect((onPage)).not.toHaveBeenCalled();
//    }),

   it('Should go to next page if current page is not the last page',()=>{
    const wrapper = shallow(<Pagination onPage = {onPage} totalPage = {totalPages}/>);
    wrapper.find("#forward-button").props().onClick();
    expect((onPage)).toHaveBeenCalled();
   })

//    it('Should not go to next page if current page is the last page',()=>{
//     const wrapper = shallow(<Pagination onPage = {onPage} totalPage = {totalPages}/>);
//     wrapper.find("#forward-button").props().onClick();
//     expect((onPage)).not.toHaveBeenCalled();
//    })