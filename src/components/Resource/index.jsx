import React, { useEffect } from "react";
import { useTranslation, Trans } from 'react-i18next'
import {
  Resource,
  DataTable,
  FileDownload,
  DataTableHeader
} from "@civicactions/data-catalog-components";
import axios from "axios";
const ResourceTemplate = ({ resource }) => {
 const { t, i18n } = useTranslation()
  const wer = () => {
    var session_url = process.env.REACT_APP_BASE_URL + 'ip.php';
     axios.get(
     session_url,
    
     {
       auth: {
         username: 'odpdkan',
         password: '317$Odp'
       }
     }
   ).then(function (response) {
    var session_urls = process.env.REACT_APP_BASE_URL + 'download_count.php';
    axios.post(
     session_urls,
     {
       identifier: resource.identifier,
       ip_address: response.data.ip
     },
     {
       auth: {
         username: 'odpdkan',
         password: '317$Odp'
       }
     }
   ).then(function (response) {
     
    // console.log("data", response.data.data)
     // setCalled(true)
   }).catch(function (error) {
     console.log('Error on Authentication');
   });
   }).catch(function (error) {
     console.log('Error on Authentication');
   });
  
  };
  
  const type = resource.hasOwnProperty('data') && resource.data.hasOwnProperty('mediaType') ? resource.data.mediaType.split("/") : '';
  const backup = type ? type[1] : 'data';
  const format = resource.hasOwnProperty('data') && resource.data.hasOwnProperty('format') ? resource.data.format : backup;
  console.log("ki", format);
  const downloadURL = resource.hasOwnProperty('data') && resource.data.hasOwnProperty('downloadURL') ? resource.data.downloadURL : '';
  console.log("kiss",downloadURL);
  const accessURL = resource.hasOwnProperty('data') && resource.data.hasOwnProperty('accessURL') ? resource.data.accessURL : downloadURL;
   console.log("kisse",accessURL);
  const rootURL = `${process.env.REACT_APP_ROOT_URL}/`;
  console.log("hello",rootURL)
  return (
    <div  style={i18n.language === 'ar' ? {display : "flex"} : {}} id={`resource_${resource.identifier}`}>
      {format.toLowerCase() === 'csv'
        ? (
          
          <Resource
              language = {i18n.language}
            apiURL={rootURL}
            identifier={resource.identifier}
            resource={resource}
            showDBColumnNames={true}
          ><div onClick={wer}>
              <FileDownload
              language = {i18n.language}
              title={resource.data.title}
              label={resource.data.downloadURL}
              format={format}
              downloadURL={downloadURL ? downloadURL : accessURL}
              />
            </div>
            <DataTableHeader />
            <DataTable />
            </Resource>
          
        )
        :
         
        (
          <Resource
              language = {i18n.language}
            apiURL={rootURL}
            identifier={resource.identifier}
            resource={resource}
            showDBColumnNames={true}
          ><div onClick={wer}>
            <FileDownload
              
          language = {i18n.language}
            title={resource.data.title}
            label={resource.data.downloadURL}
            format={format}
            downloadURL={downloadURL ? downloadURL : accessURL}
              
              />
              </div>
          </Resource>
  )
          
      }
    </div>
  );
};

export default ResourceTemplate;