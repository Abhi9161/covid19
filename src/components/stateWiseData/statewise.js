import axios from "axios";
import React, { useState, useEffect } from "react";
import "./statewise.css";

const Statewise = () => {
  const [data, setData] = useState([]);

  const getCovidData = async () => {
    const res = await axios
      .get("https://data.covid19india.org/v4/min/data.min.json")
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    //const actualData = res.json();
    //console.log(res.data);
    //console.log(actualData);
    //setData(res.data.statewise);
  };

  useEffect(() => {
    console.log(data);
    getCovidData();
  }, []);

  function showData() {
    let rows = [];

    for (let value in data) {
      let row = (
        <tr>
          <td>{value}</td>
          <td>{data[value].total.confirmed}</td>
          <td>{data[value].total.deceased}</td>
          <td>{data[value].total.recovered}</td>
          <td>{data[value].total.tested}</td>
          <td>{data[value].total.vaccinated2}</td>
        </tr>
      );
      rows.push(row);
    }
    return rows;
  }

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
                <th>active</th>
                <th>recovered</th>
                <th>Tested</th>
                <th>vaccinated2</th>
              </tr>
            </thead>

            {
              <tbody>{showData()}</tbody>
              /* <tbody>
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
            </tbody> */
            }
          </table>
        </div>
      </div>
    </>
  );
};

export default Statewise;
