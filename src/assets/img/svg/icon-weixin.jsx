import React, { memo } from 'react'
import {styleStrToObj} from './utils/index'

const IconWeixin = memo(() => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-label="前往微信" role="img" focusable="false" style={styleStrToObj("display: block; height: 18px; width: 18px; fill: currentcolor;")}><path d="M30 32H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h28a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2z"></path><path fill="#fff" d="M21.13 12.56c4.3 0 7.8 2.91 7.8 6.5a6.04 6.04 0 0 1-2.68 4.88c-.12.1-.18.2-.2.3l-.01.09v.14l.02.1.08.33.09.34.1.4.09.29a.4.4 0 0 1 .02.13.25.25 0 0 1-.37.22l-.07-.03-1.69-1c-.1-.05-.2-.1-.32-.12l-.09.01-.13.03-.43.11a9.8 9.8 0 0 1-2.22.28c-4.31-.01-7.8-2.92-7.8-6.5 0-3.52 3.35-6.38 7.54-6.5zm-8.75-7.19c4.66 0 8.54 2.85 9.24 6.57h-.76c-4.6.11-8.29 3.25-8.3 7.12.01.64.12 1.27.32 1.88a11.24 11.24 0 0 1-3.2-.29l-.37-.09a1.9 1.9 0 0 0-.37-.05.8.8 0 0 0-.29.07l-.09.04-2.06 1.2a.4.4 0 0 1-.19.06.3.3 0 0 1-.29-.2.3.3 0 0 1-.02-.12v-.06l.06-.19.4-1.65.02-.16a.5.5 0 0 0-.16-.39l-.07-.05A7.32 7.32 0 0 1 3 13.2c0-4.33 4.2-7.81 9.38-7.81zm6.09 10.57a1 1 0 0 0 0 2c.58 0 1.03-.45 1.03-1.03a1 1 0 0 0-1.03-.97zm5.19 0a1 1 0 0 0 0 2c.58 0 1.03-.45 1.03-1.03a1 1 0 0 0-1.03-.97zM9.19 9.44a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zm6.25 0a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5z"></path></svg>
  )
})

export default IconWeixin