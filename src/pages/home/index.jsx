import React, { memo, useEffect } from 'react'
import HomeWrapper from './style'
import { useDispatch, useSelector } from 'react-redux'
import HomeBanner from './cpns/home-banner'
import HomeSectionV1 from './cpns/home-section-v1'
import {fetchHomeDataAciton} from '@/store/modules/home'
import {isEmptyO} from '@/utils'
import HomeSectionV2 from './cpns/home-section-v2'


const Home = memo(() => {
  //TODO---Memozied Selectors
  const dispatch = useDispatch()

  const highScore = useSelector(state => state.home.highScore)
  const goodPrice = useSelector(state => state.home.goodPrice)
  const discount = useSelector(state => state.home.discount)
  const wonderfulPlace = useSelector(state => state.home.wonderfulPlace)

  useEffect(() => {
    dispatch(fetchHomeDataAciton())
  },[dispatch])

  return (
    <HomeWrapper>
      <HomeBanner></HomeBanner>
      <div className="content">
        {isEmptyO(discount) && <HomeSectionV2 sectionData={discount}/>}
        {isEmptyO(wonderfulPlace) && <HomeSectionV2 sectionData={wonderfulPlace}/>}
        {isEmptyO(highScore) && <HomeSectionV1 sectionData={highScore}/>}
        {isEmptyO(goodPrice) && <HomeSectionV1 sectionData={goodPrice}/>}
      </div>
    </HomeWrapper>
  )
})

export default Home