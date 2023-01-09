import React from "react";
import { Box, Container, Decs, Title } from "./stateStyle";

class State extends React.Component {

    render() {
        return (
            <Container>
                <Box bg='blue' type='large'>Large</Box>
                <Box bg='yellow' type='medium'>Medium</Box>
                <Box bg='red' type='small'>Small</Box>
                <Title>Hey Title</Title>
                <Decs left>Description 1</Decs>
                <Decs>Description 2</Decs>
            </Container>
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