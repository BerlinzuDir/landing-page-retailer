import React from 'react'

export default function Vorteile() {
  return (
    <div className="row">
        <div className="col-3 px-1 float-end">
        </div>
        <div className="col-7">
          <div className="row">
            <div className="col-8 px-0">
              <h1 className='header text float-start fw-bold'>
                Deine Vorteile
              </h1>
            </div>
            <div className="col-8 px-1">
              <ul className='text'>
                <li> Mehr Sichtbarkeit </li>
                <li> Mehr Reichweite </li>
                <li> Mehr Umsatz</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-2"></div>
      </div>
  )
}
