import { Link } from '@reach/router'
import React from 'react'
import Layout from './Layout'
import { useTranslation } from 'react-i18next'

const OpenDatasets = () => {
  const { t, i18n } = useTranslation()
  const translateDataSites = (data) => {
    switch (data) {
      case 'Open Data Sites':
        return t('part67')
      case 'UAE Open Data Portal - Bayanat':
        return t('part96')
      case 'Health DOH':
        return t('part97')
      case 'Judiciary ADJD':
        return t('part98')
      case 'Tourism DCT':
        return t('part99')
      case 'Police ADPolice':
        return t('part100')
      case 'OSHAD':
        return t('part101')
      default:
        break
    }
  }
  return (
    <Layout title="Open Datasets">
      <div className="container d-flex flex-wrap">
        <div
          className="row"
          style={{
            fontFamily:
              i18n.language === 'ar' ? 'NotoKufiArabic' : 'CircularStd',
            textAlign: i18n.language === 'ar' ? 'right' : 'left',
          }}
        >
          <div className="col-sm-12 pt-5">
            <p
              style={{
                fontWeight: 'bold',
                color: '#3b3b3b',
                fontSize: '18px',
              }}
            >
              {t('part67')}
            </p>
          </div>
          <div className="col-sm-12 pt-5 mt-2">
            <p
              style={{
                fontWeight: 'bold',
                color: '#3b3b3b',
                fontSize: '18px',
              }}
            >
              {t('part96')}
            </p>
            <a href="https://bayanat.ae/">https://bayanat.ae/</a>
          </div>
          <div className="col-sm-12 pt-5 mt-2">
            <p
              style={{
                fontWeight: 'bold',
                color: '#3b3b3b',
                fontSize: '18px',
              }}
            >
              {t('part97')}
            </p>
            <a href="https://doh.gov.ae/resources/opendata">
              https://doh.gov.ae/resources/opendata
            </a>
          </div>
          <div className="col-sm-12 pt-5 mt-2">
            <p
              style={{
                fontWeight: 'bold',
                color: '#3b3b3b',
                fontSize: '18px',
              }}
            >
              {t('part98')}
            </p>
            <a href="https://www.adjd.gov.ae/EN/Pages/opendata.aspx">
              https://www.adjd.gov.ae/EN/Pages/opendata.aspx
            </a>
          </div>
          <div className="col-sm-12 pt-5 mt-2">
            <p
              style={{
                fontWeight: 'bold',
                color: '#3b3b3b',
                fontSize: '18px',
              }}
            >
              {t('part99')}
            </p>
            <a href="https://tcaabudhabi.ae/en/who.we.are/reports.statistics.aspx">
              https://tcaabudhabi.ae/en/who.we.are/reports.statistics.aspx
            </a>
          </div>
          <div className="col-sm-12 pt-5 mt-2">
            <p
              style={{
                fontWeight: 'bold',
                color: '#3b3b3b',
                fontSize: '18px',
              }}
            >
              {t('part100')}
            </p>
            <a href="https://www.adpolice.gov.ae/en/Pages/opendata.aspx">
              https://www.adpolice.gov.ae/en/Pages/opendata.aspx
            </a>
          </div>
          <div className="col-sm-12 pt-5 mt-2 mb-5">
            <p
              style={{
                fontWeight: 'bold',
                color: '#3b3b3b',
                fontSize: '18px',
              }}
            >
              {t('part101')}
            </p>
            <a href
            ="https://www.oshad.ae/en/Pages/OpenDataViewAll.aspx">
              https://www.oshad.ae/en/Pages/OpenDataViewAll.aspx
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default OpenDatasets
