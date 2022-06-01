import React from 'react'
import bubble from './images/Bubble.png';
import punkte_gelb from './images/punkte_gelb.png';
import MultiStepForm from './MultiStepForm';

export default function Form() {
  return (
    <div className="row p-4">
        <div className="col-3"></div>
        <div className="col-7 px-0">
          <img src={bubble} className="bubble float-start" alt="logo" />
          <img src={punkte_gelb} className="punkte float-end" alt="logo" />
          <MultiStepForm />
        </div>
        <div className="col-lg-2"></div>
      </div>
  )
}

