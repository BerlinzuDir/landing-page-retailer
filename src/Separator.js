import React from 'react'
import line_2 from './images/line_2.png';

export default function Separator() {
  return (
    <div className="row">
        <div className="col-3 px-1 float-end">
          <img src={line_2} className="line mt-4 float-end" alt="logo" />
        </div>
        <div className="col-7">
        </div>
        <div className="col-lg-2"></div>
      </div>
  )
}
