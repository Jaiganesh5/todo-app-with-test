import {render , screen } from "@testing-library/react";
import React from "react";
import FilterButton from "./FilterButton";


describe("check the filter button is to be rendered correctly",()=>{
    it("check the name of the filter button is set correctly",()=>{
        render(<FilterButton name = "all"/>);
        const name = screen.getByText("all");
        expect(name).toBeDefined();
    });


    it("check the filter button is  aria-pressed",()=>{

        render(<FilterButton name = "all" isPressed = {true}/>);
        const filterButton = screen.getByTestId("filter-btn");
        expect(filterButton.getAttribute('aria-pressed')).toBeTruthy();
    });


   
})


