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
                    whiteSpace: 'nowrap',
                    fontFamily:
                      i18n.language === 'ar' ? 'NotoKufiArabic' : 'Robotobold',
                  }}
                >
                  {t('part25')}
                </h3>
                <Chart
                  type="bar"
                  data={{
                    labels: ['nk-Notes', 'nk-Coin'],
                    datasets: [
                      {
                        id: 1,
                        label: '2010',
                        data: [47110, 666],
                        backgroundColor: ['#1F77B4', '#1F77B4'],
                        categoryPercentage: 0.8,
                        barPercentage: 0.8,
                      },
                      {
                        id: 2,
                        label: '2011',
                        backgroundColor: ['#AEC7E8', '#AEC7E8'],
                        data: [51560, 727],
                        categoryPercentage: 0.8,
                        barPercentage: 0.8,
                      },
                      {
                        id: 3,
                        label: '2012',
                        backgroundColor: ['#FF7F0E', '#FF7F0E'],
                        data: [56999, 775],
                        categoryPercentage: 0.8,
                        barPercentage: 0.8,
                      },
                      {
                        id: 4,
                        label: '2013',
                        backgroundColor: ['#FFBB78', '#FFBB78'],
                        data: [63077, 850],
                        categoryPercentage: 0.8,
                        barPercentage: 0.8,
                      },
                      {
                        id: 5,
                        label: '2014',
                        backgroundColor: ['#2CAO2C', '#2CAO2C'],
                        data: [73502, 970],
                        categoryPercentage: 0.8,
                        barPercentage: 0.8,
                      },
                      {
                        id: 6,
                        label: '2015',
                        backgroundColor: ['#98DF8A', '#98DF8A'],
                        data: [72457, 1065],
                        categoryPercentage: 0.8,
                        barPercentage: 0.8,
                      },
                      {
                        id: 7,
                        label: '2016',
                        backgroundColor: ['#D62728', '#D62728'],
                        data: [76430, 1121],
                        categoryPercentage: 0.8,
                        barPercentage: 0.8,
                      },
                      {
                        id: 8,
                        label: '2017',
                        backgroundColor: ['#FF9896', '#FF9896'],
                        data: [84220, 1166],
                        categoryPercentage: 0.8,
                        barPercentage: 0.8,
                      },
                      {
                        id: 9,
                        label: '2018',
                        backgroundColor: ['#9467BD', '#9467BD'],
                        data: [84603, 1236],
                        categoryPercentage: 0.8,
                        barPercentage: 0.8,
                      },
                      {
                        id: 10,
                        label: '2019',
                        backgroundColor: ['#C5B0D5', '#C5B0D5'],
                        data: [92456, 1273],
                        categoryPercentage: 0.8,
                        barPercentage: 0.8,
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
                  {t('part26')}
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
                    ],
                    datasets: [
                      {
                        id: 1,
                        label: 'Public',
                        data: [
                          9780, 19849, 14065, 24758, 25850, 27094, 26819, 30315,
                          41617, 47642, 50803, 47054, 43686,
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
                  {t('part27')}
                </h3>
                <Chart
                  type="doughnut"
                  data={{
                    labels: [
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
                        label: '2010',
                        data: [0, 0, 0, 80, 34, 30, 32, 31, 30, 250],
                        backgroundColor: [
                          '#1F77B4',
                          '#AEC7E8',
                          '#FF7F0F',
                          '#FFBB78',
                          '#2CA02C',
                          '#98DE84',
                          '#D62728',
                          '#FF9896',
                          '#9467BD',
                          '#C5B0D5',
                        ],
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
