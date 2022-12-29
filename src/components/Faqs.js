import React from 'react'
import Layout from './Layout'
import { useTranslation } from 'react-i18next'

const Faqs = () => {
  const { t, i18n } = useTranslation()
  const translateFAQ = (data) => {
    switch (data) {
      case 'FAQs':
        return t('part70')
      case 'What is a Dataset?':
        return t('part102')
      case 'Datasets are described as containers; they group related pieces of data as Resources (data files). Grouping Resources together in Datasets gives the data a common summary description, and a unique URL to easily share the dataset directly. e.g. An example of a dataset could be “Police Stations” with one or more resources listed below it. Examples of resources could be “Police Stations” as a CSV file, “Police Stations” as JSON file, and “Police Stations” as an API file.':
        return t('part103')
      case 'What is a Resource?':
        return t('part104')
      case 'Resources represent the actual files that can be viewed and downloaded by site visitors, and datasets can contain one or more file formats such as csv, xls, json, xlsx, tsv, geojson, xml, etc.':
        return t('part105')
      case 'How are Datasets categorized?':
        return t('part106')
      case 'Datasets in Abu Dhabi Open Data Portal are categorized using three methods:':
        return t('part107')
      case 'Abu Dhabi Government Entity (ADGEs/Groups) datasets are grouped by their respective publishers. e.g. Department of Health, Police, Environment Agency.':
        return t('part108')
      case 'Tags are additional free keywords assigned by these publishers to describe their specific datasets and make them searchable, allowing site visitors to find datasets by typing tag names into a search box.e.g. Births 2019, GDP2019, CPI 2018.':
        return t('part109')
      case 'Topics are assigned by publishers from predefined lists to organize datasets when a dataset is created. Topics add an additional facet to the search/datasets page; initially there are eight (8) predefined topics in the portal. e.g. Economy, Education, Environment, Heath, Infrastructure, Society, Technology, Transport.':
        return t('part110')
      case 'How can I find a Dataset?':
        return t('part111')
      case 'On the home page, you can search for datasets by typing keywords in the search box. Keywords include dataset, resource, title, description, tag, topic, publisher and format.':
        return t('part112')
      default:
        break
    }
  }

  return (
    <Layout title="FAQS">
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
                color: '#3B3B3B',
                lineHeight: '40px',
                fontSize: '18px',
              }}
            >
              {t('part70')}
            </p>
            <p
              style={{
                fontWeight: 'bold',
                color: '#3B3B3B',
                fontSize: '16px',
              }}
            >
              {t('part102')}
            </p>
          </div>
          <div className="col-sm-12 mt-2">
            <p
              style={{
                fontWeight: 'bold',
                color: '#3b3b3b',
                fontSize: '16px',
                whiteSpace: 'break-spaces',
              }}
            >
              {t('part103')}
            </p>
          </div>
          <div className="col-sm-12 mt-3">
            <p
              style={{
                fontWeight: 'bold',
                color: '#3B3B3B',
                fontSize: '16px',
              }}
            >
              {t('part104')}
            </p>
            <p
              style={{
                fontWeight: 'bold',
                color: '#3b3b3b',
                fontSize: '16px',
              }}
            >
              {t('part105')}
            </p>
          </div>
          <div className="col-sm-12 mt-3">
            <p
              style={{
                fontWeight: 'bold',
                color: '#3B3B3B',
                fontSize: '16px',
              }}
            >
              {t('part106')}
            </p>
            <p
              style={{
                fontWeight: 'bold',
                color: '#3b3b3b',
                fontSize: '16px',
              }}
            >
              {t('part107')}
            </p>
          </div>
          <ul
            className="pt-4"
            style={{
              marginLeft: i18n.language === 'en' && '45px',
              marginRight: i18n.language === 'ar' && '-15px',
              direction: i18n.language === 'ar' && 'rtl',
            }}
          >
            <li
              style={{
                listStyleType: 'none',
              }}
            >
              <p
                style={{
                  fontWeight: 'bold',
                  color: '#3b3b3b',
                  fontSize: '16px',
                  whiteSpace: 'break-spaces',
                }}
              >
                &#x2022; {t('part108')}
              </p>
            </li>
            <li
              style={{
                listStyleType: 'none',
              }}
            >
              <p
                style={{
                  fontWeight: 'bold',
                  color: '#3b3b3b',
                  fontSize: '16px',
                  whiteSpace: 'break-spaces',
                }}
              >
                &#x2022; {t('part109')}
              </p>
            </li>
            <li
              style={{
                listStyleType: 'none',
              }}
            >
              <p
                style={{
                  fontWeight: 'bold',
                  color: '#3b3b3b',
                  fontSize: '16px',
                  whiteSpace: 'break-spaces',
                  fontFamily:
                    i18n.language === 'ar' ? 'NotoKufiArabic' : 'CircularStd',
                  direction: i18n.language === 'ar' && 'rtl',
                  textAlign: i18n.language === 'ar' && 'right',
                }}
              >
                &#x2022; {t('part110')}
              </p>
            </li>
          </ul>
          <div className="col-sm-12 mt-3 mb-5">
            <p
              style={{
                fontWeight: 'bold',
                color: '#3B3B3B',
                fontSize: '16px',
              }}
            >
              {t('part111')}
            </p>
            <p
              style={{
                fontWeight: 'bold',
                color: '#3b3b3b',
                fontSize: '16px',
              }}
            >
              {t('part112')}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Faqs
