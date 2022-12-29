
import Layout from './Layout'
import { useTranslation } from 'react-i18next'
import { Link } from '@reach/router'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
const HealthApplication = () => {
  const { t, i18n } = useTranslation()
  // useEffect(() => {
  //   var session_url =
  //     process.env.REACT_APP_BASE_URL + 'application.php'
  //   axios
  //     .get(session_url, {
  //       auth: {
  //         username: 'odpdkan',
  //         password: '317$Odp',
  //       },
  //     })
  //     .then(function (response) {
  //       console.log('Authenticated', response.data.data)
  //       // setArr(response.data.data.en)
  //       // setArrar(response.data.data.ar)
  //     })
  //     .catch(function (error) {
  //       console.log('Error on Authentication')
  //     })
  //   // setArr(response.data)
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
              marginLeft: i18n.language === 'en' && '-9px',
              marginRight: i18n.language === 'ar' && '-9px',
            }}
          >
            <Link to="/applications" className="link-active">
              {t('part129')}
            </Link>
            <Link to="/health-application" className="link-btn">
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
          backgroundColor: '#ffffff',
        }}
      >
        <div className="row mb-2">
          <div className="col-md-12">
            <p
              style={{
                whiteSpace: 'break-spaces',
              }}
            >
              <strong
                style={{
                  fontFamily:
                    i18n.language === 'ar'
                      ? 'NotoKufiArabic'
                      : 'Circular Std Bold',
                  textAlign: i18n.language === 'ar' && 'right',
                  direction: i18n.language === 'ar' && 'rtl',
                  whiteSpace: 'break-spaces',
                  textShadow: '0px 0px #000000',
                }}
              >
                {t('part138')}
              </strong>
              {t('part139')}
            </p>
          </div>
        </div>
        <div className="row" style={{ alignItems: 'center' }}>
          <div className="col-4 col-md-2">
            <a href="https://arcgis.sdi.abudhabi.ae/portal/apps/MapJournal/index.html?appid=016b93fc645e4313ab96b6e1b250bbf5">
              <img
                src={process.env.REACT_APP_IMAGE + 'rawylogo.png'}
                alt="rawylogo.png"
                style={{ width: '200px', transform: 'scale(1.2)' }}
                className="img-fluid border-0"
              ></img>
            </a>
          </div>
          <div className="col-8 col-md-10">
            <p style={{ whiteSpace: 'break-spaces' }}>
              <span>
                <a
                  className="application-link"
                  href="https://arcgis.sdi.abudhabi.ae/portal/apps/MapJournal/index.html?appid=016b93fc645e4313ab96b6e1b250bbf5"
                >
                  {t('part140')}
                </a>
              </span>
              {t('part141')}
            </p>
          </div>
        </div>
        {/* <div className="row" style={{ alignItems: 'center' }}>
          <div className="col-4 col-md-2">
            <a href="https://arcgis.sdi.abudhabi.ae/portal/apps/MapJournal/index.html?appid=778b3d137f8d49d59507c0929fc55a9e">
              <img
                src={process.env.REACT_APP_IMAGE + 'abudhabi_spatial_data.jpg'}
                alt="abudhabi_spatial_data.jpg"
                style={{ width: '200px', transform: 'scale(1.2)' }}
                className="img-fluid border-0"
              ></img>
            </a>
          </div>
          <div className="col-8 col-md-10">
            <p style={{ whiteSpace: 'break-spaces' }}>
              <span>
                <a
                  href="https://arcgis.sdi.abudhabi.ae/portal/apps/MapJournal/index.html?appid=778b3d137f8d49d59507c0929fc55a9e"
                  className="application-link"
                >
                  {t('part142')}
                </a>
              </span>
              {t('part143')}
            </p>
          </div>
        </div>
        <div className="row" style={{ alignItems: 'center' }}>
          <div className="col-4 col-md-2">
            <a href="https://www.ncm.ae/ghaith/v2/?lang=en">
              <img
                src={process.env.REACT_APP_IMAGE + 'ncm.png'}
                alt=""
                style={{ width: '200px' }}
                className="img-fluid border-0"
              ></img>
            </a>
          </div>
          <div className="col-8 col-md-10">
            <p style={{ whiteSpace: 'break-spaces' }}>
              <span>
                <a
                  href="https://www.ncm.ae/ghaith/v2/?lang=en"
                  className="application-link"
                >
                  {t('part144')}
                </a>
              </span>
              {t('part145')}
            </p>
          </div>
        </div>
        <div className="row mt-3" style={{ alignItems: 'center' }}>
          <div className="col-4 col-md-2">
            <a href="https://albahar.ncm.ae/en">
              <img
                src={process.env.REACT_APP_IMAGE + 'albahar_logo.png'}
                alt="albahar_logo.png"
                style={{ width: '200px' }}
                className="img-fluid border-0"
              ></img>
            </a>
          </div>
          <div className="col-8 col-md-10">
            <p style={{ whiteSpace: 'break-spaces' }}>
              <span>
                <a
                  className="application-link"
                  href="https://albahar.ncm.ae/en"
                >
                  {t('part146')}
                </a>
              </span>
              {t('part147')}
            </p>
          </div>
        </div>
        <div className="row" style={{ alignItems: 'center' }}>
          <div className="col-4 col-md-2">
            <a href="https://www.doh.gov.ae/en/resources/opendata">
              <img
                src={process.env.REACT_APP_IMAGE + 'doh-logo.svg'}
                alt="doh-logo.svg"
                style={{ width: '200px', transform: 'scale(1.1)' }}
                className="img-fluid border-0"
              ></img>
            </a>
          </div>
          <div className="col-8 col-md-10">
            <p style={{ whiteSpace: 'break-spaces' }}>
              <span>
                <a
                  className="application-link"
                  href="https://www.doh.gov.ae/en/resources/opendata"
                >
                  {t('part148')}
                </a>
              </span>
              {t('part149')}
            </p>
          </div>
        </div>
        <div className="row" style={{ alignItems: 'center' }}>
          <div className="col-4 col-md-2">
            <a href="https://www.darb.ae/darbweb/map-viewer.html">
              <img
                src={process.env.REACT_APP_IMAGE + 'dard_logo.png'}
                alt="dard_logo.png"
                style={{ width: '200px' }}
                className="img-fluid border-0"
              ></img>
            </a>
          </div>
          <div className="col-8 col-md-10">
            <p style={{ whiteSpace: 'break-spaces' }}>
              <span>
                <a
                  className="application-link"
                  href="https://www.darb.ae/darbweb/map-viewer.html"
                >
                  {t('part150')}
                </a>
              </span>
              {t('part151')}
            </p>
          </div>
        </div>
        <div className="row" style={{ alignItems: 'center' }}>
          <div className="col-4 col-md-2">
            <a href="https://cwsap.sdi.abudhabi.ae/islamicexplorer/">
              <img
                src={process.env.REACT_APP_IMAGE + 'islamic-logo.png'}
                alt="islamic-logo.png"
                style={{ width: '200px' }}
                className="img-fluid border-0"
              ></img>
            </a>
          </div>
          <div className="col-8 col-md-10">
            <p style={{ whiteSpace: 'break-spaces' }}>
              <span>
                <a
                  className="application-link"
                  href="https://cwsap.sdi.abudhabi.ae/islamicexplorer/"
                >
                  {t('part152')}
                </a>
              </span>
              {t('part153')}
            </p>
          </div>
        </div>
        <div className="row" style={{ alignItems: 'center' }}>
          <div className="col-4 col-md-2">
            <a href="https://www.adbc.gov.ae/investorcompass/home/index">
              <img
                src={process.env.REACT_APP_IMAGE + 'doed.jpg'}
                alt="doed.jpg"
                style={{ width: '200px', transform: 'scale(1.2)' }}
                className="img-fluid border-0"
              ></img>
            </a>
          </div>
          <div className="col-8 col-md-10">
            <p style={{ whiteSpace: 'break-spaces' }}>
              <span>
                <a
                  className="application-link"
                  href="https://www.adbc.gov.ae/investorcompass/home/index"
                >
                  {t('part154')}
                </a>
              </span>
              {t('part155')}
            </p>
          </div>
        </div>
        <div className="row" style={{ alignItems: 'center' }}>
          <div className="col-4 col-md-2">
            <a href="https://arcgis.sdi.abudhabi.ae/portal/home/index.html">
              <img
                src={process.env.REACT_APP_IMAGE + 'abudhabi_spatial_data.jpg'}
                alt="abudhabi_spatial_data.jpg"
                style={{ width: '200px', transform: 'scale(1.2)' }}
                className="img-fluid border-0"
              ></img>
            </a>
          </div>
          <div className="col-8 col-md-10">
            <p style={{ whiteSpace: 'break-spaces' }}>
              <span>
                <a
                  className="application-link"
                  href="https://arcgis.sdi.abudhabi.ae/portal/home/index.html"
                >
                  {t('part156')}
                </a>
              </span>
              {t('part157')}
            </p>
          </div>
        </div> */}
      </div>
    </Layout>
  )
}

export default HealthApplication
