import styled from "styled-components";


const CopyrightWrapper = styled.div`
display: flex;
justify-content: space-between;

padding: 25px 0 6px;
border-bottom: 1px solid #DDD;
.right, .left {
  display: flex;
}

.left {
  .dot {
    padding: 0 6px;
  }
}

.right {

  font-weight: 600;
  > div, > svg {
    margin-left: 15px;
  }
  span {
    margin-left: 10px;
  }
  .lang {
    display: flex;
  }
}
`

export default CopyrightWrapper