import React, { memo } from 'react'
import footerData from '@/assets/data/footer.json'
import FooterWrapper from './style'
import FooterLinks from './cpns/footer-links'
import FooterCopyright from './cpns/footer-copyright'
import FooterIcp from './cpns/footer-icp'
const AppFooter = memo(() => {
  return (
    <FooterWrapper>
      <FooterLinks links={footerData}/>
      <FooterCopyright/>
      <FooterIcp/>
    </FooterWrapper>
  )
})

export default AppFooter