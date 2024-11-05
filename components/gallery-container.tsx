import { useTranslations } from 'next-intl';
import { Col, Container, Row } from 'react-bootstrap';
import GalleryCard from './gallery-card';
import "./gallery-container.scss";

const GalleryContainer: React.FC = () => {
  const t = useTranslations('components.GalleryContainer');

  const renaultClio4 = [
    { src: "/images/renault-clio4/renault-clio1.jpg" },
    { src: "/images/renault-clio4/renault-clio2.jpg" },
    { src: "/images/renault-clio4/renault-clio3.jpg" },
    { src: "/images/renault-clio4/renault-clio4.jpg" },
  ];

  const renaultMagna = [
    { src: "/images/renault-magna/renault-magna1.jpg" },
    { src: "/images/renault-magna/renault-magna2.jpg" },
    { src: "/images/renault-magna/renault-magna3.jpg" },
    { src: "/images/renault-magna/renault-magna4.jpg" },
    { src: "/images/renault-magna/renault-magna5.jpg" },
    { src: "/images/renault-magna/renault-magna6.jpg" },
  ];
  
  const toyotaYaris = [
    { src: "/images/toyota-yaris/toyota-yaris1.jpg" },
    { src: "/images/toyota-yaris/toyota-yaris2.jpg" },
    { src: "/images/toyota-yaris/toyota-yaris3.jpg" },
    { src: "/images/toyota-yaris/toyota-yaris4.jpg" },
    { src: "/images/toyota-yaris/toyota-yaris5.jpg" },
    { src: "/images/toyota-yaris/toyota-yaris6.jpg" },
    { src: "/images/toyota-yaris/toyota-yaris7.jpg" },
    { src: "/images/toyota-yaris/toyota-yaris8.jpg" },
  ];

  const fiatPunto = [
    { src: "/images/fiat-punto/fiat-punto1.jpg" },
    { src: "/images/fiat-punto/fiat-punto2.jpg" },
    { src: "/images/fiat-punto/fiat-punto3.jpg" },
    { src: "/images/fiat-punto/fiat-punto4.jpg" },
  ];

  const kiaRio = [
    { src: "/images/kia-rio/kia-rio1.jpg" },
    { src: "/images/kia-rio/kia-rio2.jpg" },
    { src: "/images/kia-rio/kia-rio3.jpg" },
    { src: "/images/kia-rio/kia-rio4.jpg" },
    { src: "/images/kia-rio/kia-rio5.jpg" },
  ];

  const cards = [
    {
      title: t('renaultClio'),
      cardImages: renaultClio4
    },
    {
      title: t('renaultMagna'),
      cardImages: renaultMagna
    },
    {
      title: t('toyotaYaris'),
      cardImages: toyotaYaris
    },
    {
      title: t('fiatPunto'),
      cardImages: fiatPunto
    },
    {
      title: t('kiaRio'),
      cardImages: kiaRio
    },
  ]

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
          <Row className="mb-3 g-3" xxl={4} lg={3} md={2} sm={2} xs={1}>
            {cards.map((card, index) => (
              <Col key={index}>
                <GalleryCard title={card.title} cardImages={card.cardImages} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default GalleryContainer;