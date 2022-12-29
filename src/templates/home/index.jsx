import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Headers from '../../components/Headers'
import Sect from '../../components/Sect'
import Insights from '../../components/Insights'
import Sections from '../../components/Sections'
import Graphpart1 from '../../components/Graphpart1'
import Graphpart2 from '../../components/Graphpart2'
import Graphpart3 from '../../components/Graphpart3'
import Graphpart4 from '../../components/Graphpart4'
import { Hero } from '@civicactions/data-catalog-components'
import Layout from '../../components/Layout'
import { useTranslation } from 'react-i18next'

const Home = (props) => {
  const [check, setCheck] = useState(false)
  const [insert, setinsert] = useState(false)
  const [datasets, setDatasets] = useState([])
  const [themes, setThemes] = useState([])
  const [items, setItems] = useState([])
  const [fDatasets, setFDatasets] = useState([])
  const { t, i18n } = useTranslation()

  const image = 'banner-cover.png'

  // useEffect(() => {
  //   i18n.changeLanguage(i18n.language)
  //   async function getDatasets() {
  //     const { data } = await axios.get(
  //       `${process.env.REACT_APP_ROOT_URL}/metastore/schemas/dataset/items?show-reference-ids`
  //     )
  //     console.log('Check', data)
  //     setDatasets(data)
  //   }
  //   async function getThemes() {
  //     const { data } = await axios.get(
  //       `${process.env.REACT_APP_ROOT_URL}/metastore/schemas/theme/items`
  //     )
  //     setThemes(data)
  //   }
  //   if (datasets === null) {
  //     getDatasets()
  //     getThemes()
  //   }
  //   if (datasets) {
  //     const orderedDatasets = datasets.sort(function (a, b) {
  //       return a.title - b.title
  //     })
  //     setFDatasets(
  //       orderedDatasets.length > 3
  //         ? orderedDatasets.slice(
  //             orderedDatasets.length - 3,
  //             orderedDatasets.length
  //           )
  //         : orderedDatasets
  //     )
  //   }
  //   setinsert(true)
  // }, [datasets])

  // useEffect(() => {
  //   if (insert == true) {
  //     setItems(
  //       themes.map((x) => {
  //         let item = {
  //           identifier: x.identifier,
  //           ref: `search?theme=${x.data}`,
  //           title: x.data,
  //           size: '100',
  //         }
  //         return item
  //       })
  //     )
  //   }
  // }, [themes])

  return (
    <Layout title="Home" check={check} setCheck={setCheck}>
      <div className="home-page">
        <div
          className="py-5"
          style={{
            backgroundImage: `url(${process.env.REACT_APP_IMAGE}${image})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundColor: '#00000000',
            height: '100%',
          }}
        >
          <Hero
            language={i18n.language}
            title={t('part0')}
            intro={t('part57')}
            gradient={'rgb(22, 46, 81 / 0%), rgb(9, 120, 188 / 0%)'}
          />
        </div>

        <Headers id={check} />
        <Sect id={check} />
        <Insights id={check} />
        <div style={{ backgroundColor: '#f5f5f5' }}>
          <Graphpart1 id={check} />
          <Graphpart2 id={check} />
          <Graphpart3 id={check} />
          <Graphpart4 id={check} />
          <Sections id={check} />
        </div>
      </div>
    </Layout>
  )
}
export default Home
