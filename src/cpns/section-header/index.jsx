import PropTypes from 'prop-types'
import React, { memo } from 'react'
import SheaderWrapper from './style'
const SectionHeader = memo(({title, subtitle}) => {
  return (
    <SheaderWrapper>
      <div className="title">{title}</div>
      <div className="subtitle">{subtitle}</div>
    </SheaderWrapper>
  )
})

SectionHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string

}

export default SectionHeader