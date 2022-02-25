import logo from './bzd-logo.png';
import line_2 from './line_2.png';
import bubble from './Bubble.png';
import bubble_gelb from './bubble_gelb.png';
import punkte_gelb from './punkte_gelb.png';
import './App.css';
import MultiStepForm from './MultiStepForm';


function App() {
  return (
    <div className="App">
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
      <div className="row">
        <div className="col-3 px-1 float-end">
          <img src={line_2} className="line mt-4 float-end" alt="logo" />
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
      <div className="row p-4">
        <div className="col-3"></div>
        <div className="col-7 px-0">
          <img src={bubble} className="bubble float-start" alt="logo" />
          <img src={punkte_gelb} className="punkte float-end" alt="logo" />
          <MultiStepForm />
        </div>
        <div className="col-lg-2"></div>
      </div>
      <div className="row pb-5">
        <div className="col-3 px-1 float-end">
          <img src={line_2} className="line mt-4 float-end" alt="logo" />
        </div>
        <div className="col-7">
        </div>
        <div className="col-lg-2"></div>
      </div>
      <div className="row pb-5">
        <div className="col-3 px-1 float-end">
          <div className="row">
            <div className="col px-3">
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
          <h1 className='header text float-start fw-bold'>
            Fragen und Antworten
          </h1>
        </div>
        <div className="col-lg-2"></div>
      </div>
      <div className="container-fluid Form-1">
        <div className='container-fluid footer float-end'>
          <div className='text-end'>
            <p className='text-form pt-3'>
              <a href='https://berlinzudir.de/static/impressum' target="_blank" rel="noreferrer noopener" >Impressum</a> |
              <a href='https://berlinzudir.de/static' target="_blank" rel="noreferrer noopener" >AGB</a> |
              <a href='https://berlinzudir.de/static/datenschutz' target="_blank" rel="noreferrer noopener" >Datenschutz</a>
            </p>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
