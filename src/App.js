import './App.css';
import Heading from './Heading';
import Vorteile from './Vorteile';
import Form from './Form';
import Separator from './Separator';
import Antworten from './Antworten';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Heading />
      <Separator />
      <Vorteile />
      <Form />
      <Separator />
      <Antworten />
      <Footer />
    </div >
  );
}

export default App;
