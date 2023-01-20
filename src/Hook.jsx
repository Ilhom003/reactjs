import React, { useContext } from "react";
import { StudentContext } from "./context";

const Hooks = () => {
    // const [students, setStudents] = useState()
    const [students,setstudents] = useContext(StudentContext)

    const onDelete = (id)=>{
        let res = students.filter(st => {
            return st.id !== id
        })
        setstudents(res)
    }
    return (
        <div style={{ background: 'coral' }}>
            <h1>Student List {students.length}</h1>
            {students.map(student =>{
                return(
                    <h1 key={student.id}>Name: {student.name} <button onClick={()=> onDelete(student.id)}>delete</button></h1>
                )
            })}
        </div>
    )
}

export default Hooks;   