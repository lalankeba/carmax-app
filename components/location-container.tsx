"use client";
import { useLocale, useTranslations } from "next-intl";
import { Col, Container, Row } from "react-bootstrap";
import "./location-container.scss";

const LocationContainer: React.FC = () => {
  const t = useTranslations('components.LocationContainer');
  const locale = useLocale();
  const gmApiKey = process.env.NEXT_PUBLIC_GM_API_KEY;
  const address = process.env.NEXT_PUBLIC_GM_LOC_ADDRESS as string;
  const encodedAddress = encodeURIComponent(address);

  const mapSrc = `https://www.google.com/maps/embed/v1/place?key=${gmApiKey}&q=${encodedAddress}&language=${locale}`

  return (
    <>
      <section id="location" className="location">
        <Container fluid="md">
          <Row className="mb-4" md={2} sm={1} xs={1}>
            <Col className="py-5">
              <h1>{t('title')}</h1>
              <h5>{t('subTitle')}</h5>
              <div className="mt-5">
                <p>{t('streetAddress')}</p>
                <p>{t('codeAndCity')}</p>
                <p>{t('country')}</p>
              </div>
            </Col>
            <Col>
              <div className="map-wrapper">
                <iframe
                  width="100%"
                  height="100%"
                  style={{ border: 0}}
                  loading="lazy"
                  allowFullScreen
                  src={mapSrc}>
                </iframe>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default LocationContainer;