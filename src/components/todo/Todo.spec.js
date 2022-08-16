
import {fireEvent, render , screen } from "@testing-library/react";
import React from "react";
import Todo from "./Todo";


describe("check the todo is to be rendered correctly",()=>{

    it("check the task is named correctly",()=>{
        render(<Todo name="watch movie" completed={true} />);
        const todo = screen.getAllByText("watch movie");
        expect(todo).toBeDefined();
    })

    it("check the task is completed",()=>{
        render(<Todo name="watch movie" completed={true} />);
        const todo = screen.getByTestId("todo-checkbox");
        expect(todo).toBeChecked();
    })

    it("check the task is uncomplete",()=>{
        render(<Todo name="watch movie" completed={false} />);
        const todo = screen.getByTestId("todo-checkbox");
        expect(todo).not.toBeChecked();
    })
   
})

describe("check the todo functionality",()=>{
    it("check the edit button is fired",()=>{

        render(<Todo id="sample" name="watch movie" completed={false} />);
        const editBtn = screen.getByTestId("edit-btn");
        fireEvent.click(editBtn);
        const editField = screen.getByTestId("todo-edit-field");
        expect(editField.value).toBe("watch movie");

    })

    it("check the cancel button is fired",()=>{
        render(<Todo id="sample" name="watch movie" completed={false} />);
        const editBtn = screen.getByTestId("edit-btn");
        fireEvent.click(editBtn);
    
        const editField = screen.getByTestId("todo-edit-field");
        fireEvent.change(editField, {target : {value : "watch movies"}})

        const cancelBtn = screen.getByTestId("cancel-btn");
        fireEvent.click(cancelBtn);

        const todo = screen.getAllByText("watch movie");
        expect(todo).toBeDefined();
    })

    it("check the cancel button is appear when edit is clicked",()=>{
        render(<Todo id="sample" name="watch movie" completed={false} />);
        const editBtn = screen.getByTestId("edit-btn");
        fireEvent.click(editBtn);
    
        
        const cancelBtn = screen.getByTestId("cancel-btn");
        
        expect(cancelBtn).toBeDefined();
    })

    it("check the save button is fired",()=>{
        render(<Todo id="sample" name="watch movie" completed={false} />);
        const editBtn = screen.getByTestId("edit-btn");
        fireEvent.click(editBtn);
    
        
        const saveBtn = screen.getByTestId("save-btn");
        
        expect(saveBtn).toBeDefined();
    })
   
})