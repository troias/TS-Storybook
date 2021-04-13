
import styled from 'styled-components';





const Header = styled.h2`

background: ${(props: { primary: boolean }) => props.primary ? "red" : "blue"}

`

export default Header