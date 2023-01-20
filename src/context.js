import React, {createContext,useState} from "react";

export const StudentContext = createContext()

const StudentList = ({children})=>{
    const [students,setstudents]= useState([
        { id: 1, name: 'Ilhom', surname: 'Abdulahatov' },
        { id: 2, name: 'Islom', surname: 'Abdulahatov' },
        { id: 3, name: 'Rustam', surname: 'Abdulahatov' },
        { id: 4, name: 'Ilhom', surname: 'Abdulahatov' },
        { id: 5, name: 'Davron', surname: 'Abdulahatov' },
        { id: 6, name: 'Ilhom', surname: 'Abdulahatov' },
        { id: 7, name: 'Sulton', surname: 'Abdulahatov' },
    ])
    return(
        <StudentContext.Provider value={[students,setstudents]}>
            {children}
        </StudentContext.Provider>
    )
}

export default StudentList