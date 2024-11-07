import React from "react";
import { useTranslations } from "next-intl";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons/faCircleNotch";


const Loading = () => {
  const t = useTranslations('pages.Loading');

  return (
    <>
      <div className="loading">
        <Container fluid="md">
            <Row>
              <Col className="d-flex flex-column justify-content-center align-items-center" style={{ minHeight: 'calc(100svh - var(--navigation-bar-height) - var(--footer-bar-height))' }}>
                <h1 className="display-1">{t('title')}</h1>
                <FontAwesomeIcon icon={faCircleNotch} size="4x" spin />
              </Col>
            </Row>
        </Container>
      </div>
    </>
  )
}

export default Loading;