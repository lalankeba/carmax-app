import React from 'react';
import { getTranslations } from 'next-intl/server';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarBurst } from '@fortawesome/free-solid-svg-icons';
import { useTranslations } from 'next-intl';
import { Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';

const baseTPath = 'pages.NotFound';

export async function generateMetadata ({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: baseTPath });

  return {
    title: t('pageTitle'),
    description: t('pageDescription'),
    keywords: t('pageKeywords'),
    openGraph: {
      title: t('pageTitle'),
      description: t('pageDescription'),
      type: 'website',
      images: [
        {
          url: '/images/carmaxautorepair.png',
          width: 1023,
          height: 537,
          alt: 'carmax-auto-repair',
        },
        {
          url: '/images/carmaxautorepairs.png',
          width: 600,
          height: 314,
          alt: 'carmax-auto-repair',
        },
      ],
    }
  };
};

const NotFound = () => {
  const t = useTranslations(baseTPath);

  return (
    <>
      <Container fluid="md">
        <Row>
          <Col className="d-flex flex-column justify-content-center align-items-center" style={{ minHeight: 'calc(100svh - var(--navigation-bar-height) - 6rem)' }}>
            <h1 className="display-1 mb-4">{t('title')}</h1>
            <h2 className="mb-4">{t('subTitle')}</h2>
            <FontAwesomeIcon icon={faCarBurst} size="8x" className="mb-4" />
            <p>
              {
                t.rich('description', {
                  link: (chunks) => <Link href="/">{chunks}</Link>,
                  em: (chunks) => <em>{chunks}</em>
                })
              }
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default NotFound;