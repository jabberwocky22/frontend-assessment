import React from 'react';
import '../App.css';
import data from "../Data/data.json";

function AccordionView() {
  const dataArr = data;


  return (
    <div className="accordion" id="accordionExample">
      {dataArr.map((value, index) => {
        let headerId = `header${index}`;
        let childId = `child${index}`;
        return (
          <div className="card" key={headerId}>
            <div className="card-header" id={headerId} >
              <h2 className="mb-0">
                <button className="btn btn-link" type="button" data-toggle="collapse" data-target={`#${childId}`} aria-expanded="true" aria-controls={`#${childId}`}>
                  {value.title}
        </button>
              </h2>
            </div>

            <div id={childId} className={index === 0 ? "collapse show" : "collapse"} aria-labelledby={`#${headerId}`} data-parent="#accordionExample">
              <div className="card-body">
              {value.title} <br></br>
              {value.content}
            </div>
            </div>
          </div>
        )
      })}
    </div >
  );
}


export default AccordionView;
