import { useTranslations } from 'next-intl';
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

const GalleryContainer = () => {
  const t = useTranslations('components.GalleryContainer');

  return (
    <>
      <section id="gallery" className="gallery">
        <Container fluid="md" className="py-5">
          <Row className="mb-3">
            <Col>
              <h1>{t('title')}</h1>
              <h5>{t('subTitle')}</h5>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default GalleryContainer;