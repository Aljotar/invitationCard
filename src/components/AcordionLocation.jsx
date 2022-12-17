import React from "react";
import Accordion from "react-bootstrap/Accordion";

export const AcordionLocation = () => {
  return (
    <Accordion defaultActiveKey="1">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Como llegar</Accordion.Header>
        <Accordion.Body>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14242.15973125002!2d-65.2086944!3d-26.822774!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa809af8b4c8d579!2sParroquia%20del%20Inmaculado%20Coraz%C3%B3n%20de%20Mar%C3%ADa!5e0!3m2!1ses!2sar!4v1671233556264!5m2!1ses!2sar"
              className="w-100"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};
