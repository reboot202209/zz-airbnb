import styled from "styled-components";

const LinksWrapper = styled.div`
  
  color: ${props => props.theme.text.primary};

  .section {
    display: flex;
    justify-content: space-between;
    padding: 40px 0;

  border-bottom: 1px solid #DDD;

  .desc {
    font-weight: 700;
  }
  .item {
    margin-top: 15px;

    a:hover {
      text-decoration: underline;
    }
  }
  }
`

export default LinksWrapper