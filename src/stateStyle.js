import styled, { css } from "styled-components";

export const Container = styled('div')`
display: flex; 
background-color: coral;
color: black;
padding: 20px;
`

const common = css`
 color:green;
 font-family: bold;
 font-weight: 400;
 padding: 10px;
 border: 1px solid black;
 height: fit-content;
font-size: 20px;
`

export const Title = styled.h1`
${common}
`
export const Decs = styled.h1`
${common}
font-size: 16px;
color: ${({ left })=> left ? 'red' : 'green'};
`

const getSize = (props) => {
    switch (props.type) {
        case 'large': return '200px';
        case 'medium': return '150px';
        case 'small': return '100px';
        default: return '150px'
    }
}

export const Box = styled.div`
background: ${ (props) => props.bg };
display: flex;
align - items: center;
justify - content: center;
font - size: 28px;
width: ${ getSize };
height: ${ getSize };
/* width: ${(props) => (props.type === 'large' ? '200px' : '150px')};
height: ${(props) => (props.type === 'large' ? '200px' : '150px')};   */
border: 2px solid blue;
margin: 10px;

`