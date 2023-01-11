import React, { Component } from 'react';

class Signup extends Component {
    render() {
        return (
            <div style={{backgroundColor:'black',color:'white'}}>
                <h1>Signup</h1>
                <button onClick={()=>this.props.getRes(true)}>Signin</button>

            </div>
        );
    }
}

export default Signup;