import React, { memo } from 'react'
import CopyrightWrapper from './style'
import IconWeibo from '@/assets/img/svg/icon-weibo'
import IconWeixin from '@/assets/img/svg/icon-weixin'
import IconGlobal from '@/assets/img/svg/icon-global'
const copyrightData = [
  "© 2024 Airbnb, Inc.", "隐私", "条款", "网站地图"
]
const FooterCopyright = memo(() => {
  return (
    <CopyrightWrapper>
      <div className="left">
        {
          copyrightData.map((item, index) => {
            return (
              <div key={index}>
                <span>{item}</span>
                {index !== copyrightData.length - 1 && <span className='dot'>·</span>}
              </div>
           )
          } 
        )
        }
      </div>
      <div className="right">
        <div className="lang">
          <IconGlobal/>
          <span>简体中文(CN)</span>
        </div>
        <div className="currency">
          ￥
          <span>CNY</span>
        </div>
        <IconWeibo/>
        <IconWeixin/>
      </div>
    </CopyrightWrapper>
  )
})

export default FooterCopyright