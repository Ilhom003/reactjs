import React from "react";

class App extends React.Component{
    render(){
        // console.log(this.props);
        // const {children,title}=this.props
        return(
            <div>
                {this.props.children};
                <h1>Hi {this.props.title}</h1>
                {/* <h3>{this.props?.data?.title} is Js library</h3>
                <h5>{this.props?.data?.title} is {this.props?.data?.status || 'unknown'}</h5> */}
                {/* <h1>Hi {this.props.title}</h1>
                <h3>{this.props.title} is Js library</h3>
                <h5>{this.props.title} is {this.props.status || 'unknown'}</h5> */}
            </div>
        )
    }
}
// class Department extends React.Component{
//     render(){
//         return(
//             <div>
//                 <h1>Hi React Js</h1>
//                 <h3>React is Js library</h3>
//             </div>
//         )
//     }
// }

// export {Department,App}
export default App;