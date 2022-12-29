import { useTranslation } from 'react-i18next'
import {
  FaHSquare,
  FaRegHospital,
  FaUserMd,
  FaFlask,
  FaGraduationCap,
  FaBed,
} from 'react-icons/fa'

const iconStyles = {
  fontSize: '48px',
  color: '#002245',
  width: '100%',
  lineHeight: '48px',
  textAlign: 'center',
}

const textStyle = {
  textAlign: 'center',
  margin: 'auto',
  whiteSpace: 'nowrap',
  color: '#3b3b3b',
  fontSize: '16px',
  lineHeight: '21.6px',
  letterSpacing: 'normal',
  fontWeight: 'bold',
}

const Main = () => {
  const { t, i18n } = useTranslation()

  return (
    <>
      <div
        className="container-fluid"
        style={{
          backgroundColor: '#f5f5f5',
          fontFamily: 'circularSTD',
          direction: i18n.language === 'ar' && 'rtl',
        }}
      >
        <div className="container pt-5">
          <h1
            style={{
              color: '#3b3b3b',
              fontSize: '26x',
              fontWeight: 700,
              lineHeight: '28.6px',
              textDecoration: 'none solid rgb(59,59,59)',
              wordSpacing: 0,
              textAlign: i18n.language === 'ar' ? 'right' : 'left',
              fontFamily:
                i18n.language === 'ar' ? 'NotoKufiArabic' : 'Robotobold',
            }}
          >
            {t('part13')}
          </h1>
        </div>
        <div className="container mt-4">
          <div
            className="d-flex align-content-around flex-wrap text-center py-4"
            style={{
              marginRight: i18n.language === 'ar' && '7.5px',
              gap: '55px',
              fontFamily:
                i18n.language === 'ar' ? 'NotoKufiArabic' : 'CircularStd',
            }}
          >
            <div className="">
              <span className="changeColor">
                <FaHSquare
                  onMouseOver={({ target }) => (target.style.color = '#145B98')}
                  onMouseOut={({ target }) => (target.style.color = '#092a4b')}
                  style={iconStyles}
                />
              </span>
              <p style={textStyle}>66</p>
              <p style={textStyle}>{t('part14')}</p>
            </div>
            <div className="">
              <span className="changeColor">
                <FaRegHospital
                  onMouseOver={({ target }) => (target.style.color = '#145B98')}
                  onMouseOut={({ target }) => (target.style.color = '#092a4b')}
                  style={iconStyles}
                />
              </span>

              <p style={textStyle} className="text-center">
                1040
              </p>
              <p style={textStyle} className="text-center">
                {t('part15')}
              </p>
            </div>
            <div className="">
              <span className="changeColor">
                <FaUserMd
                  onMouseOver={({ target }) => (target.style.color = '#145B98')}
                  onMouseOut={({ target }) => (target.style.color = '#092a4b')}
                  style={iconStyles}
                />
              </span>
              <p style={textStyle} className="text-center">
                759
              </p>
              <p style={textStyle} className="text-center">
                {t('part16')}
              </p>
            </div>
            <div className="">
              <span className="changeColor">
                <FaFlask
                  onMouseOver={({ target }) => (target.style.color = '#145B98')}
                  onMouseOut={({ target }) => (target.style.color = '#092a4b')}
                  style={iconStyles}
                />
              </span>
              <p style={textStyle} className="text-center">
                880
              </p>
              <p style={textStyle} className="text-center">
                {t('part17')}
              </p>
            </div>
            <div className="">
              <span>
                <FaGraduationCap
                  className="changeColors"
                  onMouseOver={({ target }) => (target.style.color = '#145B98')}
                  onMouseOut={({ target }) => (target.style.color = '#092a4b')}
                  style={iconStyles}
                />
              </span>
              <p style={textStyle} className="text-center">
                231
              </p>
              <p style={textStyle} className="text-center">
                {t('part18')}
              </p>
            </div>
            <div className="">
              <span>
                <FaGraduationCap
                  className="changeColors"
                  onMouseOver={({ target }) => (target.style.color = '#145B98')}
                  onMouseOut={({ target }) => (target.style.color = '#092a4b')}
                  style={iconStyles}
                />
              </span>
              <p style={textStyle} className="text-center">
                205
              </p>
              <p style={textStyle} className="text-center">
                {t('part19')}
              </p>
            </div>
            <div className="">
              <span>
                <FaGraduationCap
                  className="changeColors"
                  onMouseOver={({ target }) => (target.style.color = '#145B98')}
                  onMouseOut={({ target }) => (target.style.color = '#092a4b')}
                  style={iconStyles}
                />
              </span>
              <p style={textStyle} className="text-center">
                13
              </p>
              <p style={textStyle} className="text-center">
                {t('part20')}
              </p>
            </div>
            <div className="">
              <span>
                <FaBed
                  className="changeColors"
                  onMouseOver={({ target }) => (target.style.color = '#145B98')}
                  onMouseOut={({ target }) => (target.style.color = '#092a4b')}
                  style={iconStyles}
                />
              </span>
              <p style={textStyle} className="text-center">
                168
              </p>
              <p style={textStyle} className="text-center">
                {t('part21')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Main
