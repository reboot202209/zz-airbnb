import styled from "styled-components";


const SheaderWrapper = styled.div`
.title {
  margin-bottom: 15px;
  font-size: 22px;
  font-weight: 600;
  color: ${props => props.theme.text.primary};
}

.subtitle {
  font-size: 16px;
  color: ${props => props.theme.text.secondary};
  margin-bottom: 20px;
}
`

export default SheaderWrapper