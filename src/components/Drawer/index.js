import React from "react";
import { Offcanvas } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "./style.scss";
import { AiOutlineClose } from "react-icons/ai";

const Routes = [
  { path: "/home", name: "Home" },
  { path: "/trading", name: "Trading" },
  { path: "/swap", name: "Swap" },
  { path: "/staking", name: "Staking" },
];

const Drawer = ({ disclousure, ...props }) => {
  const location = useLocation();
  console.log(location);
  return (
    <Offcanvas
      show={disclousure.isOpen}
      onHide={disclousure.onClose}
      {...props}
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title></Offcanvas.Title>
        <div className="modal-btn-close" onClick={disclousure.onClose}>
          <AiOutlineClose />
        </div>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <div className="d-flex justify-content-center align-items-center h-100 flex-column">
          {Routes.map((route) => (
            <Link
              to={route.path}
              id={route.path}
              className={`
                drawer--link  ${
                  location.pathname === route.path ? "active" : ""
                }
              `}
            >
              {route.name}
            </Link>
          ))}
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Drawer;
