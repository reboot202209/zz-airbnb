import React, { memo } from 'react'
import IcpWrapper from './style'
const icpData = ["京ICP备16017121号", "京ICP证160773号", "京公网安备 11010502032345号", "安彼迎网络（北京）有限公司", "营业执照", "全国旅游投诉渠道 12345", "违法和不良信息举报邮箱 jubao@airbnb.com"]
const FooterIcp = memo(() => {
  return (
    <IcpWrapper>
      {
        icpData.map((item, index) => {
          return (
            <div key={item}>
              <span>{item}</span>
              {
                index !== icpData.length - 1 && <span className='dot'>·</span>
              }
            </div>
          )
        })
      }
    </IcpWrapper>
  )
})

export default FooterIcp