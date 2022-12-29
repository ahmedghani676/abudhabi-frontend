import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useLocation } from '@reach/router'
import Layout from '../../components/Layout'
import config from '../../assets/config'
import { useTranslation, Trans } from 'react-i18next'
import ResourceTemplate from '../../components/Resource'
import { Spinner } from 'reactstrap'
import {
  Text,
  Organization,
  Table,
  Tags,
  TopicIcon,
  TopicWrapper,
} from '@civicactions/data-catalog-components'
import orgs from '../../assets/publishers'

const Dataset = ({ id, location, props }) => {
 
  const [called, setCalled] = React.useState(false)
  //   useEffect(()=>{
  //     var session_url = process.env.REACT_APP_BASE_URL+'platform_insights.php';

  //     axios.get(session_url, {
  //       auth: {
  //         username: 'odpdkan',
  //         password: '317$Odp'
  //       }
  //     }).then(function(response) {
  //       console.log('Authenticated',response.data.data);
  //       setArr(response.data.data)
  //     }).catch(function(error) {
  //       console.log('Error on Authentication');
  //     });
  //    // setArr(response.data)
  // },[]);

  const { t, i18n } = useTranslation()

  useEffect(() => {
  
    if (called == false ) {
      var session_url = process.env.REACT_APP_BASE_URL + 'ip.php'

      var res = axios
        .get(session_url, {
          auth: {
            username: 'odpdkan',
            password: '317$Odp',
          },
        })
        .then(function (response) {
          setCalled(true)
          console.log('uy', response)

          var session_urls = process.env.REACT_APP_BASE_URL + 'view_count.php'

          axios
            .post(
              session_urls,
              {
                identifier: id,
                // ip_address:'172.0.0.1',
                ip_address: response.data.ip,
              },

              {
                auth: {
                  username: 'odpdkan',
                  password: '317$Odp',
                },
              }
            )
            .then(function (response) {
             
            }, [])
        }, [])
    }
}, [])

  // useEffect(()=>{
  //     var session_url = ' http://localhost/apis/download_count.php';

  //     axios.post(session_url,{}, {
  //       auth: {
  //         username: 'odpdkan',
  //         password: '317$Odp'
  //       }
  //     }).then(function(response) {
  //       console.log('Authenticated',response.data.data);
  //     }).catch(function(error) {
  //       console.log('Error on Authentication');
  //     });

  // });
  const { state } = location
  const [item, setItem] = useState(state && state.dataset ? state.dataset : {})
  const [hasWindow, checkForWindow] = useState(false)

  useEffect(() => {
    if (window !== undefined) {
      checkForWindow(true)
    }
    async function getItem() {
      const { data } = await axios.get(
        `${process.env.REACT_APP_ROOT_URL}/metastore/schemas/dataset/items/${id}?show-reference-ids`
      )
      setItem(data)
    }

    if (!state || !state.dataset) {
      getItem()
    }
  }, [id, state])

  const orgName =
    i18n.language === 'ar'
      ? 'publisher' in item && item.publisherlear
        ? item.publisherlear.data.name
        : ''
      : 'publisher' in item && item.publisher
      ? item.publisher.data.name
      : ''

  const orgDetails = orgs.filter((org) => orgName === org.name)
  const orgImage =
    orgDetails.length > 0 && orgDetails[0].imageUrl
      ? orgDetails[0].imageUrl
      : null
  const orgDesc =
    orgDetails.length > 0 && orgDetails[0].description
      ? orgDetails[0].description
      : ''
  let renderOrg
  if (orgDetails.length > 0 && orgDetails[0].imageUrl) {
    renderOrg = (
      <Organization name={orgName} imageUrl={orgImage} description={orgDesc} />
    )
  } else {
    renderOrg = <Organization name={orgName} description={orgDesc} />
  }

  const tag = 'keyword' in item ? item.keyword : []
  const theme = 'theme' in item ? item.theme : []

  function themes(theme) {
    if (!theme) {
      return null
    } else {
      return theme.map((topic) => {
        return (
          <TopicWrapper
            component={TopicIcon}
            topic={topic.data}
            key={topic.identifier}
          />
        )
      })
    }
  }

  // // Process content for 'Columns in this Dataset' table.
  // // const labelsT2 = {};
  // // const valuesT2 = {};

  // // columns.forEach((value, index) => {
  // //   labelsT2[index] = { label: value };
  // //   valuesT2[index] = "String";
  // // });

  // // Process content for 'Additional Information' table.
  const labelsT3 = {}
  const valuesT3 = {}

  if (orgName && orgName.length > 0) {
    labelsT3.publisher =
      i18n.language === 'ar' ? { label: 'الناشر' } : { label: 'Publisher' }
    valuesT3.publisher = orgName
  }
  if ('identifier' in item && item.identifier) {
    labelsT3.identifier =
      i18n.language === 'ar' ? { label: 'االمعرف' } : { label: 'Identifier' }
    valuesT3.identifier = item.identifier
  }
  if ('issued' in item && item.issued) {
    labelsT3.issued =
      i18n.language === 'ar' ? { label: 'اصادر' } : { label: 'issued' }
    valuesT3.issued = item.issued
  }
  if ('modified' in item && item.modified) {
    labelsT3.modified =
      i18n.language === 'ar' ? { label: 'امعدّل' } : { label: 'modified' }
    valuesT3.modified = item.modified
  }
  if ('license' in item && item.license) {
    labelsT3.license =
      i18n.language === 'ar' ? { label: 'االترخيص' } : { label: 'License' }
    valuesT3.license = `<a href="${item.license}">${item.license}</a>`
  }
  if ('contactPoint' in item && item.contactPoint && item.contactPoint.fnlear) {
    labelsT3.contact =
      i18n.language === 'ar' ? { label: ' اتصلص' } : { label: 'Contact' }
    i18n.language === 'ar'
      ? (valuesT3.contact = item.contactPoint.fnlear)
      : (valuesT3.contact = item.contactPoint.fn)
  }
  if (
    'contactPoint' in item &&
    item.contactPoint &&
    item.contactPoint.hasEmail
  ) {
    labelsT3.email =
      i18n.language === 'ar'
        ? { label: 'تواصل بالبريد الاكتروني' }
        : { label: 'Contact E-mail' }
    valuesT3.email = `<a href="${item.contactPoint.hasEmail}">${item.contactPoint.hasEmail}</a>`
  }
  if ('accessLevel' in item && item.accessLevellear) {
    labelsT3.access =
      i18n.language === 'ar'
        ? { label: 'تواصل بالبريد الاكترونيمستوى الوصول العام' }
        : { label: 'Public Access Level' }
    i18n.language === 'ar'
      ? (valuesT3.access = item.accessLevellear)
      : (valuesT3.access = item.accessLevel)
  }
  if ('landingPage' in item && item.landingPage) {
    labelsT3.homepage = { label: 'Homepage URL' }
    valuesT3.homepage = `<a href="${item.landingPage}">${item.landingPage}</a>`
  }

  return (
    <Layout title={`Dataset - ${item.titlear}`}>
      <div className={`dc-dataset-page ${config.container}`}>
        <div className="row">
          <div
            className={
              i18n.language === 'ar'
                ? 'col-md-12 d-flex flex-row-reverse'
                : 'col-md-12 d-flex'
            }
          >
            <div className="col-md-3 col-sm-12">
              {renderOrg}

              {i18n.language === 'ar' ?
                <div className="dc-block-wrapper">
                 
                  المعلومات متاحة أيضًا عبر{' '}
                  <Link
                    to={`/dataset/${item.identifier}/developers`}
                    state={{ dataset: { ...item } }}
                  >
                    API
                  </Link>
                
                  The information on this page is also available via the{' '}
                  <Link
                    to={`/dataset/${item.identifier}/api`}
                    state={{ dataset: { ...item } }}
                  >
                    API
                  </Link>
              
                </div> :
                <div className="dc-block-wrapper">
                 
                  The information on this page is also available via the{' '}
                  <Link
                    to={`/dataset/${item.identifier}/developers`}
                    state={{ dataset: { ...item } }}
                  >
                    API
                  </Link>
                
                
              
                </div>

}
            </div>
            <div className="col-md-9 col-sm-12">
              {Object.keys(item).length ? (
                i18n.language === 'ar' ? (
                  <div
                    style={
                      i18n.language === 'ar'
                        ? { direction: 'rtl' }
                        : { direction: 'ltr' }
                    }

                  >
                    <h1 style={i18n.language === 'ar' ? {display : "flex"} : {}}>{item.titlear}</h1>
                    {theme.length > 0 && (
                      <div style={i18n.language === 'ar' ? {display : "flex"} : {}} className="dc-item-theme">{themes(theme)}</div>
                    )}
                    <Text language={i18n.language} value={item.descriptionar} />
                    {hasWindow &&
                      item.distribution &&
                      item.distribution.map((dist) => {
                        return (
                          <ResourceTemplate
                            key={dist.identifier}
                            resource={dist}
                            identifier={dist.identifier}
                          />
                        )
                      })}
                    <Tags language={i18n.language} tags={tag} path="/search?keyword=" label="Tags" />

                    <Table
                      language={i18n.language}
                      configuration={labelsT3}
                      data={valuesT3}
                      tableclassName="metadata"
                    />
                  </div>
                ) : (
                  <div style={{ direction: 'ltr' }}>
                    <h1>{item.title}</h1>
                    {theme.length > 0 && (
                      <div className="dc-item-theme">{themes(theme)}</div>
                    )}
                    <Text value={item.description} />
                    {hasWindow &&
                      item.distribution &&
                      item.distribution.map((dist) => {
                        return (
                          <ResourceTemplate
                            key={dist.identifier}
                            resource={dist}
                            identifier={dist.identifier}
                          />
                        )
                      })}
                    {/* <Tags tags={tag} path="/search?keyword=" label="Tags" /> */}

                    <Table
                      configuration={labelsT3}
                      data={valuesT3}
                        tableclassName="metadata"
                      language={i18n.language}
                    />
                  </div>
                )
              ) : (
                <div className="row">
                  <Spinner color="primary" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Dataset
