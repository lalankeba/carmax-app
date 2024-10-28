"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand, faScrewdriverWrench, faVialCircleCheck, faOilCan, faMotorcycle } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { useTranslations } from "next-intl";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./services-container.scss";

const ServicesContainer: React.FC = () => {
  const t = useTranslations('components.ServicesContainer');

  const serviceCards = [
    {
      "title": t('scans'),
      "icon": faExpand,
      "description": t('scansDesc')
    },
    {
      "title": t('repairs'),
      "icon": faScrewdriverWrench,
      "description": t('repairsDesc')
    },
    {
      "title": t('tuneups'),
      "icon": faVialCircleCheck,
      "description": t('tuneupsDesc')
    },
    {
      "title": t('oilchange'),
      "icon": faOilCan,
      "description": t('oilchangeDesc')
    },
    {
      "title": t('tyres'),
      "icon": faCircle,
      "description": t('tyresDesc')
    },
    {
      "title": t('motorcycle'),
      "icon": faMotorcycle,
      "description": t('motorcycleDesc')
    },

  ];

  return (
    <>
      <section id="services" className="services">
        <Container fluid="md" className="py-5">
          <Row className="mb-4">
            <Col>
              <h1>{t('title')}</h1>
              <h5>{t('subTitle')}</h5>
            </Col>
          </Row>
          <Row xxl={4} xl={3} lg={3} md={2} sm={2} xs={1} className="g-5">
            {serviceCards.map((card) => (
              <Col key={card.title}>
                <Card className="service-card">
                  <Card.Body>
                    <div className="d-flex flex-column align-items-center">
                      <FontAwesomeIcon icon={card.icon} size="5x" className="py-4" />
                      <Card.Title className="text-center">{card.title}</Card.Title>
                    </div>
                    <Card.Text className="text-justify">
                      {card.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default ServicesContainer;