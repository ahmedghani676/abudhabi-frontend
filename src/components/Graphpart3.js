import React from 'react'
import { useState } from 'react'
import { Chart as ChartJS, registerables } from 'chart.js'
import { useTranslation, Trans } from 'react-i18next'
import 'chart.js/auto'
import { Chart } from 'react-chartjs-2'
ChartJS.register(...registerables)

export default function Graphpart2(props) {
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
                  className="text-center font-weight-bold fs-2"
                  style={{
                    borderBottom: '1px solid #CDCDCD',
                    lineHeight: '24.2px',
                    letterSpacing: 'normal',
                    color: '#3b3b3b',
                    padding: '30px',
                    whiteSpace: 'break-spaces',
                    flexWrap: 'nowrap',
                    fontFamily:
                      i18n.language === 'ar' ? 'NotoKufiArabic' : 'Robotobold',
                  }}
                >
                  {t('part28')}
                </h3>
                <Chart
                  type="pie"
                  data={{
                    labels: [
                      'American',
                      'English National Curriculum (British)',
                      'Ministry of Education',
                      'Indian',
                      'SABIS System',
                      'Other',
                    ],
                    datasets: [
                      {
                        data: [28, 24, 22, 14, 10, 3],
                        backgroundColor: [
                          'rgb(31,119,180)',
                          'rgb(198,216,240)',
                          'rgb(245,163,86)',
                          'rgb(250,207,160)',
                          'rgb(107,188,107)',
                          'rgb(183,233,173)',
                        ],
                        borderColor: [
                          'rgb(31,119,180)',
                          'rgb(198,216,240)',
                          'rgb(245,163,86)',
                          'rgb(250,207,160)',
                          'rgb(107,188,107)',
                          'rgb(183,233,173)',
                        ],
                        borderWidth: 1,
                      },
                    ],
                  }}
                  height={'400px'}
                  options={{
                    indexAxis: 'y',
                    responsive: true,
                    maintainAspectRatio: true,
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
                    responsive: true,
                  }}
                />
              </div>

              <div className="col-md-4 col-sm-12">
                <h3
                  className="text-center font-weight-bold fs-2"
                  style={{
                    borderBottom: '1px solid #CDCDCD',
                    lineHeight: '24.2px',
                    letterSpacing: 'normal',
                    color: '#3b3b3b',
                    padding: '30px',
                    whiteSpace: 'pre',
                    fontFamily:
                      i18n.language === 'ar' ? 'NotoKufiArabic' : 'Robotobold',
                  }}
                >
                  {t('part29')}
                </h3>
                <Chart
                  type="bar"
                  data={{
                    labels: [
                      '2013/2014',
                      '2014/2015',
                      '2015/2016',
                      '2016/2017',
                      '2017/2018',
                      '2018/2019',
                      '2019/2020',
                    ],
                    datasets: [
                      {
                        label: 'Number of Students',
                        data: [
                          214.587, 223.803, 236.235, 241.488, 242.053, 248.743,
                          253.444,
                        ],
                        backgroundColor: '#1F77B4',
                        borderColor: '#1F77B4',
                        categoryPercentage: 0.8,
                        barPercentage: 0.8,
                      },
                    ],
                  }}
                  height={'400px'}
                  options={{
                    responsive: true,
                    maintainAspectRatio: true,
                    title: {
                      display: true,
                      text: t('part29'),
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
                  style={{
                    borderBottom: '1px solid #CDCDCD',
                    lineHeight: '24.2px',
                    letterSpacing: 'normal',
                    color: '#3b3b3b',
                    padding: '30px',
                    fontFamily:
                      i18n.language === 'ar' ? 'NotoKufiArabic' : 'Robotobold',
                  }}
                  className="text-center"
                >
                  {t('part30')}
                </h3>
                <Chart
                  type="bar"
                  data={{
                    labels: [
                      'All hotels',
                      '5 Star Hotels',
                      '4 Star Hotels',
                      '3 Star Hotels',
                      '2 Star Hotels',
                      '1 Star Hotels',
                    ],
                    datasets: [
                      {
                        id: 1,
                        label: 'FEB 19',
                        data: [99.0, 106.7, 87.9, 89.6, 59.7, 67.3],
                        backgroundColor: '#5799c7',
                        categoryPercentage: 0.8,
                        barPercentage: 0.8,
                      },
                      {
                        id: 2,
                        label: 'Europe',
                        backgroundColor: '#c2d5ee',
                        data: [73.9, 78.2, 67.1, 71.4, 49.1, 47.1],
                        categoryPercentage: 1,
                        barPercentage: 1,
                      },
                    ],
                  }}
                  height={'400px'}
                  options={{
                    indexAxis: 'y',
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
