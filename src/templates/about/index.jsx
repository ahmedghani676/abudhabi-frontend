import React from 'react'
import Layout from '../../components/Layout'
import { useTranslation } from 'react-i18next'

const About = ({ path }) => {
  const { t, i18n } = useTranslation()
  let detecting = i18n.language

  return (
    <>
      <Layout title="About us">
        <div
          style={{
            backgroundColor: '#F5F5F5',
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h4
                  style={{
                    color: '#3B3B3B',
                    fontSize: '17px',
                    fontFamily:
                      i18n.language === 'ar' ? 'NotoKufiArabic' : 'CircularStd',
                    textAlign: i18n.language === 'ar' && 'right',
                  }}
                >
                  {t('part83')}
                </h4>
              </div>

              <div
                className="col-sm-12 mt-5"
                style={{
                  fontFamily:
                    i18n.language === 'ar' ? 'NotoKufiArabic' : 'CircularStd',
                  textAlign: i18n.language === 'ar' && 'right',
                }}
              >
                <p>{t('part84')}</p>
                <p>{t('part85')}</p>
                <p>{t('part86')}</p>

                {i18n.language === 'ar' ? (
                  <ul
                    className="mt-5"
                    style={{
                      listStyle: 'disc',
                      direction: i18n.language === 'ar' && 'rtl',
                      textAlign: i18n.language === 'ar' && 'right',
                      fontFamily:
                        i18n.language === 'ar'
                          ? 'NotoKufiArabic'
                          : 'CircularStd',
                      marginRight: i18n.language === 'ar' && '22px',
                    }}
                  >
                    <li>{t('part87')}</li>
                    <li style={{ direction: 'rtl', marginTop: '10px' }}>
                      {t('part88')}
                    </li>
                    <li style={{ direction: 'rtl', marginTop: '10px' }}>
                      {t('part89')}
                    </li>
                    <li style={{ direction: 'rtl', marginTop: '10px' }}>
                      {t('part90')}
                    </li>
                    <li style={{ direction: 'rtl', marginTop: '10px' }}>
                      {t('part91')}
                    </li>
                  </ul>
                ) : (
                  <ul
                    style={{
                      listStyle: 'disc',
                      direction: i18n.language === 'ar' && 'rtl',
                      textAlign: i18n.language === 'ar' && 'right',
                      fontFamily:
                        i18n.language === 'ar'
                          ? 'NotoKufiArabic'
                          : 'CircularStd',
                      marginLeft: i18n.language === 'en' && '50px',
                    }}
                  >
                    <li>{t('part87')}</li>
                    <li style={{ marginTop: '10px' }}>{t('part88')}</li>
                    <li style={{ marginTop: '10px' }}>{t('part89')}</li>
                    <li style={{ marginTop: '10px' }}>{t('part90')}</li>
                    <li style={{ marginTop: '10px' }}>{t('part91')}</li>
                  </ul>
                )}

                <p
                  style={{
                    direction: i18n.language === 'ar' && 'rtl',
                    textAlign: i18n.language === 'ar' && 'right',
                    fontFamily:
                      i18n.language === 'ar' ? 'NotoKufiArabic' : 'CircularStd',
                  }}
                >
                  {t('part92')}
                </p>
                <ul
                  style={{
                    listStyle: i18n.language === 'en' && 'disc',
                    direction: i18n.language === 'ar' && 'rtl',
                    textAlign: i18n.language === 'ar' && 'right',
                    fontFamily:
                      i18n.language === 'ar' ? 'NotoKufiArabic' : 'CircularStd',
                    marginLeft: i18n.language === 'en' && '50px',
                    marginTop: '15px',
                  }}
                >
                  <li>
                    {i18n.language === 'ar' ? (
                      <div style={{ direction: 'ltr' }}>
                        <a href="https://data.abudhabi/sites/default/files/AD-Gov-Data-Management-Standards-EN-v1.0.pdf">
                          {t('part95')}
                        </a>
                        <span>{t('part93')}</span>
                      </div>
                    ) : (
                      <span>
                        {t('part93')}
                        <a href="https://data.abudhabi/sites/default/files/AD-Gov-Data-Management-Standards-EN-v1.0.pdf">
                          {t('part95')}
                        </a>
                      </span>
                    )}
                  </li>
                  {i18n.language === 'ar' ? (
                    <>
                      <li className="mb-5">
                        {i18n.language === 'ar' ? (
                          <div style={{ direction: 'ltr' }}>
                            <a href="https://data.abudhabi/sites/default/files/AD-Gov-Data-Management-Policy-EN-v1.0.pdf">
                              {t('part95')}
                            </a>
                            <span>{t('part94')}</span>
                          </div>
                        ) : (
                          <span>
                            {t('part94')}
                            <a href="https://data.abudhabi/sites/default/files/AD-Gov-Data-Management-Policy-EN-v1.0.pdf">
                              {t('part95')}
                            </a>
                          </span>
                        )}
                      </li>
                    </>
                  ) : (
                    <>
                      <li
                        style={{
                          marginTop: '10px',
                          direction: i18n.language === 'ar' ? 'rtl' : 'ltr',
                          textAlign: i18n.language === 'ar' && 'left',
                        }}
                      >
                        {i18n.language === 'ar' ? (
                          <span>
                            <a
                              href="https://data.abudhabi/sites/default/files/AD-Gov-Data-Management-Standards-EN-v1.0.pdf"
                              style={{}}
                            >
                              {t('part95')}
                            </a>
                            {t('part94')}
                          </span>
                        ) : (
                          <span>
                            {t('part94')}
                            <a href="https://data.abudhabi/sites/default/files/AD-Gov-Data-Management-Policy-EN-v1.0.pdf">
                              {t('part95')}
                            </a>
                          </span>
                        )}
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
export default About
