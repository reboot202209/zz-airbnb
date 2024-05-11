import styled from "styled-components"

const TabsWrapper = styled.div`
/* display: flex; */
margin: 15px 0;
/* overflow: hidden; */
.tab {
    flex-basis: 120px;
    flex-shrink: 0;
    padding: 14px 16px;
    margin-right: 16px;
    border: 1px solid #d8d8d8;
    border-radius: 3px;
    text-align: center;
    font-size: 17px;
    cursor: pointer;

    &.active {
      color: #fff;
      background-color: #00848a;
    }
}

`

export default TabsWrapper