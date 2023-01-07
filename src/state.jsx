import React from "react";
import { student } from "./mock";

class State extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1,
            data: student,
            name: '',
            status: '',
            age: '',
            searched: '',
            selectedItem: {},
            active: null
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
        const onSearch = (e) => {
            let searched = student.filter(value => `${value[this.state.searched]}`.toLowerCase().includes(e.target.value.toLowerCase()))
            this.setState({ data: searched })
        }
        const onSelect = (e) => {
            this.setState({ searched: e.target.value })
        }
        const onDelete = (id) => {
            console.log(id);
            let deleted = this.state.data.filter(value => value.id !== id)
            this.setState({ data: deleted })
        }

        const onAdd = () => {
            let user = { id: Date.now(), name: this.state.name, status: this.state.status, age: this.state.age };
            console.log(user);
            this.setState({ data: [...this.state.data, user], name: '', status: '', age: '' })
        }

        const onEdit = ({ id, name, status, age }, isSave) => {
            if (isSave) {
                let res = this.state.data.map(value=> value.id === this.state.active.id ?{...value, name:this.state.name,status:this.state.status,age:this.state.age}:value)
                this.setState({ active: null,data:res })
            } else {
                this.setState({
                    name: name,
                    status: status,
                    age: age,
                    active: { id, name, status, age },
                })

            }
        }
        return (
            <div>
                <h1>name: {this.state.name}</h1>
                <h1>status: {this.state.status}</h1>
                <h1>age: {this.state.age}</h1>
                {/* <h1>State {this.state.count}</h1> */}
                <input value={this.state.name} name="name" onChange={onChange} type="text" placeholder="name" />
                <input value={this.state.status} name="status" onChange={onChange} type="text" placeholder="surname" />
                <input value={this.state.age} name="age" onChange={onChange} type="text" placeholder="surname" />
                <button onClick={onAdd}>Add</button>
                <hr />
                <input onChange={onSearch} type="text" placeholder="Search..." />
                <select onChange={onSelect} name="" id="">
                    <option value="id">ID</option>
                    <option value="name">Name</option>
                    <option value="status">Status</option>
                    <option value="age">Age</option>
                </select>
                <table border={1} width={'80%'}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Status</th>
                            <th>Age</th>
                            <th>Delete</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.data.length ?
                                this.state.data.map(({ id, name, status, age }) => {
                                    return (
                                        <tr key={id}>
                                            <td>{id}</td>
                                            <td>{this.state.active?.id === id ? <input name="name" onChange={onChange} value={this.state.name} type="text" /> : name}</td>
                                            <td>{this.state.active?.id === id ? <input name="status" onChange={onChange} value={this.state.status} type="text" /> : status}</td>
                                            <td>{this.state.active?.id === id ? <input name="age" onChange={onChange} value={this.state.age} type="text" /> : age}</td>
                                            <td><button onClick={() => onDelete(id)}>Delete</button></td>
                                            <td><button onClick={() => onEdit({ id, name, status, age }, this.state.active?.id == id)}>
                                                {this.state.active?.id == id ? 'Save' : 'Edit'}
                                            </button></td>
                                        </tr>

                                    )

                                }) : <tr><th colSpan={6}><h1>No a data</h1></th></tr>
                        }
                    </tbody>
                </table>
            </div >
        )
    }
}

export default State; 