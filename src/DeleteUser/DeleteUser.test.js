import React from "react";
import DeleteUser from './DeleteUser';
import ReactDOM from 'react-dom';
import { shallow,render} from 'enzyme';
import Button from '@material-ui/core/Button';

let wrapper;
const closeBut = jest.fn()
const userdata = { "id":10, "name":"Rutuja", "email":"xyz@gmail.com", "gender":"Female", "status":"Active"}
beforeEach(() => {
    wrapper = shallow(<DeleteUser closeBut = {closeBut} user = {userdata}/>);
    jest.clearAllMocks();
});

it('Check if the name of first button as Delete',()=>{
    var deleteButton = wrapper.find(Button).getElements()[0];
    expect(deleteButton.props.children).toBe('Delete');
}),

it('Check if the name of second button as Cancel',()=>{
    var cancelButton = wrapper.find(Button).getElements()[1];
    expect(cancelButton.props.children).toBe('Cancel');
})