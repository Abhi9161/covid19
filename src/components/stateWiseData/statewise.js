import axios from "axios";
import React, { useState, useEffect } from "react";
import "./statewise.css";

const Statewise = () => {
  const [data, setData] = useState([]);

  const getCovidData = async () => {
    const res = await axios.get(
      "https://cors-anywhere.herokuapp.com/https://api.covid19india.org/data.json"
    );
    //const actualData = res.json();
    console.log(res.data);
    //console.log(actualData);
    setData(res.data.statewise);
  };

  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <>
      <div className='container-fluid mt-5'>
        <div className='main-heading'>
          <h1 className='mb-5 text-center'>
            <span className='font-weight-bold'>INDIA </span>COVID-19 DASHBOARD
          </h1>
        </div>
        <div className='table-responsive'>
          <table className='table table-hover'>
            <thead className='thead-dark'>
              <tr>
                <th>State</th>
                <th>Confirmed</th>
                <th>recovered</th>
                <th>deaths</th>
                <th>active</th>
                <th>updated</th>
              </tr>
            </thead>
            <tbody>
              {data.map((curElem, ind) => {
                return (
                  <tr key={ind}>
                    <td>{curElem.state}</td>
                    <td>{curElem.confirmed}</td>
                    <td>{curElem.recovered}</td>
                    <td>{curElem.deaths}</td>
                    <td>{curElem.active}</td>
                    <td>{curElem.lastupdatedtime}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Statewise;
