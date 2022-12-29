import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from '@reach/router'
const axios = require('axios').default

export default function Sections(props) {
  const [Arr, setArr] = useState([])
  const [Arrar, setArrar] = useState([])
  const [Ar, setAr] = useState([])
  const [Arar, setArar] = useState([])
  const [Arrs, setArrs] = useState({})
  const { t, i18n } = useTranslation()

  useEffect(() => {
    var session_url = process.env.REACT_APP_BASE_URL + 'most_view_datasets.php'

    axios
      .get(session_url, {
        auth: {
          username: 'odpdkan',
          password: '317$Odp',
        },
      })
      .then(function (response) {
        console.log('Authenticated', response.data.data)
        setAr(response.data.data.en)
        setArar(response.data.data.ar)
        console.log(response.data.data.ar)
      })
      .catch(function (error) {
        console.log('Error on Authentication', error.message)
      })
  }, [])

  useEffect(() => {
    var session_url =
      process.env.REACT_APP_BASE_URL + 'recently_added_datasets.php'
    axios
      .get(session_url, {
        auth: {
          username: 'odpdkan',
          password: '317$Odp',
        },
      }
      )
      .then(function (response) {
        console.log('Authenticated', response.data.data)
        setArr(response.data.data.en)
        setArrar(response.data.data.ar)
      })
      .catch(function (error) {
        console.log('Error on Authentication')
      })
    // setArr(response.data)
  }, [])

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12 mb-5">
            <div
              className="px-5 ml-3 border border-2 bg-white"
              style={{ borderRadius: '10px', minHeight: '200px' }}
            >
              <div class="card-body">
                <h2
                  className="text-center pane-title mt-4 mb-3"
                  style={{
                    fontFamily:
                      i18n.language === 'ar' ? 'NotoKufiArabic' : 'Robotobold',
                    textTransform: 'capitalize',
                  }}
                >
                  {t('part81')}
                </h2>
                <div
                  style={{
                    borderBottom: '1px solid #grey',
                  }}
                ></div>
                <ul
                  style={{
                    fontFamily:
                      i18n.language === 'ar' ? 'NotoKufiArabic' : 'Robotobold',
                    fontWeight: 'normal',
                    fontSize: '14px',
                  }}
                >
                  {i18n.language === 'ar'
                    ? Arrar?.map((e, i) => (
                        <ul key={i}>
                          <li
                            key={e.identifier}
                            className="card-text"
                            style={{
                              textAlign: 'right',
                              direction: 'rtl',
                              display: e.title === '' ? 'none' : 'block',
                            }}
                          >
                            <Link
                              style={{ textAlign: 'right' }}
                              to={`/dataset/${e.identifier}`}
                              className="li tooltip-li"
                            >
                              {e.title.length > 54
                                ? e.title.substring(0, 54) + '....'
                                : e.title}
                              {e.title.length > 54 && (
                                <span className="tooltiptext">{e.title}</span>
                              )}
                            </Link>
                          </li>
                        </ul>
                      ))
                    : Arr.map((e, i) => (
                        <ul
                          className="ml-3"
                          style={{
                            listStyleType: i18n.language === 'en' && 'disc',
                          }}
                          key={i}
                        >
                          <li key={e.identifier}>
                            <Link
                              to={`/dataset/${e.identifier}`}
                              className="li tooltip-li"
                             >
                              {e.title.length > 54
                                ? e.title.substring(0, 54) + '....'
                                : e.title}
                              {e.title.length > 54 && (
                                <span className="tooltiptext">{e.title}</span>
                              )}
                            </Link>
                          </li>
                        </ul>
                      ))}
                </ul>
                <div
                  className="d-flex justify-content-end ml-0"
                  style={{
                    fontFamily:
                      i18n.language === 'ar' ? 'NotoKufiArabic' : 'Robotobold',
                  }}
                >
                  <Link
                    to="/search?check=false"
                    className="link-primary text-body"
                  >
                    {t('part82')}
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 mb-5">
            <div
              className="px-5 ml-3 border border-2 bg-white border border-2"
              style={{
                borderRadius: '10px',
                minHeight: '200px',
              }}
            >
              <div className="card-body">
                <h2
                  className="text-center pane-title mt-4 mb-3"
                  style={{
                    fontFamily:
                      i18n.language === 'ar' ? 'NotoKufiArabic' : 'Robotobold',
                  }}
                >
                  {t('part80')}
                </h2>
                <div style={{ borderBottom: '1px solid #grey' }}></div>
                <ul
                  style={{
                    fontFamily:
                      i18n.language === 'ar' ? 'NotoKufiArabic' : 'Robotobold ',
                    fontWeight: 'normal',
                    fontSize: '14px',
                    listStyleType: 'disc',
                  }}
                >
                  {i18n.language === 'ar'
                    ? Arar?.map((e, i) => (
                        <ul key={i}>
                          <li
                            className="card-text"
                            style={{
                              textAlign: 'right',
                              direction: 'rtl',
                              display: e.titlear === '' ? 'none' : 'block',
                            }}
                            key={e.identifier}
                          >
                            <Link
                              style={{ textAlign: 'right' }}
                              to={`/dataset/${e.identifier}`}
                              className="li tooltip-li"
                            >
                              {e.titlear.length > 54
                                ? e.titlear.substring(0, 50) + '....'
                                : e.titlear}
                              {e.titlear.length > 54 && (
                                <span className="tooltiptext">{e.titlear}</span>
                              )}
                            </Link>
                          </li>
                        </ul>
                      ))
                    : Ar.map((e, i) => (
                        <ul
                          key={i}
                          className="ml-3"
                          style={{ listStyleType: 'disc' }}
                        >
                          <li key={e.title}>
                            <Link
                              to={`/dataset/${e.identifier}`}
                              className="li tooltip-li"
                            >
                              {e.title.length > 54
                                ? e.title.substring(0, 50) + '....'
                                : e.title}
                              {e.title.length > 54 && (
                                <span className="tooltiptext">{e.title}</span>
                              )}
                            </Link>
                          </li>
                        </ul>
                      ))}
                </ul>
                <div
                  className="d-flex justify-content-end align-self-end"
                  style={{
                    fontFamily:
                      i18n.language === 'ar' ? 'NotoKufiArabic' : 'Robotobold',
                  }}
                >
                  <Link
                    to="/search?check=false"
                    className="link-primary text-body"
                  >
                    {t('part82')}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
