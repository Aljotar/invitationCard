import "./App.css";
import { Image } from "react-bootstrap";
import Tadeo from "./utilities/images/Tadeo1.jpeg";
import flower from "./utilities/images/flower1.jpg"
import { CountdownTimer } from "./components/CountdownTimer";
import CarouselTadeo from "./components/CarouselTadeo";

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
          Mis Padrinos <span className="papis">Rosa Roldan y Federico Gomez</span>
        </h3>
      </div>
      <div className="Hola2">
        <Image className="mt-1" src={Tadeo} />
      </div>
      <CountdownTimer />
      <br/>
      <br/>
      <h3 className="bautismo text-center">Luego de la ceremonia te invito a festejar a las 21:30hs</h3>
      <h3 className="papis text-center">En Corrientes 3369</h3>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.81786935005!2d-65.24485489999999!3d-26.813927300000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225cfbdb631305%3A0x8893c9c8a211c179!2sPcia%20de%20Corrientes%203369%2C%20T4000EDO%20San%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n!5e0!3m2!1ses!2sar!4v1674936321469!5m2!1ses!2sar" width="100%" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  );
}

export default App;
