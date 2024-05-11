import styled from "styled-components";

const CenterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 48px;
  width: 318px;
  padding: 0 10px 0 20px;
  border: 1px solid #ddd;
  border-radius: 24px;
  box-sizing: border-box;
  cursor: pointer;
  ${props => props.theme.mixin}
  
  .text {
    font-weight: 700;
  }

  .search {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 60%;
    background-color: ${props => props.theme.color.primary};
    color: #fff;
  }
`

export default CenterWrapper