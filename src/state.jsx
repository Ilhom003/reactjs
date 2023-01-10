import React from "react";
import { Box,ActiveButton, Button, Container, Decs, Title, Rotate } from "./stateStyle";
import { ThemeProvider, createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body{
        background: ${(props)=>props.theme.bg};
        color:${(props)=> props.theme.color}
    }
`
class State extends React.Component {

    constructor(props){
        super(props);
        this.state={
            light:false
        }
    }
    render() {
        
        const theme = {
            bg: this.state.light ? 'wahite' : 'black',
            color: this.state.light ? 'black' : 'white'
        }

        return (

            <ThemeProvider theme={theme}>
                <GlobalStyle/>
                <h1>
                    Theme Provider
                </h1>
                <Button>Click me</Button>
                <ActiveButton>Active button</ActiveButton>
                <Rotate>Rotate</Rotate>
                <button onClick={()=> this.setState({light: !this.state.light})}>Change theme</button>
            </ThemeProvider>



            // <Container>
                /* <Box bg='blue' type='large'>Large</Box>
                <Box bg='yellow' type='medium'>Medium</Box>
                <Box bg='red' type='small'>Small</Box>
                <Title>Hey Title</Title>
                <Decs left>Description 1</Decs>
                <Decs>Description 2</Decs> */
            /* </Container> */
        )
        }
}

export default State;

// class State extends React.Component {

//     render() {
//         return (
//             <div>
//                 <h1>Styled Components</h1>
//             </div>
//         )
// }}

// export default State; 