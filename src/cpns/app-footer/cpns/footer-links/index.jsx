import PropTypes from 'prop-types'
import React, { memo } from 'react'
import LinksWrapper from './style'

const FooterLinks = memo(({links}) => {
  return (
    <LinksWrapper>
      <div className="section">
        {links.map((item, index) => {
            return (
              <dl key={index}>
                <dt className='desc'>{item.name}</dt>
                {
                  item.list.map(iten => <dl key={iten} className='item'><a href="#">{iten}</a></dl>)
                }
              </dl>
            )
          })}
      </div>

    </LinksWrapper>
  )
})

FooterLinks.propTypes = {
  links: PropTypes.array
}

export default FooterLinks