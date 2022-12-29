import React from 'react';
import { useLocation } from "@reach/router"
import { defaultFacets, normalizeItems, sortOptions } from '../../config/search';
import { Search, SearchSidebar, SearchContent } from "@civicactions/data-catalog-components";
import Layout from "../../components/Layout";
import config from "../../assets/config";
import { useTranslation, Trans } from 'react-i18next';
const SearchTemplate = ({ path }) => {
  const  { t, i18n } = useTranslation();
  const location = useLocation();
  // const handleClk=(dt)=>{
  //   console.log(dt)
  // }
  return (
    <Layout title="Search">
      <div className={`dc-page ${config.container}`}>
       { i18n.language === 'ar' ? (
        <h1 >مجموعة البيانات</h1>
        ) : (
          <h1 >Datasets</h1>
        )}
        {/* <div className='row'>
          <div className='col-md-8'>

            <form style={{ fontSize: "25px" }}>

              <input style={{ width: "93%" }} type="text" placeholder="Type your Search term " />

            </form>
            <div>
              <p>2,702 dataset found</p>
            </div>
            <ol style={{listStyle:"none",padding:"0px",border:"1px solid #CDCDCD"}}>
              <li className='bg-light' style={{padding:"20px",}}>
                <a><h2>demo</h2></a>
                <div>
                  <span>
                    <p>State Economic Council</p>


                  </span>

                </div>
                <p>demo</p>
                <button className='btn btn-primary' disabled>1x csv</button>
              </li>
            </ol> */}


        {/* </div> */}


        <Search
          searchEndpoint={`${process.env.REACT_APP_ROOT_URL}/search`}
          defaultFacets={defaultFacets}
          sortOptions={sortOptions}
          setSearchUrl={true}
          path={path}
          location={location}
          normalize={normalizeItems}
          language = {i18n.language}
        >
          <div className="row" style={i18n.language==='ar' ? { direction: 'rtl' } : {direction : 'ltr'}}>
            <SearchContent style={i18n.language==='ar' ? { direction: 'rtl' } : {direction : 'ltr'}} language = {i18n.language} />
            <SearchSidebar language = {i18n.language}/>
          </div>
        </Search>
      </div>


    </Layout>
  );
}

export default SearchTemplate;