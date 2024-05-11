import styled from "styled-components";


const IcpWrapper = styled.div`
display: flex;
padding: 8px 0 30px;
font-size: 12px;
color: ${props => props.theme.text.secondary};

.dot {
  padding: 0 3px;
}
`

export default IcpWrapper