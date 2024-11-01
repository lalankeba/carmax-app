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
            <Row className="my-4">
              <Col>
                <h4 className="text-center my-3">{t('title')}</h4>
                <div className="text-center my-3">
                  <FontAwesomeIcon icon={faCircleNotch} size="4x" spin />
                </div>
              </Col>
            </Row>
        </Container>
      </div>
    </>
  )
}

export default Loading;