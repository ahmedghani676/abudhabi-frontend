import React from 'react'
import { useState } from 'react'
import { Chart as ChartJS, registerables } from 'chart.js'
import { useTranslation } from 'react-i18next'
import 'chart.js/auto'
import { Chart } from 'react-chartjs-2'
import '../index.css'

ChartJS.register(...registerables)

export default function Graphpart1(props) {
  const { t, i18n } = useTranslation()
  const [vars, setvar] = useState(false)
  const option1 = {
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
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  }

  const option2 = {
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
    responsive: false,

    scales: {
      x: {
        stacked: false,
      },
      y: {
        stacked: false,
      },
    },
  }

  return (
    <>
      <div
        className="container mb-4"
        style={{
          backgroundColor: '#f5f5f5',
          display: i18n.language === 'ar' && 'none',
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
                    whiteSpace: 'pre',
                    fontFamily:
                      i18n.language === 'ar' ? 'NotoKufiArabic' : 'Robotobold',
                  }}
                >
                  {t('part22')}
                </h3>
                <Chart
                  type="bar"
                  data={{
                    labels: ['2017/18', '2018/19', '2019/20'],
                    datasets: [
                      {
                        id: 1,
                        label: 'undergraduate',
                        data: [190, 126, 62],

                        backgroundColor: '#0F90EE',
                        categoryPercentage: 0.8,
                        barPercentage: 0.8,
                      },
                    ],
                  }}
                  height={'400px'}
                  options={{
                    plugins: {
                      legend: {
                        position: 'top',
                        labels: {
                          usePointStyle: true,
                          pointStyle: 'circle',
                        },
                      },
                    },

                    title: {
                      display: true,
                      text: 'Population growth (millions)',
                    },

                    responsive: true,
                    scales: {
                      x: {
                        stacked: true,
                      },
                      y: {
                        stacked: true,
                      },
                    },
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
                  {t('part23')}
                </h3>
                <div className="d-flex justify-content-center gap-4">
                  <div className="">
                    <input
                      className="radio"
                      type="radio"
                      id="1"
                      value="option2"
                      name="p"
                      onClick={() => {
                        console.log(vars)
                        setvar(false)
                      }}
                    />
                    <label
                      style={{
                        fontSize: '12px',
                        position: 'relative',
                        bottom: '3px',
                      }}
                      className="ml-3"
                    >
                      Grouped
                    </label>
                  </div>
                  <div className="">
                    <input
                      className="radio"
                      type="radio"
                      id="2"
                      value="option1"
                      name="p"
                      onClick={() => {
                        setvar(true)
                        console.log(vars)
                      }}
                    />
                    <label
                      style={{
                        fontSize: '12px',
                        position: 'relative',
                        bottom: '3px',
                      }}
                      className="ml-3"
                    >
                      Stacked
                    </label>
                  </div>
                </div>

                <Chart
                  type="bar"
                  data={{
                    labels: ['Abu Dhabi', 'Al Dhafra', 'Al Ain'],
                    datasets: [
                      {
                        id: 1,
                        label: 'Camel',
                        data: [5183, 4442, 15462],
                        backgroundColor: '#3e95cd',
                        categoryPercentage: 0.8,
                        barPercentage: 0.8,
                      },
                      {
                        id: 2,
                        label: 'Sheep',
                        backgroundColor: '#8e5ea2',
                        data: [73269, 111967, 256782],
                        categoryPercentage: 0.8,
                        barPercentage: 0.8,
                      },
                      {
                        id: 3,
                        label: 'Goats',
                        backgroundColor: '#ff9f4a',
                        data: [321904, 278668, 1062318],
                        categoryPercentage: 0.8,
                        barPercentage: 0.8,
                      },
                      {
                        id: 4,
                        label: 'Cattle',
                        backgroundColor: '#ffcc9a',
                        data: [7063, 173813, 42467],
                        categoryPercentage: 0.8,
                        barPercentage: 0.8,
                      },
                    ],
                  }}
                  height={'400px'}
                  options={vars ? option1 : option2}
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
                  {t('part24')}
                </h3>
                <Chart
                  type="bar"
                  data={{
                    labels: [
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
                        label: 'percentage of recyle',
                        backgroundColor: [
                          '#1F77B4',
                          '#AEC7E8',
                          '#FF7F0E',
                          '#FFBB78',
                          '#2CA02C',
                          '#98DF8A',
                          '#D62728',
                        ],
                        data: [52, 55, 52, 55, 56, 57, 59],

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
                    responsive: true,
                    scales: {
                      x: {
                        stacked: true,
                      },
                      y: {
                        stacked: true,
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
