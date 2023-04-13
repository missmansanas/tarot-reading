import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function About() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="light" onClick={handleShow}  className="border-0 bg-transparent text-black mx-1">
        <span className="lead">About</span>
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="displayfont">About</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="text-black">
          <p>This web app was developed by me (@missmansanas) to combine my interests in coding and tarot.</p>
          <p>This site is free to interact with an unlimited number of times, for now. ☕ Consider <a href="https://ko-fi.com/missmansanas">buying me a coffee</a> if you enjoyed the service.</p>
          <p>Please do not scrape, remix, reproduce or resell the contents of this site in any way :)</p>

        <h5 className="displayfont display-6">Credits</h5>
          <p>Thanks to <a href="https://github.com/geraldfingburke/plateau-tarot-api">geraldfingburke</a> for the base tarot data JSON, and <a href="https://luciellaes.itch.io/rider-waite-smith-tarot-cards-cc0">luciellaes</a> for the scanned tarot images.</p>
        <h5 className="displayfont display-6">Planned Features</h5>
          <ul>
            <li>Updated card interpretations</li>
            <li>Card of the day</li>
          </ul>
          <p>I am currently not offering personal tarot readings, but this may change in the future.</p>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default About;