import React, { Component } from 'react';
import Navbar from './Class'
import Body from './Hook'

class Root extends Component {
   
    render() {

        return (
            <div >
                <Navbar  />
                <Body />
            </div>
        );
    }
}

export default Root;