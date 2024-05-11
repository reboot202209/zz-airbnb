import styled from "styled-components";

const RightWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;


  .item {
    margin-left: 10px;
    padding: 12px 15px;
    border-radius: 20px;
    ${props => props.theme.mixin}
    &:hover {
    background-color: #ebebeb;
  }
  }
  .btn-profile {
    display: flex;
    align-items: center;
    border: 1px solid #ebebeb;
    padding: 5px;
    &:hover {
    background-color: #fff;
  }
    >svg {
      margin-left: 10px;
    }
  }

`

export default RightWrapper