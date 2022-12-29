// import { render } from '@testing-library/react'
import React, { useEffect, useState } from 'react'

import { FaRegFolderOpen } from 'react-icons/fa'
// import { useTranslation } from 'react-i18next';

// import { initReactI18next } from 'react-i18next';
// import LanguageDetector from 'i18next-browser-languagedetector';

import { useTranslation, Trans } from 'react-i18next'
const axios = require('axios').default

export default function Headers(props) {
  const { t, i18n } = useTranslation()

  useEffect(() => {
    var session_url = process.env.REACT_APP_BASE_URL + 'platform_insights.php'

    axios
      .get(session_url, {
        auth: {
          username: 'odpdkan',
          password: '317$Odp',
        },
      })
      .then((response) => {
        setArr(response.data.data)
      })
      .catch((error) => {
        console.log('Error on Authentication', error.message)
      })
  }, [])

  const [Arr, setArr] = useState({})

  return (
    <>
      <div
        className="container card text-black py-3 border-1 mt-5 mb-5"
        style={{
          borderRadius: '18px',
          minHeight: '200px',
          fontFamily: i18n.language === 'ar' ? 'NotoKufiArabic' : 'CircularStd',
          fontSize: i18n.language === 'ar' && '14px',
        }}
      >
        <div className="container-fluid py-5 text-black">
          <div
            style={{
              direction: i18n.language === 'ar' && 'rtl',
            }}
          >
            <div className="border border-secondary">
              <div className="p-0">
                <img
                  src={
                    i18n.language === 'ar'
                      ? process.env.REACT_APP_IMAGE + 'S28Ar.PNG'
                      : process.env.REACT_APP_IMAGE + 'S28.png'
                  }
                  style={{ display: i18n.language === 'ar' && 'flex' }}
                  alt="logo"
                />
              </div>
              <div
                className="row my-3 pl-2"
                style={{
                  whiteSpace: 'nowrap',
                }}
              >
                <div className="col-sm-12 col-md-2 d-flex">
                  <div
                    className={
                      i18n.language === 'ar'
                        ? 'platform-datasets-ar'
                        : 'platform-datasets-en'
                    }
                  >
                    <img
                      srcSet={process.env.REACT_APP_IMAGE + 'S41.PNG'}
                      style={{ height: '35px' }}
                      alt="dataset"
                    />
                    <strong
                      style={{ fontWeight: 'bolder' }}
                      className="ml-2 mt-2"
                    >
                      &nbsp;{Arr?.dataset_count}
                      &nbsp;{t('part34')}
                    </strong>
                  </div>
                </div>
                <div
                  className={
                    i18n.language === 'ar'
                      ? 'col-sm-12 col-md-2 d-flex platform-resources-ar'
                      : 'col-sm-12 col-md-2 d-flex platform-resources-en'
                  }
                >
                  <div
                    className={
                      i18n.language === 'ar'
                        ? 'platform-resources-1-ar'
                        : 'platform-resources-1-en'
                    }
                  >
                    <img
                      srcSet={process.env.REACT_APP_IMAGE + 'S40.png'}
                      style={{ height: '35px' }}
                      alt="dataset"
                    />
                    <strong
                      style={{ fontWeight: 'bolder' }}
                      className="ml-2 mt-2"
                    >
                      &nbsp;{Arr?.resources_count}
                      &nbsp;{t('part35')}
                    </strong>
                  </div>
                </div>

                <div className="col-sm-12 col-md-2 d-flex">
                  <div
                    className={
                      i18n.language === 'ar'
                        ? 'platform-apis-ar'
                        : 'platform-apis-en'
                    }
                  >
                    <img
                      srcSet={process.env.REACT_APP_IMAGE + 'S45.png'}
                      style={{ height: '35px' }}
                      alt="dataset"
                    />
                    <strong style={{ fontWeight: 'bolder' }} className="mt-2">
                      &nbsp;{Arr?.apis}
                      &nbsp;{t('part36')}
                    </strong>
                  </div>
                </div>

                <div
                  className={
                    i18n.language === 'ar'
                      ? 'col-sm-12 col-md-2 d-flex platform-goverment-ar'
                      : 'col-sm-12 col-md-2 d-flex platform-goverment-en'
                  }
                >
                  <div
                    className={
                      i18n.language === 'ar'
                        ? 'platform-goverment-1-ar'
                        : 'platform-goverment-1-en'
                    }
                  >
                    <img
                      srcSet={process.env.REACT_APP_IMAGE + 'S42.png'}
                      style={{ height: '35px' }}
                      className={
                        i18n.language === 'ar'
                          ? 'platform-goverment-2-ar'
                          : 'platform-goverment-2-en'
                      }
                      alt="dataset"
                    />
                    <strong
                      style={{
                        fontWeight: 'bolder',
                      }}
                      className="mt-2"
                    >
                      &nbsp;&nbsp;{Arr?.government_entites}
                      &nbsp;{t('part37')}&nbsp;
                    </strong>
                  </div>
                </div>

                <div
                  className={
                    i18n.language === 'ar'
                      ? 'col-sm-12 col-md-2 d-flex platform-dataset-ar'
                      : 'col-sm-12 col-md-2 d-flex platform-dataset-en'
                  }
                >
                  <div
                    className={
                      i18n.language === 'ar'
                        ? 'platform-dataset-1-ar'
                        : 'platform-dataset-1-en'
                    }
                  >
                    <img
                      srcSet={process.env.REACT_APP_IMAGE + 'S43.png'}
                      style={{ height: '35px' }}
                      alt="dataset"
                    />
                    <strong
                      style={{ fontWeight: 'bolder' }}
                      className="ml-2 mt-2"
                    >
                      &nbsp;{Arr?.view_count}
                      &nbsp;{t('part38')}&nbsp;
                    </strong>
                  </div>
                </div>
                <div
                  className={
                    i18n.language === 'ar'
                      ? 'col-sm-12 col-md-2 d-flex platform-download-ar'
                      : 'col-sm-12 col-md-2 d-flex platform-download-en'
                  }
                >
                  <div
                    className={
                      i18n.language === 'ar'
                        ? 'platform-download-1-ar'
                        : 'platform-download-1-en'
                    }
                  >
                    <img
                      srcSet={process.env.REACT_APP_IMAGE + 'S44.png'}
                      style={{ height: '35px' }}
                      alt="dataset"
                    />
                    <strong style={{ fontWeight: 'bolder' }} className="mt-2">
                      &nbsp;{Arr?.download_count}
                      &nbsp;{t('part39')}
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
