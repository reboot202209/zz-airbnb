import PropTypes from 'prop-types'
import React, { memo } from 'react'
import FooterWrapper from './style'
import classNames from 'classnames'


const SectionFooter = memo(({location}) => {
  const isDefault = !location
  const bottomText = isDefault ? "查看全部" : `查看更多${location}房源`
  return (
    <FooterWrapper>
      <div className={classNames({"text-active": !isDefault})}>
      {bottomText} &gt;
      </div>
    </FooterWrapper>
  )
})

SectionFooter.propTypes = {
  location: PropTypes.string
}

export default SectionFooter