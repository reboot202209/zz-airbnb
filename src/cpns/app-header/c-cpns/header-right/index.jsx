import React, { memo } from 'react'
import RightWrapper from './style'
import IconGlobal from '@/assets/img/svg/icon-global'
import IconProfileMenu from '@/assets/img/svg/icon-profile-menu'
import IconProfileAvatar from '@/assets/img/svg/icon-profile-avatar'

const HeaderRight = memo(() => {
  return (
    <RightWrapper>
      <div className="btn-login item">登录</div>
      <div className="btn-register item">注册</div>
      <div className="btn-global item">
        <IconGlobal/>
      </div>
      <div className="btn-profile item">
        <IconProfileMenu/>
        <IconProfileAvatar/>
      </div>
    </RightWrapper>
  )
})

export default HeaderRight