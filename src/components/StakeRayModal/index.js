import Button from "react-bootstrap/Button";
import React from "react";
import {
  Col,
  Container,
  Modal,
  ModalBody,
  ModalTitle,
  Row,
} from "react-bootstrap";
import ModalHeader from "react-bootstrap/esm/ModalHeader";
import "./style.scss";
import { AiOutlineClose } from "react-icons/ai";

const StakeRayModal = ({ disclousure }) => {
  return (
    <Modal show={disclousure.isOpen} onHide={disclousure.onClose} centered>
      <ModalBody>
        <ModalHeader>
          <ModalTitle>Stake Ray</ModalTitle>
          <div className="modal-btn-close" onClick={disclousure.onClose}>
            <AiOutlineClose />
          </div>
        </ModalHeader>
        <div className="stake-ray--content">
          <div className="balance">Balance: 0.000000</div>

          <div className="bottom">
            <input value="00" className="stake-ray--input" />
            <div className="tabs">
              <div className="tab">Ray</div>
              <div className="tab active">Max</div>
            </div>
          </div>
        </div>
        <Modal.Footer className="p-0 pt-2">
          <Container className="p-0">
            <Row>
              <Col>
                <Button
                  variant="outline-gradient"
                  className="w-100 mr-1"
                  onClick={disclousure.onClose}
                >
                  Close
                </Button>
              </Col>
              <Col>
                <Button
                  variant="gradient"
                  className="w-100 ml-1"
                  onClick={disclousure.onClose}
                >
                  Save Changes
                </Button>
              </Col>
            </Row>
          </Container>
        </Modal.Footer>
      </ModalBody>
    </Modal>
  );
};

export default StakeRayModal;
