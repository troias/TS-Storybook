import styled from 'styled-components'



const Title = styled.h1`

    font-size: 1.5em; 
    text-align: center;
    color: ${(props: {primary: any}) => props.primary ? "black" : "palevioletred"};
    cursor: round;
`



export default Title
