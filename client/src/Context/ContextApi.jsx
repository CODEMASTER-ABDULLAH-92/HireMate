import { createContext, useState } from "react";
import { jobData } from "../assets/assets";
export const AppContext = createContext();

export const AppContextProvider = (props) =>{

    const url ="";

    const value = {jobData,url}
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}
