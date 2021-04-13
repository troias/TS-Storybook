
import styled from 'styled-components';





const Header = styled.h2`

background: ${(props: { theme: any }) => props.theme ? "red" : "blue"}

`

export default Header