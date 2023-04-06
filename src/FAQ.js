import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function FAQ() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="light" onClick={handleShow}  className="border-0 bg-transparent text-black">
        How it works
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>How it works</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="text-black bg-transparent">
          <h5>Interacting with the app</h5>
            <p>Click on the violet deck to generate three random cards. Click on any card to reveal/hide its meaning. Generate a new spread as many times as you wish.</p>
            <p>Each spread will always deal three unique cards. You won't, for example, get the Ace of Swords side-by-side - though it may re-appear in the very next reading you request.</p>
          <h5>Interpreting the cards</h5>
            <p>As an automated reading, the revealed meaning of each card will be generic to that card. It does not take into account the other two cards that have appeared beside it. It also can't read any context.</p>
            <p>If you're seeking something with more depth and empathy, you will need to call on your own intuitive input or seek a human reader.</p>
          <h5>Reading ideas</h5>
            <ul>
              <li>past, present, future</li>
              <li>situation, action, outcome</li>
              <li>check-in for mind, body, spirit</li>
              <li>you, another person, your relationship</li>
            </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default FAQ;