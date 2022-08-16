import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import App from "./App";

const DATA = [
    { id: "todo-0", name: "Eat", completed: true },
    { id: "todo-1", name: "Sleep", completed: false },
    { id: "todo-2", name: "Repeat", completed: false }
  ];

describe("Check the App is redering correcly",()=>{

    it("Check the todos are added",()=>{
        render(<App tasks = {DATA}/>);
        DATA.forEach(task=>{
           const todo = screen.queryAllByText(task.name);
           expect(todo).toBeDefined();
        })
    })
    
})

describe("Check the App is functionality",()=>{
    it("Check the todo is added",()=>{
        render(<App tasks = {DATA}/>);
        const inputField = screen.getByTestId("add-task-field");

        fireEvent.change(inputField,{target : {value : "watch movie"}});

        fireEvent.click(screen.getByTestId("add-task-btn"));

        const todo = screen.queryAllByText("watch movie");
        expect(todo).not.toBeNull();

    })

    it("Check the todo is deleted",()=>{
        render(<App tasks = {[{ id: "todo-0", name: "Eat", completed: true }]}/>);
       
        fireEvent.click(screen.getByTestId("delete-btn"));
        
        expect(screen.queryByText("Eat")).toBeNull();

    })

    it("Check the todo is edited",()=>{
        render(<App tasks = {[{ id: "todo-0", name: "Eat", completed: true }]}/>);
       
        fireEvent.click(screen.getByTestId("edit-btn"));
        const editField = screen.getByTestId("todo-edit-field");
        fireEvent.change(editField,{target : {value : "watch movie"}})
        fireEvent.click(screen.getByTestId("save-btn"));
        expect(screen.queryByText("Eat")).toBeNull();
        expect(screen.getAllByText("watch movie")).not.toBeNull();

    })

    it("Check the all filter button",()=>{
        render(<App tasks = {DATA}/>);
        fireEvent.click(screen.getByTestId("All"));
        DATA.forEach(task=>{
            expect(screen.getAllByText(task.name)).not.toBeNull();
        })

    })

    it("Check the active filter button",()=>{
        render(<App tasks = {DATA}/>);
        fireEvent.click(screen.getByTestId("Completed"));
        expect(screen.getAllByText("Eat")).not.toBeNull();
        expect(screen.queryByText("Sleep")).toBeNull();
        expect(screen.queryByText("Repeat")).toBeNull();
    })

    it("Check the completed filter button",()=>{
        render(<App tasks = {DATA}/>);
        fireEvent.click(screen.getByTestId("Active"));
        expect(screen.queryByText("Eat")).toBeNull();
        expect(screen.getAllByText("Sleep")).not.toBeNull();
        expect(screen.getAllByText("Repeat")).not.toBeNull();

    })

    
})