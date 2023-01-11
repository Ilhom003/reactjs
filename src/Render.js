import React, { Component } from 'react';
import Signin from './Signin';
import Signup from './Signup';

class Render extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        }
    }
    render() {
        const getRes=(value)=>{
            this.setState({active:value})
        }
        return (
            <div>
                {
                    this.state.active ? <Signin getRes={getRes}/> : <Signup getRes={getRes}/>
                }
            </div>
        );
    }
}

export default Render;