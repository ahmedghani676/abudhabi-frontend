import React, { useState, Fragment } from 'react'
import { Link } from '@reach/router'
import links from '../../assets/menu.json'
import { useTranslation, Trans } from 'react-i18next'
import { NavBar } from '@civicactions/data-catalog-components'
import config from '../../assets/config.json'
import Index from '../../../src/templates/home/index'
import { countDatasetsByName } from '@civicactions/data-catalog-components/lib/components/Organization'

const Header = (props) => {
  const mapping = (lng) => {
    return
  }
  const translateHelper = (data) => {
    switch (data) {
      case 'Home':
        return t('part50')
      case 'Datasets':
        return t('part51')
      case 'Publishers':
        return t('part52')
      case 'About Us':
        return t('part53')
      case 'Developers':
        return t('part54')
      case 'Live Api':
        return t('part123')
      case 'Applications':
        return t('part158')
      default:
        break
    }
  }
  const [count, setCounter] = useState(0)
  const { t, i18n } = useTranslation()
  const [counts, setCounters] = useState(0)
  const [languageCheck, setLanguageCheck] = useState('English')
  const lngs = {
    en: { nativeName: 'English' },
    ar: { nativeName: ' عربي' },
  }

  return (
    <>
      {/* header */}
      <header
        className="py-2"
        style={{ background: '#f5f5f5', color: '#002245' }}
      >
        <div className="container d-flex flex-wrap">
          <ul
            className="nav me-auto"
            style={{ marginRight: 'auto !important' }}
          >
            <li className="nav-item">
              <div
                className="ml-lg-3 ml-sm-0"
                style={{
                  lineHeight: 4,
                  userSelect: 'none',
                  letterSpacing: '.5px',
                  cursor: 'pointer',
                  border: 'none',
                  fontSize: '16px',
                  textDecoration: 'none',
                  fontFamily:
                    i18n.language === 'ar' ? 'CircularStd' : 'NotoKufiArabic',
                }}
                onClick={
                  i18n.language === 'ar'
                    ? () => i18n.changeLanguage('en')
                    : () => i18n.changeLanguage('ar')
                }
              >
                {i18n.language === 'ar' ? 'English' : ' عربي'}
              </div>
            </li>
          </ul>
          <ul
            className="nav ml-auto"
            style={{
              marginLeft: 'auto',
            }}
          >
            <li className="nav-item">
              <a
                className="ml-5"
                href="/admin"
                style={{
                  textDecoration: 'none',
                  color: '#002245',
                  fontWeight: 'bold',
                  fontSize: '16px',
                  lineHeight: 4,
                  userSelect: 'none',
                  letterSpacing: '.5px',
                  fontFamily:
                    i18n.language === 'en' ? 'CircularStd' : 'NotoKufiArabic',
                }}
              >
                {t('part74')}
              </a>
            </li>
          </ul>
        </div>
      </header>
      {/* navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div
          className="container"
          style={{
            minHeight: '120px',
            whiteSpace: 'pre',
            fontSize: i18n.language === 'ar' && '16px',
            direction: i18n.language === 'ar' && 'rtl',
          }}
        >
          <Link to="/" className="navbar-brand">
            <img
              className={`${i18n.language === 'ar' && 'ml-5'}`}
              // src={process.env.REACT_APP_IMAGE + 'odp_logo.png'}
              src="https://data.abudhabi/sites/default/files/ad_logo.jpg"
              // className="d-inline-block align-text-top
              // m-sm-0 img-fluid"
              style={{
                width: i18n.language === 'en' ? '250px' : '200px',
              }}
              alt="logo"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item active ml-5" aria-current="page">
                <Link
                  style={{
                    color: '#000000',
                    fontWeight: 'bolder',
                    textDecoration: 'none',
                    fontFamily:
                      i18n.language === 'en' ? 'RobotoBold' : 'NotoKufiArabic',
                  }}
                  to="/search"
                >
                  {translateHelper('Datasets')}
                </Link>
              </li>
              <li className="nav-item active ml-5" aria-current="page">
                <Link
                  style={{
                    color: '#000000',
                    fontWeight: 'bolder',
                    textDecoration: 'none',
                    fontFamily:
                      i18n.language === 'en' ? 'RobotoBold' : 'NotoKufiArabic',
                  }}
                  to="/publishers"
                >
                  {translateHelper('Publishers')}
                </Link>
              </li>
              <li className="nav-item active ml-5" aria-current="page">
                <Link
                  style={{
                    color: '#000000',
                    fontWeight: 'bolder',
                    textDecoration: 'none',
                    fontFamily:
                      i18n.language === 'en' ? 'RobotoBold' : 'NotoKufiArabic',
                  }}
                  to="/applications"
                >
                  {translateHelper('Applications')}
                </Link>
              </li>
              <li className="nav-item active ml-5" aria-current="page">
                <Link
                  style={{
                    color: '#000000',
                    fontWeight: 'bolder',
                    textDecoration: 'none',
                    fontFamily:
                      i18n.language === 'en' ? 'RobotoBold' : 'NotoKufiArabic',
                  }}
                  to="/live-api"
                >
                  {translateHelper('Live Api')}
                </Link>
              </li>
              <li className="nav-item active ml-5" aria-current="page">
                <Link
                  style={{
                    color: '#000000',
                    fontWeight: 'bolder',
                    textDecoration: 'none',
                    fontFamily:
                      i18n.language === 'en' ? 'RobotoBold' : 'NotoKufiArabic',
                  }}
                  to="/developers"
                >
                  {translateHelper('Developers')}
                </Link>
              </li>
              <li className="nav-item active ml-5" aria-current="page">
                <Link
                  style={{
                    color: '#000000',
                    fontWeight: 'bolder',
                    textDecoration: 'none',
                    fontFamily:
                      i18n.language === 'en' ? 'RobotoBold' : 'NotoKufiArabic',
                  }}
                  to="/about"
                >
                  {translateHelper('About Us')}
                </Link>
              </li>
            </ul>
            <div className="d-flex">
              <Link to="/">
                <img
                  className={`${
                    i18n.language === 'ar' ? 'mr-5' : 'ml-lg-5'
                  } img-fluid  d-none d-lg-block`}
                  src="https://data.abudhabi/sites/default/files/adda_logo_new.jpg"
                  // src={process.env.REACT_APP_IMAGE + 'odp_logo_new.png'}
                  style={{
                    imageRendering: 'pixelated',
                    width: '90px',
                  }}
                  alt="logo"
                />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div
        className="container-fluid"
        style={{ backgroundColor: '#F5F5F5', height: '25px' }}
      ></div>
    </>
  )
}

export default Header
