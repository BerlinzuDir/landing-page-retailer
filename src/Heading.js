import React from 'react'
import logo from './images/bzd-logo.png';

export default function Heading() {
  return (
    <div className="row">
        <div className="col-3 px-4">
          <img src={logo} className="logo-header mt-5 float-end" alt="logo" />
        </div>
        <div className="col-9">
          <div className="row">
            <div className="col px-0">
              <h1 className='header text mt-5 fw-bold'>
                Marktplatz für Berliner Läden
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col mt-3 px-1">
              <p className='text'>
                Auf unserem lokalem Online-Marktplatz kannst Du Deine Produkte berlinweit verkaufen. Bestellungen werden noch am selben Tag per Lastenrad abgeholt und ausgeliefert.
              </p>
            </div>
            <div className="col-3"></div>
          </div>
        </div>
      </div>
  )
}
