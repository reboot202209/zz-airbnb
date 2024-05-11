import PropTypes from 'prop-types'
import React, { memo } from 'react'
import RoomListWrapper from './style'
import SectionRoom from '../section-room'
const SectionRoomList = memo(({roomList, itemWidth="25%"}) => {
  return (
    <RoomListWrapper>
      {
        roomList.slice(0,8).map(item => {
          return (
            <SectionRoom key={item.id} roomData={item} itemWidth={itemWidth}/>
          )
        })
      }
    </RoomListWrapper>
  )
})

SectionRoomList.propTypes = {
  roomList: PropTypes.array
}

export default SectionRoomList