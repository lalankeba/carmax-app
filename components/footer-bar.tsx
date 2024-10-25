import { useTranslations } from "next-intl";
import { Col, Container, Row } from "react-bootstrap";

const FooterBar: React.FC = () => {
  const t = useTranslations('components.FooterBar');

  return (
    <>
      <div className="footer-bar">
        <Container fluid="md">
          <Row>
            <Col className="d-flex justify-content-center align-items-center">
              <div>
                <p>{t('title', { currentYear: new Date().getFullYear() })}</p>
                <p>{t('craft')}</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default FooterBar;