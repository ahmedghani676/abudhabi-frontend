import links from '../../assets/menu.json'
import { Link } from '@reach/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslation } from 'react-i18next'
import { faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import '../../index.css'

const Footer = (props) => {
  const { t, i18n } = useTranslation()
  const translateHelpers = (data) => {
    switch (data) {
      case 'Home':
        return t('part50')
      case 'Datasets':
        return t('part51')
      case 'Publishers':
        return t('part52')
      case 'About':
        return t('part53')
      case 'API':
        return t('part54')
      default:
        break
    }
  }
  const translates = (data) => {
    switch (data) {
      case 'Open Data Sites':
        return t('part67')
      case 'FAQs':
        return t('part70')
      case 'Terms of Use':
        return t('part72')
      case 'Open source open':
        return t('part78')
      default:
        break
    }
  }

  const routes = [
    {
      label: 'Open Data Sites',
      url: '/datasites',
      target: '_blank',
    },
    {
      label: 'FAQs',
      url: '/faqs',
      target: '_blank',
    },
    {
      label: 'Terms of Use',
      url: '/termsuse',
      target: '_blank',
    },
  ]

  return (
    <>
      <footer>
        <div style={{ backgroundColor: '#E3E3E3', userSelect: 'none' }}>
          <div className="container py-4">
            <div
              className={`${
                i18n.language === 'ar'
                  ? 'flex-row-reverse d-flex'
                  : 'd-flex justify-content-between'
              } row`}
            >
              <div className="col-sm-4 mb-2">
                <h4
                  style={{
                    fontWeight: 'bold',
                    color: '#666666',
                    fontFamily:
                      i18n.language === 'ar'
                        ? 'NotoKufiArabic'
                        : 'Circular Std Bold',
                    textAlign: i18n.language === 'ar' ? 'right' : 'left',
                  }}
                >
                  {t('part59')}
                </h4>
                <h2
                  style={{
                    color: '#161038',
                    fontFamily:
                      i18n.language === 'ar'
                        ? 'NotoKufiArabic'
                        : 'Circular Std Bold',
                    textAlign: i18n.language === 'ar' ? 'right' : 'left',
                  }}
                >
                  {t('part60')}
                </h2>
              </div>
              <div className="col-sm-8 mb-2">
                <div
                  className="row p-4"
                  style={{
                    whiteSpace: 'nowrap',
                    direction: i18n.language === 'ar' && 'rtl',
                    background: '#EBEBEB',
                    color: '#666666',
                    fontWeight: '700',
                    fontFamily:
                      i18n.language === 'ar'
                        ? 'NotoKufiArabic'
                        : 'Circular Std Bold',
                  }}
                >
                  <div
                    className="col-sm-3 mb-2"
                    style={{ textAlign: 'center', backgroundColor: '#EBEBEB' }}
                  >
                    <span>{t('part62')}</span>
                    <span
                      className="ml-4 font-weight-bold"
                      style={{
                        marginRight: i18n.language === 'ar' && '15px',
                        fontFamily: 'Circular Std Bold',
                      }}
                    >
                      999
                    </span>
                  </div>
                  <div
                    className="col-sm-3 mb-2"
                    style={{ textAlign: 'center', backgroundColor: '#EBEBEB' }}
                  >
                    <span>{t('part63')}</span>
                    <span
                      className="ml-4 font-weight-bold"
                      style={{
                        marginRight: i18n.language === 'ar' && '15px',
                        fontFamily: 'Circular Std Bold',
                      }}
                    >
                      998
                    </span>
                  </div>
                  <div
                    className="col-sm-3 mb-2"
                    style={{ textAlign: 'center', backgroundColor: '#EBEBEB' }}
                  >
                    <span>{t('part64')}</span>
                    <span
                      className="ml-4 font-weight-bold"
                      style={{
                        marginRight: i18n.language === 'ar' && '15px',
                        fontFamily: 'Circular Std Bold',
                      }}
                    >
                      997
                    </span>
                  </div>
                  <div
                    className="col-sm-3 mb-2"
                    style={{ textAlign: 'center', backgroundColor: '#EBEBEB' }}
                  >
                    <span>{t('part65')}</span>
                    <span
                      className="ml-4 font-weight-bold"
                      style={{
                        marginRight: i18n.language === 'ar' && '15px',
                        fontFamily: 'Circular Std Bold',
                      }}
                    >
                      991
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* footer */}
        <footer
          className="container-fluid"
          style={{
            backgroundColor: '#EDEDED',
            direction: i18n.language === 'ar' && 'rtl',
          }}
        >
          <div className="card mx-5 border-0 bg-transparent">
            <div className="row">
              <div className="col-md-4 col-sm-12 col-xs-12 my-4">
                <div className="footer-text pull-left">
                  <div className="d-flex">
                    <h4
                      className="font-weight-bolder mr-2 px-3"
                      style={{
                        color: 'grey',
                        fontFamily:
                          i18n.language === 'ar'
                            ? 'NotoKufiArabic'
                            : 'Circular Std Bold',
                      }}
                    >
                      {t('part61')}
                    </h4>
                  </div>
                  <div className="mr-2 px-3 d-flex justify-content-start">
                    <img
                      className="img-fluid m-1"
                      style={{
                        width: '150px',
                        height: '49.375px',
                      }}
                      src={
                        'https://data.abudhabi/sites/default/files/abudhabi_govt_logo.png'
                      }
                      alt="logo"
                    />
                    <img
                      className="img-fluid mr-5"
                      style={{
                        width: '70px',
                        height: '66.6625px',
                        marginLeft: i18n.language === 'ar' && '20px',
                      }}
                      src={
                        'https://data.abudhabi/sites/default/files/adda_logo_png.png'
                      }
                      alt="logo"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-2 col-sm-12 col-xs-12"></div>
              <div
                className="col-md-2 col-sm-12 col-xs-12 my-4 pt-5"
                style={{ background: '#EBEBEB' }}
              >
                <ul className="card-text">
                  {links.main.map((item, index) => (
                    <div key={index}>
                      <Link
                        className="fs-3"
                        style={{
                          fontWeight: '700',
                          color: '#002245',
                          fontSize: '16px',
                          fontFamily:
                            i18n.language === 'ar'
                              ? 'NotoKufiArabic'
                              : 'Circular Std Bold',
                        }}
                        to={item.url}
                      >
                        {translateHelpers(item.label)}
                      </Link>
                    </div>
                  ))}
                </ul>
              </div>
              <div
                className="col-md-2 col-sm-12 col-xs-12 my-4 pt-5"
                style={{ background: '#EBEBEB' }}
              >
                <ul className="card-text">
                  {routes?.map((route, index) => (
                    <div key={index}>
                      <Link
                        className="fs-3"
                        style={{
                          fontSize: '16px',
                          fontWeight: '700',
                          color: '#002245',
                          whiteSpace: 'nowrap',
                          fontFamily:
                            i18n.language === 'ar'
                              ? 'NotoKufiArabic'
                              : 'Circular Std Bold',
                        }}
                        to={route.url}
                        target={route.target}
                      >
                        {translates(route.label)}
                      </Link>
                    </div>
                  ))}
                </ul>
              </div>
              <div
                className="col-md-2 col-sm-12 col-xs-12 pl-lg-5 my-4 pt-5"
                style={{
                  background: '#EBEBEB',
                }}
              >
                <h4
                  className={`${
                    i18n.language === 'en' && 'mr-2 px-lg-5 px-sm-0'
                  }`}
                  style={{
                    fontSize: '16px',
                    fontWeight: '700',
                    color: '#002245',
                    whiteSpace: 'nowrap',
                    fontFamily:
                      i18n.language === 'ar'
                        ? 'NotoKufiArabic'
                        : 'Circular Std Bold',
                  }}
                >
                  {t('part68')}
                </h4>
                <div
                  className={`${
                    i18n.language === 'en' && 'd-flex ml-lg-5 ml-xs-0'
                  }`}
                >
                  <a
                    href="https://twitter.com/Abudhabi_tamm"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faTwitter}
                      style={{
                        color: '#002245',
                        fontSize: '30px',
                        marginRight: i18n.language === 'ar' ? '10px' : '15px',
                      }}
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/abudhabi_tamm/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faInstagram}
                      style={{
                        color: '#002245',
                        fontSize: '30px',
                        lineHeight: '30px',
                        marginRight: i18n.language === 'ar' ? '10px' : '15px',
                      }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* end image */}
          <div className="d-flex">
            <img
              style={{ width: '150px', height: '63.525px' }}
              className="img-fluid m-auto"
              src="https://data.abudhabi/sites/default/files/emirates-logo-png.png"
              alt="footer logo"
            />
          </div>
          {/* copy right */}
          <div className="row" style={{ background: '#FFFFFF' }}>
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="text-center">
                <p
                  style={{
                    fontSize: '14px',
                    padding: '20px',
                    margin: '0px',
                    fontWeight: 'bold',
                    color: '#3b3b3b',
                    direction: i18n.language === 'ar' && 'rtl',
                    fontFamily:
                      i18n.language === 'ar'
                        ? 'NotoKufiArabic'
                        : 'Circular Std Bold',
                  }}
                >
                  &copy;
                  {t('part73')}
                </p>
              </div>
            </div>
          </div>
        </footer>
      </footer>
    </>
  )
}

export default Footer
