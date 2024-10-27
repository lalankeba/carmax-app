"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand, faScrewdriverWrench, faVialCircleCheck, faOilCan, faMotorcycle } from '@fortawesome/free-solid-svg-icons';
import { useTranslations } from "next-intl";
import { Card, Col, Container, Row } from "react-bootstrap";

const ServicesContainer: React.FC = () => {
  const t = useTranslations('components.ServicesContainer');

  return (
    <>
      <section id="services" className="services">
        <Container fluid="md" className="py-4">
          <Row className="g-4">
            <Col>
              <h1>{t('title')}</h1>
              <h4>{t('subTitle')}</h4>
            </Col>
          </Row>
          <Row lg={4} md={3} sm={2} xs={1} className="g-4">
            <Col>
              <Card>
                <Card.Body>
                  <div className="d-flex flex-column align-items-center">
                    <FontAwesomeIcon icon={faExpand} size="8x" className="mb-3" />
                    <Card.Title className="text-center">Scans</Card.Title>
                  </div>
                  <Card.Text>
                    Vehicle scans
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <div className="d-flex flex-column align-items-center">
                    <FontAwesomeIcon icon={faScrewdriverWrench} size="8x" className="mb-3" />
                    <Card.Title className="text-center">Repairs</Card.Title>
                  </div>
                  <Card.Text>
                    Brake repair
                    Suspension repair
                    Cooling system repair
                    Engine repair
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <div className="d-flex flex-column align-items-center">
                    <FontAwesomeIcon icon={faVialCircleCheck} size="8x" className="mb-3" />
                    <Card.Title className="text-center">Tune Ups</Card.Title>
                  </div>
                  <Card.Text>
                    Engine tuneups (fuel system clean)
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <div className="d-flex flex-column align-items-center">
                    <FontAwesomeIcon icon={faOilCan} size="8x" className="mb-3" />
                    <Card.Title className="text-center">Oil Change</Card.Title>
                  </div>
                  <Card.Text>
                    Oil change engine/manual gear box/ auto gear box/differential
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <div className="d-flex flex-column align-items-center">
                    <FontAwesomeIcon icon={faMotorcycle} size="8x" />
                    <Card.Title className="text-center">Motorcycle Repairs</Card.Title>
                  </div>
                  <Card.Text>
                    Oil change engine/manual gear box/ auto gear box/differential
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default ServicesContainer;