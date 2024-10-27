import { useTranslations } from "next-intl";
import { Col, Container, Row } from "react-bootstrap";

const FooterBar: React.FC = () => {
  const t = useTranslations('components.FooterBar');

  return (
    <>
      <div className="footer-bar">
        <Container fluid="md">
          <Row style={{ minHeight: '3.5rem' }}>
            <Col className="d-flex justify-content-center align-items-center">
              <div>
                <span className="me-1">{t('title', { currentYear: new Date().getFullYear() })}</span>
                <span>{t('craft')}</span>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default FooterBar;