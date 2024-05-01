import React, { memo, useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'

import router from './router';
import AppHeader from '@/cpns/app-header'
import AppFooter from '@/cpns/app-footer'

import { getCityAll } from '@/services'
const App = memo(() => {

  useEffect(() => {
    getCityAll().then(res => console.log(res))

  }, [])

  return (
    <>
      <AppHeader />
      <RouterProvider router={router}>

      </RouterProvider>
      <AppFooter />
    </>
  )
})

export default App 