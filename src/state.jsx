import React from "react";
import  {student}  from "./mock";

class State extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1,
            data:student,
            name: "Ilhom",
            surname:'Abdulakhatov'
        }
    }
    render() {
        // const plus = () => {
        //     if (this.state.count < 10) {
        //         this.setState({ count: this.state.count + 1 })
        //     }
        // }
        // const minus = () => {
        //     if (this.state.count > 1) {

        //         this.setState({ count: this.state.count - 1 })
        //     }
        // }

        const onChange = (event) => {
            console.log(event.target.name);
            this.setState({ [event.target.name]: event.target.value })
        }
        // const onCheck = (e) => {
        //     console.log(e.target.checked);
        // }
        // const onNameChange=(e)=>{
        //     this.setState({name:e.target.value})
        // }
        // const onSurNameChange=(e)=>{
        //     this.setState({surname:e.target.value})
        // }
        const onSearch=(e)=>{
           let searched = student.filter(value => value.name.toLowerCase().includes(e.target.value.toLowerCase()))
            this.setState({data:searched})
        }
        
        return (
            <div>
                <h1>name: {this.state.name}</h1>
                <h1>surname: {this.state.surname}</h1>
                <h1>State {this.state.count}</h1>
                <input name="name" onChange={onChange} type="text" placeholder="name" />
                <input name="surname" onChange={onChange} type="text" placeholder="surname" />
                <hr/>
                <input onChange={onSearch} type="text"  placeholder="Search..."/>
                {this.state.data.map(({id,name,status,age})=>{
                    return(
                        <h1 key={id}>{id} {name} {status} {age}</h1>
                    )
                    
                })}
            </div>
        )
    }
}

export default State; 