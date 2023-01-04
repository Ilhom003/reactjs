import React from "react";

class State extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1,
            title: "Webbrain academy"
        }
    }
    render() {
        const plus = () => {
            if (this.state.count < 10) {
                this.setState({ count: this.state.count + 1 })
            }
        }
        const minus = () => {
            if (this.state.count > 1) {

                this.setState({ count: this.state.count - 1 })
            }
        }

        const onChange = (event) => {
            this.setState({ title: event.target.value })
        }
        const onCheck = (e) => {
            console.log(e.target.checked);
        }
        return (
            <div>
                <h1>{this.state.title}</h1>
                <h1>State {this.state.count}</h1>
                <button onClick={plus}>+</button>
                <button onClick={minus}>-</button>
                <input onChange={onChange} type="text" placeholder="name" />
                <input onChange={onCheck} type="checkbox" />
            </div>
        )
    }
}

export default State;