import React from "react";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslations } from "next-intl";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import "./footer-bar.scss";

const FooterBar: React.FC = () => {
  const t = useTranslations('components.FooterBar');

  return (
    <>
      <div className="footer-bar bg-body-tertiary">
        <Container fluid="md">
          <Row className="footer-row">
            <Col className="d-flex justify-content-center align-items-center" md={7}>
              <div className="text-center">
                {t('title', { currentYear: new Date().getFullYear() })}
              </div>
            </Col>
            <Col className="d-flex justify-content-center align-items-center" md={5}>
              <div className="text-center">
                {
                  t.rich('craft', {
                    icon: () => <FontAwesomeIcon icon={faReact} title="React" />,
                    link: (chunks) => <Link href="https://lalankeba.github.io/" target="_blank" rel="noopener noreferrer" className="craft-link">{chunks}</Link>,
                  })
                }
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default FooterBar;