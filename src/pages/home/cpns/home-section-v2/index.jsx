import PropTypes from 'prop-types'
import React, { memo, useCallback, useState } from 'react'
import SectionV2Wrapper from './style'
import SectionHeader from '@/cpns/section-header'
import SectionRoomList from '@/cpns/section-room-list'
import SectionTabs from '@/cpns/section-tabs'
import SectionFooter from '@/cpns/section-footer'

const HomeSectionV2 = memo(({sectionData}) => {
  console.log("HomeSectionV2", sectionData)
  //从props中获取的数据再加工用state/ref还是普通的变量保存
  const tabs = sectionData.dest_address.map(item => item.name)
  const [currentTab, setCurrentTab] = useState(tabs[0])
  const handleTabChange =  useCallback(tabName => setCurrentTab(tabName), [])
  return (
    <SectionV2Wrapper>
      <SectionHeader title={sectionData.title} subtitle={sectionData.subtitle}/>
      <SectionTabs tabArr={tabs} currentTab={currentTab} handleTabChange={handleTabChange}/>
      <SectionRoomList roomList={sectionData.dest_list[currentTab]} itemWidth="33.333%"/>
      <SectionFooter location={currentTab}/>
    </SectionV2Wrapper>
  )
})

HomeSectionV2.propTypes = {
  sectionData: PropTypes.object
}

export default HomeSectionV2