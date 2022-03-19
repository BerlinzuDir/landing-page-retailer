import React from 'react'
import bubble_gelb from './images/bubble_gelb.png';
import punkte_gelb from './images/punkte_gelb.png';

export default function Antworten() {
  return (
    <div className="row pb-5 pt-5">
        <div className="col-3 float-end">
          <div className="row">
            <div className="col">
              <img src={bubble_gelb} className="float-end" alt="logo" />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <img src={punkte_gelb} className="float-end px-5 pt-5" alt="logo" />
            </div>
          </div>
        </div>
        <div className="col-7">
          <div className="row">
            <h1 className='header text float-start fw-bold'>
              Erste Antworten
            </h1>
          </div>
          <div className="row pt-5">
            <button class="btn btn-primary-outline" type="button"><h4 className='text fw-bold float-start'> Wie kann ich mich beteiligen?</h4></button>
          </div>
          <div className="row pt-4">
            <button class="btn btn-primary-outline" type="button"><h4 className='text fw-bold float-start'> Welche Leistungen bietet mir BerlinzuDir?</h4></button>
          </div>
          <div className="row pt-4">
            <button class="btn btn-primary-outline" type="button"><h4 className='text fw-bold float-start'> Was muss ich tun?</h4></button>
          </div>
        </div>
        <div className="col-lg-2"></div>
      </div>
  )
}
