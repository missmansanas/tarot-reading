import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function FAQ() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="light" onClick={handleShow}  className="border-0 bg-transparent text-black mx-1">
        <span className="lead">How to use</span>
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>How to...</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="text-black bg-transparent">
          <h5>...interact with the app</h5>
            <p>Click on the violet deck to generate three random cards. Click on any card to reveal/hide its meaning.</p>
            <p>Each spread will always deal three cards unique from each other, but cards can reappear between spreads (the next time you click the deck).</p>
          <h5>...read the cards</h5>
            <p>The card meanings are pulled directly from a list and printed as is. It doesn't change to account for the context of your query or the other cards that were drawn.</p>
            <p>If you're seeking something with more depth, empathy and personalization, you will need to call on your own intuition or seek a human reader.</p>
          <h5>...read the spread</h5>
            <p>Some simple ways to interpret three cards together:</p>
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