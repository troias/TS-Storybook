import styled from 'styled-components'

const Wrapper = styled.section`

    padding: 4em;
    background: ${(props: {primary: boolean}) => props.primary ? "palevioletred" : 'white'}

`

export default Wrapper