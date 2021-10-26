import React from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import Logo from "../Logo";
import { SocialButton } from "../SocialButton";
import "./style.scss";
import { FaTelegramPlane, FaTwitter, FaDiscord } from "react-icons/fa";
import { MediumLogo } from "../MediumLogo";

export const BottomBar = () => {
  return (
    <div className="cont bottom-bar--container">
      <div className="bottom-bar--body px-4">
        <Container fluid>
          <Row>
            <Col className="logo" xs={6} lg={4}>
              <Logo />
            </Col>
            <Col
              className="d-flex justify-content-end justify-content-lg-center align-items-center"
              xs={6}
              lg={4}
            >
              <Stack className="center" direction="horizontal" gap={4}>
                <a>Home</a>
                <div class="divider"></div>
                <a>Info</a>
                <div class="divider"></div>
                <a>Terms</a>
              </Stack>
            </Col>
            <Col
              className="d-flex justify-content-end mt-4 mt-lg-0"
              xs={12}
              lg={4}
            >
              <Stack gap={2} direction="horizontal">
                <SocialButton>
                  <FaTelegramPlane />
                </SocialButton>
                <SocialButton>
                  <MediumLogo />
                </SocialButton>
                <SocialButton>
                  <FaTwitter />
                </SocialButton>
                <SocialButton>
                  <FaDiscord />
                </SocialButton>
              </Stack>
            </Col>
          </Row>
        </Container>
      </div>
      ;
    </div>
  );
};
