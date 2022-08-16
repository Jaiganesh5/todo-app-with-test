import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Form from "./Form";



describe("check the render of the form",()=>{
    it("check whether the form is defined",()=>{
        render(<Form></Form>);
        const inputValue = screen.getByTestId("add-task-field");
        expect(inputValue).toBeDefined();
        expect(inputValue).toHaveAttribute("type","text");
    });
    it("check whether the form is empty",()=>{
        render(<Form></Form>);
        const inputValue = screen.getByTestId("add-task-field");
        expect(inputValue).toBeEmptyDOMElement();
        expect(inputValue).toHaveDisplayValue("");
    });
    it("check whether the add task button is defined",()=>{
        render(<Form></Form>);
        const addTaskBtn = screen.getByTestId("add-task-btn");
        expect(addTaskBtn).toBeDefined();
        expect(addTaskBtn).toBeEnabled();
    })
    
})

describe("check the functionality of the form",()=>{
    it("check whether the form is empty after submitted",()=>{

        const addTask = (name)=>{
            return;
        }

        render(<Form addTask = {addTask}></Form>);
        const inputValue = screen.getByTestId("add-task-field");
        fireEvent.change(inputValue, { "target": { "value": "watch movie" } });
       
        const addtaskbtn = screen.getByTestId("add-task-btn");
        fireEvent.click(addtaskbtn);
        
        expect(inputValue.value).toBe("");
       
    });
    
    
})