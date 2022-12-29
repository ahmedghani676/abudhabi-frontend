import React from 'react'
import { Router } from '@reach/router'
import Home from './templates/home'
import About from './templates/about'
import SearchTemplate from './templates/search'
import ApiDocsFull from './templates/api'
import NotFound from './templates/not_found'
import Dataset from './templates/dataset'
import ApiDocsSpecific from './templates/dataset/api'
import Publishers from './templates/publishers/publisher'
import '@civicactions/data-catalog-components/dist/index.css'
import './theme/index.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Contactus from './components/Contactus'
import OpenDatasets from './components/OpenDatasets'
import TermsOfUse from './components/TermsOfUse'
import Faqs from './components/Faqs'
import Developers from './components/Developers'
import HealthApplication from './components/HealthApplication'
import AnalyticalApplication from './components/AnalyticalComponent'

library.add(fab, fas)

const Main = () => {
  return (
    <Router>
      <NotFound default />
      <Home path="/" />
      <About path="/about" />
      <Contactus path="/contact" />
      <Publishers path="/publishers" />
      <Developers path="/live-api" />
      <SearchTemplate path="/search" />
      <ApiDocsFull path="/developers" />
      <Dataset path="/dataset/:id" />
      <OpenDatasets path="/datasites" />
      <TermsOfUse path="/termsuse" />
      <Faqs path="/faqs" />
      <ApiDocsSpecific path="/dataset/:id/api" />
      <HealthApplication path="/health-application" />
      <AnalyticalApplication path="/applications" />
    </Router>
  )
}
export default Main
