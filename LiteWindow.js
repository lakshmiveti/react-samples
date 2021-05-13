import React, { useState, useCallback, useEffect } from 'react';

const LiteWindow = ({ params }) => {
  console.log(params)
  let [ show,setShow,success, setSuccess] = useState(...params);

  React.useEffect(() => {
    setShow(params.show);
    //setSuccess(params.success);
  }, [params.show])


  return (
  <div className={"modal fade "+(show?'show':'')} id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-style connection-success-popup w-75">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title popup-title" id="exampleModalLabel">{params.title?params.title:'Header'}</h5>
        <button type="button" className="btn-close popup-close-btn" onClick={() => setShow((show) => !show)}>
        </button>
      </div>
      <div className="modal-body">
        {params.success &&
        <h1 className="text-center big-text">Connectivity Successful <img src="/img/thumbup.svg" alt="" /></h1>
        }
        {params.failure &&
         <h1 className="text-center big-text">Connectivity Failed <img src="/img/error.svg" alt="" /></h1>
        }
        <div className="background-card-view">
          <div className="strip">
            <div className="row">
              <div className="col-md-12">
                <p className="strip-heading">Saas data objects</p>
              </div>
            </div>
          </div>
          <ul className="data-list">
          {
               params.list.map((item,index) =>
                 <li>{item}</li>
          )}
          </ul>
        </div>
      </div>
      <div className="modal-footer">
        <div className="w-100 text-center">
          <button type="button" className="btn btn-red mx-2" onClick={() => setShow((show) => !show)}>Close</button>
          <button type="button" className="btn btn-green mx-2" onClick={() => setShow((show) => !show)}>Save &amp; Close</button>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default LiteWindow
