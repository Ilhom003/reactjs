import styled, { css,keyframes } from "styled-components";

const rotate = keyframes`
from{
    transform: rotate(0deg);
}
to{
    transform: rotate(360deg);
}
`
export const Container = styled.div`
margin: 20px;
`

export const Button = styled.div`
display: flex;
justify-content: center;
align-items: center;
color: white;
margin: 10px;
width: 200px;
height: 40px;
background-color: coral;
border-radius: 8px;
cursor: pointer;
:active{
    transform: scale(0.97);
}
`
export const ActiveButton = styled(Button)`
height: 50px;
`;

export const Rotate = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100px;
height: 100px;
border-radius: 50%;
border:2px solid coral;
animation: ${rotate} 2s linear infinite;
`





















// export const Container = styled('div')`
// display: flex; 
// background-color: coral;
// color: black;
// padding: 20px;
// `

// const common = css`
//  color:green;
//  font-family: bold;
//  font-weight: 400;
//  padding: 10px;
//  border: 1px solid black;
//  height: fit-content;
// font-size: 20px;
// `

// export const Title = styled.h1`
// ${common}
// `
// export const Decs = styled.h1`
// ${common}
// font-size: 16px;
// color: ${({ left }) => left ? 'red' : 'green'};
// `

// const getSize = (props) => {
//     switch (props.type) {
//         case 'large': return '200px';
//         case 'medium': return '150px';
//         case 'small': return '100px';
//         default: return '150px'
//     }
// }

// export const Box = styled.div`
// background: ${(props) => props.bg};
// display: flex;
// align-items: center;
// justify-content: center;
// font-size: 28px;
// width: ${getSize};
// height: ${getSize};
// /* width: ${(props) => (props.type === 'large' ? '200px' : '150px')};
// height: ${(props) => (props.type === 'large' ? '200px' : '150px')};   */
// border: 2px solid blue;
// margin: 10px;
// `