import React, { useState } from "react";
import bubble_gelb from './images/bubble_gelb.png';
import punkte_gelb from './images/punkte_gelb.png';
import line from './images/line.png'
import plus from './images/plus.png'

export default function Antworten() {
    const [clickedButton, setClickedButton] = useState('');

    const buttonHandler = (event) => {
        event.preventDefault();

        if (event.currentTarget.name === clickedButton) {
            setClickedButton("");
        }
        else {
            const button = event.currentTarget
            setClickedButton(button.name);
        }
    };

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
                    <button class="btn btn-primary-outline" name="button1" type="button" onClick={buttonHandler}>
                        <h6 className='text fw-bold float-start'> Wie kann ich mich beteiligen?</h6>
                        <img src={plus} className='float-end' alt="logo" />
                    </button>
                    <p className="text"> {clickedButton === "button1" ? `This is the text"` : ""} </p>
                    <img src={line} alt="logo" />
                </div>
                <div className="row pt-4">
                    <button class="btn btn-primary-outline" name="button2" type="button" onClick={buttonHandler}>
                        <h6 className='text fw-bold float-start'> Welche Leistungen bietet mir BerlinzuDir?</h6>
                        <img src={plus} className='float-end' alt="logo" />
                    </button>
                    <p className="text"> {clickedButton === "button2" ? `This is the text"` : ""} </p>
                    <img src={line} alt="logo" />
                </div>
                <div className="row pt-4">
                    <button class="btn btn-primary-outline" name="button3" type="button" onClick={buttonHandler}>
                        <h6 className='text fw-bold float-start'> Was muss ich tun?</h6>
                        <img src={plus} className='float-end' alt="logo" />    
                    </button>
                    <p className="text"> {clickedButton === "button3" ? `This is the text"` : ""} </p>
                    <img src={line} alt="logo" />

                </div>
            </div>
            <div className="col-lg-2"></div>
        </div>
    )
}
