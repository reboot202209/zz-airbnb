import React, { memo } from 'react'
import { RouterProvider } from 'react-router-dom'

import router from './router';
import AppHeader from '@/cpns/app-header'
import AppFooter from '@/cpns/app-footer'

const App = memo(() => {

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