import "./App.css";
import { Image } from "react-bootstrap";
import Tadeo from "./utilities/images/Tadeo1.jpeg";
import flower from "./utilities/images/flower1.jpg"
import { CountdownTimer } from "./components/CountdownTimer";

function App() {
  return (
    <div className="App">
      <Image src={flower} className="flower"/>
      <div className="Hola1">
        <h1 className="bautismo text-center pt-5">Mi Bautismo</h1>
        <h2 className="Tadeo text-center">TADEO</h2>
        <p className="texto text-center p-3">
          "En este día especial la luz de Dios se encenderá en mi corazón para iluminar todo el camino de mi vida."
        </p>
      </div>
      <div className="text-center mt-5">
        <h3 className="misPapis">
          Mis Papis: <span className="papis">Belen Gomez y Alvaro Jotar</span>
        </h3>
        <h3 className="misPapis">
          Mis Padrinos <span className="papis">Fede y ...</span>
        </h3>
      </div>
      <div className="Hola2">
        <Image className="p-1" src={Tadeo} />
      </div>
      <CountdownTimer />
      <div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14242.15973125002!2d-65.2086944!3d-26.822774!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa809af8b4c8d579!2sParroquia%20del%20Inmaculado%20Coraz%C3%B3n%20de%20Mar%C3%ADa!5e0!3m2!1ses!2sar!4v1671233556264!5m2!1ses!2sar" className="w-100" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
}

export default App;
