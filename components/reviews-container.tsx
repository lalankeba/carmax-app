"use client";
import { useFormatter, useTranslations } from 'next-intl';
import React from 'react';
import { Card, Col, Container, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import "./reviews-container.scss";

const ReviewsContainer: React.FC = () => {
  const t = useTranslations('components.ReviewsContainer');
  const format = useFormatter();

  const reviews = [
    {
      name: "Oshintha Sandaruwan",
      gender: "male",
      description: "Highly recommended. Good service at a reasonable price.",
      lang: "en",
      date: new Date("2024-10-20T13:49:05.416Z"),
      transparency: false,
      enabled: true
    },
    {
      name: "Prasad Lakshan",
      gender: "male",
      description: "Great service! Strongly suggested.",
      lang: "en",
      date: new Date("2024-10-19T23:17:15.316Z"),
      transparency: false,
      enabled: true
    },
    {
      name: "Tharaka S Padukka",
      gender: "male",
      description: "Very good and fast service. Highly recommended.",
      lang: "en",
      date: new Date("2024-08-22T13:02:23.505Z"),
      transparency: true,
      enabled: true
    },
    {
      name: "Rajith Jayathilaka",
      gender: "male",
      description: "Highly Recommended",
      date: new Date("2024-08-22T13:02:19.505Z"),
      lang: "en",
      transparency: false,
      enabled: false
    },
    {
      name: "Sakunthala Yahampath",
      gender: "female",
      description: "Highly recommended the service.",
      lang: "en",
      date: new Date("2024-08-19T17:21:32.515Z"),
      transparency: false,
      enabled: true
    },
    {
      name: "Ranga Anuruddha",
      gender: "male",
      description: "Highly recommended, very friendly service and also reasonable price.",
      lang: "en",
      date: new Date("2024-08-19T09:29:53.478Z"),
      transparency: false,
      enabled: true
    }
  ];

  const gradients = [
    "linear-gradient(135deg, #FEF5CB, #B6E3D3, #46AFB9)",
    "linear-gradient(135deg, #FEC971, #4755CB)",
    "linear-gradient(135deg, #63C4D8, #E22B97, #FDD751)",
    "linear-gradient(135deg, #5FCAD9, #FB6862)",
    "linear-gradient(135deg, #F7BA7A, #C752BF, #5456CB)",
  ];

  const getInitials = (name: string) => {
    const names = name.split(' ');
    const initials = names.map((n) => n[0]).join('');
    return initials.toUpperCase();
  };

  return (
    <>
      <section id="reviews" className="reviews">
        <Container fluid="md" className="py-5">
          <Row className="mb-3">
            <Col>
              <h1>{t('title')}</h1>
              <h5>{t('subTitle')}</h5>
            </Col>
          </Row>
          <Row className="g-4" lg={4} md={3} sm={2} xs={1}>
            {reviews.filter(review => review.enabled).map((review, index) => (
              <Col key={index}>
                <Card className="shadow-sm review-card">
                  <div
                    className="card-pic-wrapper"
                    style={{
                      background: gradients[index % gradients.length]
                    }}
                  >
                    <div className="avatar">
                      {getInitials(review.name)}
                    </div>
                  </div>
                  <Card.Body>
                    <Card.Title>{review.name}</Card.Title>
                    <Card.Text>
                      {review.description}

                      {review.transparency && (
                        <OverlayTrigger
                          placement="bottom"
                          delay={{ show: 250, hide: 400 }}
                          overlay={
                            <Tooltip id="tooltip-top">
                              {t('transparencyNote')}
                            </Tooltip>
                          }
                        >
                          <small className="text-muted">
                            <i className="bi bi-info-circle ms-2"> </i>
                          </small>
                        </OverlayTrigger>
                      )}
                    </Card.Text>
                    <Card.Text>
                      <small>{format.dateTime(review.date)}</small>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            )
            )}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default ReviewsContainer;