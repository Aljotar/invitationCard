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
    </div>
  );
}

export default App;
