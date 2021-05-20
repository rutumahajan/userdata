import React from "react";
import Pagination from'./Pagination'
import ReactDOM from 'react-dom';
import { shallow,render} from 'enzyme';
import { ExpansionPanelActions } from "@material-ui/core";
const onPage = jest.fn();
currentPage=1;
const totalPage = 10;

beforeEach(() => {
   jest.clearAllMocks();
    
}),
it('Should not be ',()=>{
    wrapper = shallow(<Pagination onPage = {onPage} totalPage = {totalPages}/>);
    wrapper.find("#backward-button").props().onClick();
    expect(goToPreviousPage).toHaveBeenCalledWith(1);
   })

//    it('After clicking on Back button when current page is at 1 it should Not  call onPage',()=>{
//        wrapper=shallow(<Pagination onPage = {onPage}  totalPage = {totalPages}/>);
//     wrapper.find("#backward-button").props().onClick();
//     expect(goToPreviousPage).toHaveBeenCalledTimes(0);
//    }),

//    it('After clicking on Forward button when current page is at 2 it should call onPage',()=>{
//     wrapper = shallow(<Pagination onPage = {onPage}  totalPages = {totalPages}/>);
//     wrapper.find("#forward-button").props().onClick();
//     expect((onPage)).toHaveBeenCalledTimes(1);
//    }),

//    it('After clicking on Forward button when current page is at last page it should Not  call onPage',()=>{
//     wrapper = shallow(<Pagination onPage = {onPage}  totalPage = {totalPages}/>);
//     wrapper.find("#forward-button").props().onClick();
//     expect((onPage)).toHaveBeenCalledTimes(0);
//    })