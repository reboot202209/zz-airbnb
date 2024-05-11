import PropTypes from 'prop-types'
import React, { memo } from 'react'
import TabsWrapper from './style'
import classNames from 'classnames'
import ScrollView from '@/base_ui/scroll-view'
const SectionTabs = memo(({tabArr = [], currentTab, handleTabChange}) => {
  console.log("SectionTabs")
  // const handleTabClick = item => console.log("handleTabClick", item)
  return (
    <TabsWrapper>
      <ScrollView>     
        {
          tabArr.map(item => {
            return (
              <div 
              key={item} 
              className={classNames("tab", {"active": item === currentTab})}
              onClick={e => handleTabChange(item)}
              >
                {item}
              </div>
            )
          })
        }
      </ScrollView>
 
    </TabsWrapper>
  )
})

SectionTabs.propTypes = {
  tabArr: PropTypes.array
}

export default SectionTabs