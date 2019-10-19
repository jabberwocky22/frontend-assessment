import React from 'react';
import '../App.css';
import data from "../Data/data.json";

const thisdata = data;
function TabView() {
  const data = thisdata;
  return (
    <div className="container mt-3" >
      <br></br>
      <ul className="nav nav-tabs">
        {data.map((value,index) => {
          return <li className="nav-item" key={index}>
            <a className={index === 0 ? "nav-link active" : "nav-link"} data-toggle="tab" href={`#tab${index}`}>{value.title}</a>
          </li>
        })}
      </ul>

      <div className="tab-content">
        {data.map((value, index) => {
          return (
            <div id={`tab${index}`} key={index} className={index === 0 ? "container tab-pane active" : "container tab-pane fade"}><br></br>
              <h3>{value.title}</h3>
              <p>{value.content}</p>
            </div>
          )
        })}
      </div>
    </div >
  );
}

export default TabView;
