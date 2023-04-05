import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function About() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="light" onClick={handleShow}  className="mt-3 text-center bg-transparent">
        About
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="text-black">
        <h6>Credits</h6>
          <p>Thanks to <a href="https://github.com/geraldfingburke/plateau-tarot-api">geraldfingburke</a> for the original tarot data JSON, and <a href="https://luciellaes.itch.io/rider-waite-smith-tarot-cards-cc0">luciellaes</a> for the scanned tarot images.</p>
        <h6>To-do</h6>
          <ul>
            <li>Personalize card interpretations</li>
            <li>Make card of the day work</li>
            <li><s>Add offcanvas/navbar for information</s></li>
            <li>Finalize design</li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default About;