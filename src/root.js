import React, { Component } from 'react';
import UseState from './review';
import Class from './Class'
import Hooks from './Hook'

class Root extends Component {
    render() {
        return (
            <div  style={{ display: 'flex' }}>
                <UseState/>
                {/* <Class /> */}
                {/* <Hooks /> */}
            </div>
        );
    }
}

export default Root;