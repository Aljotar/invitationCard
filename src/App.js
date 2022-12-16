import "./App.css";
import { Image } from "react-bootstrap";
import Tadeo from "./utilities/images/Tadeo1.jpeg";
import flower from "./utilities/images/flower1.jpg"
import { CountdownTimer } from "./components/CountdownTimer";

function App() {
  return (
    <div className="App">
      <Image src={flower} className="flower w-100"/>
      <div className="Hola1">
        <h1 className="bautismo text-center pt-5">Mi Bautismo</h1>
        <h2 className="Tadeo text-center">TADEO</h2>
        <p className="texto text-center">
          "Hoy comienzas a vivir bajo los ojos de Dios, sus manos dan bienvenida
          a este nuevo mundo"
        </p>
      </div>
      <div className="text-center mt-5">
        <h3 className="misPapis">
          Mis Papis: <span className="papis">Belen y Alvaro</span>
        </h3>
        <h3 className="misPapis">
          Mis Padrinos <span className="papis">Fede y ...</span>
        </h3>
      </div>
      <div className="Hola2">
        <Image src={Tadeo} />
      </div>
      <CountdownTimer />
    </div>
  );
}

export default App;
