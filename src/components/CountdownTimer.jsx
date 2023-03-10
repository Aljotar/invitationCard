import React, { useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import { AcordionLocation } from "./AcordionLocation";
import { ModalLocation } from "./ModalLocation";

export const CountdownTimer = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinuts, settTimerMinuts] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countDownDate = new Date("Feb 11, 2023 17:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        settTimerMinuts(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();

    return () => {
      clearInterval(interval.current);
    };
  });

  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div>
      <div >
        <h2 className="gradientText text-center mt-3">
          Acompáñame a recibir el Sacramento del Bautismo el día
        </h2>
        <h2 className="gradientText text-center">11 de Febrero 2023 en</h2>
        <h2 className="gradientText text-center">
          {" "}
          Parroquia del Inmaculado Corazón de María
        </h2>
        <h2 className="gradientText text-center">17:00Hs</h2>
      </div>
      <div className="text-center">
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Como llegar
      </Button>
        <ModalLocation show={modalShow}
        onHide={() => setModalShow(false)}/>
      </div>
      <div className="time d-flex justify-content-center pt-3">
        <div className="text-center">
          <p className="mx-3">Dias: </p>
          <p>{timerDays}</p>
        </div>
        <div className="text-center">
          <p className="mx-3">Horas: </p>
          <p>{timerHours}</p>
        </div>
        <div className="text-center">
          <p className="mx-3">Minutos: </p>
          <p>{timerMinuts}</p>
        </div>
        <div className="text-center">
          <p className="mx-3">Segundos: </p>
          <p>{timerSeconds}</p>
        </div>
      </div>
    </div>
  );
};
