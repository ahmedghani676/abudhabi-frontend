import Layout from './Layout'
import { useTranslation } from 'react-i18next'
import { Link } from '@reach/router'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
const HealthApplication = () => {
  const { t, i18n } = useTranslation()
  // useEffect(() => {
  //   var session_url = process.env.REACT_APP_BASE_URL + 'application.php'

  //   axios
  //     .get(session_url, {
  //       auth : {
  //         username: 'odpdkan',
  //         password: '317$Odp',
  //       },
  //     })
  //     .then(function (response) {
  //       console.log('Authenticated', response.data.data)
  //       // setAr(response.data.data.en)
  //       // setArar(response.data.data.ar)
  //       console.log(response.data.data.ar)
  //     })
  //     .catch(function (error) {
  //       console.log('Error on Authentication', error.message)
  //     })
  // }, [])

 
  return (
    <Layout title="Health Application">
      <div
        className="container"
        style={{
          fontFamily: i18n.language === 'ar' ? 'NotoKufiArabic' : 'CircularStd',
          textAlign: i18n.language === 'ar' && 'right',
          direction: i18n.language === 'ar' && 'rtl',
          fontSize: '11px',
        }}
      >
        <div className="row">
          <div
            className="col-md-12 link-btn-container mt-5 mb-5"
            style={{
              marginLeft: i18n.language === 'en' && '-10px',
              marginRight: i18n.language === 'ar' && '-10px',
            }}
          >
            <Link to="/applications" className="link-btn">
              {t('part129')}
            </Link>
            <Link to="/health-application" className="link-active">
              {t('part130')}
            </Link>
          </div>
        </div>
      </div>
      <div
        className="container"
        style={{
          fontFamily: i18n.language === 'ar' ? 'NotoKufiArabic' : 'CircularStd',
          textAlign: i18n.language === 'ar' && 'right',
          direction: i18n.language === 'ar' && 'rtl',
          backgroundColor: '#FFFFFF',
        }}
      >
        <div className="row">
          <div className="col-md-12 mb-3" style={{ marginBottom: '15px' }}>
            <p>{t('part131')}</p>
          </div>
          <div className="col-md-12">
            <iframe
              src={
                i18n.language === 'ar'
                  ? 'https://doh.saal.ai/?lang=ar'
                  : 'https://doh.saal.ai/'
              }
              title="covid-19-dashboard"
              style={{ width: '100%', height: '850px' }}
            ></iframe>
          </div>
        </div>
        <div className="row" style={{ alignItems: 'end' }}>
          <div className="col-4 col-md-2">
            <a href="https://stem.haad.ae/HFMap/app/">
              <img
                src="https://stem.haad.ae/HFMap/app/Images/logo.png"
                alt="logo.png"
                style={{ width: '200px' }}
                className="img-thumbnail border-0"
              ></img>
            </a>
          </div>
          <div className="col-8 col-md-10">
            <p style={{ whiteSpace: 'break-spaces' }}>
              <span>
                <a
                  className="application-link"
                  href="https://stem.haad.ae/HFMap/app/"
                >
                  {t('part132')}
                </a>
              </span>
              {t('part133')}
            </p>
          </div>
        </div>
        <div className="row" style={{ alignItems: 'end' }}>
          <div className="col-4 col-md-2">
            <a href="https://www.mohap.gov.ae/en/Aboutus/Pages/COVID-19.aspx">
              <img
                src={process.env.REACT_APP_IMAGE + ''}
                alt=""
                className="img-thumbnail border-0"
              ></img>
            </a>
          </div>
          <div className="col-8 col-md-10">
            <p style={{ whiteSpace: 'break-spaces' }}>
              <span>
                <a
                  className="application-link"
                  href="https://www.mohap.gov.ae/en/Aboutus/Pages/COVID-19.aspx"
                >
                  {t('part134')}
                </a>
              </span>
              {t('part135')}
            </p>
          </div>
        </div>
        <div className="row" style={{ alignItems: 'end' }}>
          <div className="col-4 col-md-2">
            <a href="https://covid19.who.int/">
              <img
                src={process.env.REACT_APP_IMAGE + 'who-logo'}
                alt="who-logo"
                className="img-thumbnail border-0"
              ></img>
            </a>
          </div>
          <div className="col-8 col-md-10">
            <p style={{ whiteSpace: 'break-spaces' }}>
              <span>
                <a className="application-link" href="https://covid19.who.int/">
                  {t('part136')}
                </a>
              </span>
              {t('part137')}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default HealthApplication
