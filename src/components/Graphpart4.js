import { Chart as ChartJS, registerables } from 'chart.js'
import { useTranslation } from 'react-i18next'
import 'chart.js/auto'
import { Chart } from 'react-chartjs-2'
ChartJS.register(...registerables)

export default function Graphpart4(props) {
  const { t, i18n } = useTranslation()

  return (
    <>
      <div
        className="container mb-4"
        style={{
          backgroundColor: '#f5f5f5',
          direction: i18n.language === 'ar' && 'rtl',
        }}
      >
        <div
          className="container d-flex flex-wrap bg-white border border-2"
          style={{ borderRadius: '4px' }}
        >
          <div
            className={
              props.id ? 'flex-row-reverse d-flex' : 'col-md-12 d-flex'
            }
          >
            <div className="row">
              <div className="col-md-4 col-sm-12">
                <h3
                  className="text-center"
                  style={{
                    borderBottom: '1px solid #CDCDCD',
                    lineHeight: '24.2px',
                    letterSpacing: 'normal',
                    color: '#3b3b3b',
                    padding: '30px',
                    fontFamily:
                      i18n.language === 'ar' ? 'NotoKufiArabic' : 'Robotobold',
                  }}
                >
                  {t('part31')}
                </h3>
                <Chart
                  type="line"
                  data={{
                    labels: [
                      'Jan',
                      'Feb',
                      'Mar',
                      'Apr',
                      'May',
                      'Jun',
                      'Jul',
                      'Aug',
                      'Sep',
                      'Oct',
                      'Nov',
                      'Dec',
                    ],
                    datasets: [
                      {
                        id: 1,
                        label: 'Occupancy rate 2018',
                        data: [75, 78, 80, 78, 62, 56, 65, 66, 67, 74, 82, 78],
                        backgroundColor: '#303F4F',
                        borderColor: '#303F4F',
                        categoryPercentage: 0.8,
                        barPercentage: 0.8,
                      },
                      {
                        id: 2,
                        label: 'Occupancy rate 2019',
                        backgroundColor: '#ED7333',
                        borderColor: '#ED7333',
                        data: [79, 78, 80, 78, 53, 63, 66, 67, 72, 80, 82, 77],
                        categoryPercentage: 1,
                        barPercentage: 1,
                      },
                    ],
                  }}
                  height={'400px'}
                  options={{
                    title: {
                      display: true,
                      text: 'Population growth (millions)',
                    },
                    plugins: {
                      legend: {
                        position: 'top',
                        labels: {
                          usePointStyle: true,
                          pointStyle: 'circle',
                        },
                      },
                    },
                  }}
                />
              </div>
              <div className="col-md-4 col-sm-12">
                <h3
                  className="text-center"
                  style={{
                    borderBottom: '1px solid #CDCDCD',
                    lineHeight: '24.2px',
                    letterSpacing: 'normal',
                    color: '#3b3b3b',
                    padding: '30px',
                    fontFamily:
                      i18n.language === 'ar' ? 'NotoKufiArabic' : 'Robotobold',
                  }}
                >
                  {t('part32')}
                </h3>
                <Chart
                  type="line"
                  data={{
                    labels: [
                      '2006',
                      '2007',
                      '2008',
                      '2009',
                      '2010',
                      '2011',
                      '2012',
                      '2013',
                      '2014',
                      '2015',
                      '2016',
                      '2017',
                      '2018',
                      '2019',
                    ],
                    datasets: [
                      {
                        id: 1,
                        label: 'New Business',
                        data: [
                          5991, 7451, 9070, 10333, 9023, 8266, 7689, 8658, 9934,
                          9228, 8963, 9417, 11249, 18452,
                        ],
                        backgroundColor: '#384655',
                        borderColor: '#384655',
                        categoryPercentage: 0.8,
                        barPercentage: 0.8,
                      },
                    ],
                  }}
                  height={'400px'}
                  options={{
                    title: {
                      display: true,
                      text: 'Population growth (millions)',
                    },
                    plugins: {
                      legend: {
                        position: 'top',
                        labels: {
                          usePointStyle: true,
                          pointStyle: 'circle',
                        },
                      },
                    },
                  }}
                />
              </div>
              <div className="col-md-4 col-sm-12">
                <h3
                  className="text-center"
                  style={{
                    borderBottom: '1px solid #CDCDCD',
                    lineHeight: '24.2px',
                    letterSpacing: 'normal',
                    color: '#3b3b3b',
                    padding: '30px',
                    whiteSpace: 'pre',
                    marginLeft: '10px',
                    fontFamily:
                      i18n.language === 'ar' ? 'NotoKufiArabic' : 'Robotobold',
                  }}
                >
                  {t('part33')}
                </h3>
                <Chart
                  type="bar"
                  data={{
                    labels: [
                      '2011',
                      '2012',
                      '2013',
                      '2014',
                      '2015',
                      '2016',
                      '2017',
                      '2018',
                      '2019',
                      '2020',
                    ],
                    datasets: [
                      {
                        id: 1,
                        label: 'Public',
                        data: [
                          191, 214, 213, 267, 323, 349, 602, 608, 661, 681,
                        ],
                        backgroundColor: '#636e7a',
                        categoryPercentage: 0.8,
                        barPercentage: 0.8,
                      },
                      {
                        id: 2,
                        label: 'Europe',
                        backgroundColor: '#f29565',
                        data: [
                          1161, 1297, 1413, 1544, 1814, 2106, 2244, 2358, 2420,
                          2433,
                        ],
                        categoryPercentage: 1,
                        barPercentage: 1,
                      },
                    ],
                  }}
                  height={'400px'}
                  options={{
                    title: {
                      display: true,
                      text: 'Population growth (millions)',
                    },
                    plugins: {
                      legend: {
                        position: 'top',
                        labels: {
                          usePointStyle: true,
                          pointStyle: 'circle',
                        },
                      },
                    },
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
