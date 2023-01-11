import React, { Component } from 'react';

class Signin extends Component {
    render() {
        return (
            <div style={{backgroundColor:'black',color:'white'}}>
                <h1>Signin</h1>
                <button onClick={()=>this.props.getRes(false)}>Signup</button>
            </div>
        );
    }
}

export default Signin;