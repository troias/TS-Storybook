import styled from 'styled-components'

const Wrapper = styled.section`

    padding: 4em;
    background: ${(props: {theme: boolean}) => props.theme ? "palevioletred" : 'white'}

`

export default Wrapper