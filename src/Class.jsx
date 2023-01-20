import React from "react";

class Class extends React.Component {
    render() {
        return (
            <div style={{ background: 'blue',color:'white', height:'80px',display:'flex',justifyContent:'space-around' }}>
                <h1>Students {0}</h1>
                <h1>Home</h1>
                <h1>About</h1>
                <h1>Classes</h1>
                <h1>Contact</h1>
            </div>
        )
    }
}
export default Class;