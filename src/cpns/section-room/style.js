import styled from "styled-components";


const RoomWrapper = styled.div`
  width:${props => props.$itemWidth};
  padding: 8px;
  box-sizing: border-box;
  .container {
    .item {
      margin-top: 5px;
    }
    .room-pic {
      position: relative;
      padding-top: 66.6%;
      border-radius: 4px;
      overflow:hidden;

      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .desc {
      font-size: 12px;
      color: #878787;
    }

    .name {
      line-height: 20px;
      font-size: 14px;
      font-weight: 600;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    .price {
      line-height: 20px;
    color: rgba(0, 0, 0, 0.85);
    font-size: 14px;
    }

    .bottom {
      display: flex;
      align-items: center;
    /* height: 18px; */
    color: #484848;
    font-size: 12px;
    font-weight: 600;

    .css-qgata7-MuiRating-root {
      color: ${props => props.theme.color.secondary};
      font-size: 15px;
    }
    }
  }
`

export default RoomWrapper