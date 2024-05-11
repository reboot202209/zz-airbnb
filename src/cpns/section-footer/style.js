import styled from "styled-components";


const FooterWrapper = styled.div`
margin-top: 15px;
font-size: 16px;
font-weight: 700;
&:hover {
  text-decoration: underline;
}

.text-active {
  color: ${props => props.theme.color.secondary}
}
`

export default FooterWrapper