import React from "react";
import { Button, Modal } from "react-bootstrap";

const DialogModal = (props) => {
  return (
    <div>
      <Modal
        show={props.show}
        onHide={() => props.onHide({ msg: "Cross Icon Clicked!" })}
      >
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>{props.children}</Modal.Body>

        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => props.onClick({ msg: "Modal Closed!" })}
          >
            Close
          </Button>
          <Button variant="primary" onClick={() => props.onSubmit()}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default DialogModal;
