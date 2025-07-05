import { createContext, useState } from "react";
import { jobData } from "../assets/assets";
export const AppContext = createContext();

export const AppContextProvider = (props) =>{


    const value = {jobData}
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}
