import React from 'react';
import { useTranslations } from 'next-intl';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import "./contact-container.scss";

const ContactContainer: React.FC = () => {
  const t = useTranslations('components.ContactContainer');

  return (
    <>
      <section id="contact" className="contact">
        <Container fluid="md" className="py-5">
          <Row className="mb-3">
            <Col>
              <h1>{t('title')}</h1>
              <h5>{t('subTitle')}</h5>
            </Col>
          </Row>
          <Row className="mb-3 g-4" xs={1} sm={1} md={2} lg={2} xl={3}>
            <Col>
              <Row className="mb-2">
                <Col xs={2}>
                  <FontAwesomeIcon icon={faPhone} size="3x" />
                </Col>
                <Col xs={10} className="d-flex align-items-center">
                  <span className="lead">{t('phone')}</span>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row className="mb-2">
                <Col xs={2}>
                  <FontAwesomeIcon icon={faEnvelope} size="3x" />
                </Col>
                <Col xs={10} className="d-flex align-items-center">
                  <span className="lead">{t('email')}</span>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row className="mb-2">
                <Col xs={2}>
                  <FontAwesomeIcon icon={faLocationDot} size="3x" />
                </Col>
                <Col xs={10} className="d-flex align-items-center">
                  <span className="lead">{t('address')}</span>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}
export default ContactContainer;