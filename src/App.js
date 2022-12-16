import "./App.css";
import { Image } from "react-bootstrap";
import Tadeo from "./utilities/images/Tadeo1.jpeg";
import { CountdownTimer } from "./components/CountdownTimer";

function App() {
  return (
    <div className="App">
      <div className="Hola1"></div>
      <div className="Hola2">
        <Image src={Tadeo} />
      </div>
      <CountdownTimer />
    </div>
  );
}

export default App;
