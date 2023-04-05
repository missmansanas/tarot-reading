import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function FAQ() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="light" onClick={handleShow}  className="mt-3 text-center bg-transparent">
        FAQ
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="text-black">
        <h6>Question</h6>
          Answer
        <h6>Question</h6>
          <ul>
            <li>Answer</li>
            <li>Answer</li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default FAQ;