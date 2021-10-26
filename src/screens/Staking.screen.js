import React from "react";
import { Col, Container, Row, Stack, Button } from "react-bootstrap";
import ModalHeader from "react-bootstrap/esm/ModalHeader";
import Card from "../components/Card";
import { ContainedIcon } from "../components/ContainedIcon";
import MinLogo from "../components/MinLogo";
import { PageDescription } from "../components/PageDescription";
import StakeRayModal from "../components/StakeRayModal";
import { Stats } from "../components/Stats";
import { useDisclousure } from "../utils/hooks/useDisclousure";
import MedallIcon from "../images/medall.png";
import ToolsIcon from "../images/tools.png";
import ArrangeSquare from "../images/ArrangeSquare.svg";
import ChartSquare from "../images/ChartSquare.svg";
import MoneyTime from "../images/MoneyTime.svg";
import EmptyWallet from "../images/EmptyWalletChange.svg";
import { IoChevronDownCircleOutline } from "react-icons/io5";
import WalletMinus from "../images/wallet-minus.svg";

export const StakingScreen = () => {
  const modal = useDisclousure();

  return (
    <>
      <Stack gap={4}>
        <PageDescription>
          <PageDescription.Title>Staking</PageDescription.Title>
          <PageDescription.Description>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text{" "}
          </PageDescription.Description>
        </PageDescription>

        <Card className="p-4 d-flex justify-content-between align-items-center">
          <Container fluid className="p-0">
            <Row>
              <Col
                xs={12}
                xl={3}
                className="mb-5 mb-xl-0 d-flex justify-content-center justify-content-lg-start"
              >
                <MinLogo />
              </Col>
              <Col xl={9} className="justify-content-end d-flex">
                <Container fluid className="p-0">
                  <Row>
                    <Col xs={12} sm={6} lg={3} className="mb-2 mb-lg-0">
                      <Stats
                        icon={<img src={EmptyWallet} />}
                        title="Pending Reward"
                        number="00"
                      ></Stats>
                    </Col>
                    <Col xs={12} sm={6} lg={3} className="mb-2 mb-lg-0">
                      <Stats
                        icon={<img src={ArrangeSquare} />}
                        title="Stacked"
                        number="00"
                      ></Stats>
                    </Col>{" "}
                    <Col xs={12} sm={6} lg={3} className="mb-2 mb-lg-0">
                      <Stats
                        icon={<img src={MoneyTime} />}
                        title="APR"
                        number="21.35%"
                      ></Stats>
                    </Col>{" "}
                    <Col xs={12} sm={6} lg={3} className="mb-2 mb-lg-0">
                      <Stats
                        icon={<img src={ChartSquare} />}
                        title="Liquitity"
                        number="12,834,313,917665"
                      ></Stats>
                    </Col>
                  </Row>
                </Container>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <Button variant="ghost" className="w-100 mt-4 d-xl-none">
                  <IoChevronDownCircleOutline />
                </Button>
              </Col>
            </Row>
          </Container>
          <Button variant="ghost" className="mx-2 d-none d-xl-block">
            <IoChevronDownCircleOutline />
          </Button>
        </Card>

        <Container fluid className="p-0">
          <Row>
            <Col sm={12} lg={6}>
              <Card className="p-3 d-flex justify-content-between mb-4 mb-lg-0">
                <div className="bordify">
                  <Stack gap={4}>
                    <Stack
                      direction="horizontal"
                      gap={3}
                      className="align-items-center"
                    >
                      <ContainedIcon>
                        <img src={MedallIcon} />
                      </ContainedIcon>
                      <p className="card-icon-title m-0">PENDING RAY REWARD</p>
                    </Stack>
                    <Stack direction="horizontal" gap={2}>
                      <input value="00" className="input-filled  w-100 " />
                      <Button variant="gradient" className="ml-5">
                        Harvest
                      </Button>
                    </Stack>
                  </Stack>
                </div>
              </Card>
            </Col>
            <Col sm={12} lg={6}>
              <Card className="p-3 d-flex justify-content-between">
                <div className="bordify">
                  <Stack gap={4}>
                    <Stack
                      direction="horizontal"
                      gap={3}
                      className="align-items-center"
                    >
                      <ContainedIcon>
                        <img src={ToolsIcon} />
                      </ContainedIcon>
                      <p className="card-icon-title m-0">Start Staking</p>
                    </Stack>
                    <div className="d-flex justify-content-end">
                      <Button
                        onClick={modal.onOpen}
                        variant="gradient"
                        className="ml-5"
                      >
                        <Stack direction="horizontal" gap={3}>
                          <img src={WalletMinus} />
                          <span>Stake SOL</span>
                        </Stack>
                      </Button>
                    </div>
                  </Stack>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </Stack>
      <StakeRayModal disclousure={modal} />
    </>
  );
};
