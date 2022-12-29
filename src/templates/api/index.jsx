import React from 'react';
import config from "../../assets/config";
import Layout from "../../components/Layout";
import { ApiDocs } from "@civicactions/data-catalog-components";
import { Buffer } from "buffer";
const ApiDocsFull = ({ path }) =>{
  Buffer.from("anything", "base64");
  window.Buffer = window.Buffer || require("buffer").Buffer;
 return (
  <Layout title="API Documentation">
  <div className={`dc-page ${config.container}`}>
    <div className="page-content">
      {typeof window !== `undefined` && (
        <ApiDocs endpoint={process.env.REACT_APP_ROOT_URL} />
      )}
    </div>
  </div>
  </Layout>
     ); };
export default ApiDocsFull;