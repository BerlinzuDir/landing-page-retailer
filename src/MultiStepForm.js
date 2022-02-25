import { React, useState } from 'react'
import './App.css';


export default function MultiStepForm() {
    const [state, setState] = useState(
        {
            page: 0
        }
    )
    return (
        <div className="container-fluid Form-1 p-4">
            <div className="container-fluid Form-2 p-2">
                <div className="container-fluid Form-1 p-2">
                    <h3 className='text-header-form pt-4 ps-4'>Deine Anmeldung</h3>
                    <p className='text-form pt-1 ps-4'>Werde teil von BerlinzuDir.</p>
                    <div className="ps-4 pe-4">
                        <select class="form-select select">
                            <option selected>Anrede</option>
                            <option value="0">Frau</option>
                            <option value="1">Herr</option>
                        </select>
                        <div class="form-group pt-3">
                            <div class="row">
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="Vorname" required />
                                </div>
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="Nachname" required />
                                </div>
                            </div>
                            <div class="row pt-3">
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="Name des Ladens" required />
                                </div>
                            </div>
                            <div class="row pt-3">
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="Straße, Hausnummer" required />
                                </div>
                            </div>
                            <div class="row pt-3">
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="PLZ, Ort" required />
                                </div>
                            </div>
                            <div class="row pt-3">
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="E-Mail-Adresse" required />
                                </div>
                            </div>
                            <div class="row pt-3">
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="Telefonnummer" required />
                                </div>
                            </div>
                            <div class="row pt-3">
                                <div class="col">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="check1" name="option1" value="something" />
                                        <label class="form-check-label text-form">
                                            Ich willige ein, dass meine personenbezogenen Daten gemäß der <a href='https://berlinzudir.de/static/datenschutz'>Datenschutzerklärung</a> verarbeitet werden.
                                            Ich habe jederzeit das Recht, meine Einwilligung mit Wirkung für die Zukunft schriftlich zu widerrufen.
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="row pt-3">
                                <div class="col">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="check1" name="option1" value="something" />
                                        <label class="form-check-label text-form">
                                            Mit der Anmeldung stimme ich den <a href='https://berlinzudir.de/static'>AGB</a> zur Nutzung von BerlinzuDir zu.
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="row pt-3">
                                <div class="col">
                                    <button type="submit" class="btn btn-secondary btn-rounded float-end"><strong className='font-weight-bold text-header-form'>Jetzt anmelden</strong></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
