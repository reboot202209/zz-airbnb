import SectionHeader from '@/cpns/section-header'
import SectionRoomList from '@/cpns/section-room-list'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import SectionV1Wraaper from './style'
import SectionFooter from '@/cpns/section-footer'

const HomeSectionV1 = memo(({sectionData}) => {
  console.log("HomeSectionV1", sectionData)
  return (
    <SectionV1Wraaper>
      <SectionHeader title={sectionData.title} subtitle={sectionData.subtitle}/>
      <SectionRoomList roomList={sectionData.list}/>
      <SectionFooter/>
    </SectionV1Wraaper>
  )
})

HomeSectionV1.propTypes = {
  sectionData: PropTypes.object
}

export default HomeSectionV1