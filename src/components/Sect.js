import { useTranslation } from 'react-i18next'
import { ReactComponent as Economy } from '../assets/path-1.svg'
import { ReactComponent as Technology } from '../assets/path-3.svg'
import { ReactComponent as Safety } from '../assets/path-4.svg'
import { ReactComponent as Education } from '../assets/path-5.svg'
import { ReactComponent as Health } from '../assets/path-6.svg'
import { ReactComponent as Transport } from '../assets/path-7.svg'
import { ReactComponent as Environment } from '../assets/path-8.svg'
import { ReactComponent as Agriculture } from '../assets/path872.svg'
import { ReactComponent as Tourism } from '../assets/path878.svg'
import { ReactComponent as Business } from '../assets/path874.svg'
import { ReactComponent as Soceity } from '../assets/path876.svg'
import { ReactComponent as Energy } from '../assets/path-2.svg'
import { Link } from '@reach/router'

export default function Sect(props) {
  const { t, i18n } = useTranslation()

  return (
    <>
      <div className="container my-5">
        <div
          className="d-flex align-content-around flex-wrap text-center"
          style={{
            gap: '35.5px',
            fontFamily:
              i18n.language === 'ar' ? 'NotoKufiArabic' : 'RobotoBold',
            direction: i18n.language === 'ar' && 'rtl',
            textAlign: 'center',
          }}
        >
          <div>
            <Agriculture
              className="sect-icon"
              onClick={() =>
                (window.location.href = `/search/?fulltext=${t('part1')}`)
              }
              style={{
                height: '48px',
                width: '60px',
                imageRendering: 'pixelated',
                fill: '#002245',
                stroke: '#002245',
                fontFamily:
                  i18n.language === 'en' ? 'RobotoBold' : 'NotoKufiArabic',
              }}
            />
            <br />
            <Link
              to={`/search/?fulltext=${t('part1')}`}
              style={{
                fontSize: '14px',
                color: '#002245',
                whiteSpace: 'nowrap',
                marginTop: '10px',
                fontFamily:
                  i18n.language === 'en' ? 'RobotoBold' : 'NotoKufiArabic',
              }}
              className="sect-text text-decoration-none font-weight-bold"
            >
              {t('part1')}
            </Link>
          </div>
          <div>
            <Economy
              className="sect-icon"
              onClick={() =>
                (window.location.href = `/search/?fulltext=${t('part2')}`)
              }
              style={{
                height: '48px',
                width: '48px',
                imageRendering: 'pixelated',
                fontFamily:
                  i18n.language === 'en' ? 'RobotoBold' : 'NotoKufiArabic',
              }}
            />
            <br />
            <Link
              to={`/search/?fulltext=${t('part2')}`}
              style={{
                fontSize: '14px',
                color: '#002245',
                whiteSpace: 'nowrap',
                fontFamily:
                  i18n.language === 'en' ? 'RobotoBold' : 'NotoKufiArabic',
              }}
              className="sect-text text-decoration-none font-weight-bold"
            >
              {t('part2')}
            </Link>
          </div>
          <div>
            <Energy
              onClick={() =>
                (window.location.href = `/search/?fulltext=${t('part3')}`)
              }
              style={{
                height: '48px',
                width: '48px',
                imageRendering: 'pixelated',
                fill: '#002245',
                stroke: '#002245',
                fontFamily:
                  i18n.language === 'en' ? 'RobotoBold' : 'NotoKufiArabic',
              }}
              className="sect-icon"
            />
            <br />
            <Link
              to={`/search/?fulltext=${t('part3')}`}
              style={{
                fontSize: '14px',
                color: '#002245',
                whiteSpace: 'nowrap',
                fontFamily:
                  i18n.language === 'en' ? 'RobotoBold' : 'NotoKufiArabic',
              }}
              className="sect-text text-decoration-none font-weight-bold"
            >
              {t('part3')}
            </Link>
          </div>
          <div>
            <Business
              onClick={() =>
                (window.location.href = `/search/?fulltext=${t('part4')}`)
              }
              className="sect-icon"
              style={{
                height: '48px',
                width: '48px',
                imageRendering: 'pixelated',
                fill: '#002245',
                stroke: '#002245',
                fontFamily:
                  i18n.language === 'en' ? 'RobotoBold' : 'NotoKufiArabic',
              }}
            />
            <br />
            <Link
              to={`/search/?fulltext=${t('part4')}`}
              style={{
                fontSize: '14px',
                color: '#002245',
                whiteSpace: 'nowrap',
                fontFamily:
                  i18n.language === 'en' ? 'RobotoBold' : 'NotoKufiArabic',
              }}
              className="sect-text text-decoration-none  font-weight-bold"
            >
              {t('part4')}
            </Link>
          </div>
          <div>
            <Transport
              onClick={() =>
                (window.location.href = `/search/?fulltext=${t('part5')}`)
              }
              className="sect-icon"
              style={{
                height: '48px',
                width: '48px',
                imageRendering: 'pixelated',
                fill: '#002245',
                stroke: '#002245',
                fontFamily:
                  i18n.language === 'en' ? 'RobotoBold' : 'NotoKufiArabic',
              }}
            />
            <br />
            <Link
              to={`/search/?fulltext=${t('part5')}`}
              style={{
                fontSize: '14px',
                color: '#002245',
                whiteSpace: 'nowrap',
                fontFamily:
                  i18n.language === 'en' ? 'RobotoBold' : 'NotoKufiArabic',
              }}
              className="sect-text text-decoration-none font-weight-bold"
            >
              {t('part5')}
            </Link>
          </div>
          <div>
            <Environment
              onClick={() =>
                (window.location.href = `/search/?fulltext=${t('part6')}`)
              }
              className="sect-icon"
              style={{
                height: '48px',
                width: '60px',
                imageRendering: 'pixelated',
                fill: '#002245',
                stroke: '#002245',
                fontFamily:
                  i18n.language === 'en' ? 'RobotoBold' : 'NotoKufiArabic',
              }}
            />
            <br />
            <Link
              to={`/search/?fulltext=${t('part6')}`}
              style={{
                fontSize: '14px',
                color: '#002245',
                whiteSpace: 'nowrap',
                fontFamily:
                  i18n.language === 'en' ? 'RobotoBold' : 'NotoKufiArabic',
              }}
              className="sect-text text-decoration-none font-weight-bold"
            >
              {t('part6')}
            </Link>
          </div>
          <div className={`${i18n.language === 'ar' && 'ml-4'}`}>
            <Soceity
              onClick={() =>
                (window.location.href = `/search/?fulltext=${t('part7')}`)
              }
              className="sect-icon"
              style={{
                height: '48px',
                width: '48px',
                imageRendering: 'pixelated',
                fill: '#002245',
                stroke: '#002245',
                fontFamily:
                  i18n.language === 'en' ? 'RobotoBold' : 'NotoKufiArabic',
              }}
            />
            <br />
            <Link
              to={`/search/?fulltext=${t('part7')}`}
              style={{
                fontSize: '14px',
                color: '#002245',
                whiteSpace: 'nowrap',
                fontFamily:
                  i18n.language === 'en' ? 'RobotoBold' : 'NotoKufiArabic',
              }}
              className="sect-text text-decoration-none font-weight-bold"
            >
              {t('part7')}
            </Link>
          </div>
          <div>
            <Education
              className="sect-icon"
              onClick={() =>
                (window.location.href = `/search/?fulltext=${t('part8')}`)
              }
              style={{
                height: '48px',
                width: '48px',
                imageRendering: 'pixelated',
                fill: '#002245',
                stroke: '#002245',
                fontFamily:
                  i18n.language === 'en' ? 'RobotoBold' : 'NotoKufiArabic',
              }}
            />
            <br />
            <Link
              to={`/search/?fulltext=${t('part8')}`}
              style={{
                fontSize: '14px',
                color: '#002245',
                whiteSpace: 'nowrap',
                fontFamily:
                  i18n.language === 'en' ? 'RobotoBold' : 'NotoKufiArabic',
              }}
              className="sect-text text-decoration-none font-weight-bold"
            >
              {t('part8')}
            </Link>
          </div>
          <div>
            <Health
              onClick={() =>
                (window.location.href = `/search/?fulltext=${t('part9')}`)
              }
              className="sect-icon"
              style={{
                height: '48px',
                width: '48px',
                imageRendering: 'pixelated',
                fill: '#002245',
                stroke: '#002245',
                fontFamily:
                  i18n.language === 'en' ? 'RobotoBold' : 'NotoKufiArabic',
              }}
            />
            <br />

            <Link
              to={`/search/?fulltext=${t('part9')}`}
              style={{
                fontSize: '14px',
                color: '#002245',
                whiteSpace: 'nowrap',
                fontFamily:
                  i18n.language === 'en' ? 'RobotoBold' : 'NotoKufiArabic',
              }}
              className="sect-text text-decoration-none font-weight-bold"
            >
              {t('part9')}
            </Link>
          </div>
          <div>
            <Tourism
              onClick={() =>
                (window.location.href = `/search/?fulltext=${t('part10')}`)
              }
              className="sect-icon"
              style={{
                height: '48px',
                width: '48px',
                imageRendering: 'pixelated',
                fill: '#002245',
                stroke: '#002245',
                fontFamily:
                  i18n.language === 'en' ? 'RobotoBold' : 'NotoKufiArabic',
              }}
            />
            <br />
            <Link
              to={`/search/?fulltext=${t('part10')}`}
              style={{
                fontSize: '14px',
                color: '#002245',
                whiteSpace: 'nowrap',
                fontFamily:
                  i18n.language === 'en' ? 'RobotoBold' : 'NotoKufiArabic',
              }}
              className="sect-text text-decoration-none font-weight-bold"
            >
              {t('part10')}
            </Link>
          </div>
          <div>
            <Technology
              onClick={() =>
                (window.location.href = `/search/?fulltext=${t('part11')}`)
              }
              className="sect-icon"
              style={{
                height: '48px',
                width: '48px',
                imageRendering: 'pixelated',
                fill: '#002245',
                stroke: '#002245',
                fontFamily:
                  i18n.language === 'en' ? 'RobotoBold' : 'NotoKufiArabic',
              }}
            />
            <br />
            <Link
              to={`/search/?fulltext=${t('part11')}`}
              style={{
                fontSize: '14px',
                color: '#002245',
                whiteSpace: 'nowrap',
                fontFamily:
                  i18n.language === 'en' ? 'RobotoBold' : 'NotoKufiArabic',
              }}
              className="sect-text text-decoration-none font-weight-bold"
            >
              {t('part11')}
            </Link>
          </div>
          <div>
            <Safety
              onClick={() =>
                (window.location.href = `/search/?fulltext=${t('part12')}`)
              }
              className="sect-icon"
              style={{
                height: '48px',
                width: '48px',
                imageRendering: 'pixelated',
                fill: '#002245',
                stroke: '#002245',
                fontFamily:
                  i18n.language === 'en' ? 'RobotoBold' : 'NotoKufiArabic',
              }}
            />
            <br />
            <Link
              to={`/search/?fulltext=${t('part12')}`}
              style={{
                fontSize: '14px',
                color: '#002245',
                whiteSpace: 'break-spaces',
                fontFamily:
                  i18n.language === 'en' ? 'RobotoBold' : 'NotoKufiArabic',
              }}
              className="sect-text text-decoration-none font-weight-bold"
            >
              {t('part12')}
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
