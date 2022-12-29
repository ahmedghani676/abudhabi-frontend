import React, { useState, useEffect } from 'react'
import Layout from '../../components/Layout'
import { useTranslation } from 'react-i18next'
import ReactPaginate from 'react-paginate'
import './style.css'
import { Link } from '@reach/router'
import axios from 'axios'
import Loader from '../../components/Layout/Loader'

const Publishers = () => {
  const [loading, setLoading] = useState(false)
  const [currentItems, setCurrentItems] = useState([])
  const [pageCount, setPageCount] = useState(0)
  const [itemOffset, setItemOffset] = useState(0)
  const [currentItemsAr, setCurrentItemsAr] = useState([])
  const [itemLength, setItemLength] = useState(0)
  const [name, setName] = useState('')
  const [message, setMessage] = useState(null)

  const { i18n } = useTranslation()

  const compare = (a, b) => {
    if (a.publisher < b.publisher) {
      return -1
    }
    if (a.publisher > b.publisher) {
      return
    }
    return 0
  }

  useEffect(() => {
    const fetchData = async () => {
      let URL = process.env.REACT_APP_BASE_URL + `publisher.php`
      try {
        const response = await axios.get(URL, {
          auth: {
            username: 'odpdkan',
            password: '317$Odp',
          },
        })
        if (i18n.language === 'en') {
          response.data.data.en.sort(compare)
          const filteredData = response.data.data.en.filter((search) => {
            return search.publisher.toLowerCase().includes(name.toLowerCase())
          })
          if (filteredData.length === 0) {
            setMessage('No Result Found')
          } else {
            setMessage(null)
          }
          setItemLength(response.data.data.en.length)
          setLoading(true)
          const endOffset = itemOffset + 9
          setCurrentItems(filteredData.slice(itemOffset, endOffset))
          setPageCount(Math.ceil(filteredData.length / 10))
          setCurrentItemsAr(filteredData.slice(itemOffset, endOffset))
        } else {
          response.data.data.ar.sort(compare)
          const filteredData = response.data.data.ar.filter((search) => {
            return search.publisher.toLowerCase().includes(name.toLowerCase())
          })
          if (filteredData.length === 0) {
            setMessage('No Result Found')
          } else {
            setMessage(null)
          }
          setItemLength(response.data.data.ar.length)
          setLoading(true)
          const endOffset = itemOffset + 9
          setCurrentItems(filteredData.slice(itemOffset, endOffset))
          setPageCount(Math.ceil(filteredData.length / 10))
          setCurrentItemsAr(filteredData.slice(itemOffset, endOffset))
        }
      } catch (error) {
        console.log(
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        )
      }
    }
    fetchData()
  }, [itemOffset, pageCount, name, i18n.language])

  const handlePageClick = (event) => {
    const newOffset =
      i18n.language === 'en'
        ? (event.selected * 10) % itemLength
        : (event.selected * 10) % itemLength
    setItemOffset(newOffset)
  }

  const imageURL = 'http://161.97.151.76:560/'
  return (
    <Layout title="Dataset Publishers">
      <div
        className="container"
        style={{
          fontFamily: i18n.language === 'ar' ? 'NotoKufiArabic' : 'RobotoBold',
        }}
      >
        <h2
          className="text-center mt-3 font-weight-bold"
          style={{
            color: '#3B3B3B',
          }}
        >
          Groups
        </h2>
        <hr style={{ width: '100%', height: '4px' }} size={5} color="#f5f5f5" />
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={12}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        className="paginate"
        forcePage={itemOffset / 10}
      />

      <div className="input-group w-25 mx-auto mb-5">
        <input
          className="form-control w-25 mx-auto mb-2"
          onChange={(e) => setName(e.target.value)}
          placeholder="Search.."
          aria-label="Search"
        />
        <button
          className="btn btn-primary"
          type="submit"
          style={{
            border: '1px solid #002245 !important',
            background: '#002245',
            maxHeight: '33.5px',
            width: '39px',
            fontSize: '15px',
            color: '#ffffff',
          }}
        >
          <i className="fas fa-search" style={{ color: '#FFFFFF' }}></i>
        </button>
      </div>

      <div className="container">
        <div className="row">
          {!loading && <Loader />}
          {message && <h3 className="text-center my-3 fs-2">{message}</h3>}
          {currentItems &&
            currentItems?.map((item, index) => {
              return (
                <div className="col-md-4 col-sm-12" key={index}>
                  <div className="img-fluid">
                    <Link to={item?.url}>
                      <img
                        style={{
                          display: 'block',
                          marginLeft: 'auto',
                          marginRight: 'auto',
                          width: '200px',
                          height: '200px',
                        }}
                        src={imageURL + item?.image_url}
                        onError={({ currentTarget }) => {
                          currentTarget.onerror = null
                          currentTarget.src =
                            process.env.REACT_APP_IMAGE + `nofound.png`
                        }}
                        alt={item?.publisher}
                      />
                    </Link>
                  </div>
                  <div className="d-flex justify-content-center">
                    <Link to={item?.url}>
                      <button
                        className="btn btn-primary btn-lg mt-5 font-weight-bold hover__btn"
                        style={{
                          backgroundColor: '#002245',
                          textAlign: 'center',
                        }}
                      >
                        {item?.total_datasets}
                        &nbsp; datasets
                      </button>
                    </Link>
                  </div>
                  <div className="text-center">
                    <Link to={item?.url}>
                      <h2
                        className="text-center mt-4 mb-4"
                        style={{
                          fontFamily:
                            i18n.language === 'ar'
                              ? 'NotoKufiArabic'
                              : 'RobotoBold',
                        }}
                      >
                        {item?.publisher}
                      </h2>
                    </Link>
                  </div>
                  <div className="mt-1">
                    <p
                      style={{
                        height: '42px !important',
                        overflow: 'hidden',
                        display: '-webkit-box',
                        WebkitLineClamp: '5',
                        WebkitBoxOrient: 'vertical',
                        fontWeight: 'bold',
                        color: '#3B3B3B',
                        fontSize: '16px',
                        fontFamily:
                          i18n.language === 'ar'
                            ? 'NotoKufiArabic'
                            : 'CircularStd',
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              )
            })}
        </div>
      </div>

      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={12}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        className="paginate"
        forcePage={itemOffset / 10}
      />
    </Layout>
  )
}

export default Publishers
