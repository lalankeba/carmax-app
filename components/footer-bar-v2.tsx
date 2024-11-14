import React from "react";
import { faFacebook, faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslations } from "next-intl";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import "./footer-bar-v2.scss";
import Image from "next/image";

const FooterBarV2: React.FC = () => {
  const t = useTranslations('components.FooterBar');

  return (
    <>
      <div className="footer-bar-v2 bg-body-tertiary">
        <Container fluid="md">
          <Row>
            <Col>
              <Row className="mt-4 mb-1" md={3} sm={3} xs={3}>
                <Col className="d-flex justify-content-start align-items-center" xs={5} sm={4} md={4}>
                  <Row>
                    <Col className="d-flex justify-content-start align-items-center" xs={3} sm={4} md={2}>
                      <Image
                        alt=""
                        src="/images/carmax-logo.png"
                        width="32"
                        height="32"
                        className="d-inline-block align-center"
                      />
                    </Col>
                    <Col className="d-flex justify-content-start align-items-center" xs={9} sm={8} md={10}>
                      <p>CARMAX Auto Repair</p>
                    </Col>
                  </Row>
                </Col>
                <Col className="d-flex justify-content-center align-items-center" xs={6} sm={6} md={6}>
                  <div>
                    <p>Toivionkatu 5, 33900 Tampere, Finland</p>
                  </div>
                </Col>
                <Col className="d-flex justify-content-end align-items-center my-2" xs={1} sm={2} md={2}>
                  <Link href="https://www.facebook.com/profile.php?id=61559165351726" target="_blank" rel="noopener noreferrer" className="craft-link">
                    <FontAwesomeIcon icon={faFacebook} size="1x" />
                  </Link>
                </Col>
              </Row>
              <Row>
                <Col>
                  <hr />
                </Col>
              </Row>
              <Row className="mt-1 mb-4">
                <Col className="d-flex justify-content-center justify-content-md-start align-items-center" md={7}>
                  <div className="text-center">
                    {t('title', { currentYear: new Date().getFullYear() })}
                  </div>
                </Col>
                <Col className="d-flex justify-content-center justify-content-md-end align-items-center" md={5}>
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
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default FooterBarV2;