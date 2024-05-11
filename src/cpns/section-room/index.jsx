import PropTypes from 'prop-types'
import React, { memo } from 'react'
import Rating from '@mui/material/Rating';

import RoomWrapper from './style'
const SectionRoom = memo(({roomData, itemWidth}) => {
  return (
    <RoomWrapper $itemWidth={itemWidth}>
      <div className="container">
        <div className="room-pic">
          <img src={roomData?.picture_url} alt="" />
        </div>
        <div className="desc item">
          {roomData?.verify_info.messages.join("·")}
        </div>
        <div className="name item">
          {roomData.name}
        </div>
        <div className="price item">{roomData.price_format}/晚</div>
        <div className="bottom item">
            <Rating 
                      defaultValue={roomData.star_rating ?? 5}
                      precision={0.5}
                      readOnly
                      sx={{ fontSize: '12px', color: '#00848A', marginRight: '-2px' }}
            />
            <div className="count">{roomData.reviews_count}</div>
          <div className="comment">{roomData?.bottom_info?.content}</div>
        </div>
      </div>
    </RoomWrapper>
  )
})

SectionRoom.propTypes = {
  roomData: PropTypes.object
}

export default SectionRoom