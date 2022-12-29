import React, { useState } from 'react'
import Helmet from 'react-helmet'
import { Link } from '@reach/router'
import { NavBar } from '@civicactions/data-catalog-components'
import Header from '../shared/Header'
import Footer from '../shared/Footer'
import config from '../../assets/config.json'
import links from '../../assets/menu.json'

const Layout = ({ children, title, description, check, setcheck }) => {
  return (
    <div className="App">
      <Helmet
        // title={`${title} - Abu Dhabi Open Data`}
        title={`Abu Dhabi Open Data`}
        description={description}
        generator="DKAN 2 (https://github.com/GetDKAN/dkan)"
        defer={false}
        htmlAttributes={{
          lang: 'en',
        }}
      />
      <Header check={check} setcheck={setcheck} />
      <div>
        <Link to={`/contact?check=${check}`}>
          {' '}
          <img
            src={process.env.REACT_APP_IMAGE + 'S36.png'}
            alt=""
            style={{
              position: 'fixed',
              right: '0',
              marginTop: '40px',
              height: '30vh',
              zIndex: '999',
            }}
          />
        </Link>
      </div>
      <main>{children}</main>
      <Footer check={check} />
    </div>
  )
}

export default Layout
