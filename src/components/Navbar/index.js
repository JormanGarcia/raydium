import Button from "react-bootstrap/Button";
import React from "react";
import "./style.scss";
import { Col, Container, Row, Stack } from "react-bootstrap";
import Logo from "../Logo";
import { Link, useLocation } from "react-router-dom";
import NavLink from "../NavLink";
import { BiMenu } from "react-icons/bi";
import Drawer from "../Drawer";
import WalletMinus from "../../images/wallet-minus.svg";

import { useDisclousure } from "../../utils/hooks/useDisclousure";

const Navbar = () => {
  const drawer = useDisclousure();
  const location = useLocation();

  const isLinkActive = (route) => route === location.pathname;

  console.log(location);
  return (
    <>
      <header className="header">
        <Stack className="cont ">
          <Row>
            <Col className="d-flex align-items-center">
              <div className="logo-container py-4 py-lg-0 ">
                <Link to="/">
                  <Logo />
                </Link>
              </div>
            </Col>
            <Col className="d-none d-lg-flex">
              <nav class="d-flex align-items-center justify-content-center">
                <NavLink active={isLinkActive("/")} to="/">
                  Home
                </NavLink>
                <NavLink active={isLinkActive("/trading")} to="/trading">
                  Trading
                </NavLink>
                <NavLink active={isLinkActive("/swap")} to="/swap">
                  Swap
                </NavLink>
                <NavLink active={isLinkActive("/staking")} to="/staking">
                  Staking
                </NavLink>
              </nav>
            </Col>
            <Col className="justify-content-end d-flex align-items-center">
              <Stack direction="horizontal" gap={2}>
                <Button variant="gradient" className="d-none d-sm-flex">
                  <Stack direction="horizontal" gap={2}>
                    <img src={WalletMinus} />
                    <span>Connect Wallet</span>
                  </Stack>
                </Button>
                <BiMenu
                  className="Menu d-block d-lg-none ml-4"
                  onClick={drawer.onOpen}
                />
              </Stack>
            </Col>
          </Row>
        </Stack>
      </header>
      <Drawer disclousure={drawer} />
    </>
  );
};

export default Navbar;
