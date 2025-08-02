import { createContext, useState } from "react";
import { jobData } from "../assets/assets";
export const AppContext = createContext();

export const AppContextProvider = (props) =>{
    const [token, setToken] = useState(true); 
    const [userProfile, setUserProfile] = useState(false); 
    const url ="";
    const value = {jobData,url, userProfile, token}
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}
