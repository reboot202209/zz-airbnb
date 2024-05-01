import React, { memo } from 'react'
import HomeWrapper from './style'
import { useDispatch, useSelector } from 'react-redux'
import {addNum} from '@/store/modules/home'
const Home = memo(() => {

  const count = useSelector(state => state.home.count)
  const dispath = useDispatch()
  return (
    <HomeWrapper>
      <div>
      Home--{count}
      </div>
      <button onClick={e => dispath(addNum(10))}>+10</button>
    </HomeWrapper>
  )
})

export default Home