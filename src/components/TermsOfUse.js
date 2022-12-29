import Layout from './Layout'
import { useTranslation } from 'react-i18next'

const TermsOfUse = () => {
  const { t, i18n } = useTranslation()
  const translateDataTOU = (data) => {
    switch (data) {
      case 'Terms and conditions for using "Abu Dhabi Open Data" platform:':
        return t('part113')
      case "All data are available on the Abu Dhabi Data platform it open data services (Public) so its published as is. \n Abu Dhabi Digital Authority seek to ensure that all published data are accurate. The platform does not provide any warranty and responsibility of the content accuracy or appropriate timing and completeness of any specific purpose or use. The Authority or the available data aren't responsibility for:":
        return t('part114')
      case 'The owner of the data is responsible of data accuracy, therefore the Abu Dhabi Digital Authority isn’t responsible of any errors because of the inaccuracy of the data presented on the Abu Dhabi Open Data Platform regardless of the reason.':
        return t('part115')
      case 'Any decision or action taken by anyone who uses or relies on this data.':
        return t('part116')
      case 'Any expense, loss or damage etc.. , direct or indirect loss or damage, or any expense, loss or damage of any kind from the use of the data through the portal.':
        return t('part117')
      case 'Any other specific action in any disclaimers or compensation clause.':
        return t('part118')
      case 'Abu Dhabi Digital Authority have the right to stop any available content on the platform at any time and for any reason. If published all or part of the datasets on the platform was not accurate or misleadingly, Abu Dhabi Open Data Platform team will correct this data or remove it from the platform without prior notice. The Authority will not be responsible of any loss or damage of using datasets. In addition, the Authority will not be responsible for the accuracy, usefulness, or availability of any data in the datasets.':
        return t('part119')
      case 'The Authority have the right to amend the website, datasets or any means to access or using datasets or APIs at any time or from time to time without prior notice to the users.':
        return t('part120')
      case 'The Authority have the right under any circumstances, for any reason or without reason and with or without prior notice to terminate your access to datasets or any means to access the datasets or the API or use it.':
        return t('part121')
      case "As a user of the data available on the platform can't be declare or imply the participation of the authority, sponsorship, or approved method or purpose of your use or reproduction of the datasets. The Authority have the right to judge to extent permitted by law, any use of datasets in a way that counterfeits, misrepresents, detracts or uses fraudulent materials.":
        return t('part122')
      default:
        break
    }
  }
  return (
    <Layout title="Terms of use">
      <div className="container d-flex flex-wrap">
        <div
          className="row"
          style={{
            fontFamily:
              i18n.language === 'ar' ? 'NotoKufiArabic' : 'CircularStd',
            textAlign: i18n.language === 'ar' && 'right',
            direction: i18n.language === 'ar' && 'rtl',
          }}
        >
          <div className="col-sm-12 mt-5">
            <p
              style={{
                fontWeight: 700,
                color: '#3B3B3B',
                fontSize: '18px',
              }}
            >
              {t('part113')}
            </p>
            <p
              style={{
                fontWeight: 'bold',
                color: '#3b3b3b',
                fontSize: '16px',
                marginBottom: '25px',
              }}
            >
              {t('part114')}
            </p>
          </div>
          <div className="col-sm-12 mt-2">
            <ul
              style={{
                marginRight: i18n.language === 'ar' && '-20px',
                direction: i18n.language === 'ar' && 'rtl',
              }}
            >
              <li>
                <p
                  style={{
                    fontWeight: 'bold',
                    color: '#3b3b3b',
                    fontSize: '16px',
                  }}
                >
                  {t('part115')}
                </p>
              </li>
              <li>
                <p
                  style={{
                    fontWeight: 'bold',
                    color: '#3b3b3b',
                    fontSize: '16px',
                  }}
                >
                  {t('part116')}
                </p>
              </li>
              <li>
                <p
                  style={{
                    fontWeight: 'bold',
                    color: '#3b3b3b',
                    fontSize: '16px',
                  }}
                >
                  {t('part117')}
                </p>
              </li>
              <li>
                <p
                  style={{
                    fontWeight: 'bold',
                    color: '#3b3b3b',
                    fontSize: '16px',
                  }}
                >
                  {t('part118')}
                </p>
              </li>
              <li>
                <p
                  style={{
                    fontWeight: 'bold',
                    color: '#3b3b3b',
                    fontSize: '16px',
                  }}
                >
                  {t('part119')}
                </p>
              </li>
              <li>
                <p
                  style={{
                    fontWeight: 'bold',
                    color: '#3b3b3b',
                    fontSize: '16px',
                  }}
                >
                  {t('part120')}
                </p>
              </li>
              <li>
                <p
                  style={{
                    fontWeight: 'bold',
                    color: '#3b3b3b',
                    fontSize: '16px',
                  }}
                >
                  {t('part121')}
                </p>
              </li>
              <li className="p-2 mb-2">
                <p
                  style={{
                    fontWeight: 'bold',
                    color: '#3b3b3b',
                    fontSize: '16px',
                  }}
                >
                  {t('part122')}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default TermsOfUse
